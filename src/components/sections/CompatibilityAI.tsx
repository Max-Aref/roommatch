"use client";

import { useState, useEffect, useRef } from "react";
import {
  Brain,
  Calendar,
  Sparkles,
  DollarSign,
  Users,
  TrendingUp,
} from "lucide-react";

interface CompatibilityFactor {
  name: string;
  percentage: number;
  icon: React.ReactNode;
  color: string;
}

const NeuralNetwork = ({ isActive }: { isActive: boolean }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Nodes
    const nodes: { x: number; y: number; vx: number; vy: number }[] = [];
    for (let i = 0; i < 30; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.fillStyle = "rgba(15, 23, 42, 0.1)";
      ctx.fillRect(0, 0, width, height);

      // Update and draw nodes
      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Draw connections
        nodes.forEach((otherNode, j) => {
          if (i === j) return;
          const dx = otherNode.x - node.x;
          const dy = otherNode.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.5;
            const gradient = ctx.createLinearGradient(
              node.x,
              node.y,
              otherNode.x,
              otherNode.y
            );
            gradient.addColorStop(0, `rgba(139, 92, 246, ${opacity})`);
            gradient.addColorStop(1, `rgba(59, 130, 246, ${opacity})`);

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.stroke();
          }
        });

        // Draw node
        const gradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          5
        );
        gradient.addColorStop(0, "rgba(139, 92, 246, 1)");
        gradient.addColorStop(1, "rgba(59, 130, 246, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 5, 0, Math.PI * 2);
        ctx.fill();
      });

      if (isActive) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animate();

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [isActive]);

  return (
    <canvas
      ref={canvasRef}
      width={600}
      height={600}
      className='absolute inset-0 w-full h-full'
    />
  );
};

const CompatibilityRadar = ({
  factors,
}: {
  factors: CompatibilityFactor[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className='relative w-full h-full flex items-center justify-center'>
      {/* Radar Circles */}
      {[100, 75, 50, 25].map((percent, i) => (
        <div
          key={i}
          className='absolute rounded-full border border-purple-500/20'
          style={{
            width: `${percent}%`,
            height: `${percent}%`,
            transitionDelay: `${i * 100}ms`,
          }}
        />
      ))}

      {/* Radar Lines */}
      {factors.map((_, index) => {
        const angle = (index / factors.length) * 360;
        return (
          <div
            key={index}
            className='absolute w-0.5 h-1/2 bg-gradient-to-t from-purple-500/30 to-transparent origin-bottom'
            style={{
              transform: `rotate(${angle}deg)`,
              bottom: "50%",
              left: "50%",
              marginLeft: "-1px",
            }}
          />
        );
      })}

      {/* Data Points */}
      {factors.map((factor, index) => {
        const angle = ((index / factors.length) * 360 - 90) * (Math.PI / 180);
        const radius = 40; // percentage of container
        const x = 50 + radius * Math.cos(angle) * (factor.percentage / 100);
        const y = 50 + radius * Math.sin(angle) * (factor.percentage / 100);

        return (
          <div
            key={index}
            className='absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group'
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transitionDelay: `${index * 100}ms`,
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Pulsing Circle */}
            <div
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                hoveredIndex === index ? "scale-150" : "scale-100"
              }`}
              style={{
                backgroundColor: factor.color,
                boxShadow: `0 0 20px ${factor.color}`,
              }}
            >
              <div
                className='absolute inset-0 rounded-full animate-ping'
                style={{ backgroundColor: factor.color }}
              />
            </div>

            {/* Tooltip */}
            {hoveredIndex === index && (
              <div className='absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 border border-purple-500/50 rounded-lg whitespace-nowrap animate-fade-in'>
                <div className='text-xs text-purple-400 font-semibold'>
                  {factor.name}
                </div>
                <div className='text-xl font-bold text-white'>
                  {factor.percentage}%
                </div>
              </div>
            )}
          </div>
        );
      })}

      {/* Center Glow */}
      <div className='absolute w-32 h-32 rounded-full bg-purple-500/20 blur-3xl animate-pulse-slow' />
    </div>
  );
};

export default function CompatibilityAI() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFactorIndex, setActiveFactorIndex] = useState<number | null>(
    null
  );
  const [counters, setCounters] = useState<number[]>([0, 0, 0, 0, 0]);
  const sectionRef = useRef<HTMLElement>(null);

  const factors: CompatibilityFactor[] = [
    {
      name: "Lifestyle Compatibility",
      percentage: 94,
      icon: <Users size={20} />,
      color: "#8B5CF6",
    },
    {
      name: "Schedule Alignment",
      percentage: 87,
      icon: <Calendar size={20} />,
      color: "#3B82F6",
    },
    {
      name: "Cleanliness Preferences",
      percentage: 92,
      icon: <Sparkles size={20} />,
      color: "#EC4899",
    },
    {
      name: "Budget Match",
      percentage: 89,
      icon: <DollarSign size={20} />,
      color: "#10B981",
    },
    {
      name: "Personality Traits",
      percentage: 91,
      icon: <TrendingUp size={20} />,
      color: "#F59E0B",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Counter animation
  useEffect(() => {
    if (!isVisible) return;

    const intervals = factors.map((factor, index) => {
      const target = factor.percentage;
      let current = 0;
      const increment = target / 50;

      return setInterval(() => {
        current += increment;
        if (current >= target) {
          setCounters((prev) => {
            const newCounters = [...prev];
            newCounters[index] = target;
            return newCounters;
          });
          clearInterval(intervals[index]);
        } else {
          setCounters((prev) => {
            const newCounters = [...prev];
            newCounters[index] = Math.floor(current);
            return newCounters;
          });
        }
      }, 30);
    });

    return () => intervals.forEach(clearInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className='relative py-24 md:py-32 bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 overflow-hidden'
    >
      {/* Tech Grid Background */}
      <div className='absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]' />

      {/* Glowing Orbs */}
      <div className='absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-slow' />
      <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float-medium' />

      {/* Scan Lines */}
      <div className='absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(139,92,246,0.03)_50%)] bg-[size:100%_4px] pointer-events-none animate-pulse-slow' />

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16 md:mb-20'>
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <Brain className='w-4 h-4 text-purple-400' />
            <span className='text-sm font-semibold text-purple-400'>
              AI Technology
            </span>
          </div>

          {/* Title */}
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Beyond Basic Filters
          </h2>

          {/* Subtitle */}
          <p
            className={`text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Our AI analyzes{" "}
            <span className='text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text font-bold'>
              50+ compatibility factors
            </span>{" "}
            to find your ideal match
          </p>
        </div>

        {/* Main Content Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* Left Side - Factors List */}
          <div className='space-y-6'>
            {factors.map((factor, index) => (
              <div
                key={index}
                className={`group relative p-6 rounded-2xl bg-gray-800/50 border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-500 cursor-pointer ${
                  activeFactorIndex === index ? "bg-purple-500/10" : ""
                } ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setActiveFactorIndex(index)}
                onMouseLeave={() => setActiveFactorIndex(null)}
              >
                {/* Glow Effect */}
                <div
                  className='absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl'
                  style={{
                    background: `radial-gradient(circle at center, ${factor.color}20, transparent)`,
                  }}
                />

                <div className='relative flex items-center justify-between'>
                  <div className='flex items-center gap-4'>
                    {/* Icon */}
                    <div
                      className='w-12 h-12 rounded-xl flex items-center justify-center'
                      style={{
                        backgroundColor: `${factor.color}20`,
                        color: factor.color,
                      }}
                    >
                      {factor.icon}
                    </div>

                    {/* Factor Name */}
                    <div>
                      <h4 className='text-lg font-semibold text-white'>
                        {factor.name}
                      </h4>
                      {/* Progress Bar */}
                      <div className='mt-2 w-48 h-2 bg-gray-700 rounded-full overflow-hidden'>
                        <div
                          className='h-full rounded-full transition-all duration-1000 ease-out'
                          style={{
                            width: `${counters[index]}%`,
                            backgroundColor: factor.color,
                            boxShadow: `0 0 10px ${factor.color}`,
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Percentage */}
                  <div
                    className='text-4xl font-bold tabular-nums'
                    style={{ color: factor.color }}
                  >
                    {counters[index]}
                    <span className='text-2xl'>%</span>
                  </div>
                </div>
              </div>
            ))}

            {/* AI Description */}
            <div className='mt-8 p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 backdrop-blur-sm'>
              <div className='flex items-start gap-4'>
                <Brain className='w-6 h-6 text-purple-400 flex-shrink-0 mt-1' />
                <div>
                  <h4 className='text-lg font-semibold text-white mb-2'>
                    How Our AI Works
                  </h4>
                  <p className='text-gray-300 leading-relaxed'>
                    Our advanced machine learning algorithm continuously
                    analyzes user data, preferences, and behavior patterns to
                    improve matching accuracy. The more you use RoomMatch, the
                    smarter it gets at finding your perfect roommate.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Visualization */}
          <div className='relative h-[500px] lg:h-[600px]'>
            {/* Neural Network Background */}
            <div className='absolute inset-0 rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-purple-500/30 backdrop-blur-sm'>
              <NeuralNetwork isActive={isVisible} />
            </div>

            {/* Radar Chart Overlay */}
            <div className='absolute inset-0 p-8'>
              <CompatibilityRadar factors={factors} />
            </div>

            {/* Floating Particles */}
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className='absolute w-1 h-1 rounded-full bg-purple-400 animate-float-slow opacity-50'
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${3 + Math.random() * 3}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

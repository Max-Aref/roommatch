"use client";

import { useState, useEffect, useRef } from "react";
import {
  Shield,
  CheckCircle,
  Lock,
  Eye,
  FileCheck,
  MessageSquare,
  Video,
  AlertTriangle,
} from "lucide-react";

interface SafetyFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  gradient: string;
}

const SecurityBadge = ({
  text,
  gradient,
  delay,
}: {
  text: string;
  gradient: string;
  delay: number;
}) => {
  return (
    <div
      className='absolute animate-fade-in animate-float-slow'
      style={{ animationDelay: `${delay}ms` }}
    >
      <div
        className={`relative px-4 py-2 rounded-full bg-gradient-to-r ${gradient} border border-white/20`}
      >
        <span className='text-xs font-bold text-white'>{text}</span>
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-r ${gradient} blur-lg opacity-50 animate-pulse-slow`}
        />
      </div>
    </div>
  );
};

export default function SafetyModern() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

  // Circuit board animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isVisible) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Connection points
    const points: { x: number; y: number }[] = [];
    for (let i = 0; i < 20; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
      });
    }

    let pulseOffset = 0;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      points.forEach((point, i) => {
        points.forEach((otherPoint, j) => {
          if (i >= j) return;
          const dx = otherPoint.x - point.x;
          const dy = otherPoint.y - point.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.3;

            // Draw line
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(otherPoint.x, otherPoint.y);
            ctx.stroke();

            // Draw pulse
            const pulsePos = (pulseOffset % 100) / 100;
            const pulseX = point.x + dx * pulsePos;
            const pulseY = point.y + dy * pulsePos;

            const gradient = ctx.createRadialGradient(
              pulseX,
              pulseY,
              0,
              pulseX,
              pulseY,
              8
            );
            gradient.addColorStop(0, "rgba(139, 92, 246, 0.8)");
            gradient.addColorStop(1, "rgba(139, 92, 246, 0)");

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(pulseX, pulseY, 8, 0, Math.PI * 2);
            ctx.fill();
          }
        });

        // Draw node
        const gradient = ctx.createRadialGradient(
          point.x,
          point.y,
          0,
          point.x,
          point.y,
          4
        );
        gradient.addColorStop(0, "rgba(139, 92, 246, 1)");
        gradient.addColorStop(1, "rgba(139, 92, 246, 0.2)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(point.x, point.y, 4, 0, Math.PI * 2);
        ctx.fill();
      });

      pulseOffset += 0.5;
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [isVisible]);

  const safetyFeatures: SafetyFeature[] = [
    {
      icon: <CheckCircle size={24} />,
      title: "Verified Profiles",
      description:
        "AI-powered identity verification, photo verification required, and government ID check option",
      color: "#8B5CF6",
      gradient: "from-purple-500 to-violet-600",
    },
    {
      icon: <FileCheck size={24} />,
      title: "Background Checks",
      description:
        "Third-party screening integration, criminal record checks, and eviction history reports",
      color: "#3B82F6",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Secure Messaging",
      description:
        "End-to-end encrypted chat, report/block functionality, no personal info shared until ready",
      color: "#EC4899",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: <Video size={24} />,
      title: "Video Verification",
      description:
        "Live video call verification, screen potential roommates safely, meeting preparation guides",
      color: "#10B981",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <AlertTriangle size={24} />,
      title: "Safety Resources",
      description:
        "In-app safety tips, red flag warnings, emergency contact features, and 24/7 support",
      color: "#F59E0B",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      icon: <Eye size={24} />,
      title: "24/7 Monitoring",
      description:
        "AI fraud detection, suspicious activity alerts, and dedicated safety team monitoring",
      color: "#06B6D4",
      gradient: "from-cyan-500 to-blue-500",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className='relative py-24 md:py-32 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden'
    >
      {/* Tech Grid Background */}
      <div className='absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]' />

      {/* Scan Lines */}
      <div className='absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(139,92,246,0.02)_50%)] bg-[size:100%_4px] pointer-events-none animate-pulse-slow' />

      {/* Glowing Orbs */}
      <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-float-slow' />
      <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-medium' />

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-16 md:mb-20'>
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 mb-6 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <Shield className='w-4 h-4 text-green-400' />
            <span className='text-sm font-semibold text-green-400'>
              Your Safety Matters
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
            Meet with{" "}
            <span className='bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent'>
              Confidence
            </span>
          </h2>

          {/* Subtitle */}
          <p
            className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Industry-leading safety features protect you at every step
          </p>
        </div>

        {/* Main Content Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* Left - Central Shield Visualization */}
          <div className='relative h-[500px] lg:h-[600px] order-2 lg:order-1'>
            {/* Circuit Board Canvas */}
            <canvas
              ref={canvasRef}
              width={600}
              height={600}
              className='absolute inset-0 w-full h-full'
            />

            {/* Central Shield */}
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='relative'>
                {/* Shield Icon with Multiple Glows */}
                <div className='relative w-48 h-48 rounded-3xl bg-gradient-to-br from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-500/30 flex items-center justify-center'>
                  <Shield className='w-24 h-24 text-green-400' />

                  {/* Pulsing Rings */}
                  <div className='absolute inset-0 rounded-3xl border-2 border-green-500/50 animate-ping-slow' />
                  <div className='absolute -inset-4 rounded-3xl border border-green-500/30 animate-ping-medium' />
                  <div className='absolute -inset-8 rounded-3xl border border-green-500/20 animate-ping-fast' />

                  {/* Glow */}
                  <div className='absolute inset-0 rounded-3xl bg-gradient-to-br from-green-500 to-blue-500 blur-3xl opacity-30 animate-pulse-slow' />
                </div>

                {/* Lock Icon */}
                <div className='absolute -top-8 -right-8 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center animate-float-medium'>
                  <Lock className='w-8 h-8 text-white' />
                  <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 blur-xl opacity-50' />
                </div>
              </div>

              {/* Floating Security Badges */}
              <div className='absolute top-8 left-8'>
                <SecurityBadge
                  text='Verified'
                  gradient='from-green-500 to-emerald-500'
                  delay={200}
                />
              </div>
              <div className='absolute top-16 right-8'>
                <SecurityBadge
                  text='100% Secure'
                  gradient='from-blue-500 to-cyan-500'
                  delay={400}
                />
              </div>
              <div className='absolute bottom-16 left-16'>
                <SecurityBadge
                  text='Encrypted'
                  gradient='from-purple-500 to-pink-500'
                  delay={600}
                />
              </div>
            </div>
          </div>

          {/* Right - Safety Features */}
          <div className='space-y-4 order-1 lg:order-2'>
            {safetyFeatures.map((feature, index) => (
              <div
                key={index}
                className={`group relative p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm hover:border-green-500/50 transition-all duration-500 cursor-pointer ${
                  activeFeature === index
                    ? "bg-gray-800/80 border-green-500/50"
                    : ""
                } ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                {/* Neon Glow on Hover */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                />

                <div className='relative flex items-start gap-4'>
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                  >
                    {feature.icon}
                    <div
                      className={`absolute inset-0 rounded-xl bg-gradient-to-br ${feature.gradient} blur-lg opacity-0 group-hover:opacity-50 transition-opacity`}
                    />
                  </div>

                  {/* Content */}
                  <div className='flex-1'>
                    <h3 className='text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-green-400 group-hover:to-blue-400 transition-all'>
                      {feature.title}
                    </h3>
                    <p className='text-gray-400 text-sm leading-relaxed'>
                      {feature.description}
                    </p>
                  </div>

                  {/* Checkmark */}
                  <div className='flex-shrink-0'>
                    <div
                      className={`w-6 h-6 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center`}
                    >
                      <CheckCircle
                        size={16}
                        className='text-white'
                        fill='currentColor'
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className='mt-20'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            {[
              {
                value: "100%",
                label: "Verified Profiles",
                color: "from-green-400 to-emerald-400",
              },
              {
                value: "50K+",
                label: "Safe Connections",
                color: "from-blue-400 to-cyan-400",
              },
              {
                value: "256-bit",
                label: "Encryption",
                color: "from-purple-400 to-pink-400",
              },
              {
                value: "24/7",
                label: "Monitoring",
                color: "from-orange-400 to-amber-400",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm hover:border-green-500/30 transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${800 + index * 100}ms` }}
              >
                <div
                  className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                >
                  {stat.value}
                </div>
                <div className='text-gray-400 text-sm'>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

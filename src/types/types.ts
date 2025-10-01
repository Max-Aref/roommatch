// Supporting types
export interface Location {
  city: string;
  state: string;
  country?: string;
}

export interface LifestylePreferences {
  smoker: boolean;
  pets: boolean;
  sleepSchedule: "early-riser" | "night-owl" | "flexible";
  cleanliness: "neat" | "average" | "messy";
  social: "introvert" | "extrovert" | "ambivert";
}

export interface RoomPreferences {
  shared: boolean;
  furnished: boolean;
  bathroom: "private" | "shared";
}

export interface Budget {
  min: number;
  max: number;
  currency: string;
}

export interface RoommateProfile {
  // Personal Information
  id: string;
  firstName: string;
  lastName: string;
  fullName: string; // derived for convenience
  age: number;
  gender: "male" | "female" | "non-binary" | "prefer-not-to-say";
  profileImage?: string;
  bio: string;
  occupation: string;

  // Contact Information
  email: string;
  phone?: string;

  // Location & Availability
  currentLocation: Location;
  desiredLocation: Location;
  moveInDate: Date | string;
  leaseDuration: "1-3 months" | "3-6 months" | "6-12 months" | "12+ months";

  // Preferences
  lifestylePreferences: LifestylePreferences;
  roomPreferences: RoomPreferences;
  budget: Budget;

  // Additional Information
  languages: string[];
  hobbies?: string[];
  interests?: string[];
  dietaryRestrictions?: string[];
  hasRoommate?: boolean;

  // Profile Status
  isVerified: boolean;
  isActive: boolean;
  createdAt: Date | string;
  updatedAt: Date | string;

  // Matching
  matchScore?: number; // overall compatibility score
  tags?: string[]; // e.g. ["fitness", "vegan", "remote-worker"]
}

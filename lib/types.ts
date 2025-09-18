export interface User {
  id: string
  email: string
  name: string
  type: "student" | "teacher"
  avatar?: string
  school?: string
  grade?: number
  points: number
  streak: number
  monthlyPoints: number
  lastActivity: string
  consentGiven: boolean
  createdAt: string
}

export interface Quest {
  id: string
  title: string
  summary: string
  instructions: string
  points: number
  proofTypes: ("photo" | "video" | "text")[]
  locationHint?: string
  locationRadiusM?: number
  safetyNotes?: string
  expiry: string
  aiGenerated: boolean
  createdBy: string
  category: "waste" | "energy" | "water" | "biodiversity" | "transport"
  difficulty: "easy" | "medium" | "hard"
  estimatedTime: number // minutes
  imageUrl?: string
  createdAt: string
}

export interface Submission {
  id: string
  questId: string
  userId: string
  imageUrl?: string
  videoUrl?: string
  caption: string
  gpsCoords?: { lat: number; lng: number }
  status: "pending" | "auto_pass" | "review" | "approved" | "rejected"
  verificationReport?: VerificationReport
  reviewedBy?: string
  reviewNotes?: string
  pointsAwarded: number
  submittedAt: string
  reviewedAt?: string
}

export interface VerificationReport {
  confidence: number
  labels: string[]
  reasons: string[]
  pHashScore?: number
  exifValid: boolean
  gpsValid: boolean
  duplicateCheck: boolean
  autoDecision: "pass" | "review" | "reject"
}

export interface WalletTransaction {
  id: string
  userId: string
  type: "earned" | "redeemed" | "bonus"
  amount: number
  description: string
  questId?: string
  voucherCode?: string
  createdAt: string
}

export interface Voucher {
  code: string
  userId: string
  value: number
  type: "canteen" | "bookstore" | "transport"
  used: boolean
  expiresAt: string
  createdAt: string
}

export interface LeaderboardEntry {
  userId: string
  name: string
  avatar?: string
  points: number
  rank: number
  streak: number
  questsCompleted: number
}

export interface ImpactStats {
  userId: string
  treesPlanted: number
  wasteCollected: number // kg
  carbonSaved: number // kg CO2
  waterSaved: number // liters
  energySaved: number // kWh
  lastUpdated: string
}

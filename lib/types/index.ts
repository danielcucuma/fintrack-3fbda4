// User & Auth Types
export type UserRole = "owner" | "admin" | "member";

export interface UserProfile {
  id: string;
  email: string;
  name: string | null;
  timezone: string;
  currency: string;
  emailVerified: boolean;
  createdAt: Date;
}

export interface SessionData {
  id: string;
  userId: string;
  token: string;
  expiresAt: Date;
}

// Transaction Types
export type TransactionType = "income" | "expense";
export type TransactionCategory = 
  | "income"
  | "food"
  | "transport"
  | "utilities"
  | "entertainment"
  | "healthcare"
  | "education"
  | "other";

export interface Transaction {
  id: string;
  userId: string;
  amount: number;
  category: TransactionCategory;
  description: string | null;
  date: Date;
  type: TransactionType;
  accountId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface TransactionFilters {
  startDate?: Date;
  endDate?: Date;
  category?: TransactionCategory;
  type?: TransactionType;
  accountId?: string;
  minAmount?: number;
  maxAmount?: number;
}

// Budget Types
export type BudgetPeriod = "monthly" | "yearly";

export interface Budget {
  id: string;
  userId: string;
  category: TransactionCategory;
  limitAmount: number;
  period: BudgetPeriod;
  month?: number;
  year?: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface BudgetWithSpent extends Budget {
  spent: number;
  remaining: number;
  percentageUsed: number;
}

// Bank Account Types
export interface BankAccount {
  id: string;
  userId: string;
  plaidAccountId: string | null;
  accountName: string;
  balance: number;
  lastSync: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

// Subscription Types
export type SubscriptionPlan = "free" | "starter" | "professional";
export type SubscriptionStatus = "active" | "canceled" | "past_due" | "trialing";

export interface Subscription {
  id: string;
  userId: string;
  stripeCustomerId: string;
  stripeSubscriptionId: string | null;
  stripePriceId: string | null;
  plan: SubscriptionPlan;
  status: SubscriptionStatus;
  currentPeriodEnd: Date | null;
  cancelAtPeriodEnd: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Dashboard Stats
export interface DashboardStats {
  totalIncome: number;
  totalExpenses: number;
  netCashFlow: number;
  accountsBalance: number;
  budgetAlerts: number;
  monthlyTrend: Array<{ month: string; income: number; expenses: number }>;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
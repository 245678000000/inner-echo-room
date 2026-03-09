export interface TestOption {
  text: string;
  value: number | string;
}

export interface TestQuestion {
  id: number;
  text: string;
  type: "single" | "likert";
  options: TestOption[];
  dimension?: string;
  reverse?: boolean;
  image?: string;
}

export interface TestResultDetail {
  title: string;
  subtitle?: string;
  badgeColor: string;
  emoji: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  careerAdvice: string;
  loveAdvice: string;
  famousPeople: string[];
}

export interface TestConfig {
  id: string;
  name: string;
  description: string;
  duration: string;
  questionCount: number;
  questions: TestQuestion[];
  scoringRules: string;
  resultMapping: Record<string, TestResultDetail>;
  disclaimer: string;
  calculateResult: (answers: Record<number, number | string>) => string;
}

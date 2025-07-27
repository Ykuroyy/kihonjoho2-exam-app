export interface Question {
  id: string;
  category: 'A' | 'B';
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  topic: string;
}

export interface ExamResult {
  totalQuestions: number;
  correctAnswers: number;
  score: number;
  categoryAScore: {
    total: number;
    correct: number;
  };
  categoryBScore: {
    total: number;
    correct: number;
  };
  answers: {
    questionId: string;
    selectedAnswer: number | null;
    isCorrect: boolean;
  }[];
  startTime: Date;
  endTime: Date;
}

export interface ExamState {
  questions: Question[];
  currentQuestionIndex: number;
  answers: Map<string, number>;
  startTime: Date | null;
  isCompleted: boolean;
}
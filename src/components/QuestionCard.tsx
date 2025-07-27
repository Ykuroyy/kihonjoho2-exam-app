'use client';

import { Question } from '@/types/exam';

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  onSelectAnswer: (answerIndex: number) => void;
  questionNumber: number;
  totalQuestions: number;
}

export default function QuestionCard({
  question,
  selectedAnswer,
  onSelectAnswer,
  questionNumber,
  totalQuestions,
}: QuestionCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500">
            問題 {questionNumber} / {totalQuestions}
          </span>
          <span className="text-sm font-medium text-blue-600">
            科目{question.category} - {question.topic}
          </span>
        </div>
        <h2 className="text-lg font-semibold text-gray-800">
          {question.text}
        </h2>
      </div>
      
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelectAnswer(index)}
            className={`option-button w-full p-4 text-left rounded-lg border-2 transition-all ${
              selectedAnswer === index
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
            }`}
          >
            <span className="font-medium mr-2">{index + 1}.</span>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
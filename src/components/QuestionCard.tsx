'use client';

import { Question } from '@/types/exam';

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  onSelectAnswer: (answerIndex: number) => void;
  questionNumber: number;
  totalQuestions: number;
  isPaused: boolean;
  studyMode?: boolean;
  showFeedback?: boolean;
  onNextInStudyMode?: () => void;
}

export default function QuestionCard({
  question,
  selectedAnswer,
  onSelectAnswer,
  questionNumber,
  totalQuestions,
  isPaused,
  studyMode = false,
  showFeedback = false,
  onNextInStudyMode,
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
        {question.options.map((option, index) => {
          let buttonStyle = 'border-gray-200 hover:border-gray-300 hover:bg-gray-50';
          
          if (studyMode && showFeedback) {
            if (index === question.correctAnswer) {
              buttonStyle = 'border-green-500 bg-green-50 text-green-800';
            } else if (selectedAnswer === index && index !== question.correctAnswer) {
              buttonStyle = 'border-red-500 bg-red-50 text-red-800';
            }
          } else if (selectedAnswer === index) {
            buttonStyle = 'border-blue-500 bg-blue-50';
          }
          
          return (
            <button
              key={index}
              onClick={() => !isPaused && !showFeedback && onSelectAnswer(index)}
              disabled={isPaused || (studyMode && showFeedback)}
              className={`option-button w-full p-4 text-left rounded-lg border-2 transition-all ${buttonStyle} ${
                isPaused || (studyMode && showFeedback) ? 'cursor-not-allowed' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-medium mr-2">{index + 1}.</span>
                  {option}
                </div>
                {studyMode && showFeedback && index === question.correctAnswer && (
                  <span className="text-green-600 font-bold">✓ 正解</span>
                )}
                {studyMode && showFeedback && selectedAnswer === index && index !== question.correctAnswer && (
                  <span className="text-red-600 font-bold">✗ 不正解</span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {studyMode && showFeedback && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold mb-2 text-gray-800">解説</h3>
          <p className="text-gray-700 leading-relaxed">{question.explanation}</p>
          
          <div className="mt-4 flex justify-center">
            <button
              onClick={onNextInStudyMode}
              className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
            >
              {questionNumber === totalQuestions ? '学習完了' : '次の問題に進む'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
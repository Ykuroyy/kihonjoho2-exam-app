'use client';

import { Question } from '@/types/exam';

interface ExplanationModalProps {
  question: Question;
  userAnswer: number | null;
  onClose: () => void;
}

export default function ExplanationModal({
  question,
  userAnswer,
  onClose,
}: ExplanationModalProps) {
  const isCorrect = userAnswer === question.correctAnswer;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b px-6 py-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">問題解説</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="p-6">
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <span className="text-sm font-medium text-gray-600 mr-2">
                科目{question.category} - {question.topic}
              </span>
              <span className={`px-2 py-1 rounded text-sm ${
                isCorrect
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {isCorrect ? '正解' : '不正解'}
              </span>
            </div>
            <h3 className="text-lg font-semibold mb-4">{question.text}</h3>
          </div>
          
          <div className="mb-6">
            <h4 className="font-semibold mb-3">選択肢</h4>
            <div className="space-y-2">
              {question.options.map((option, index) => {
                const isUserAnswer = userAnswer === index;
                const isCorrectAnswer = question.correctAnswer === index;
                
                return (
                  <div
                    key={index}
                    className={`p-3 rounded-lg border ${
                      isCorrectAnswer
                        ? 'border-green-500 bg-green-50'
                        : isUserAnswer
                        ? 'border-red-500 bg-red-50'
                        : 'border-gray-200'
                    }`}
                  >
                    <div className="flex items-start">
                      <span className="font-medium mr-2">{index + 1}.</span>
                      <span className="flex-1">{option}</span>
                      {isCorrectAnswer && (
                        <span className="ml-2 text-green-600 font-medium">正解</span>
                      )}
                      {isUserAnswer && !isCorrectAnswer && (
                        <span className="ml-2 text-red-600 font-medium">あなたの回答</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">解説</h4>
            <p className="text-blue-800 whitespace-pre-wrap">{question.explanation}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
'use client';

import { ExamResult, Question } from '@/types/exam';

interface ExamResultProps {
  result: ExamResult;
  questions: Question[];
  onShowExplanation: (questionId: string) => void;
  onRetakeExam: () => void;
}

export default function ExamResultComponent({
  result,
  questions,
  onShowExplanation,
  onRetakeExam,
}: ExamResultProps) {
  const timeTaken = Math.floor(
    (result.endTime.getTime() - result.startTime.getTime()) / 1000
  );
  const hours = Math.floor(timeTaken / 3600);
  const minutes = Math.floor((timeTaken % 3600) / 60);
  const seconds = timeTaken % 60;
  
  const isPassed = result.score >= 60;
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
        <h1 className="text-3xl font-bold text-center mb-6">試験結果</h1>
        
        <div className={`text-center mb-8 p-6 rounded-lg ${
          isPassed ? 'bg-green-50' : 'bg-red-50'
        }`}>
          <div className="text-5xl font-bold mb-2">
            {result.score}点
          </div>
          <div className={`text-2xl font-semibold ${
            isPassed ? 'text-green-600' : 'text-red-600'
          }`}>
            {isPassed ? '合格' : '不合格'}
          </div>
          <div className="text-gray-600 mt-2">
            （合格基準: 60点以上）
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <div className="text-lg text-gray-600">正解数</div>
            <div className="text-3xl font-bold">
              {result.correctAnswers} / {result.totalQuestions}
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-lg text-gray-600">科目A</div>
            <div className="text-2xl font-semibold">
              {result.categoryAScore.correct} / {result.categoryAScore.total}
            </div>
            <div className="text-sm text-gray-500">
              ({Math.round((result.categoryAScore.correct / result.categoryAScore.total) * 100)}%)
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-lg text-gray-600">科目B</div>
            <div className="text-2xl font-semibold">
              {result.categoryBScore.correct} / {result.categoryBScore.total}
            </div>
            <div className="text-sm text-gray-500">
              ({Math.round((result.categoryBScore.correct / result.categoryBScore.total) * 100)}%)
            </div>
          </div>
        </div>
        
        <div className="text-center text-gray-600 mb-8">
          所要時間: {hours.toString().padStart(2, '0')}:
          {minutes.toString().padStart(2, '0')}:
          {seconds.toString().padStart(2, '0')}
        </div>
        
        <div className="flex justify-center">
          <button
            onClick={onRetakeExam}
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
          >
            もう一度挑戦する
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">問題別結果</h2>
        <div className="space-y-2">
          {result.answers.map((answer, index) => {
            const question = questions.find(q => q.id === answer.questionId);
            if (!question) return null;
            
            return (
              <div
                key={answer.questionId}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50"
              >
                <div className="flex items-center">
                  <span className="font-medium mr-3">
                    問題 {index + 1}
                  </span>
                  <span className={`px-2 py-1 rounded text-sm ${
                    answer.isCorrect
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {answer.isCorrect ? '正解' : '不正解'}
                  </span>
                  <span className="ml-3 text-sm text-gray-600">
                    科目{question.category} - {question.topic}
                  </span>
                </div>
                <button
                  onClick={() => onShowExplanation(answer.questionId)}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  解説を見る
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
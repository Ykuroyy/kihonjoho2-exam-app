'use client';

interface ExamNavigationProps {
  currentIndex: number;
  totalQuestions: number;
  answeredQuestions: Set<string>;
  questions: Array<{ id: string; category: 'A' | 'B' }>;
  isPaused: boolean;
  onGoToQuestion: (index: number) => void;
  onPrevious: () => void;
  onNext: () => void;
  onComplete: () => void;
  onPause: () => void;
  onBackToHome: () => void;
  studyMode?: boolean;
  showFeedback?: boolean;
}

export default function ExamNavigation({
  currentIndex,
  totalQuestions,
  answeredQuestions,
  questions,
  isPaused,
  onGoToQuestion,
  onPrevious,
  onNext,
  onComplete,
  onPause,
  onBackToHome,
  studyMode = false,
  showFeedback = false,
}: ExamNavigationProps) {
  const categoryAQuestions = questions.filter(q => q.category === 'A');
  const categoryBQuestions = questions.filter(q => q.category === 'B');
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">進捗状況</h3>
        {studyMode ? (
          <div>
            <div className="text-sm text-gray-600">
              現在の問題: {currentIndex + 1} / {totalQuestions}
            </div>
            <div className="text-xs text-blue-600 mt-1">
              💡 問題番号をクリックして自由に移動できます
            </div>
          </div>
        ) : (
          <div className="text-sm text-gray-600">
            回答済み: {answeredQuestions.size} / {totalQuestions}
          </div>
        )}
        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all"
            style={{ 
              width: studyMode 
                ? `${((currentIndex + 1) / totalQuestions) * 100}%`
                : `${(answeredQuestions.size / totalQuestions) * 100}%`
            }}
          />
        </div>
      </div>
      
      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-700 mb-2">科目A（全{categoryAQuestions.length}問）</h4>
        <div className="grid grid-cols-10 gap-1">
          {categoryAQuestions.map((q, idx) => {
            const questionIndex = questions.findIndex(question => question.id === q.id);
            const isCurrentQuestion = questionIndex === currentIndex;
            const isAnswered = answeredQuestions.has(q.id);
            
            return (
              <button
                key={q.id}
                onClick={() => onGoToQuestion(questionIndex)}
                className={`
                  w-8 h-8 text-xs font-medium rounded transition-colors cursor-pointer
                  ${isCurrentQuestion
                    ? 'bg-blue-600 text-white'
                    : isAnswered
                    ? 'bg-green-100 text-green-800 hover:bg-green-200'
                    : 'bg-gray-100 hover:bg-gray-200'
                  }
                `}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>
      
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700 mb-2">科目B（全{categoryBQuestions.length}問）</h4>
        <div className="grid grid-cols-10 gap-1">
          {categoryBQuestions.map((q, idx) => {
            const questionIndex = questions.findIndex(question => question.id === q.id);
            const isCurrentQuestion = questionIndex === currentIndex;
            const isAnswered = answeredQuestions.has(q.id);
            
            return (
              <button
                key={q.id}
                onClick={() => onGoToQuestion(questionIndex)}
                className={`
                  w-8 h-8 text-xs font-medium rounded transition-colors cursor-pointer
                  ${isCurrentQuestion
                    ? 'bg-blue-600 text-white'
                    : isAnswered
                    ? 'bg-green-100 text-green-800 hover:bg-green-200'
                    : 'bg-gray-100 hover:bg-gray-200'
                  }
                `}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>
      
      <div className="mb-4 space-y-2">
        {!studyMode && (
          <button
            onClick={onPause}
            disabled={isPaused}
            className="w-full py-2 text-sm font-medium text-orange-700 bg-orange-100 rounded-md hover:bg-orange-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPaused ? '一時停止中' : '一時停止'}
          </button>
        )}
        <button
          onClick={onBackToHome}
          className="w-full py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
        >
          トップ画面に戻る
        </button>
      </div>
      
      {!studyMode && (
        <div className="flex justify-between items-center">
          <button
            onClick={onPrevious}
            disabled={currentIndex === 0 || isPaused}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            前の問題
          </button>
          
          {currentIndex === totalQuestions - 1 ? (
            <button
              onClick={onComplete}
              disabled={isPaused}
              className="px-6 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              試験を終了
            </button>
          ) : (
            <button
              onClick={onNext}
              disabled={isPaused}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              次の問題
            </button>
          )}
        </div>
      )}

      {studyMode && showFeedback && (
        <div className="text-center text-sm text-gray-600">
          解説を確認して「次の問題に進む」をクリックしてください
        </div>
      )}
    </div>
  );
}
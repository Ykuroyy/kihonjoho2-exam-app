'use client';

import { useState } from 'react';
import { generateFullExamQuestions } from '@/data/sampleQuestions';
import { useExam } from '@/hooks/useExam';
import QuestionCard from '@/components/QuestionCard';
import ExamNavigation from '@/components/ExamNavigation';
import Timer from '@/components/Timer';
import ExamResultComponent from '@/components/ExamResult';
import ExplanationModal from '@/components/ExplanationModal';
import { ExamResult } from '@/types/exam';

export default function Home() {
  const [isStarted, setIsStarted] = useState(false);
  const [examResult, setExamResult] = useState<ExamResult | null>(null);
  const [explanationQuestionId, setExplanationQuestionId] = useState<string | null>(null);
  
  const questions = generateFullExamQuestions();
  const {
    examState,
    startExam,
    selectAnswer,
    goToQuestion,
    nextQuestion,
    previousQuestion,
    completeExam,
  } = useExam(questions);
  
  const handleStartExam = () => {
    setIsStarted(true);
    setExamResult(null);
    startExam();
  };
  
  const handleCompleteExam = () => {
    const result = completeExam();
    setExamResult(result);
  };
  
  const handleRetakeExam = () => {
    setExamResult(null);
    setIsStarted(false);
  };
  
  const currentQuestion = examState.questions[examState.currentQuestionIndex];
  const answeredQuestions = new Set(
    Array.from(examState.answers.keys())
  );
  
  if (!isStarted && !examResult) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold text-center mb-6">
            基本情報技術者試験
            <br />
            <span className="text-xl">対策アプリ</span>
          </h1>
          <div className="mb-6 text-gray-600">
            <p className="mb-2">このアプリでは、実際の試験と同じ形式で練習できます。</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>科目A: 60問（テクノロジ系・マネジメント系・ストラテジ系）</li>
              <li>科目B: 20問（アルゴリズム・プログラミング）</li>
              <li>合格基準: 60点以上</li>
            </ul>
          </div>
          <button
            onClick={handleStartExam}
            className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
          >
            試験を開始する
          </button>
        </div>
      </div>
    );
  }
  
  if (examResult) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <ExamResultComponent
          result={examResult}
          questions={questions}
          onShowExplanation={setExplanationQuestionId}
          onRetakeExam={handleRetakeExam}
        />
        {explanationQuestionId && (
          <ExplanationModal
            question={questions.find(q => q.id === explanationQuestionId)!}
            userAnswer={examResult.answers.find(a => a.questionId === explanationQuestionId)?.selectedAnswer ?? null}
            onClose={() => setExplanationQuestionId(null)}
          />
        )}
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <QuestionCard
              question={currentQuestion}
              selectedAnswer={examState.answers.get(currentQuestion.id) ?? null}
              onSelectAnswer={(index) => selectAnswer(currentQuestion.id, index)}
              questionNumber={examState.currentQuestionIndex + 1}
              totalQuestions={examState.questions.length}
            />
          </div>
          
          <div className="space-y-4">
            <Timer startTime={examState.startTime} />
            <ExamNavigation
              currentIndex={examState.currentQuestionIndex}
              totalQuestions={examState.questions.length}
              answeredQuestions={answeredQuestions}
              questions={examState.questions}
              onGoToQuestion={goToQuestion}
              onPrevious={previousQuestion}
              onNext={nextQuestion}
              onComplete={handleCompleteExam}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

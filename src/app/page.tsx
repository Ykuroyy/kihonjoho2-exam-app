'use client';

import { useState } from 'react';
import { questionSets, generateExamQuestions } from '@/data/questionSets';
import { useExam } from '@/hooks/useExam';
import QuestionCard from '@/components/QuestionCard';
import ExamNavigation from '@/components/ExamNavigation';
import Timer from '@/components/Timer';
import ExamResultComponent from '@/components/ExamResult';
import ExplanationModal from '@/components/ExplanationModal';
import PauseModal from '@/components/PauseModal';
import { ExamResult } from '@/types/exam';

export default function Home() {
  const [isStarted, setIsStarted] = useState(false);
  const [examResult, setExamResult] = useState<ExamResult | null>(null);
  const [explanationQuestionId, setExplanationQuestionId] = useState<string | null>(null);
  const [selectedQuestionSetId, setSelectedQuestionSetId] = useState<string>('standard');
  const [studyMode, setStudyMode] = useState<boolean>(false);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  const [currentAnswer, setCurrentAnswer] = useState<number | null>(null);
  
  const {
    examState,
    startExam,
    pauseExam,
    resumeExam,
    selectAnswer,
    goToQuestion,
    nextQuestion,
    previousQuestion,
    completeExam,
  } = useExam();
  
  const handleStartExam = () => {
    const questions = generateExamQuestions(selectedQuestionSetId);
    setIsStarted(true);
    setExamResult(null);
    startExam(questions);
  };
  
  const handleCompleteExam = () => {
    const result = completeExam();
    setExamResult(result);
  };
  
  const handleRetakeExam = () => {
    setExamResult(null);
    setIsStarted(false);
  };

  const handleBackToHome = () => {
    setExamResult(null);
    setIsStarted(false);
    setShowFeedback(false);
    setCurrentAnswer(null);
  };

  const handleStudyModeAnswer = (answerIndex: number) => {
    setCurrentAnswer(answerIndex);
    selectAnswer(currentQuestion.id, answerIndex);
    setShowFeedback(true);
  };

  const handleNextInStudyMode = () => {
    setShowFeedback(false);
    setCurrentAnswer(null);
    if (examState.currentQuestionIndex < examState.questions.length - 1) {
      nextQuestion();
    } else {
      // 学習モード完了
      const result = completeExam();
      setExamResult(result);
    }
  };
  
  const currentQuestion = examState.questions[examState.currentQuestionIndex];
  const answeredQuestions = new Set(
    Array.from(examState.answers.keys())
  );
  
  if (!isStarted && !examResult) {
    const selectedSet = questionSets.find(set => set.id === selectedQuestionSetId);
    
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
          <h1 className="text-3xl font-bold text-center mb-6">
            基本情報技術者試験
            <br />
            <span className="text-xl">対策アプリ</span>
          </h1>
          
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3">学習モードを選択してください</h2>
            <div className="mb-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-6">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="mode"
                    checked={!studyMode}
                    onChange={() => setStudyMode(false)}
                    className="w-4 h-4 text-blue-600 mr-2"
                  />
                  <div>
                    <span className="font-medium">試験モード</span>
                    <p className="text-sm text-gray-600">本番と同じ形式で時間を測って挑戦</p>
                  </div>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="mode"
                    checked={studyMode}
                    onChange={() => setStudyMode(true)}
                    className="w-4 h-4 text-blue-600 mr-2"
                  />
                  <div>
                    <span className="font-medium">学習モード</span>
                    <p className="text-sm text-gray-600">1問ずつ解答・解説を確認しながら学習</p>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3">問題セットを選択してください</h2>
            <div className="space-y-3">
              {questionSets.map((set) => (
                <div
                  key={set.id}
                  className={`border rounded-lg p-4 cursor-pointer transition-all ${
                    selectedQuestionSetId === set.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedQuestionSetId(set.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium">{set.name}</h3>
                        {set.isOfficial && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            公式問題
                          </span>
                        )}
                        {set.year && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {set.year}年度
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{set.description}</p>
                      <div className="flex gap-4 text-xs text-gray-500">
                        <span>科目A: {set.categoryA.length}問</span>
                        <span>科目B: {set.categoryB.length}問</span>
                      </div>
                    </div>
                    <div className="ml-3">
                      <input
                        type="radio"
                        name="questionSet"
                        checked={selectedQuestionSetId === set.id}
                        onChange={() => setSelectedQuestionSetId(set.id)}
                        className="w-4 h-4 text-blue-600"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {selectedSet && (
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2">選択中: {selectedSet.name}</h3>
              <div className="text-sm text-gray-600">
                <p className="mb-2">このアプリでは、実際の試験と同じ形式で練習できます。</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>科目A: {selectedSet.categoryA.length}問（テクノロジ系・マネジメント系・ストラテジ系）</li>
                  <li>科目B: {selectedSet.categoryB.length}問（アルゴリズム・プログラミング）</li>
                  <li>合格基準: 60点以上</li>
                </ul>
              </div>
            </div>
          )}
          
          <button
            onClick={handleStartExam}
            className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            {studyMode ? '学習を開始する' : '試験を開始する'}
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
          questions={examState.questions}
          onShowExplanation={setExplanationQuestionId}
          onRetakeExam={handleRetakeExam}
          onBackToHome={handleBackToHome}
        />
        {explanationQuestionId && (
          <ExplanationModal
            question={examState.questions.find(q => q.id === explanationQuestionId)!}
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
              selectedAnswer={studyMode ? currentAnswer : (examState.answers.get(currentQuestion.id) ?? null)}
              onSelectAnswer={studyMode ? handleStudyModeAnswer : (index) => selectAnswer(currentQuestion.id, index)}
              questionNumber={examState.currentQuestionIndex + 1}
              totalQuestions={examState.questions.length}
              isPaused={examState.isPaused}
              studyMode={studyMode}
              showFeedback={studyMode && showFeedback}
              onNextInStudyMode={handleNextInStudyMode}
            />
          </div>
          
          <div className="space-y-4">
            {!studyMode && <Timer startTime={examState.startTime} isPaused={examState.isPaused} />}
            <ExamNavigation
              currentIndex={examState.currentQuestionIndex}
              totalQuestions={examState.questions.length}
              answeredQuestions={answeredQuestions}
              questions={examState.questions}
              isPaused={examState.isPaused}
              onGoToQuestion={studyMode ? () => {} : goToQuestion}
              onPrevious={studyMode ? () => {} : previousQuestion}
              onNext={studyMode ? () => {} : nextQuestion}
              onComplete={studyMode ? () => {} : handleCompleteExam}
              onPause={studyMode ? () => {} : pauseExam}
              onBackToHome={handleBackToHome}
              studyMode={studyMode}
              showFeedback={studyMode && showFeedback}
            />
          </div>
        </div>
      </div>
      
      {examState.isPaused && (
        <PauseModal onResume={resumeExam} />
      )}
    </div>
  );
}

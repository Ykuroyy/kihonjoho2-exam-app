import { useState, useCallback } from 'react';
import { Question, ExamState, ExamResult } from '@/types/exam';

export const useExam = (initialQuestions: Question[] = []) => {
  const [examState, setExamState] = useState<ExamState>({
    questions: initialQuestions,
    currentQuestionIndex: 0,
    answers: new Map(),
    startTime: null,
    isCompleted: false,
    isPaused: false,
    pausedTime: 0,
  });

  const startExam = useCallback((questions?: Question[]) => {
    setExamState(prev => ({
      ...prev,
      questions: questions || prev.questions,
      startTime: new Date(),
      currentQuestionIndex: 0,
      answers: new Map(),
      isCompleted: false,
      isPaused: false,
      pausedTime: 0,
    }));
  }, []);

  const pauseExam = useCallback(() => {
    setExamState(prev => ({
      ...prev,
      isPaused: true,
    }));
  }, []);

  const resumeExam = useCallback(() => {
    setExamState(prev => ({
      ...prev,
      isPaused: false,
    }));
  }, []);

  const selectAnswer = useCallback((questionId: string, answerIndex: number) => {
    setExamState(prev => {
      const newAnswers = new Map(prev.answers);
      newAnswers.set(questionId, answerIndex);
      return {
        ...prev,
        answers: newAnswers,
      };
    });
  }, []);

  const goToQuestion = useCallback((index: number) => {
    if (index >= 0 && index < examState.questions.length) {
      setExamState(prev => ({
        ...prev,
        currentQuestionIndex: index,
      }));
    }
  }, [examState.questions.length]);

  const nextQuestion = useCallback(() => {
    goToQuestion(examState.currentQuestionIndex + 1);
  }, [examState.currentQuestionIndex, goToQuestion]);

  const previousQuestion = useCallback(() => {
    goToQuestion(examState.currentQuestionIndex - 1);
  }, [examState.currentQuestionIndex, goToQuestion]);

  const completeExam = useCallback((): ExamResult => {
    const endTime = new Date();
    const categoryAQuestions = examState.questions.filter(q => q.category === 'A');
    const categoryBQuestions = examState.questions.filter(q => q.category === 'B');
    
    let categoryACorrect = 0;
    let categoryBCorrect = 0;
    
    const answers = examState.questions.map(question => {
      const selectedAnswer = examState.answers.get(question.id) ?? null;
      const isCorrect = selectedAnswer === question.correctAnswer;
      
      if (isCorrect) {
        if (question.category === 'A') categoryACorrect++;
        else categoryBCorrect++;
      }
      
      return {
        questionId: question.id,
        selectedAnswer,
        isCorrect,
      };
    });
    
    const totalCorrect = categoryACorrect + categoryBCorrect;
    const score = Math.round((totalCorrect / examState.questions.length) * 100);
    
    const result: ExamResult = {
      totalQuestions: examState.questions.length,
      correctAnswers: totalCorrect,
      score,
      categoryAScore: {
        total: categoryAQuestions.length,
        correct: categoryACorrect,
      },
      categoryBScore: {
        total: categoryBQuestions.length,
        correct: categoryBCorrect,
      },
      answers,
      startTime: examState.startTime!,
      endTime,
    };
    
    setExamState(prev => ({
      ...prev,
      isCompleted: true,
    }));
    
    return result;
  }, [examState]);

  return {
    examState,
    startExam,
    pauseExam,
    resumeExam,
    selectAnswer,
    goToQuestion,
    nextQuestion,
    previousQuestion,
    completeExam,
  };
};
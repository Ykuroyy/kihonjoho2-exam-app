import { Question } from '@/types/exam';
import { sampleQuestionsA, sampleQuestionsB, additionalQuestions } from './sampleQuestions';
import { moreQuestions } from './moreQuestions';
import { moreBQuestions } from './moreBQuestions';
import { r7Questions } from './r7Questions';
import { r7BQuestions } from './r7BQuestions';
import { r6Questions } from './r6Questions';
import { r6BQuestions } from './r6BQuestions';
import { r5Questions } from './r5Questions';
import { r5BQuestions } from './r5BQuestions';

export interface QuestionSet {
  id: string;
  name: string;
  description: string;
  categoryA: Question[];
  categoryB: Question[];
  year?: string;
  isOfficial?: boolean;
}

export const questionSets: QuestionSet[] = [
  {
    id: 'standard',
    name: '標準問題セット',
    description: 'サンプル問題と追加問題を含む標準的な問題セット',
    categoryA: [...sampleQuestionsA, ...additionalQuestions, ...moreQuestions],
    categoryB: [...sampleQuestionsB, ...moreBQuestions],
    isOfficial: false
  },
  {
    id: 'r7-official',
    name: '令和7年度公開問題',
    description: 'IPAが公開した令和7年度基本情報技術者試験の実際の問題（科目A: 20問、科目B: 6問）',
    categoryA: r7Questions,
    categoryB: r7BQuestions,
    year: '2025',
    isOfficial: true
  },
  {
    id: 'r6-official',
    name: '令和6年度公開問題',
    description: 'IPAが公開した令和6年度基本情報技術者試験の実際の問題（科目A: 20問、科目B: 6問）',
    categoryA: r6Questions,
    categoryB: r6BQuestions,
    year: '2024',
    isOfficial: true
  },
  {
    id: 'r5-official',
    name: '令和5年度公開問題',
    description: 'IPAが公開した令和5年度基本情報技術者試験の実際の問題（科目A: 20問、科目B: 6問）',
    categoryA: r5Questions,
    categoryB: r5BQuestions,
    year: '2023',
    isOfficial: true
  },
  {
    id: 'mixed',
    name: '全問題ミックス',
    description: '標準問題と令和5年度・令和6年度・令和7年度問題を組み合わせた総合問題セット',
    categoryA: [...sampleQuestionsA, ...additionalQuestions, ...moreQuestions, ...r5Questions, ...r6Questions, ...r7Questions],
    categoryB: [...sampleQuestionsB, ...moreBQuestions, ...r5BQuestions, ...r6BQuestions, ...r7BQuestions],
    isOfficial: false
  }
];

export function getQuestionSetById(id: string): QuestionSet | undefined {
  return questionSets.find(set => set.id === id);
}

export function generateExamQuestions(questionSetId: string = 'standard'): Question[] {
  const questionSet = getQuestionSetById(questionSetId);
  if (!questionSet) {
    throw new Error(`Question set not found: ${questionSetId}`);
  }

  const { categoryA, categoryB } = questionSet;
  const questions: Question[] = [...categoryA, ...categoryB];
  
  // 標準問題セットまたはミックスセットの場合、不足分を生成
  if (questionSetId === 'standard' || questionSetId === 'mixed') {
    // 科目Aの問題テンプレート（元のロジックを維持）
    const categoryATemplates = [
      {
        text: '2進数と10進数の変換に関する問題で、2進数の{binary}を10進数に変換すると{decimal}である。',
        topic: '基礎理論',
        explanation: '2進数から10進数への変換は、各桁の重み（2の累乗）を掛けて合計します。'
      },
      {
        text: 'CPUの性能指標に関する問題で、クロック周波数が{freq}GHzの場合、1秒間に実行できる命令数の最大値は何か。',
        topic: 'コンピュータシステム',
        explanation: 'クロック周波数は1秒間に何回の基本動作ができるかを示します。'
      },
      {
        text: 'TCP/IPプロトコルスタックにおいて、{layer}層の主な役割は何か。',
        topic: 'ネットワーク',
        explanation: 'TCP/IPは4層のプロトコルスタックで構成されており、各層が特定の役割を担っています。'
      },
      {
        text: 'SQLの{command}文を使用してデータを操作する際の注意点は何か。',
        topic: 'データベース',
        explanation: 'SQLの各コマンドには適切な使用方法と注意点があります。'
      },
      {
        text: '{security}攻撃に対する効果的な対策として最も適切なものは何か。',
        topic: 'セキュリティ',
        explanation: 'セキュリティ攻撃には様々な種類があり、それぞれに適した対策が必要です。'
      },
      {
        text: 'プロジェクト管理において{method}手法を適用する場合の利点は何か。',
        topic: 'マネジメント',
        explanation: 'プロジェクト管理手法にはそれぞれ特徴と適用場面があります。'
      }
    ];

    // 科目Aの残り問題を生成
    const categoryACount = questions.filter(q => q.category === 'A').length;
    for (let i = categoryACount + 1; i <= 60; i++) {
      const template = categoryATemplates[Math.floor(Math.random() * categoryATemplates.length)];
      questions.push({
        id: `A${String(i).padStart(3, '0')}`,
        category: 'A',
        text: `問${i}: ${template.text.replace(/\{[^}]+\}/g, '○○')}`,
        options: [
          `選択肢A（正解パターン）`,
          `選択肢B（不正解パターン1）`,
          `選択肢C（不正解パターン2）`,
          `選択肢D（不正解パターン3）`
        ],
        correctAnswer: 0,
        explanation: `${template.explanation}この問題では選択肢Aが正解となる理由を詳しく解説します。実際の試験では具体的な数値や用語が使用されます。`,
        topic: template.topic
      });
    }

    // 科目Bの残り問題を生成（20問に不足する場合）
    const categoryBCount = questions.filter(q => q.category === 'B').length;
    if (categoryBCount < 20) {
      console.warn(`科目B問題が不足しています: ${categoryBCount}問`);
    }
  }

  return questions;
}
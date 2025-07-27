import { Question } from '@/types/exam';

export const sampleQuestions: Question[] = [
  // 科目A サンプル問題（60問中の一部）
  {
    id: 'A001',
    category: 'A',
    text: '基数変換に関する記述のうち、正しいものはどれか。',
    options: [
      '10進数の25を2進数で表すと11001である',
      '16進数のFFを10進数で表すと256である',
      '2進数の1010を10進数で表すと12である',
      '8進数の17を10進数で表すと17である'
    ],
    correctAnswer: 0,
    explanation: '10進数の25を2進数に変換すると、25 = 16 + 8 + 1 = 2^4 + 2^3 + 2^0 = 11001となります。',
    topic: '基礎理論'
  },
  {
    id: 'A002',
    category: 'A',
    text: 'OSI基本参照モデルの第3層に位置するのはどれか。',
    options: [
      'データリンク層',
      'ネットワーク層',
      'トランスポート層',
      'セッション層'
    ],
    correctAnswer: 1,
    explanation: 'OSI基本参照モデルは7層構造で、第3層はネットワーク層です。IPアドレスによる経路制御などを行います。',
    topic: 'ネットワーク'
  },
  {
    id: 'A003',
    category: 'A',
    text: 'スタックの性質を表すものはどれか。',
    options: [
      'FIFO（First In First Out）',
      'LIFO（Last In First Out）',
      'ランダムアクセス',
      '優先度付きキュー'
    ],
    correctAnswer: 1,
    explanation: 'スタックはLIFO（Last In First Out：後入れ先出し）の性質を持つデータ構造です。',
    topic: 'アルゴリズムとプログラミング'
  },
  {
    id: 'A004',
    category: 'A',
    text: 'SQLのDML（Data Manipulation Language）に分類されるものはどれか。',
    options: [
      'CREATE',
      'DROP',
      'UPDATE',
      'GRANT'
    ],
    correctAnswer: 2,
    explanation: 'DMLはデータ操作言語で、SELECT、INSERT、UPDATE、DELETEが該当します。CREATEとDROPはDDL、GRANTはDCLです。',
    topic: 'データベース'
  },
  {
    id: 'A005',
    category: 'A',
    text: 'プロジェクトマネジメントにおけるWBSの説明として、適切なものはどれか。',
    options: [
      'プロジェクトの作業を階層的に分解した構造図',
      'プロジェクトメンバーの責任分担表',
      'プロジェクトの進捗を表すガントチャート',
      'プロジェクトのリスク一覧表'
    ],
    correctAnswer: 0,
    explanation: 'WBS（Work Breakdown Structure）は、プロジェクトの成果物や作業を階層的に分解した構造図です。',
    topic: 'マネジメント'
  },
  
  // 科目B サンプル問題（20問中の一部）
  {
    id: 'B001',
    category: 'B',
    text: '次のPythonコードの出力結果はどれか。\n\n```python\nnumbers = [1, 2, 3, 4, 5]\nresult = [x * 2 for x in numbers if x % 2 == 0]\nprint(result)\n```',
    options: [
      '[2, 4, 6, 8, 10]',
      '[4, 8]',
      '[2, 4]',
      '[1, 3, 5]'
    ],
    correctAnswer: 1,
    explanation: 'リスト内包表記で、numbersから偶数（x % 2 == 0）のみを抽出し、それぞれを2倍しています。偶数は2と4なので、結果は[4, 8]となります。',
    topic: 'プログラミング'
  },
  {
    id: 'B002',
    category: 'B',
    text: '次のアルゴリズムの時間計算量はどれか。\n\n```\nfor i = 1 to n\n  for j = 1 to n\n    print(i * j)\n```',
    options: [
      'O(1)',
      'O(n)',
      'O(n²)',
      'O(n³)'
    ],
    correctAnswer: 2,
    explanation: '二重ループで、外側のループがn回、内側のループもn回実行されるため、全体でn×n = n²回の処理が行われます。',
    topic: 'アルゴリズム'
  },
  {
    id: 'B003',
    category: 'B',
    text: 'HTTPSプロトコルにおいて、通信の暗号化に使用される技術の組み合わせはどれか。',
    options: [
      'SSLまたはTLS',
      'FTPとSFTP',
      'POP3とIMAP',
      'DNSとDHCP'
    ],
    correctAnswer: 0,
    explanation: 'HTTPSは、HTTP over SSL/TLSの略で、SSL（Secure Sockets Layer）またはTLS（Transport Layer Security）を使用して通信を暗号化します。',
    topic: 'セキュリティ'
  },
  {
    id: 'B004',
    category: 'B',
    text: 'オブジェクト指向プログラミングにおける「継承」の利点として、最も適切なものはどれか。',
    options: [
      'プログラムの実行速度が向上する',
      'コードの再利用性が高まる',
      'メモリ使用量が削減される',
      'コンパイル時間が短縮される'
    ],
    correctAnswer: 1,
    explanation: '継承により、既存のクラスの機能を引き継いで新しいクラスを作成できるため、コードの再利用性が高まります。',
    topic: 'プログラミング'
  },
  {
    id: 'B005',
    category: 'B',
    text: 'データベースの正規化において、第1正規形の条件はどれか。',
    options: [
      'すべての非キー属性が主キーに完全関数従属する',
      'すべての属性が原子値である',
      '推移的関数従属が存在しない',
      '多値従属が存在しない'
    ],
    correctAnswer: 1,
    explanation: '第1正規形の条件は、すべての属性が原子値（それ以上分割できない値）であることです。',
    topic: 'データベース'
  }
];

// 実際の試験では科目A：60問、科目B：20問必要なので、ダミーデータを追加
export function generateFullExamQuestions(): Question[] {
  const questions: Question[] = [...sampleQuestions];
  
  // 科目Aの残り問題を生成（60問になるまで）
  const categoryACount = questions.filter(q => q.category === 'A').length;
  for (let i = categoryACount + 1; i <= 60; i++) {
    questions.push({
      id: `A${String(i).padStart(3, '0')}`,
      category: 'A',
      text: `科目A 問題${i}：この問題はサンプルです。実際の試験では適切な問題が出題されます。`,
      options: ['選択肢1', '選択肢2', '選択肢3', '選択肢4'],
      correctAnswer: Math.floor(Math.random() * 4),
      explanation: `問題${i}の解説：正解の選択肢が選ばれた理由について詳しく説明します。`,
      topic: ['基礎理論', 'コンピュータシステム', 'ネットワーク', 'データベース', 'セキュリティ', 'マネジメント'][Math.floor(Math.random() * 6)]
    });
  }
  
  // 科目Bの残り問題を生成（20問になるまで）
  const categoryBCount = questions.filter(q => q.category === 'B').length;
  for (let i = categoryBCount + 1; i <= 20; i++) {
    questions.push({
      id: `B${String(i).padStart(3, '0')}`,
      category: 'B',
      text: `科目B 問題${i}：この問題はサンプルです。実際の試験では適切な問題が出題されます。`,
      options: ['選択肢1', '選択肢2', '選択肢3', '選択肢4'],
      correctAnswer: Math.floor(Math.random() * 4),
      explanation: `問題${i}の解説：正解の選択肢が選ばれた理由について詳しく説明します。`,
      topic: ['アルゴリズム', 'プログラミング', 'セキュリティ'][Math.floor(Math.random() * 3)]
    });
  }
  
  return questions;
}
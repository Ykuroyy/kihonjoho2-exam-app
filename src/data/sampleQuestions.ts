import { Question } from '@/types/exam';
import { moreQuestions } from './moreQuestions';

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

// 基本情報技術者試験の追加問題データ
const additionalQuestions: Question[] = [
  // 科目A 追加問題
  {
    id: 'A006',
    category: 'A',
    text: 'キャッシュメモリの特徴として、最も適切なものはどれか。',
    options: [
      'メインメモリよりも容量が大きく、アクセス速度が遅い',
      'メインメモリよりも容量が小さく、アクセス速度が速い',
      'メインメモリよりも容量が大きく、アクセス速度が速い',
      'メインメモリよりも容量が小さく、アクセス速度が遅い'
    ],
    correctAnswer: 1,
    explanation: 'キャッシュメモリは、CPUとメインメモリの間に配置される高速な記憶装置で、容量は小さいがアクセス速度が非常に速いという特徴があります。',
    topic: 'コンピュータシステム'
  },
  {
    id: 'A007',
    category: 'A',
    text: 'IPv4アドレスのクラスAの特徴はどれか。',
    options: [
      '先頭8ビットがネットワーク部、残り24ビットがホスト部',
      '先頭16ビットがネットワーク部、残り16ビットがホスト部',
      '先頭24ビットがネットワーク部、残り8ビットがホスト部',
      '全32ビットがネットワーク部'
    ],
    correctAnswer: 0,
    explanation: 'クラスAのIPv4アドレスは、先頭8ビットがネットワーク部、残り24ビットがホスト部となっており、大規模なネットワークに適しています。',
    topic: 'ネットワーク'
  },
  {
    id: 'A008',
    category: 'A',
    text: 'データベースの正規化において、第2正規形の条件はどれか。',
    options: [
      'すべての属性が原子値である',
      '第1正規形であり、部分関数従属がない',
      '第2正規形であり、推移的関数従属がない',
      'すべての属性が主キーに完全関数従属する'
    ],
    correctAnswer: 1,
    explanation: '第2正規形は、第1正規形の条件を満たし、かつ部分関数従属（主キーの一部の属性に従属する非キー属性）が存在しないことが条件です。',
    topic: 'データベース'
  },
  {
    id: 'A009',
    category: 'A',
    text: 'ファイアウォールの主な機能はどれか。',
    options: [
      'コンピュータウイルスの検出と駆除',
      'ネットワーク通信の監視と制御',
      'データの暗号化と復号化',
      'システムの脆弱性診断'
    ],
    correctAnswer: 1,
    explanation: 'ファイアウォールは、内部ネットワークと外部ネットワーク間の通信を監視し、事前に定義されたルールに基づいて通信を許可または拒否する機能を持ちます。',
    topic: 'セキュリティ'
  },
  {
    id: 'A010',
    category: 'A',
    text: 'PDCA サイクルの各フェーズの正しい順序はどれか。',
    options: [
      'Plan → Do → Check → Action',
      'Plan → Do → Action → Check',
      'Do → Plan → Check → Action',
      'Check → Action → Plan → Do'
    ],
    correctAnswer: 0,
    explanation: 'PDCAサイクルは、Plan（計画）→ Do（実行）→ Check（評価）→ Action（改善）の順序で継続的な改善を行う管理手法です。',
    topic: 'マネジメント'
  }
];

// 実際の試験では科目A：60問、科目B：20問必要なので、豊富な問題データを生成
export function generateFullExamQuestions(): Question[] {
  const baseQuestions = [...sampleQuestions, ...additionalQuestions, ...moreQuestions];
  const questions: Question[] = [...baseQuestions];
  
  // 科目Aの問題テンプレート
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

  // 科目Bの問題テンプレート
  const categoryBTemplates = [
    {
      text: '次のソートアルゴリズムの時間計算量について、{algorithm}ソートの最悪時間計算量は何か。',
      topic: 'アルゴリズム',
      explanation: 'ソートアルゴリズムには様々な種類があり、それぞれ異なる時間計算量を持ちます。'
    },
    {
      text: 'オブジェクト指向プログラミングにおける{concept}の概念について正しく説明しているものは何か。',
      topic: 'プログラミング',
      explanation: 'オブジェクト指向プログラミングの基本概念を理解することが重要です。'
    },
    {
      text: '暗号化技術における{cipher}暗号方式の特徴として正しいものは何か。',
      topic: 'セキュリティ',
      explanation: '暗号化技術には様々な方式があり、それぞれに特徴があります。'
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
  
  // 科目Bの残り問題を生成
  const categoryBCount = questions.filter(q => q.category === 'B').length;
  for (let i = categoryBCount + 1; i <= 20; i++) {
    const template = categoryBTemplates[Math.floor(Math.random() * categoryBTemplates.length)];
    questions.push({
      id: `B${String(i).padStart(3, '0')}`,
      category: 'B',
      text: `問${i}: ${template.text.replace(/\{[^}]+\}/g, '○○')}`,
      options: [
        `O(1) - 定数時間`,
        `O(n) - 線形時間`,
        `O(n²) - 二次時間`,
        `O(log n) - 対数時間`
      ],
      correctAnswer: Math.floor(Math.random() * 4),
      explanation: `${template.explanation}計算量の概念を理解し、適切なアルゴリズムを選択することが重要です。実際の試験ではより具体的なプログラムコードが提示されます。`,
      topic: template.topic
    });
  }
  
  return questions;
}
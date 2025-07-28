import { Question } from '@/types/exam';

export const moreBQuestions: Question[] = [
  {
    id: 'B006',
    category: 'B',
    text: '次のJavaコードの実行結果はどれか。\n\n```java\nint[] arr = {1, 2, 3, 4, 5};\nint sum = 0;\nfor (int i = 0; i < arr.length; i += 2) {\n    sum += arr[i];\n}\nSystem.out.println(sum);\n```',
    options: [
      '15',
      '9',
      '6',
      '10'
    ],
    correctAnswer: 1,
    explanation: 'i += 2により、インデックス0, 2, 4の要素（1, 3, 5）が加算されます。1 + 3 + 5 = 9となります。',
    topic: 'プログラミング'
  },
  {
    id: 'B007',
    category: 'B',
    text: '配列をバブルソートで昇順に並べ替える場合、最悪時間計算量はどれか。',
    options: [
      'O(n)',
      'O(n log n)',
      'O(n²)',
      'O(1)'
    ],
    correctAnswer: 2,
    explanation: 'バブルソートは二重ループで隣接要素を比較・交換するため、最悪時間計算量はO(n²)です。',
    topic: 'アルゴリズム'
  },
  {
    id: 'B008',
    category: 'B',
    text: '次の疑似コードで実装されているアルゴリズムはどれか。\n\n```\nfunction search(arr, target):\n    left = 0\n    right = arr.length - 1\n    while left <= right:\n        mid = (left + right) / 2\n        if arr[mid] == target:\n            return mid\n        else if arr[mid] < target:\n            left = mid + 1\n        else:\n            right = mid - 1\n    return -1\n```',
    options: [
      '線形探索',
      '二分探索',
      'ハッシュ探索',
      '深さ優先探索'
    ],
    correctAnswer: 1,
    explanation: 'このコードは二分探索アルゴリズムです。配列の中央値と比較して探索範囲を半分に絞り込んでいます。',
    topic: 'アルゴリズム'
  },
  {
    id: 'B009',
    category: 'B',
    text: '再帰関数において、スタックオーバーフローが発生する主な原因はどれか。',
    options: [
      '引数が多すぎる',
      'ベースケース（終了条件）がない',
      '戻り値が大きすぎる',
      '処理時間が長すぎる'
    ],
    correctAnswer: 1,
    explanation: '再帰関数にベースケース（終了条件）がないと、無限に自身を呼び出し続け、スタックオーバーフローが発生します。',
    topic: 'プログラミング'
  },
  {
    id: 'B010',
    category: 'B',
    text: '次のPythonコードで実装されているデータ構造はどれか。\n\n```python\nclass Node:\n    def __init__(self, data):\n        self.data = data\n        self.next = None\n\nclass DataStructure:\n    def __init__(self):\n        self.head = None\n    \n    def add(self, data):\n        new_node = Node(data)\n        new_node.next = self.head\n        self.head = new_node\n```',
    options: [
      '配列',
      '連結リスト',
      '二分木',
      'ハッシュテーブル'
    ],
    correctAnswer: 1,
    explanation: 'Nodeクラスがデータとnext（次のノードへの参照）を持ち、先頭に要素を追加していることから、単方向連結リストの実装です。',
    topic: 'プログラミング'
  },
  {
    id: 'B011',
    category: 'B',
    text: 'マージソートの特徴として、正しいものはどれか。',
    options: [
      '不安定なソートアルゴリズムである',
      '最悪時間計算量がO(n²)である',
      '分割統治法を用いる',
      'インプレースソートである'
    ],
    correctAnswer: 2,
    explanation: 'マージソートは分割統治法を用いて、配列を再帰的に分割し、マージしながらソートする安定なアルゴリズムです。',
    topic: 'アルゴリズム'
  },
  {
    id: 'B012',
    category: 'B',
    text: '次のSQLクエリの実行結果として正しいものはどれか。\n\n```sql\nSELECT COUNT(*) \nFROM employees \nWHERE salary > 50000 \nGROUP BY department \nHAVING COUNT(*) > 5;\n```',
    options: [
      '全従業員数',
      '給与が50000を超える従業員数',
      '各部署で給与が50000を超える従業員が5人より多い部署の数のリスト',
      '給与が50000を超える従業員がいる部署数'
    ],
    correctAnswer: 2,
    explanation: 'このクエリは部署ごとにグループ化し、給与が50000を超える従業員が5人より多い部署のみを抽出し、その各部署の該当人数を返します。',
    topic: 'プログラミング'
  },
  {
    id: 'B013',
    category: 'B',
    text: 'グラフ理論において、全ての頂点を一度ずつ訪問する経路を何と呼ぶか。',
    options: [
      'オイラー路',
      'ハミルトン路',
      '最短経路',
      '全域木'
    ],
    correctAnswer: 1,
    explanation: 'ハミルトン路は、グラフの全ての頂点を一度ずつ訪問する経路です。オイラー路は全ての辺を一度ずつ通る経路です。',
    topic: 'アルゴリズム'
  },
  {
    id: 'B014',
    category: 'B',
    text: '動的計画法の特徴として、適切でないものはどれか。',
    options: [
      '部分問題の解を記憶する',
      '重複する計算を避ける',
      '貪欲法の一種である',
      'フィボナッチ数列の計算に適用できる'
    ],
    correctAnswer: 2,
    explanation: '動的計画法は貪欲法とは異なるアルゴリズム設計手法です。部分問題の解を記憶し、重複計算を避けることで効率化を図ります。',
    topic: 'アルゴリズム'
  },
  {
    id: 'B015',
    category: 'B',
    text: '次のJavaScriptコードの出力はどれか。\n\n```javascript\nconst arr = [1, 2, 3, 4, 5];\nconst result = arr.filter(x => x % 2 === 0).map(x => x * 2);\nconsole.log(result);\n```',
    options: [
      '[2, 4, 6, 8, 10]',
      '[4, 8]',
      '[2, 4]',
      '[1, 3, 5]'
    ],
    correctAnswer: 1,
    explanation: 'filterで偶数（2, 4）を抽出し、mapでそれぞれを2倍にするので、結果は[4, 8]となります。',
    topic: 'プログラミング'
  },
  {
    id: 'B016',
    category: 'B',
    text: 'TCPとUDPの違いとして、正しいものはどれか。',
    options: [
      'TCPは信頼性が低く、UDPは信頼性が高い',
      'TCPはコネクションレス、UDPはコネクション型',
      'TCPは信頼性が高く、UDPは高速性を重視',
      'TCPは暗号化され、UDPは暗号化されない'
    ],
    correctAnswer: 2,
    explanation: 'TCPは信頼性を重視したコネクション型プロトコル、UDPは高速性を重視したコネクションレス型プロトコルです。',
    topic: 'セキュリティ'
  },
  {
    id: 'B017',
    category: 'B',
    text: 'ハッシュテーブルにおいて、衝突を解決する方法として適切でないものはどれか。',
    options: [
      'チェイン法',
      'オープンアドレス法',
      '線形探査法',
      'バブルソート法'
    ],
    correctAnswer: 3,
    explanation: 'バブルソートは並べ替えアルゴリズムであり、ハッシュテーブルの衝突解決方法ではありません。',
    topic: 'アルゴリズム'
  },
  {
    id: 'B018',
    category: 'B',
    text: 'REST APIの設計原則として、適切でないものはどれか。',
    options: [
      'ステートレスな通信',
      'リソースベースのURL設計',
      'HTTPメソッドの適切な使用',
      'セッション情報の保持'
    ],
    correctAnswer: 3,
    explanation: 'REST APIはステートレスであるべきで、サーバー側でセッション情報を保持しないことが原則です。',
    topic: 'プログラミング'
  },
  {
    id: 'B019',
    category: 'B',
    text: '次の正規表現が表す文字列として、正しいものはどれか。\n\n```\n^[a-zA-Z0-9]+@[a-zA-Z0-9]+\\.[a-zA-Z]{2,}$\n```',
    options: [
      'URLアドレス',
      'IPアドレス',
      'メールアドレス',
      '電話番号'
    ],
    correctAnswer: 2,
    explanation: 'この正規表現は、基本的なメールアドレスの形式（ユーザー名@ドメイン名.拡張子）を表しています。',
    topic: 'プログラミング'
  },
  {
    id: 'B020',
    category: 'B',
    text: 'XSS（クロスサイトスクリプティング）攻撃を防ぐ方法として、最も効果的なものはどれか。',
    options: [
      'パスワードの暗号化',
      '入力値の検証とエスケープ処理',
      'SSLの使用',
      'ファイアウォールの設定'
    ],
    correctAnswer: 1,
    explanation: 'XSS攻撃を防ぐには、ユーザー入力の検証と、HTMLに出力する際の適切なエスケープ処理が最も効果的です。',
    topic: 'セキュリティ'
  }
];
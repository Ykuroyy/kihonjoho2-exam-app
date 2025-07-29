import { Question } from '@/types/exam';

export const r6BQuestions: Question[] = [
  {
    id: 'R6B001',
    category: 'B',
    text: `次のプログラム中の【 】に入れる正しい答えを，解答群の中から選べ。

関数 maximum は，異なる三つの整数を引数で受け取り，そのうちの最大値を返す。

〔プログラム〕
○整数型: maximum(整数型: x, 整数型: y, 整数型: z)
  if (【 】)
    return x
  elseif (y ＞ z)
    return y
  else
    return z
  endif`,
    options: [
      'x ＞ y',
      'x ＞ y and x ＞ z',
      'x ＞ y and y ＞ z',
      'x ＞ z',
      'x ＞ z and z ＞ y',
      'z ＞ y'
    ],
    correctAnswer: 1,
    explanation: '3つの値のうち最大値を返すため、xが最大値となる条件は「x ＞ y and x ＞ z」です。この条件が真の場合にxを返し、偽の場合はyとzの比較に進みます。',
    topic: 'プログラミング'
  },
  {
    id: 'R6B002',
    category: 'B',
    text: `次のプログラム中の【 】に入れる正しい答えを，解答群の中から選べ。

関数 convDecimal は，引数として与えられた，"0"と"1"だけから成る，1 文字以上の文字列を，符号なしの 2 進数と解釈したときの整数値を返す。例えば，引数として"10010"を与えると 18 が返る。

関数 convDecimal が利用する関数 int は，引数で与えられた文字が"0"なら整数値 0 を返し，"1"なら整数値 1 を返す。

〔プログラム〕
○整数型: convDecimal(文字列型: binary)
  整数型: i, length, result ← 0
  length ← binaryの文字数
  for (i を 1 から length まで 1 ずつ増やす)
    result ← 【 】
  endfor
  return result`,
    options: [
      'result ＋ int(binary の (length － i ＋ 1)文字目の文字)',
      'result ＋ int(binary の i文字目の文字)',
      'result × 2 ＋ int(binary の (length － i ＋ 1)文字目の文字)',
      'result × 2 ＋ int(binary の i文字目の文字)'
    ],
    correctAnswer: 3,
    explanation: '2進数を10進数に変換するアルゴリズムです。左から右へ文字を処理しながら、結果を2倍して次のビット値を加算します。「result × 2 ＋ int(binary の i文字目の文字)」が正解です。',
    topic: 'アルゴリズム'
  },
  {
    id: 'R6B003',
    category: 'B',
    text: `次のプログラム中の【 】に入れる正しい答えを，解答群の中から選べ。ここで，配列の要素番号は 1 から始まる。

図 1 に示すグラフの頂点には，1 から順に整数で番号が付けられている。グラフは無向グラフであり，各頂点間には高々一つの辺がある。一つの辺は両端の頂点の番号を要素にもつ要素数 2 の整数型の配列で表現できる。例えば，{1，3} は頂点 1 と頂点 3 を端点とする辺を表す。

関数 edgesToMatrix は，引数 edgeList で辺の配列を，引数 nodeNum でグラフの頂点の個数をそれぞれ受け取り，隣接行列を表す整数型の二次元配列を返す。

〔プログラム〕
○整数型の二次元配列: edgesToMatrix(整数型配列の配列: edgeList,
                                     整数型: nodeNum)
  整数型の二次元配列: adjMatrix ← {nodeNum行nodeNum列の 0}
  整数型: i, u, v
  for (i を 1 から edgeListの要素数 まで 1 ずつ増やす)
    u ← edgeList[i][1]
    v ← edgeList[i][2]
    【 】
  endfor
  return adjMatrix`,
    options: [
      'adjMatrix[u, u] ← 1',
      'adjMatrix[u, u] ← 1\nadjMatrix[v, v] ← 1',
      'adjMatrix[u, v] ← 1',
      'adjMatrix[u, v] ← 1\nadjMatrix[v, u] ← 1',
      'adjMatrix[v, u] ← 1',
      'adjMatrix[v, v] ← 1'
    ],
    correctAnswer: 3,
    explanation: '無向グラフの隣接行列では、頂点uと頂点vを結ぶ辺がある場合、adjMatrix[u,v]とadjMatrix[v,u]の両方を1に設定する必要があります。',
    topic: 'データ構造'
  },
  {
    id: 'R6B004',
    category: 'B',
    text: `次の記述中の【 】に入れる正しい答えを，解答群の中から選べ。ここで，配列の要素番号は 1 から始まる。

関数 merge は，昇順に整列された整数型の配列 data1 及び data2 を受け取り，これらを併合してできる昇順に整列された整数型の配列を返す。

関数 merge を merge({2, 3}, {1, 4}) として呼び出すと，/*** α ***/ の行は【 】。`,
    options: [
      '実行されない',
      '1 回実行される',
      '2 回実行される',
      '3 回実行される'
    ],
    correctAnswer: 1,
    explanation: 'merge({2, 3}, {1, 4})の実行において、最初のwhileループでdata2から1が取り出され、次にdata1から2, 3が取り出されます。その後data2に残っている4を処理するため、最後のwhileループ（/*** α ***/の行）は1回実行されます。',
    topic: 'アルゴリズム'
  },
  {
    id: 'R6B005',
    category: 'B',
    text: `次のプログラム中の【 a 】～【 c 】に入れる正しい答えの組合せを，解答群の中から選べ。ここで，配列の要素番号は 1 から始まる。

一度の注文で購入された商品のリストを，注文ごとに記録した注文データがある。

注文データから，商品 x と商品 y とが同一の注文で購入されやすい傾向を示す関連度 Lxy を，次の式で計算する。

Lxy＝ (Mxy × 全注文数) ÷ (Kx × Ky)

ここで，Mxy は商品 x と商品 y とが同一の注文で購入された注文数，Kx は商品 x が購入された注文数，Ky は商品 y が購入された注文数を表す。

手続 putRelatedItem は，大域変数 orders に格納された注文データを基に，引数で与えられた商品との関連度が最も大きい商品のうちの一つと，その関連度を出力する。

〔プログラム〕の中で：
- 【 a 】の値を1増やす
- 【 b 】の値を1増やす
- valueL ← (arrayM[i] × 【 c 】) ÷ (itemCount × arrayK[i])`,
    options: [
      'a=arrayK[i], b=arrayM[i], c=allItemsの要素数',
      'a=arrayK[i], b=arrayM[i], c=ordersの要素数',
      'a=arrayK[i], b=arrayM[i], c=otherItemsの要素数',
      'a=arrayM[i], b=arrayK[i], c=allItemsの要素数',
      'a=arrayM[i], b=arrayK[i], c=ordersの要素数',
      'a=arrayM[i], b=arrayK[i], c=otherItemsの要素数'
    ],
    correctAnswer: 4,
    explanation: 'コードの構造から、arrayM[i]は商品の同時購入回数、arrayK[i]は各商品の購入回数、全注文数（ordersの要素数）を使って関連度を計算します。',
    topic: 'アルゴリズム'
  },
  {
    id: 'R6B006',
    category: 'B',
    text: `A社は従業員450名の商社であり，昨年から働き方改革の一環として，在宅でのテレワークを推進している。

テレワークでA社利用クラウドサービスに接続する場合には，A社の社内ネットワークも社内PCも介さずに直接接続することを可能にするネットワークの設定変更を実施することにした。

設定変更に当たり，A社利用クラウドサービスへの不正アクセスのリスクが増加することが問題となった。

次の対策のうち，情報システム部に依頼することにしたものはどれか。解答群のうち，最も適切なものを選べ。`,
    options: [
      'A社の社内ネットワークからA社利用クラウドサービスへの通信を監視する。',
      'A社の社内ネットワークとA社利用クラウドサービスとの間の通信速度を制限する。',
      'A社利用クラウドサービスにA社外から接続する際の認証に2要素認証を導入する。',
      'A社利用クラウドサービスのうち，A社利用グループウェアだけを直接接続の対象とする。',
      '専用アプリの保存禁止機能を無効にする。'
    ],
    correctAnswer: 2,
    explanation: '社内ネットワークを経由しない直接接続により不正アクセスのリスクが増加するため、認証を強化する2要素認証の導入が最も適切な対策です。',
    topic: 'セキュリティ'
  }
];
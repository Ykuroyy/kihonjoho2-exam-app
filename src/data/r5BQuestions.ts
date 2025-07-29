import { Question } from '@/types/exam';

export const r5BQuestions: Question[] = [
  {
    id: 'R5B001',
    category: 'B',
    text: `次のプログラム中の【 a 】と【 b 】に入れる正しい答えの組合せを，解答群の中から選べ。ここで，配列の要素番号は 1 から始まる。

関数 findPrimeNumbers は，引数で与えられた整数以下の，全ての素数だけを格納した配列を返す関数である。ここで，引数に与える整数は 2 以上である。

〔プログラム〕
○整数型の配列: findPrimeNumbers(整数型: maxNum)
  整数型の配列: pnList ← {} // 要素数0の配列
  整数型: i, j
  論理型: divideFlag
  for (i を 2 から 【 a 】 まで 1 ずつ増やす)
    divideFlag ← true
    /* iの正の平方根の整数部分が2未満のときは，繰返し処理を実行しない */
    for (j を 2 から iの正の平方根の整数部分 まで 1 ずつ増やす) // α
      if (【 b 】)
        divideFlag ← false
        αの行から始まる繰返し処理を終了する
      endif
    endfor
    if (divideFlag が true と等しい)
      pnListの末尾 に iの値 を追加する
    endif
  endfor
  return pnList`,
    options: [
      'a=maxNum, b=i ÷ j の余り が 0 と等しい',
      'a=maxNum, b=i ÷ j の商 が 1 と等しくない',
      'a=maxNum + 1, b=i ÷ j の余り が 0 と等しい',
      'a=maxNum + 1, b=i ÷ j の商 が 1 と等しくない'
    ],
    correctAnswer: 0,
    explanation: '素数判定アルゴリズムでは、2からmaxNumまでの数値を調べ(a=maxNum)、各数値iが他の数値jで割り切れるかを確認します(b=i ÷ j の余り が 0 と等しい)。',
    topic: 'アルゴリズム'
  },
  {
    id: 'R5B002',
    category: 'B',
    text: `次の記述中の【　】に入れる正しい答えを，解答群の中から選べ。

次のプログラムにおいて，手続 proc2 を呼び出すと，【　】の順に出力される。

〔プログラム〕
○proc1()
  "A" を出力する
  proc3()

○proc2()
  proc3()
  "B" を出力する
  proc1()

○proc3()
  "C" を出力する`,
    options: [
      '"A", "B", "B", "C"',
      '"A", "C"',
      '"A", "C", "B", "C"',
      '"B", "A", "B", "C"',
      '"B", "C", "B", "A"',
      '"C", "B"',
      '"C", "B", "A"',
      '"C", "B", "A", "C"'
    ],
    correctAnswer: 6,
    explanation: 'proc2()を実行すると、最初にproc3()が呼ばれて"C"を出力、次に"B"を出力、最後にproc1()が呼ばれて"A"を出力し、proc1()内のproc3()は実行されないため、"C", "B", "A"の順で出力されます。',
    topic: 'プログラミング'
  },
  {
    id: 'R5B003',
    category: 'B',
    text: `次の記述中の【　】に入れる正しい答えを，解答群の中から選べ。ここで，配列の要素番号は 1 から始まる。

次の手続 sort は，大域の整数型の配列 data の，引数 first で与えられた要素番号から引数 last で与えられた要素番号までの要素を昇順に整列する。ここで，first ＜ last とする。手続 sort を sort(1, 5) として呼び出すと，/*** α ***/ の行を最初に実行したときの出力は"【　】"となる。

〔プログラム〕
大域: 整数型の配列: data ← {2, 1, 3, 5, 4}

○sort(整数型: first, 整数型: last)
  整数型: pivot, i, j
  pivot ← data[(first ＋ last) ÷ 2 の商]
  i ← first
  j ← last
  while (true)
    while (data[i] ＜ pivot)
      i ← i ＋ 1
    endwhile
    while (pivot ＜ data[j])
      j ← j － 1
    endwhile
    if (i ≧ j)
      繰返し処理を終了する
    endif
    data[i]とdata[j]の値を入れ替える
    i ← i ＋ 1
    j ← j － 1
  endwhile
  dataの全要素の値を要素番号の順に空白区切りで出力する /*** α ***/
  if (first ＜ i － 1)
    sort(first, i － 1)
  endif
  if (j ＋ 1 ＜ last)
    sort(j ＋ 1, last)
  endif`,
    options: [
      '1 2 3 4 5',
      '1 2 3 5 4',
      '2 1 3 4 5',
      '2 1 3 5 4'
    ],
    correctAnswer: 3,
    explanation: 'クイックソートアルゴリズムで、初期配列{2,1,3,5,4}、pivot=3として1回目の分割処理後、/*** α ***/行で出力される配列は"2 1 3 5 4"となります。',
    topic: 'アルゴリズム'
  },
  {
    id: 'R5B004',
    category: 'B',
    text: `次の記述中の【　】に入れる正しい答えを，解答群の中から選べ。ここで，配列の要素番号は 1 から始まる。

関数 add は，引数で指定された正の整数 value を大域の整数型の配列 hashArray に格納する。格納できた場合は true を返し，格納できなかった場合は false を返す。ここで，整数 value を hashArray のどの要素に格納すべきかを，関数 calcHash1 及び calcHash2 を利用して決める。

手続 test は，関数 add を呼び出して，hashArray に正の整数を格納する。手続 test の処理が終了した直後の hashArray の内容は，【　】である。

〔プログラム〕
大域: 整数型の配列: hashArray

○論理型: add(整数型: value)
  整数型: i ← calcHash1(value)
  if (hashArray[i] ＝ －1)
    hashArray[i] ← value
    return true
  else
    i ← calcHash2(value)
    if (hashArray[i] ＝ －1)
      hashArray[i] ← value
      return true
    endif
  endif
  return false

○整数型: calcHash1(整数型: value)
  return (value mod hashArrayの要素数) ＋ 1

○整数型: calcHash2(整数型: value)
  return ((value ＋ 3) mod hashArrayの要素数) ＋ 1

○test()
  hashArray ← {5個の －1}
  add(3)
  add(18)
  add(11)`,
    options: [
      '{－1, 3, －1, 18, 11}',
      '{－1, 11, －1, 3, －1}',
      '{－1, 11, －1, 18, －1}',
      '{－1, 18, －1, 3, 11}',
      '{－1, 18, 11, 3, －1}'
    ],
    correctAnswer: 3,
    explanation: 'ハッシュテーブルへの挿入処理で、add(3)で位置4に3を格納、add(18)で位置4が使用済みなので位置2に18を格納、add(11)で位置2が使用済みなので位置5に11を格納し、結果は{－1, 18, －1, 3, 11}となります。',
    topic: 'データ構造'
  },
  {
    id: 'R5B005',
    category: 'B',
    text: `次のプログラム中の【 a 】と【 b 】に入れる正しい答えの組合せを，解答群の中から選べ。ここで，配列の要素番号は 1 から始まる。

コサイン類似度は，二つのベクトルの向きの類似性を測る尺度である。関数 calcCosineSimilarity は，いずれも要素数が n(n≧1) である実数型の配列 vector1 と vector2 を受け取り，二つの配列のコサイン類似度を返す。配列 vector1 が {a1, a2, …, an}，配列 vector2 が {b1, b2, …, bn} のとき，コサイン類似度は次の数式で計算される。ここで，配列 vector1 と配列 vector2 のいずれも，全ての要素に 0 が格納されていることはないものとする。

a1b1 ＋ a2b2 ＋ … ＋ anbn
───────────────────────────
√(a1² ＋ a2² ＋ … ＋ an²) × √(b1² ＋ b2² ＋ … ＋ bn²)

〔プログラム〕
○実数型: calcCosineSimilarity(実数型の配列: vector1,
                                実数型の配列: vector2)
実数型: similarity, numerator, denominator, temp ← 0
整数型: i
numerator ← 0
for (i を 1 から vector1の要素数 まで 1 ずつ増やす)
  numerator ← numerator ＋ 【 a 】
endfor
for (i を 1 から vector1の要素数 まで 1 ずつ増やす)
  temp ← temp ＋ vector1[i]の2乗
endfor
denominator ← tempの正の平方根
temp ← 0
for (i を 1 から vector2の要素数 まで 1 ずつ増やす)
  temp ← temp ＋ vector2[i]の2乗
endfor
denominator ← 【 b 】
similarity ← numerator ÷ denominator
return similarity`,
    options: [
      'a=vector1[i] × vector2[i], b=denominator × (tempの正の平方根)',
      'a=vector1[i] × vector2[i], b=denominator ＋ (tempの正の平方根)',
      'a=vector1[i] × vector2[i], b=tempの正の平方根',
      'a=vector1[i]の2乗, b=denominator × (tempの正の平方根)',
      'a=vector1[i]の2乗, b=denominator ＋ (tempの正の平方根)',
      'a=vector1[i]の2乗, b=tempの正の平方根'
    ],
    correctAnswer: 0,
    explanation: 'コサイン類似度の計算では、分子は各要素の積の和なので a=vector1[i] × vector2[i]、分母は両ベクトルのノルムの積なので b=denominator × (tempの正の平方根) となります。',
    topic: 'アルゴリズム'
  },
  {
    id: 'R5B006',
    category: 'B',
    text: `A社は，放送会社や運輸会社向けに広告制作ビジネスを展開している。A社は，人事業務の効率化を図るべく，人事業務の委託を検討することにした。A社が委託する業務（以下，B業務という）を図1に示す。

・採用予定者から郵送されてくる入社時の誓約書，前職の源泉徴収票などの書類をPDFファイルに変換し，ファイルサーバに格納する。
（省略）

委託先候補のC社は，B業務について，次のようにA社に提案した。
・B業務だけに従事する専任の従業員を割り当てる。
・B業務では，図2の複合機のスキャン機能を使用する。
・スキャン機能を使用する際は，従業員ごとに付与した利用者IDとパスワードをパネルに入力する。
・スキャンしたデータをPDFファイルに変換する。
・PDFファイルを従業員ごとに異なる鍵で暗号化して，電子メールに添付する。
・スキャンを実行した本人宛てに電子メールを送信する。
・PDFファイルが大きい場合は，PDFファイルを添付する代わりに，自社の社内ネットワーク上に設置したサーバ（以下，Bサーバという）に自動的に保存し，保存先のURLを電子メールの本文に記載して送信する。
注1）Bサーバにアクセスする際は，従業員ごとの利用者IDとパスワードが必要になる。

A社は，C社と業務委託契約を締結する前に，秘密保持契約を締結した。その後，C社に質問表を送付し，回答を受けて，業務委託での情報セキュリティリスクの評価を実施した。その結果，図3の発見があった。

・複合機のスキャン機能では，電子メールの差出人アドレス，件名，本文及び添付ファイル名を初期設定の状態で使用しており，誰がスキャンを実行しても同じである。
・複合機のスキャン機能の初期設定情報はベンダーのWebサイトで公開されており，誰でも閲覧できる。
注1）複合機の初期設定はC社の情報システム部だけが変更可能である。

そこで，A社では，初期設定の状態のままではA社にとって情報セキュリティリスクがあり，初期設定から変更するという対策が必要であると評価した。

設問　対策が必要であるとA社が評価した情報セキュリティリスクはどれか。解答群のうち，最も適切なものを選べ。`,
    options: [
      'B業務に従事する従業員が，攻撃者からの電子メールを複合機からのものと信じて本文中にあるURLをクリックし，フィッシングサイトに誘導される。その結果，A社の採用予定者の個人情報が漏えいする。',
      'B業務に従事する従業員が，複合機から送信される電子メールをスパムメールと誤認し，電子メールを削除する。その結果，再スキャンが必要となり，B業務が遅延する。',
      '攻撃者が，複合機から送信される電子メールを盗聴し，添付ファイルを暗号化して身代金を要求する。その結果，A社が復号鍵を受け取るために多額の身代金を支払うことになる。',
      '攻撃者が，複合機から送信される電子メールを盗聴し，本文に記載されているURLを使ってBサーバにアクセスする。その結果，A社の採用予定者の個人情報が漏えいする。'
    ],
    correctAnswer: 0,
    explanation: '初期設定情報が公開されているため、攻撃者が同じ差出人アドレスや件名を使って偽装メールを送信し、従業員がそれを複合機からの正当なメールと誤認してフィッシング攻撃に遭うリスクがあります。',
    topic: 'セキュリティ'
  }
];
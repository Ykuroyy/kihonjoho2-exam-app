import { Question } from '@/types/exam';

export const moreQuestions: Question[] = [
  // 科目A 追加問題 (11-60)
  {
    id: 'A011',
    category: 'A',
    text: '10進数の123を2進数に変換すると、どれか。',
    options: [
      '1111011',
      '1111001',
      '1110011',
      '1101011'
    ],
    correctAnswer: 0,
    explanation: '123 ÷ 2 = 61 余り 1、61 ÷ 2 = 30 余り 1、30 ÷ 2 = 15 余り 0、15 ÷ 2 = 7 余り 1、7 ÷ 2 = 3 余り 1、3 ÷ 2 = 1 余り 1、1 ÷ 2 = 0 余り 1。余りを逆順に並べると1111011。',
    topic: '基礎理論'
  },
  {
    id: 'A012',
    category: 'A',
    text: 'ハードディスクの記憶容量が1TBのとき、これをバイト単位で表すと約何バイトか。',
    options: [
      '10^9バイト',
      '10^12バイト',
      '2^40バイト',
      '2^30バイト'
    ],
    correctAnswer: 2,
    explanation: '1TB = 2^40バイト = 1,099,511,627,776バイト。テラは2^40を表します。',
    topic: 'コンピュータシステム'
  },
  {
    id: 'A013',
    category: 'A',
    text: 'CPUのパイプライン処理の目的として、最も適切なものはどれか。',
    options: [
      'メモリ容量を増やす',
      '命令実行の並列化による性能向上',
      'キャッシュヒット率を上げる',
      '消費電力を削減する'
    ],
    correctAnswer: 1,
    explanation: 'パイプライン処理は、命令の実行段階を分割し、複数の命令を並列的に処理することで全体の処理性能を向上させる技術です。',
    topic: 'コンピュータシステム'
  },
  {
    id: 'A014',
    category: 'A',
    text: 'IPv6アドレスの長さは何ビットか。',
    options: [
      '32ビット',
      '64ビット',
      '96ビット',
      '128ビット'
    ],
    correctAnswer: 3,
    explanation: 'IPv6アドレスは128ビットで構成されており、IPv4の32ビットから大幅に拡張されています。',
    topic: 'ネットワーク'
  },
  {
    id: 'A015',
    category: 'A',
    text: 'HTTPSで使用される標準ポート番号はどれか。',
    options: [
      '80',
      '443',
      '993',
      '995'
    ],
    correctAnswer: 1,
    explanation: 'HTTPSは標準でポート番号443を使用します。HTTPは80、IMAPS は993、POP3S は995を使用します。',
    topic: 'ネットワーク'
  },
  {
    id: 'A016',
    category: 'A',
    text: 'データベースのACID特性のうち、「A」が表すものはどれか。',
    options: [
      'Atomicity（原子性）',
      'Availability（可用性）',
      'Accuracy（正確性）',
      'Authentication（認証）'
    ],
    correctAnswer: 0,
    explanation: 'ACIDのAはAtomicity（原子性）を表し、トランザクションが全て実行されるか、全て実行されないかのどちらかであることを保証します。',
    topic: 'データベース'
  },
  {
    id: 'A017',
    category: 'A',
    text: 'SQLのGROUP BY句の説明として、正しいものはどれか。',
    options: [
      'レコードを削除する',
      'テーブルを結合する',
      '指定した列の値でグループ化する',
      'レコードの順序を変更する'
    ],
    correctAnswer: 2,
    explanation: 'GROUP BY句は、指定した列の値が同じレコードをグループ化し、集計関数と組み合わせて使用します。',
    topic: 'データベース'
  },
  {
    id: 'A018',
    category: 'A',
    text: '公開鍵暗号方式の特徴として、正しいものはどれか。',
    options: [
      '暗号化と復号化に同じ鍵を使用する',
      '暗号化と復号化に異なる鍵を使用する',
      '鍵の配布が不要である',
      '処理速度が共通鍵暗号より速い'
    ],
    correctAnswer: 1,
    explanation: '公開鍵暗号方式では、暗号化に公開鍵、復号化に秘密鍵という異なる鍵のペアを使用します。',
    topic: 'セキュリティ'
  },
  {
    id: 'A019',
    category: 'A',
    text: 'ディジタル署名の目的として、適切でないものはどれか。',
    options: [
      '送信者の認証',
      'データの完全性確保',
      'データの機密性確保',
      '否認防止'
    ],
    correctAnswer: 2,
    explanation: 'ディジタル署名は送信者の認証、データの完全性確保、否認防止を目的としますが、データの機密性確保は暗号化の目的です。',
    topic: 'セキュリティ'
  },
  {
    id: 'A020',
    category: 'A',
    text: 'プロジェクトマネジメントにおけるクリティカルパスとは何か。',
    options: [
      '最も重要な作業',
      '最も時間のかかる作業順序',
      '最も費用のかかる作業',
      '最も多くの人員が必要な作業'
    ],
    correctAnswer: 1,
    explanation: 'クリティカルパスは、プロジェクトの開始から終了までの最も時間のかかる作業順序（経路）のことです。',
    topic: 'マネジメント'
  },
  {
    id: 'A021',
    category: 'A',
    text: 'ガントチャートの説明として、正しいものはどれか。',
    options: [
      '組織図を表す',
      '作業の進捗を時系列で表す',
      '費用の推移を表す',
      '品質の変化を表す'
    ],
    correctAnswer: 1,
    explanation: 'ガントチャートは、プロジェクトの各作業の開始日、終了日、進捗状況を時系列で視覚的に表現する図表です。',
    topic: 'マネジメント'
  },
  {
    id: 'A022',
    category: 'A',
    text: 'フローチャートにおいて、判断を表す記号はどれか。',
    options: [
      '楕円',
      '長方形',
      'ひし形',
      '平行四辺形'
    ],
    correctAnswer: 2,
    explanation: 'フローチャートでは、ひし形で判断処理（条件分岐）を表します。楕円は開始/終了、長方形は処理、平行四辺形は入出力を表します。',
    topic: 'アルゴリズムとプログラミング'
  },
  {
    id: 'A023',
    category: 'A',
    text: 'ソフトウェアのテスト技法のうち、ブラックボックステストの説明として正しいものはどれか。',
    options: [
      'プログラムの内部構造を基にテストする',
      'プログラムの仕様を基にテストする',
      'プログラムのソースコードを基にテストする',
      'プログラムの実行時間を基にテストする'
    ],
    correctAnswer: 1,
    explanation: 'ブラックボックステストは、プログラムの内部構造を考慮せず、仕様書に基づいて入力と期待される出力の関係をテストする手法です。',
    topic: 'ソフトウェア工学'
  },
  {
    id: 'A024',
    category: 'A',
    text: 'UMLの説明として、正しいものはどれか。',
    options: [
      'プログラミング言語の一つ',
      'データベース管理システム',
      '統一モデリング言語',
      'ネットワークプロトコル'
    ],
    correctAnswer: 2,
    explanation: 'UML（Unified Modeling Language）は、ソフトウェア開発において設計を図式化するための統一モデリング言語です。',
    topic: 'ソフトウェア工学'
  },
  {
    id: 'A025',
    category: 'A',
    text: 'システム開発におけるウォーターフォールモデルの特徴として、正しいものはどれか。',
    options: [
      '各工程を並行して実施する',
      '各工程を順次進める',
      '試作品を繰り返し改良する',
      '短期間での開発が可能'
    ],
    correctAnswer: 1,
    explanation: 'ウォーターフォールモデルは、要件定義、設計、実装、テスト、運用の各工程を順次進める開発手法です。',
    topic: 'ソフトウェア工学'
  },
  {
    id: 'A026',
    category: 'A',
    text: 'コンピュータの五大機能に含まれないものはどれか。',
    options: [
      '入力',
      '記憶',
      '制御',
      '通信'
    ],
    correctAnswer: 3,
    explanation: 'コンピュータの五大機能は、入力、記憶、演算、制御、出力です。通信は含まれません。',
    topic: 'コンピュータシステム'
  },
  {
    id: 'A027',
    category: 'A',
    text: 'RAIDの説明として、正しいものはどれか。',
    options: [
      'メモリの高速化技術',
      'ディスクの冗長化技術',
      'CPUの並列処理技術',
      'ネットワークの暗号化技術'
    ],
    correctAnswer: 1,
    explanation: 'RAID（Redundant Arrays of Inexpensive Disks）は、複数のハードディスクを組み合わせて冗長性や性能を向上させる技術です。',
    topic: 'コンピュータシステム'
  },
  {
    id: 'A028',
    category: 'A',
    text: 'OSの機能として、適切でないものはどれか。',
    options: [
      'プロセス管理',
      'メモリ管理',
      'ファイル管理',
      'アプリケーション開発'
    ],
    correctAnswer: 3,
    explanation: 'OS（オペレーティングシステム）の主要機能は、プロセス管理、メモリ管理、ファイル管理、入出力管理などです。アプリケーション開発はOSの機能ではありません。',
    topic: 'ソフトウェア'
  },
  {
    id: 'A029',
    category: 'A',
    text: 'インタープリタの説明として、正しいものはどれか。',
    options: [
      'プログラムを事前に機械語に変換する',
      'プログラムを実行時に逐次解釈実行する',
      'プログラムの文法をチェックする',
      'プログラムを最適化する'
    ],
    correctAnswer: 1,
    explanation: 'インタープリタは、プログラムを実行時に一行ずつ解釈して実行する言語処理系です。',
    topic: 'ソフトウェア'
  },
  {
    id: 'A030',
    category: 'A',
    text: 'バイナリサーチ（二分探索）の計算量はどれか。',
    options: [
      'O(1)',
      'O(log n)',
      'O(n)',
      'O(n²)'
    ],
    correctAnswer: 1,
    explanation: 'バイナリサーチは、ソート済みのデータを半分ずつ絞り込んで検索するため、計算量はO(log n)です。',
    topic: 'アルゴリズムとプログラミング'
  },
  {
    id: 'A031',
    category: 'A',
    text: 'ハッシュ法における衝突（コリジョン）とは何か。',
    options: [
      'メモリ不足が発生すること',
      '異なるキーが同じハッシュ値になること',
      'データが破損すること',
      'プログラムが異常終了すること'
    ],
    correctAnswer: 1,
    explanation: 'ハッシュ法における衝突（コリジョン）とは、異なるキーに対してハッシュ関数が同じハッシュ値を返すことです。',
    topic: 'アルゴリズムとプログラミング'
  },
  {
    id: 'A032',
    category: 'A',
    text: 'スタックの操作でpush以外のものはどれか。',
    options: [
      'pop',
      'top',
      'enqueue',
      'empty'
    ],
    correctAnswer: 2,
    explanation: 'enqueueはキューの操作です。スタックの基本操作はpush（積む）、pop（取り出す）、top（先頭を見る）、empty（空かチェック）です。',
    topic: 'アルゴリズムとプログラミング'
  },
  {
    id: 'A033',
    category: 'A',
    text: 'LANで使用される伝送媒体として、最も一般的なものはどれか。',
    options: [
      '同軸ケーブル',
      'ツイストペアケーブル',
      '光ファイバケーブル',
      '無線'
    ],
    correctAnswer: 1,
    explanation: '現在のLANでは、取り扱いやすさとコストの面から、ツイストペアケーブル（UTPケーブル）が最も一般的に使用されています。',
    topic: 'ネットワーク'
  },
  {
    id: 'A034',
    category: 'A',
    text: 'IPアドレスのクラスBの特徴はどれか。',
    options: [
      '先頭8ビットがネットワーク部',
      '先頭16ビットがネットワーク部',
      '先頭24ビットがネットワーク部',
      '先頭32ビットがネットワーク部'
    ],
    correctAnswer: 1,
    explanation: 'クラスBのIPアドレスは、先頭16ビットがネットワーク部、残り16ビットがホスト部となっています。',
    topic: 'ネットワーク'
  },
  {
    id: 'A035',
    category: 'A',
    text: 'DNSの説明として、正しいものはどれか。',
    options: [
      'ドメイン名をIPアドレスに変換する',
      'IPアドレスを自動割り当てする',
      'ネットワークの経路を制御する',
      'データを暗号化する'
    ],
    correctAnswer: 0,
    explanation: 'DNS（Domain Name System）は、人間が覚えやすいドメイン名を、コンピュータが理解できるIPアドレスに変換するシステムです。',
    topic: 'ネットワーク'
  },
  {
    id: 'A036',
    category: 'A',
    text: 'データベースの正規化の主な目的はどれか。',
    options: [
      '検索速度の向上',
      'データの冗長性の排除',
      'セキュリティの向上',
      'バックアップの簡素化'
    ],
    correctAnswer: 1,
    explanation: 'データベースの正規化の主な目的は、データの冗長性（重複）を排除し、データの整合性を保つことです。',
    topic: 'データベース'
  },
  {
    id: 'A037',
    category: 'A',
    text: 'データベースのインデックスの説明として、正しいものはどれか。',
    options: [
      'データの圧縮率を向上させる',
      'データの検索速度を向上させる',
      'データの安全性を向上させる',
      'データの可読性を向上させる'
    ],
    correctAnswer: 1,
    explanation: 'インデックスは、データベースにおいて特定の列の値に基づいてデータの検索速度を向上させるためのデータ構造です。',
    topic: 'データベース'
  },
  {
    id: 'A038',
    category: 'A',
    text: 'SQLのJOIN文の説明として、正しいものはどれか。',
    options: [
      '複数のテーブルを結合する',
      'テーブルを分割する',
      'データを暗号化する',
      'インデックスを作成する'
    ],
    correctAnswer: 0,
    explanation: 'JOIN文は、複数のテーブルを指定した条件に基づいて結合し、関連するデータを同時に取得するために使用します。',
    topic: 'データベース'
  },
  {
    id: 'A039',
    category: 'A',
    text: 'コンピュータウイルスの感染経路として、最も多いものはどれか。',
    options: [
      'フロッピーディスク',
      '電子メール',
      'CD-ROM',
      'プリンタ'
    ],
    correctAnswer: 1,
    explanation: '現在では、電子メールの添付ファイルやWebサイトからのダウンロードが、コンピュータウイルスの主要な感染経路となっています。',
    topic: 'セキュリティ'
  },
  {
    id: 'A040',
    category: 'A',
    text: 'パスワードの安全性を高める方法として、適切でないものはどれか。',
    options: [
      '英数字と記号を組み合わせる',
      '定期的に変更する',
      '他人と共有する',
      '推測しにくい文字列にする'
    ],
    correctAnswer: 2,
    explanation: 'パスワードを他人と共有することは、セキュリティ上非常に危険です。パスワードは個人が秘密に管理すべきものです。',
    topic: 'セキュリティ'
  },
  {
    id: 'A041',
    category: 'A',
    text: 'SSL/TLSの主な目的はどれか。',
    options: [
      'データ圧縮',
      'データ暗号化',
      'データ検索',
      'データ変換'
    ],
    correctAnswer: 1,
    explanation: 'SSL/TLS（Secure Sockets Layer/Transport Layer Security）は、インターネット上でのデータ通信を暗号化し、安全性を確保するプロトコルです。',
    topic: 'セキュリティ'
  },
  {
    id: 'A042',
    category: 'A',
    text: 'プロジェクトマネジメントにおけるスコープとは何か。',
    options: [
      'プロジェクトの期間',
      'プロジェクトの予算',
      'プロジェクトの作業範囲',
      'プロジェクトの品質'
    ],
    correctAnswer: 2,
    explanation: 'スコープとは、プロジェクトで実行すべき作業の範囲、つまり何を作り、何を作らないかを明確に定義したものです。',
    topic: 'マネジメント'
  },
  {
    id: 'A043',
    category: 'A',
    text: 'リスクマネジメントの手順として、正しい順序はどれか。',
    options: [
      'リスク特定 → リスク分析 → リスク対応 → リスク監視',
      'リスク分析 → リスク特定 → リスク対応 → リスク監視',
      'リスク対応 → リスク特定 → リスク分析 → リスク監視',
      'リスク監視 → リスク特定 → リスク分析 → リスク対応'
    ],
    correctAnswer: 0,
    explanation: 'リスクマネジメントは、リスクの特定、分析、対応、監視の順序で実施します。',
    topic: 'マネジメント'
  },
  {
    id: 'A044',
    category: 'A',
    text: 'アジャイル開発の特徴として、正しいものはどれか。',
    options: [
      '詳細な文書を重視する',
      '計画の厳密な遵守を重視する',
      '短い反復での開発を行う',
      '大規模なチームで開発する'
    ],
    correctAnswer: 2,
    explanation: 'アジャイル開発は、短い反復（スプリント）での開発を繰り返し、顧客との協働や変化への対応を重視する開発手法です。',
    topic: 'ソフトウェア工学'
  },
  {
    id: 'A045',
    category: 'A',
    text: 'ITサービスマネジメントにおけるSLAとは何か。',
    options: [
      'システム設計書',
      'サービス品質保証書',
      'サービスレベル合意書',
      'システム運用手順書'
    ],
    correctAnswer: 2,
    explanation: 'SLA（Service Level Agreement）は、ITサービスの品質レベルについて、サービス提供者と利用者の間で結ぶ合意書です。',
    topic: 'サービスマネジメント'
  },
  {
    id: 'A046',
    category: 'A',
    text: 'システム監査の目的として、最も適切なものはどれか。',
    options: [
      'システムの開発',
      'システムの運用',
      'システムの評価',
      'システムの保守'
    ],
    correctAnswer: 2,
    explanation: 'システム監査は、情報システムの信頼性、安全性、効率性などを客観的に評価することを目的とします。',
    topic: 'システム監査'
  },
  {
    id: 'A047',
    category: 'A',
    text: 'BCP（事業継続計画）の説明として、正しいものはどれか。',
    options: [
      '新規事業の計画',
      '災害時の事業継続のための計画',
      '事業拡大の計画',
      '人材育成の計画'
    ],
    correctAnswer: 1,
    explanation: 'BCP（Business Continuity Plan）は、災害や事故などの緊急事態が発生した際に、事業を継続または早期復旧するための計画です。',
    topic: 'システム戦略'
  },
  {
    id: 'A048',
    category: 'A',
    text: 'クラウドコンピューティングの利点として、適切でないものはどれか。',
    options: [
      '初期投資の削減',
      'スケーラビリティの向上',
      'データの完全なコントロール',
      '運用負荷の軽減'
    ],
    correctAnswer: 2,
    explanation: 'クラウドコンピューティングでは、データはクラウド事業者のサーバに保存されるため、完全なコントロールを持つことは困難です。',
    topic: 'システム戦略'
  },
  {
    id: 'A049',
    category: 'A',
    text: 'IoT（Internet of Things）の説明として、正しいものはどれか。',
    options: [
      'インターネット上の電子商取引',
      '様々なモノがインターネットに接続される仕組み',
      'インターネットのセキュリティ技術',
      'インターネットの通信プロトコル'
    ],
    correctAnswer: 1,
    explanation: 'IoT（Internet of Things）は、家電製品、自動車、センサーなど様々なモノがインターネットに接続され、情報をやり取りする仕組みです。',
    topic: 'システム戦略'
  },
  {
    id: 'A050',
    category: 'A',
    text: 'AI（人工知能）の活用事例として、適切でないものはどれか。',
    options: [
      '音声認識システム',
      '画像認識システム',
      '自然言語処理システム',
      'ハードウェア設計システム'
    ],
    correctAnswer: 3,
    explanation: 'ハードウェア設計は主に人間の専門知識と創造性が必要な分野で、現在のAI技術での完全な自動化は困難です。',
    topic: 'システム戦略'
  },
  {
    id: 'A051',
    category: 'A',
    text: 'ビッグデータの特徴を表す「3V」に含まれないものはどれか。',
    options: [
      'Volume（量）',
      'Velocity（速度）',
      'Variety（多様性）',
      'Visibility（可視性）'
    ],
    correctAnswer: 3,
    explanation: 'ビッグデータの特徴を表す「3V」は、Volume（量）、Velocity（速度）、Variety（多様性）です。Visibility（可視性）は含まれません。',
    topic: 'システム戦略'
  },
  {
    id: 'A052',
    category: 'A',
    text: 'マルウェアの種類として、適切でないものはどれか。',
    options: [
      'ウイルス',
      'ワーム',
      'トロイの木馬',
      'プロトコル'
    ],
    correctAnswer: 3,
    explanation: 'プロトコルは通信規約であり、マルウェアではありません。ウイルス、ワーム、トロイの木馬はすべてマルウェアの種類です。',
    topic: 'セキュリティ'
  },
  {
    id: 'A053',
    category: 'A',
    text: 'ソーシャルエンジニアリング攻撃の例として、適切なものはどれか。',
    options: [
      'SQLインジェクション',
      'フィッシング詐欺',
      'バッファオーバーフロー',
      'DDoS攻撃'
    ],
    correctAnswer: 1,
    explanation: 'フィッシング詐欺は、偽のWebサイトや電子メールを使って人を騙し、個人情報を盗み取るソーシャルエンジニアリング攻撃の一種です。',
    topic: 'セキュリティ'
  },
  {
    id: 'A054',
    category: 'A',
    text: 'ITガバナンスの目的として、最も適切なものはどれか。',
    options: [
      'ITコストの削減',
      'IT投資の効果を最大化',
      'IT人材の育成',
      'IT機器の調達'
    ],
    correctAnswer: 1,
    explanation: 'ITガバナンスは、組織がITを効果的に活用し、事業価値を最大化するための仕組みや取り組みです。',
    topic: 'システム戦略'
  },
  {
    id: 'A055',
    category: 'A',
    text: 'データマイニングの説明として、正しいものはどれか。',
    options: [
      'データを圧縮する技術',
      'データを暗号化する技術',
      '大量のデータから有用な情報を発見する技術',
      'データを転送する技術'
    ],
    correctAnswer: 2,
    explanation: 'データマイニングは、大量のデータの中から、統計学や機械学習などの手法を用いて有用なパターンや知識を発見する技術です。',
    topic: 'システム戦略'
  },
  {
    id: 'A056',
    category: 'A',
    text: 'ERPシステムの説明として、正しいものはどれか。',
    options: [
      '電子メールシステム',
      '企業資源計画システム',
      '電子商取引システム',
      '顧客管理システム'
    ],
    correctAnswer: 1,
    explanation: 'ERP（Enterprise Resource Planning）は、企業の経営資源（人、物、金、情報）を統合的に管理する企業資源計画システムです。',
    topic: 'システム戦略'
  },
  {
    id: 'A057',
    category: 'A',
    text: 'CRMシステムの主な目的はどれか。',
    options: [
      '在庫管理の最適化',
      '顧客関係の管理',
      '財務管理の効率化',
      '人事管理の自動化'
    ],
    correctAnswer: 1,
    explanation: 'CRM（Customer Relationship Management）は、顧客との関係を管理し、顧客満足度の向上や売上の増加を目指すシステムです。',
    topic: 'システム戦略'
  },
  {
    id: 'A058',
    category: 'A',
    text: 'DevOpsの説明として、正しいものはどれか。',
    options: [
      '開発者専用のツール',
      '運用者専用のツール',
      '開発と運用の連携を重視する文化',
      'セキュリティ監査のツール'
    ],
    correctAnswer: 2,
    explanation: 'DevOpsは、開発（Development）と運用（Operations）の連携を重視し、ソフトウェアの開発から運用までを効率化する文化や実践方法です。',
    topic: 'システム戦略'
  },
  {
    id: 'A059',
    category: 'A',
    text: 'コンテナ技術の利点として、適切でないものはどれか。',
    options: [
      'アプリケーションの軽量化',
      '環境の一貫性',
      'スケーラビリティの向上',
      'ハードウェアの性能向上'
    ],
    correctAnswer: 3,
    explanation: 'コンテナ技術は、アプリケーションの軽量化、環境の一貫性、スケーラビリティの向上などの利点がありますが、ハードウェアの性能自体を向上させるものではありません。',
    topic: 'システム戦略'
  },
  {
    id: 'A060',
    category: 'A',
    text: 'APIエコノミーの説明として、正しいものはどれか。',
    options: [
      'APIを使った経済活動',
      'APIの開発手法',
      'APIのセキュリティ対策',
      'APIの性能測定'
    ],
    correctAnswer: 0,
    explanation: 'APIエコノミーとは、API（Application Programming Interface）を通じて企業がサービスやデータを公開し、新たなビジネスモデルや経済活動を創出することです。',
    topic: 'システム戦略'
  }
];
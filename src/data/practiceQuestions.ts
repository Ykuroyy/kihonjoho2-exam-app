import { Question } from '@/types/exam';

export const practiceQuestions: Question[] = [
  // 基礎理論・コンピュータシステム系 (1-20)
  {
    id: 'PRAC001',
    category: 'A',
    text: '10進数の25を2進数で表したものはどれか。',
    options: [
      '10011',
      '11001',
      '11010',
      '11011'
    ],
    correctAnswer: 1,
    explanation: '25 ÷ 2 = 12 余り 1、12 ÷ 2 = 6 余り 0、6 ÷ 2 = 3 余り 0、3 ÷ 2 = 1 余り 1、1 ÷ 2 = 0 余り 1。下の桁から並べると11001となります。',
    topic: '基礎理論'
  },
  {
    id: 'PRAC002',
    category: 'A',
    text: 'CPUの性能指標であるCPIの説明として正しいものはどれか。',
    options: [
      'Clock cycles Per Instruction：1命令当たりの平均クロック数',
      'Commands Per Instruction：1命令当たりの平均コマンド数',
      'Cache Per Instruction：1命令当たりの平均キャッシュ使用量',
      'Cycle Per Input：1入力当たりの平均サイクル数'
    ],
    correctAnswer: 0,
    explanation: 'CPIはClock cycles Per Instructionの略で、1命令を実行するのに必要な平均クロック数を表します。CPU性能の重要な指標の一つです。',
    topic: 'コンピュータシステム'
  },
  {
    id: 'PRAC003',
    category: 'A',
    text: 'キャッシュメモリのヒット率が90%、キャッシュアクセス時間が2ns、主記憶アクセス時間が50nsのとき、実効アクセス時間は何nsか。',
    options: [
      '4.8',
      '6.8',
      '7.4',
      '8.2'
    ],
    correctAnswer: 1,
    explanation: '実効アクセス時間 = ヒット率 × キャッシュアクセス時間 + (1 - ヒット率) × 主記憶アクセス時間 = 0.9 × 2 + 0.1 × 50 = 1.8 + 5.0 = 6.8ns',
    topic: 'コンピュータシステム'
  },
  {
    id: 'PRAC004',
    category: 'A',
    text: '浮動小数点数の表現で、仮数部のビット数を増やすことによって向上するものはどれか。',
    options: [
      '演算速度',
      '表現可能な数値の範囲',
      '数値の精度',
      'メモリ使用効率'
    ],
    correctAnswer: 2,
    explanation: '仮数部のビット数を増やすと、数値の有効桁数が増加し、より精密な値を表現できるようになります。数値の精度が向上します。',
    topic: '基礎理論'
  },
  {
    id: 'PRAC005',
    category: 'A',
    text: 'OSのプロセススケジューリングにおいて、短い処理から順に実行する方式はどれか。',
    options: [
      'FCFS（First Come First Served）',
      'SJF（Shortest Job First）',
      'RR（Round Robin）',
      'Priority Scheduling'
    ],
    correctAnswer: 1,
    explanation: 'SJF（Shortest Job First）は、実行時間が最も短いプロセスから順に実行するスケジューリング方式です。待ち時間の平均を最小化できます。',
    topic: 'ソフトウェア'
  },
  {
    id: 'PRAC006',
    category: 'A',
    text: 'RAIDのレベルのうち、ミラーリングによってデータの冗長性を確保するものはどれか。',
    options: [
      'RAID0',
      'RAID1',
      'RAID3',
      'RAID5'
    ],
    correctAnswer: 1,
    explanation: 'RAID1は、同じデータを2台のディスクに同時に書き込むミラーリング方式で、高い冗長性を実現します。1台故障しても運用を継続できます。',
    topic: 'ハードウェア'
  },
  {
    id: 'PRAC007',
    category: 'A',
    text: 'スタックを用いた逆ポーランド記法の計算で、「3 4 + 2 ×」の結果はどれか。',
    options: [
      '10',
      '14',
      '18',
      '24'
    ],
    correctAnswer: 1,
    explanation: 'スタックに3、4を積み、+で取り出して3+4=7をスタックに積む。2を積み、×で7と2を取り出して7×2=14となります。',
    topic: 'アルゴリズム'
  },
  {
    id: 'PRAC008',
    category: 'A',
    text: 'ページング方式の仮想記憶において、ページフォルトが発生する原因はどれか。',
    options: [
      'CPUの処理能力不足',
      '参照したページが主記憶にない',
      'ディスクの容量不足',
      'ネットワークの通信エラー'
    ],
    correctAnswer: 1,
    explanation: 'ページフォルトは、プログラムが参照しようとしたページが主記憶上に存在しない場合に発生する割り込みです。OSが該当ページを補助記憶から読み込みます。',
    topic: 'コンピュータシステム'
  },
  {
    id: 'PRAC009',
    category: 'A',
    text: 'デッドロックの発生を回避するための条件のうち、正しいものはどれか。',
    options: [
      '複数のプロセスが同時に実行される',
      '資源の獲得順序を統一する',
      'プロセス間で資源を共有する',
      'プリエンプション機能を無効にする'
    ],
    correctAnswer: 1,
    explanation: 'デッドロック回避の代表的な手法として、全てのプロセスが資源を同じ順序で獲得するように統一することで、循環待ちを防ぐことができます。',
    topic: 'ソフトウェア'
  },
  {
    id: 'PRAC010',
    category: 'A',
    text: 'コンパイラとインタプリタの違いについて、正しい説明はどれか。',
    options: [
      'コンパイラは実行時に翻訳、インタプリタは事前に翻訳',
      'コンパイラは事前に翻訳、インタプリタは実行時に翻訳',
      'コンパイラは高水準言語専用、インタプリタは低水準言語専用',
      '両者に実質的な違いはない'
    ],
    correctAnswer: 1,
    explanation: 'コンパイラは実行前にソースコードを機械語に一括翻訳し、インタプリタは実行時に1行ずつ翻訳・実行します。',
    topic: 'ソフトウェア'
  },
  {
    id: 'PRAC011',
    category: 'A',
    text: '16進数のA3を10進数で表すとどれか。',
    options: [
      '163',
      '164',
      '166',
      '167'
    ],
    correctAnswer: 0,
    explanation: '16進数A3 = A×16¹ + 3×16⁰ = 10×16 + 3×1 = 160 + 3 = 163',
    topic: '基礎理論'
  },
  {
    id: 'PRAC012',
    category: 'A',
    text: 'CPUの動作周波数が2GHzで、CPIが3のとき、1秒間に実行できる命令数は約何MIPSか。',
    options: [
      '333',
      '500',
      '667',
      '1000'
    ],
    correctAnswer: 2,
    explanation: 'MIPS = 動作周波数(MHz) ÷ CPI = 2000MHz ÷ 3 ≒ 667MIPS',
    topic: 'コンピュータシステム'
  },
  {
    id: 'PRAC013',
    category: 'A',
    text: 'バブルソートで配列[5,2,8,1,9]を昇順にソートする際、最初のパスで比較される回数はどれか。',
    options: [
      '3回',
      '4回',
      '5回',
      '10回'
    ],
    correctAnswer: 1,
    explanation: '要素数5の配列では、隣接要素の比較が n-1 = 4回行われます。(5,2), (5,8), (8,1), (8,9)の4回の比較が実行されます。',
    topic: 'アルゴリズム'
  },
  {
    id: 'PRAC014',
    category: 'A',
    text: 'DMAの説明として正しいものはどれか。',
    options: [
      'CPUを介さずに主記憶と周辺装置間でデータ転送を行う',
      'CPUの処理速度を向上させるためのキャッシュ機能',
      '複数のプログラムを同時実行する仮想化技術',
      'ネットワーク通信を高速化する技術'
    ],
    correctAnswer: 0,
    explanation: 'DMA（Direct Memory Access）は、CPUを介することなく、主記憶と周辺装置の間で直接データ転送を行う機能です。CPUの負荷を軽減できます。',
    topic: 'ハードウェア'
  },
  {
    id: 'PRAC015',
    category: 'A',
    text: '論理演算において、「AまたはB」を表す演算子はどれか。',
    options: [
      'AND',
      'OR',
      'XOR',
      'NOT'
    ],
    correctAnswer: 1,
    explanation: 'OR（論理和）は「AまたはB」を表し、AまたはBの少なくとも一方が真の場合に真となります。',
    topic: '基礎理論'
  },
  {
    id: 'PRAC016',
    category: 'A',
    text: 'プロセスの状態遷移において、実行状態から待機状態に移る原因として正しいものはどれか。',
    options: [
      'タイムスライスの終了',
      'I/O処理の発生',
      'より高い優先度のプロセスの実行要求',
      'プロセスの正常終了'
    ],
    correctAnswer: 1,
    explanation: 'プロセスがI/O処理を要求すると、I/O完了を待つために実行状態から待機状態に遷移します。',
    topic: 'ソフトウェア'
  },
  {
    id: 'PRAC017',
    category: 'A',
    text: 'ハッシュ表において、異なるキーが同じハッシュ値になることを何というか。',
    options: [
      'オーバーフロー',
      'アンダーフロー',
      'コリジョン（衝突）',
      'セグメンテーション'
    ],
    correctAnswer: 2,
    explanation: '異なるキーが同じハッシュ値になることをコリジョン（衝突）といいます。チェイン法やオープンアドレス法で解決します。',
    topic: 'データ構造'
  },
  {
    id: 'PRAC018',
    category: 'A',
    text: 'オペレーティングシステムのスケジューラのうち、長期スケジューラの役割はどれか。',
    options: [
      'CPUの使用権をどのプロセスに与えるかを決定',
      'どのプロセスを主記憶に読み込むかを決定',
      'どのプロセスを最初に実行するかを決定',
      'プロセス間通信の制御'
    ],
    correctAnswer: 1,
    explanation: '長期スケジューラ（ジョブスケジューラ）は、どのプロセスを主記憶に読み込んで実行可能状態にするかを決定します。',
    topic: 'ソフトウェア'
  },
  {
    id: 'PRAC019',
    category: 'A',
    text: '2の補数表現で8ビットの-5を表すとどれか。',
    options: [
      '10000101',
      '11111011',
      '11111010',
      '10000011'
    ],
    correctAnswer: 1,
    explanation: '5の2進数は00000101、これを反転して11111010、最後に1を加えて11111011が-5の2の補数表現です。',
    topic: '基礎理論'
  },
  {
    id: 'PRAC020',
    category: 'A',
    text: 'キューの特徴として正しいものはどれか。',
    options: [
      'LIFO（Last In First Out）の構造',
      'FIFO（First In First Out）の構造',
      'ランダムアクセスが可能',
      '要素の挿入位置が任意'
    ],
    correctAnswer: 1,
    explanation: 'キューはFIFO（First In First Out）構造で、最初に入れた要素が最初に取り出されます。待ち行列とも呼ばれます。',
    topic: 'データ構造'
  },

  // ネットワーク・セキュリティ系 (21-40)
  {
    id: 'PRAC021',
    category: 'A',
    text: 'OSI参照モデルの第3層（ネットワーク層）の役割はどれか。',
    options: [
      'ビットストリームの伝送',
      'フレームの誤り制御',
      'エンドツーエンドの経路制御',
      'データの暗号化'
    ],
    correctAnswer: 2,
    explanation: 'ネットワーク層（第3層）は、送信元から宛先までのエンドツーエンドの経路制御（ルーティング）を担当します。',
    topic: 'ネットワーク'
  },
  {
    id: 'PRAC022',
    category: 'A',
    text: 'IPv4アドレス192.168.1.100のサブネットマスクが255.255.255.0の場合、ネットワークアドレスはどれか。',
    options: [
      '192.168.1.0',
      '192.168.1.100',
      '192.168.1.255',
      '192.168.0.0'
    ],
    correctAnswer: 0,
    explanation: 'IPアドレスとサブネットマスクのAND演算により、192.168.1.100 & 255.255.255.0 = 192.168.1.0がネットワークアドレスになります。',
    topic: 'ネットワーク'
  },
  {
    id: 'PRAC023',
    category: 'A',
    text: 'TCPとUDPの違いについて、正しい説明はどれか。',
    options: [
      'TCPはコネクションレス、UDPはコネクション型',
      'TCPはコネクション型、UDPはコネクションレス',
      'TCPは信頼性が低い、UDPは信頼性が高い',
      'TCPは高速、UDPは低速'
    ],
    correctAnswer: 1,
    explanation: 'TCPはコネクション型で信頼性が高く、UDPはコネクションレス型で高速ですが信頼性は保証されません。',
    topic: 'ネットワーク'
  },
  {
    id: 'PRAC024',
    category: 'A',
    text: 'DNSの説明として正しいものはどれか。',
    options: [
      'IPアドレスを動的に割り当てるプロトコル',
      'ドメイン名とIPアドレスを対応付けるシステム',
      'ネットワーク機器の設定を自動配布するプロトコル',
      'ファイル転送を行うプロトコル'
    ],
    correctAnswer: 1,
    explanation: 'DNS（Domain Name System）は、ドメイン名とIPアドレスを相互に変換する分散データベースシステムです。',
    topic: 'ネットワーク'
  },
  {
    id: 'PRAC025',
    category: 'A',
    text: 'ファイアウォールの機能として最も適切なものはどれか。',
    options: [
      'ウイルスの検出と駆除',
      'データの暗号化',
      'ネットワークトラフィックの制御',
      'システムのバックアップ'
    ],
    correctAnswer: 2,
    explanation: 'ファイアウォールは、予め設定されたルールに基づいてネットワークトラフィックを制御し、不正なアクセスを遮断します。',
    topic: 'セキュリティ'
  },
  {
    id: 'PRAC026',
    category: 'A',
    text: 'SSL/TLSプロトコルの主な目的はどれか。',
    options: [
      'データの圧縮',
      'データの暗号化と認証',
      'データの高速転送',
      'データの自動バックアップ'
    ],
    correctAnswer: 1,
    explanation: 'SSL/TLSは、インターネット上でのデータ通信を暗号化し、データの機密性と完全性、サーバの認証を提供します。',
    topic: 'セキュリティ'
  },
  {
    id: 'PRAC027',
    category: 'A',
    text: 'DHCPの役割として正しいものはどれか。',
    options: [
      'ドメイン名の解決',
      'IPアドレスの自動割り当て',
      'データの暗号化',
      'ルーティング情報の交換'
    ],
    correctAnswer: 1,
    explanation: 'DHCP（Dynamic Host Configuration Protocol）は、ネットワークに接続したコンピュータにIPアドレスを自動的に割り当てるプロトコルです。',
    topic: 'ネットワーク'
  },
  {
    id: 'PRAC028',
    category: 'A',
    text: 'DoS攻撃の対策として最も有効なものはどれか。',
    options: [
      'ウイルス対策ソフトの導入',
      'データの暗号化',
      'トラフィック監視と帯域制限',
      'パスワードの複雑化'
    ],
    correctAnswer: 2,
    explanation: 'DoS攻撃は大量のトラフィックでサービスを停止させる攻撃のため、トラフィック監視と帯域制限が有効な対策です。',
    topic: 'セキュリティ'
  },
  {
    id: 'PRAC029',
    category: 'A',
    text: 'MACアドレスについて正しい説明はどれか。',
    options: [
      'インターネット上でのグローバルアドレス',
      'ネットワークインターフェースの物理アドレス',
      'プロセス間通信用のアドレス',
      'ドメイン名の別名'
    ],
    correctAnswer: 1,
    explanation: 'MACアドレスは、ネットワークインターフェースカードに固有に割り当てられた48ビットの物理アドレスです。',
    topic: 'ネットワーク'
  },
  {
    id: 'PRAC030',
    category: 'A',
    text: 'ルータの基本的な機能はどれか。',
    options: [
      'フレームの誤り検出',
      '異なるネットワーク間でのパケット転送',
      'データの暗号化',
      'ウイルスの検出'
    ],
    correctAnswer: 1,
    explanation: 'ルータは、異なるネットワーク間でパケットを転送する機能を持つネットワーク機器で、最適な経路を選択します。',
    topic: 'ネットワーク'
  },
  {
    id: 'PRAC031',
    category: 'A',
    text: 'HTTPSが使用するデフォルトポート番号はどれか。',
    options: [
      '80',
      '443',
      '8080',
      '3389'
    ],
    correctAnswer: 1,
    explanation: 'HTTPSは、SSL/TLSで暗号化されたHTTP通信で、デフォルトでポート番号443を使用します。',
    topic: 'ネットワーク'
  },
  {
    id: 'PRAC032',
    category: 'A',
    text: 'ソーシャルエンジニアリング攻撃の対策として最も重要なものはどれか。',
    options: [
      'ファイアウォールの導入',
      'ウイルス対策ソフトの更新',
      '従業員のセキュリティ教育',
      'データの暗号化'
    ],
    correctAnswer: 2,
    explanation: 'ソーシャルエンジニアリングは人間の心理的な隙を突く攻撃のため、従業員への継続的なセキュリティ教育が最も重要な対策です。',
    topic: 'セキュリティ'
  },
  {
    id: 'PRAC033',
    category: 'A',
    text: 'VPNの主な利点はどれか。',
    options: [
      '通信速度の向上',
      'インターネット上でのセキュアな通信',
      'データの自動バックアップ',
      'ネットワーク機器の統合管理'
    ],
    correctAnswer: 1,
    explanation: 'VPN（Virtual Private Network）は、インターネットなどの公衆ネットワーク上に暗号化された仮想的な専用回線を構築し、セキュアな通信を実現します。',
    topic: 'ネットワーク'
  },
  {
    id: 'PRAC034',
    category: 'A',
    text: 'SQLインジェクション攻撃の対策として最も効果的なものはどれか。',
    options: [
      'パスワードの定期変更',
      'プリペアドステートメントの使用',
      'ファイアウォールの設定',
      'ウイルス対策ソフトの導入'
    ],
    correctAnswer: 1,
    explanation: 'SQLインジェクション対策として、プリペアドステートメント（パラメータ化クエリ）を使用することで、SQLコマンドとデータを分離できます。',
    topic: 'セキュリティ'
  },
  {
    id: 'PRAC035',
    category: 'A',
    text: 'ネットワークにおけるNATの役割はどれか。',
    options: [
      'ドメイン名の解決',
      'プライベートIPアドレスとグローバルIPアドレスの変換',
      'データの暗号化',
      'ルーティング情報の交換'
    ],
    correctAnswer: 1,
    explanation: 'NAT（Network Address Translation）は、プライベートIPアドレスとグローバルIPアドレスを相互変換し、IPアドレスの節約と内部ネットワークの隠蔽を行います。',
    topic: 'ネットワーク'
  },
  {
    id: 'PRAC036',
    category: 'A',
    text: 'デジタル証明書の主な役割はどれか。',
    options: [
      'データの圧縮',
      '公開鍵の信頼性保証',
      'パスワードの管理',
      'ログの記録'
    ],
    correctAnswer: 1,
    explanation: 'デジタル証明書は、認証局（CA）が発行し、公開鍵の所有者の身元と公開鍵の信頼性を保証します。',
    topic: 'セキュリティ'
  },
  {
    id: 'PRAC037',
    category: 'A',
    text: 'スイッチングハブの特徴として正しいものはどれか。',
    options: [
      'コリジョンドメインを分割する',
      'ブロードキャストドメインを分割する',
      'IPアドレスでフレームを転送する',
      'フレームを全ポートに送信する'
    ],
    correctAnswer: 0,
    explanation: 'スイッチングハブは、各ポートごとにコリジョンドメインを分割し、MACアドレステーブルを使用してフレームを適切なポートにのみ転送します。',
    topic: 'ネットワーク'
  },
  {
    id: 'PRAC038',
    category: 'A',
    text: 'フィッシング攻撃の特徴として正しいものはどれか。',
    options: [
      'システムの脆弱性を突く攻撃',
      '偽のWebサイトで個人情報を詐取する攻撃',
      'サービスを停止させる攻撃',
      'ネットワークトラフィックを盗聴する攻撃'
    ],
    correctAnswer: 1,
    explanation: 'フィッシング攻撃は、正規のWebサイトを装った偽サイトにユーザーを誘導し、個人情報やパスワードを詐取する攻撃です。',
    topic: 'セキュリティ'
  },
  {
    id: 'PRAC039',
    category: 'A',
    text: 'SNMP（Simple Network Management Protocol）の用途はどれか。',
    options: [
      'ファイル転送',
      'ネットワーク機器の監視・管理',
      'Webページの表示',
      'メールの送受信'
    ],
    correctAnswer: 1,
    explanation: 'SNMPは、ネットワーク上の機器（ルータ、スイッチ、サーバなど）を監視・管理するためのプロトコルです。',
    topic: 'ネットワーク'
  },
  {
    id: 'PRAC040',
    category: 'A',
    text: 'IDS（Intrusion Detection System）の機能はどれか。',
    options: [
      'ネットワークトラフィックの暗号化',
      '不正アクセスの検知',
      'データのバックアップ',
      'システムの性能監視'
    ],
    correctAnswer: 1,
    explanation: 'IDS（侵入検知システム）は、ネットワークやシステムに対する不正アクセスや攻撃を検知し、管理者に通知するシステムです。',
    topic: 'セキュリティ'
  },

  // データベース・アルゴリズム系 (41-60)
  {
    id: 'PRAC041',
    category: 'A',
    text: 'リレーショナルデータベースの正規化の目的として正しいものはどれか。',
    options: [
      'データの検索速度向上',
      'データの冗長性排除',
      'データの暗号化',
      'データの圧縮'
    ],
    correctAnswer: 1,
    explanation: '正規化は、データの冗長性を排除し、データの整合性を保つことを目的としています。これにより更新異常、挿入異常、削除異常を防げます。',
    topic: 'データベース'
  },
  {
    id: 'PRAC042',
    category: 'A',
    text: 'SQLのSELECT文で、重複を除いた結果を得るために使用するキーワードはどれか。',
    options: [
      'UNIQUE',
      'DISTINCT',
      'DIFFERENT',
      'SINGLE'
    ],
    correctAnswer: 1,
    explanation: 'DISTINCTキーワードを使用することで、SELECT文の結果から重複するレコードを除いて一意な値のみを取得できます。',
    topic: 'データベース'
  },
  {
    id: 'PRAC043',
    category: 'A',
    text: 'データベースのACID特性のうち、\"A\"が表すものはどれか。',
    options: [
      'Atomicity（原子性）',
      'Availability（可用性）',
      'Authentication（認証）',
      'Authorization（認可）'
    ],
    correctAnswer: 0,
    explanation: 'ACID特性のAはAtomicity（原子性）を表し、トランザクションは全て実行されるか全て取り消されるかのいずれかであることを保証します。',
    topic: 'データベース'
  },
  {
    id: 'PRAC044',
    category: 'A',
    text: '配列の線形探索において、n個の要素から目的の要素を見つける際の平均比較回数はどれか。',
    options: [
      'log₂n',
      'n/2',
      'n',
      'n²'
    ],
    correctAnswer: 1,
    explanation: '線形探索では、目的の要素が配列の先頭から順番にどの位置にあるかで比較回数が変わります。平均的にはn/2回の比較が必要です。',
    topic: 'アルゴリズム'
  },
  {
    id: 'PRAC045',
    category: 'A',
    text: 'データベースの主キーの制約として正しいものはどれか。',
    options: [
      'NULL値を含むことができる',
      '重複する値を持つことができる',
      'NULL値を含まず、一意でなければならない',
      '数値型のみ設定可能'
    ],
    correctAnswer: 2,
    explanation: '主キーは、テーブル内の各行を一意に識別するための制約で、NULL値を含まず、重複する値を持つことはできません。',
    topic: 'データベース'
  },
  {
    id: 'PRAC046',
    category: 'A',  
    text: 'クイックソートの平均時間計算量はどれか。',
    options: [
      'O(n)',
      'O(n log n)',
      'O(n²)',
      'O(log n)'
    ],
    correctAnswer: 1,
    explanation: 'クイックソートの平均時間計算量はO(n log n)です。最悪の場合はO(n²)ですが、通常は効率的なソートアルゴリズムです。',
    topic: 'アルゴリズム'
  },
  {
    id: 'PRAC047',
    category: 'A',
    text: 'データベースのインデックスの主な目的はどれか。',
    options: [
      'データの暗号化',
      'データの圧縮',
      '検索性能の向上',
      'データの冗長化'
    ],
    correctAnswer: 2,
    explanation: 'インデックスは、データベーステーブルの検索性能を向上させるための仕組みです。特定の列に対する検索やソートを高速化します。',
    topic: 'データベース'
  },
  {
    id: 'PRAC048',
    category: 'A',
    text: 'ハッシュ関数の望ましい性質として正しいものはどれか。',
    options: [
      '同じ入力に対して異なる出力を生成する',
      '計算に時間がかかる',
      '出力値が均等に分散される',
      '出力から入力を容易に推測できる'
    ],
    correctAnswer: 2,
    explanation: '良いハッシュ関数は、出力値がハッシュテーブル全体に均等に分散されることで、衝突を最小化し、性能を向上させます。',
    topic: 'アルゴリズム'
  },
  {
    id: 'PRAC049',
    category: 'A',
    text: 'データベースの外部キーの役割はどれか。',
    options: [
      'レコードを一意に識別する',
      '他のテーブルとの関連を表現する',
      'データの暗号化を行う',
      'インデックスを自動生成する'
    ],
    correctAnswer: 1,
    explanation: '外部キーは、他のテーブルの主キーを参照することで、テーブル間の関連性を表現し、参照整合性を保証します。',
    topic: 'データベース'
  },
  {
    id: 'PRAC050',
    category: 'A',
    text: '二分探索を行うための前提条件はどれか。',
    options: [
      'データが連結リスト構造である',
      'データがソート済みである',
      'データが重複していない',
      'データが数値型である'
    ],
    correctAnswer: 1,
    explanation: '二分探索は、ソート済みの配列に対してのみ適用可能な探索アルゴリズムです。中央値と比較しながら探索範囲を半分ずつ絞り込みます。',
    topic: 'アルゴリズム'
  },
  {
    id: 'PRAC051',
    category: 'A',
    text: 'SQLのJOIN操作のうち、両方のテーブルに存在するレコードのみを結合するものはどれか。',
    options: [
      'LEFT JOIN',
      'RIGHT JOIN',
      'INNER JOIN',
      'FULL OUTER JOIN'
    ],
    correctAnswer: 2,
    explanation: 'INNER JOINは、結合条件を満たすレコードが両方のテーブルに存在する場合のみ結果に含めます。',
    topic: 'データベース'
  },
  {
    id: 'PRAC052',
    category: 'A',
    text: 'データ構造の木において、根から葉までの最長経路の長さを何というか。',
    options: [
      '高さ（depth）',
      '幅（width）',
      '次数（degree）',
      '重み（weight）'
    ],
    correctAnswer: 0,
    explanation: '木の高さ（depth）は、根ノードから最も深い葉ノードまでの経路の長さを表します。',
    topic: 'データ構造'
  },
  {
    id: 'PRAC053',
    category: 'A',
    text: 'データベースのトランザクション制御において、変更を確定する命令はどれか。',
    options: [
      'COMMIT',
      'ROLLBACK',
      'SAVEPOINT',
      'LOCK'
    ],
    correctAnswer: 0,
    explanation: 'COMMITは、トランザクション内で行った全ての変更をデータベースに確定（永続化）する命令です。',
    topic: 'データベース'
  },
  {
    id: 'PRAC054',
    category: 'A',
    text: 'グラフのアルゴリズムにおいて、最短経路を求めるアルゴリズムはどれか。',
    options: [
      'クラスカル法',
      'プリム法',
      'ダイクストラ法',
      'バブルソート'
    ],
    correctAnswer: 2,
    explanation: 'ダイクストラ法は、重み付きグラフにおいて、指定した頂点から他の全ての頂点への最短経路を求めるアルゴリズムです。',
    topic: 'アルゴリズム'
  },
  {
    id: 'PRAC055',
    category: 'A',
    text: 'データベースの第1正規形の条件はどれか。',
    options: [
      '部分関数従属を排除する',
      '推移関数従属を排除する',
      '繰り返し項目を排除する',
      '多値従属を排除する'
    ],
    correctAnswer: 2,
    explanation: '第1正規形は、テーブル内の各セルが単一の値を持ち、繰り返し項目（多値属性）を排除した形です。',
    topic: 'データベース'
  },
  {
    id: 'PRAC056',
    category: 'A',
    text: 'マージソートの時間計算量はどれか。',
    options: [
      'O(n)',
      'O(n log n)',
      'O(n²)',
      'O(2ⁿ)'
    ],
    correctAnswer: 1,
    explanation: 'マージソートは、分割統治法を使用するソートアルゴリズムで、最悪の場合でもO(n log n)の時間計算量を保証します。',
    topic: 'アルゴリズム'
  },
  {
    id: 'PRAC057',
    category: 'A',
    text: 'データベースのビューの特徴として正しいものはどれか。',
    options: [
      '物理的にデータを保存する',
      '仮想的なテーブルである',
      'インデックスを必ず持つ',
      'データの追加のみ可能'
    ],
    correctAnswer: 1,
    explanation: 'ビューは、一つ以上のテーブルから作成される仮想的なテーブルで、実際のデータは保存せず、クエリ実行時に動的に生成されます。',
    topic: 'データベース'
  },
  {
    id: 'PRAC058',
    category: 'A',
    text: '動的プログラミングの特徴はどれか。',
    options: [
      '問題を小さな部分問題に分割し、解を記録して再利用する',
      '貪欲的に最適解を選択する',
      'ランダムに解を探索する',
      '全ての可能性を総当たりで検証する'
    ],
    correctAnswer: 0,
    explanation: '動的プログラミングは、問題を部分問題に分割し、部分問題の解を記録（メモ化）して重複計算を避ける最適化技法です。',
    topic: 'アルゴリズム'
  },
  {
    id: 'PRAC059',
    category: 'A',
    text: 'データベースのロックの粒度で、最も細かいレベルはどれか。',
    options: [
      'データベースレベル',
      'テーブルレベル',
      'ページレベル',
      '行レベル'
    ],
    correctAnswer: 3,
    explanation: '行レベルロックは、個々の行（レコード）に対してロックをかける最も細かい粒度のロックで、同時実行性を最大化できます。',
    topic: 'データベース'
  },
  {
    id: 'PRAC060',
    category: 'A',
    text: '二分木の走査方法のうち、「左の子→根→右の子」の順で訪問するものはどれか。',
    options: [
      '前順走査（preorder）',
      '中順走査（inorder）', 
      '後順走査（postorder）',
      '幅優先走査'
    ],
    correctAnswer: 1,
    explanation: '中順走査（inorder）は、左の子ノード、根ノード、右の子ノードの順で訪問します。二分探索木では昇順にソートされた順序で要素を取得できます。',
    topic: 'データ構造'
  },

  // マネジメント・法務系 (61-80)
  {
    id: 'PRAC061',
    category: 'A',
    text: 'プロジェクトマネジメントにおけるWBSの目的はどれか。',
    options: [
      'プロジェクトの予算を管理する',
      'プロジェクトの作業を階層的に分解する',
      'プロジェクトのリスクを評価する',
      'プロジェクトの品質を保証する'
    ],
    correctAnswer: 1,
    explanation: 'WBS（Work Breakdown Structure）は、プロジェクトの成果物や作業を階層的に分解し、管理しやすい単位に細分化する技法です。',
    topic: 'プロジェクトマネジメント'
  },
  {
    id: 'PRAC062',
    category: 'A',
    text: 'アジャイル開発の特徴として正しいものはどれか。',
    options: [
      '詳細な仕様書を最初に完成させる',
      '短い期間での反復開発を行う',
      '変更要求を受け付けない',
      'テストは開発完了後に実施する'
    ],
    correctAnswer: 1,
    explanation: 'アジャイル開発は、短い期間（スプリント）での反復開発を行い、顧客との継続的な対話を通じて価値のあるソフトウェアを効率的に開発する手法です。',
    topic: 'ソフトウェア開発管理技術'
  },
  {
    id: 'PRAC063',
    category: 'A',
    text: 'ソフトウェアテストにおけるブラックボックステストの特徴はどれか。',
    options: [
      'プログラムの内部構造を考慮してテストする',
      '仕様書に基づいて入出力のみに着目してテストする',
      'コードカバレッジを重視する',
      'プログラマーのみが実施する'
    ],
    correctAnswer: 1,
    explanation: 'ブラックボックステストは、プログラムの内部構造を知らずに、仕様書に基づいて入力と期待される出力のみに着目してテストする手法です。',
    topic: 'ソフトウェア工学'
  },
  {
    id: 'PRAC064',
    category: 'A',
    text: 'システム開発における要件定義の目的はどれか。',
    options: [
      'プログラムのコーディングを行う',
      'システムの詳細設計を行う',
      'システムに求められる機能や性能を明確化する',
      'システムのテストを実施する'
    ],
    correctAnswer: 2,
    explanation: '要件定義は、開発するシステムに求められる機能要件と非機能要件を明確化し、システムの範囲と目標を定める工程です。',
    topic: 'システム開発技術'
  },
  {
    id: 'PRAC065',
    category: 'A',
    text: 'ITILにおけるインシデント管理の目的はどれか。',
    options: [
      'ITサービスの改善を行う',
      'ITサービスの中断を最小限に抑える',
      'IT資産を管理する',
      'ITサービスの設計を行う'
    ],
    correctAnswer: 1,
    explanation: 'インシデント管理は、ITサービスの予期しない中断や品質低下を迅速に復旧し、ビジネスへの影響を最小限に抑えることを目的とします。',
    topic: 'サービスマネジメント'
  },
  {
    id: 'PRAC066',
    category: 'A',
    text: 'ソフトウェアライセンスのGPLの特徴はどれか。',
    options: [
      '商用利用が禁止されている',
      '改変したソフトウェアもGPLで公開する必要がある',
      'ソースコードの公開義務がない',
      '個人利用のみ許可されている'
    ],
    correctAnswer: 1,
    explanation: 'GPL（GNU General Public License）は、コピーレフト型ライセンスで、改変したソフトウェアも同じGPLライセンスで公開することを要求します。',
    topic: '法務'
  },
  {
    id: 'PRAC067',
    category: 'A',
    text: 'システム監査の目的として最も適切なものはどれか。',
    options: [
      'システムの性能を向上させる',
      'システムの信頼性と安全性を客観的に評価する',
      'システムの操作方法を教育する',
      'システムの新機能を開発する'
    ],
    correctAnswer: 1,
    explanation: 'システム監査は、情報システムの信頼性、安全性、効率性を第三者の立場から客観的に評価し、改善点を指摘することを目的とします。',
    topic: 'システム監査'
  },
  {
    id: 'PRAC068',
    category: 'A',
    text: '著作権法において、プログラムの著作権の保護期間はどれか。',
    options: [
      '公表後10年',
      '公表後20年',
      '公表後50年',
      '公表後70年'
    ],
    correctAnswer: 3,
    explanation: '日本の著作権法では、プログラムを含む著作物の保護期間は、原則として著作者の死後70年（法人著作は公表後70年）です。',
    topic: '法務'
  },
  {
    id: 'PRAC069',
    category: 'A',
    text: 'リスクマネジメントにおけるリスク対応戦略のうち、リスクを他者に移転するものはどれか。',
    options: [
      'リスク受容',
      'リスク回避',
      'リスク軽減',
      'リスク移転'
    ],
    correctAnswer: 3,
    explanation: 'リスク移転は、保険加入や外部委託などにより、リスクの影響を他者に移転する戦略です。',
    topic: 'プロジェクトマネジメント'
  },
  {
    id: 'PRAC070',
    category: 'A',
    text: 'ソフトウェア開発におけるV字モデルの特徴はどれか。',
    options: [
      '開発工程とテスト工程を対応付けている',
      '並行して複数の機能を開発する',
      '顧客の要求変更に柔軟に対応する',
      'プロトタイプを繰り返し改良する'
    ],
    correctAnswer: 0,
    explanation: 'V字モデルは、左側の開発工程（要件定義、設計など）と右側のテスト工程を対応付け、各工程での品質を保証する開発モデルです。',
    topic: 'ソフトウェア開発管理技術'
  },
  {
    id: 'PRAC071',
    category: 'A',
    text: 'プロジェクトのクリティカルパスの説明として正しいものはどれか。',
    options: [
      '最も費用のかかる作業の経路',
      '最も重要な作業の経路',
      '最も時間のかかる作業の経路',
      '最もリスクの高い作業の経路'
    ],
    correctAnswer: 2,
    explanation: 'クリティカルパスは、プロジェクトの開始から終了までの作業経路のうち、最も時間のかかる経路で、プロジェクト全体の完了時期を決定します。',
    topic: 'プロジェクトマネジメント'
  },
  {
    id: 'PRAC072',
    category: 'A',
    text: 'SLAの説明として正しいものはどれか。',
    options: [
      'システムの設計書',
      'サービスレベルの合意書',
      'セキュリティ対策書',
      'ソフトウェアライセンス契約書'
    ],
    correctAnswer: 1,
    explanation: 'SLA（Service Level Agreement）は、サービス提供者と利用者の間で、サービスレベル（品質、性能など）について合意した契約書です。',
    topic: 'サービスマネジメント'
  },
  {
    id: 'PRAC073',
    category: 'A',
    text: '個人情報保護法における個人情報の定義に含まれないものはどれか。',
    options: [
      '氏名',
      '住所',
      '生年月日',
      '統計データ'
    ],
    correctAnswer: 3,
    explanation: '統計データは個人を特定できない形に加工されたものなので、個人情報には該当しません。個人情報は特定の個人を識別できる情報です。',
    topic: '法務'
  },
  {
    id: 'PRAC074',
    category: 'A',
    text: 'ソフトウェアの品質特性のうち、保守性の説明として正しいものはどれか。',
    options: [
      'システムの応答時間',
      'システムの修正・改良のしやすさ',
      'システムの可用性',
      'システムの信頼性'
    ],
    correctAnswer: 1,
    explanation: '保守性（Maintainability）は、ソフトウェアの修正、改良、拡張などの保守作業を効率的に行える度合いを表します。',
    topic: 'ソフトウェア工学'
  },
  {
    id: 'PRAC075',
    category: 'A',
    text: 'エンタープライズアーキテクチャ（EA）の目的はどれか。',
    options: [
      'ITシステムの性能向上',
      '経営戦略とITの整合性確保',
      'セキュリティの強化',
      'コストの削減'
    ],
    correctAnswer: 1,
    explanation: 'エンタープライズアーキテクチャ（EA）は、組織の経営戦略とITシステムの整合性を確保し、効率的なIT投資と運用を実現することを目的とします。',
    topic: 'システム戦略'
  },
  {
    id: 'PRAC076',
    category: 'A',
    text: 'BCP（事業継続計画）の主な目的はどれか。',
    options: [
      '日常業務の効率化',
      '災害時の事業継続',
      'IT投資の最適化',
      '品質管理の向上'
    ],
    correctAnswer: 1,
    explanation: 'BCP（Business Continuity Plan）は、災害や事故などの緊急事態が発生した際に、事業を継続または早期復旧するための計画です。',
    topic: 'システム戦略'
  },
  {
    id: 'PRAC077',
    category: 'A',
    text: 'ソフトウェアの結合テストで使用される、下位モジュールの代替となるテスト用モジュールはどれか。',
    options: [
      'スタブ',
      'ドライバ',
      'ハーネス',
      'エミュレータ'
    ],
    correctAnswer: 0,
    explanation: 'スタブは、トップダウンテストにおいて、まだ完成していない下位モジュールの代替として使用されるテスト用のダミーモジュールです。',
    topic: 'ソフトウェア工学'
  },
  {
    id: 'PRAC078',
    category: 'A',
    text: 'プロジェクトマネジメントにおけるスコープクリープの説明として正しいものはどれか。',
    options: [
      'プロジェクトの予算超過',
      'プロジェクトのスケジュール遅延',
      'プロジェクトの範囲が無制限に拡大すること',
      'プロジェクトチームの能力不足'
    ],
    correctAnswer: 2,
    explanation: 'スコープクリープは、プロジェクトの範囲が当初の計画を超えて無制限に拡大してしまう現象で、プロジェクト失敗の主要因の一つです。',
    topic: 'プロジェクトマネジメント'
  },
  {
    id: 'PRAC079',
    category: 'A',
    text: 'ITガバナンスの目的として最も適切なものはどれか。',
    options: [
      'IT部門の人員削減',
      'ITシステムの統制と価値創出',
      'ITコストの削減',
      'IT技術の標準化'
    ],
    correctAnswer: 1,
    explanation: 'ITガバナンスは、ITが企業価値の向上に寄与するよう、IT投資・運用を適切に統制し、ITから最大の価値を創出することを目的とします。',
    topic: 'システム戦略'
  },
  {
    id: 'PRAC080',
    category: 'A',
    text: 'ファンクションポイント法の目的はどれか。',
    options: [
      'プログラムの実行速度を測定する',
      'ソフトウェアの規模を機能の観点から測定する',
      'システムの可用性を評価する',
      'データベースの性能を測定する'
    ],
    correctAnswer: 1,
    explanation: 'ファンクションポイント法は、ユーザーから見たソフトウェアの機能の観点からシステムの規模を測定し、開発工数やコストの見積もりに使用される手法です。',
    topic: 'ソフトウェア工学'
  }
];
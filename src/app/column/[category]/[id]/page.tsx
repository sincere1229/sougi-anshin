import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const dynamic = 'force-static'
export const dynamicParams = false

const COLUMNS: Record<string, Record<number, { title: string; body: string; a8: { name: string; url: string; desc: string }[] }>> = {
  'hajimete': {
    1: { title: "親が亡くなったら最初にすること", body: "死亡直後から7日以内にやるべき手続きを時系列で解説します。", a8: [{"name": "VERY CARD（弔電）", "url": "https://px.a8.net/svt/ejp?a8mat=1JYRN6+32Q4+691UQ+XXXXXX", "desc": "葬儀に届ける弔電。最短当日発送対応。"}, {"name": "ライフリセット（遺品整理）", "url": "https://px.a8.net/svt/ejp?a8mat=1GZLMA+36X8+1ZGG0Y+XXXXXX", "desc": "遺品整理のプロ。全国対応・即日見積もり無料。"}] },
    2: { title: "死亡届の書き方と提出方法", body: "死亡届の記入方法・提出先・火葬許可証の取得方法を解説します。", a8: [{"name": "VERY CARD（弔電）", "url": "https://px.a8.net/svt/ejp?a8mat=1JYRN6+32Q4+691UQ+XXXXXX", "desc": "葬儀に届ける弔電。最短当日発送対応。"}, {"name": "ライフリセット（遺品整理）", "url": "https://px.a8.net/svt/ejp?a8mat=1GZLMA+36X8+1ZGG0Y+XXXXXX", "desc": "遺品整理のプロ。全国対応・即日見積もり無料。"}] },
    3: { title: "葬儀社の選び方・比較のポイント", body: "葬儀社を選ぶ際に確認すべき費用・実績・対応力の見極め方を解説します。", a8: [{"name": "VERY CARD（弔電）", "url": "https://px.a8.net/svt/ejp?a8mat=1JYRN6+32Q4+691UQ+XXXXXX", "desc": "葬儀に届ける弔電。最短当日発送対応。"}, {"name": "ライフリセット（遺品整理）", "url": "https://px.a8.net/svt/ejp?a8mat=1GZLMA+36X8+1ZGG0Y+XXXXXX", "desc": "遺品整理のプロ。全国対応・即日見積もり無料。"}] },
    4: { title: "通夜・告別式の流れとマナー", body: "喪主・参列者それぞれの立場での通夜・告別式の進め方とマナーを解説します。", a8: [{"name": "VERY CARD（弔電）", "url": "https://px.a8.net/svt/ejp?a8mat=1JYRN6+32Q4+691UQ+XXXXXX", "desc": "葬儀に届ける弔電。最短当日発送対応。"}, {"name": "ライフリセット（遺品整理）", "url": "https://px.a8.net/svt/ejp?a8mat=1GZLMA+36X8+1ZGG0Y+XXXXXX", "desc": "遺品整理のプロ。全国対応・即日見積もり無料。"}] },
    5: { title: "香典の金額相場と書き方マナー", body: "関係性別の香典金額の目安と、香典袋の書き方・渡し方を解説します。", a8: [{"name": "VERY CARD（弔電）", "url": "https://px.a8.net/svt/ejp?a8mat=1JYRN6+32Q4+691UQ+XXXXXX", "desc": "葬儀に届ける弔電。最短当日発送対応。"}, {"name": "ライフリセット（遺品整理）", "url": "https://px.a8.net/svt/ejp?a8mat=1GZLMA+36X8+1ZGG0Y+XXXXXX", "desc": "遺品整理のプロ。全国対応・即日見積もり無料。"}] },
    6: { title: "忌引き休暇の取り方・日数", body: "忌引き休暇の取得できる日数・手続き・職場への連絡方法を解説します。", a8: [{"name": "VERY CARD（弔電）", "url": "https://px.a8.net/svt/ejp?a8mat=1JYRN6+32Q4+691UQ+XXXXXX", "desc": "葬儀に届ける弔電。最短当日発送対応。"}, {"name": "ライフリセット（遺品整理）", "url": "https://px.a8.net/svt/ejp?a8mat=1GZLMA+36X8+1ZGG0Y+XXXXXX", "desc": "遺品整理のプロ。全国対応・即日見積もり無料。"}] },
    7: { title: "死亡後にすぐ解約すべきサービス一覧", body: "年金・健康保険・携帯・クレジットカード・サブスクの解約手順をまとめます。", a8: [{"name": "VERY CARD（弔電）", "url": "https://px.a8.net/svt/ejp?a8mat=1JYRN6+32Q4+691UQ+XXXXXX", "desc": "葬儀に届ける弔電。最短当日発送対応。"}, {"name": "ライフリセット（遺品整理）", "url": "https://px.a8.net/svt/ejp?a8mat=1GZLMA+36X8+1ZGG0Y+XXXXXX", "desc": "遺品整理のプロ。全国対応・即日見積もり無料。"}] },
    8: { title: "葬儀後のお礼・挨拶状の書き方", body: "葬儀後に出すお礼状・挨拶状の文例と送るタイミングを解説します。", a8: [{"name": "VERY CARD（弔電）", "url": "https://px.a8.net/svt/ejp?a8mat=1JYRN6+32Q4+691UQ+XXXXXX", "desc": "葬儀に届ける弔電。最短当日発送対応。"}, {"name": "ライフリセット（遺品整理）", "url": "https://px.a8.net/svt/ejp?a8mat=1GZLMA+36X8+1ZGG0Y+XXXXXX", "desc": "遺品整理のプロ。全国対応・即日見積もり無料。"}] },
    9: { title: "四十九日法要の準備と流れ", body: "四十九日法要の準備・費用・当日の流れ・香典返しについて解説します。", a8: [{"name": "VERY CARD（弔電）", "url": "https://px.a8.net/svt/ejp?a8mat=1JYRN6+32Q4+691UQ+XXXXXX", "desc": "葬儀に届ける弔電。最短当日発送対応。"}, {"name": "ライフリセット（遺品整理）", "url": "https://px.a8.net/svt/ejp?a8mat=1GZLMA+36X8+1ZGG0Y+XXXXXX", "desc": "遺品整理のプロ。全国対応・即日見積もり無料。"}] },
    10: { title: "一周忌・三回忌の準備と費用", body: "一周忌・三回忌の準備スケジュール・費用・案内状の書き方を解説します。", a8: [{"name": "VERY CARD（弔電）", "url": "https://px.a8.net/svt/ejp?a8mat=1JYRN6+32Q4+691UQ+XXXXXX", "desc": "葬儀に届ける弔電。最短当日発送対応。"}, {"name": "ライフリセット（遺品整理）", "url": "https://px.a8.net/svt/ejp?a8mat=1GZLMA+36X8+1ZGG0Y+XXXXXX", "desc": "遺品整理のプロ。全国対応・即日見積もり無料。"}] },
  },
  'sougi-col': {
    1: { title: "家族葬とは？費用・流れ・注意点", body: "家族葬の平均費用・標準的な流れ・選ぶときの注意点を解説します。", a8: [{"name": "ライフリセット（遺品整理）", "url": "https://px.a8.net/svt/ejp?a8mat=1GZLMA+36X8+1ZGG0Y+XXXXXX", "desc": "葬儀後の遺品整理はプロに任せましょう。"}, {"name": "VERY CARD（弔電）", "url": "https://px.a8.net/svt/ejp?a8mat=1JYRN6+32Q4+691UQ+XXXXXX", "desc": "弔電・供花のご注文はVERY CARDへ。"}] },
    2: { title: "一般葬とは？費用・流れ・参列者対応", body: "一般葬の費用相場・当日の流れ・参列者への対応方法を解説します。", a8: [{"name": "ライフリセット（遺品整理）", "url": "https://px.a8.net/svt/ejp?a8mat=1GZLMA+36X8+1ZGG0Y+XXXXXX", "desc": "葬儀後の遺品整理はプロに任せましょう。"}, {"name": "VERY CARD（弔電）", "url": "https://px.a8.net/svt/ejp?a8mat=1JYRN6+32Q4+691UQ+XXXXXX", "desc": "弔電・供花のご注文はVERY CARDへ。"}] },
    3: { title: "直葬（火葬式）とは？費用・流れ", body: "通夜・告別式なしの直葬の費用・流れ・メリット・デメリットを解説します。", a8: [{"name": "ライフリセット（遺品整理）", "url": "https://px.a8.net/svt/ejp?a8mat=1GZLMA+36X8+1ZGG0Y+XXXXXX", "desc": "葬儀後の遺品整理はプロに任せましょう。"}, {"name": "VERY CARD（弔電）", "url": "https://px.a8.net/svt/ejp?a8mat=1JYRN6+32Q4+691UQ+XXXXXX", "desc": "弔電・供花のご注文はVERY CARDへ。"}] },
    4: { title: "一日葬とは？費用・菩提寺との関係", body: "通夜を省略する一日葬の費用・流れ・菩提寺への確認ポイントを解説します。", a8: [{"name": "ライフリセット（遺品整理）", "url": "https://px.a8.net/svt/ejp?a8mat=1GZLMA+36X8+1ZGG0Y+XXXXXX", "desc": "葬儀後の遺品整理はプロに任せましょう。"}, {"name": "VERY CARD（弔電）", "url": "https://px.a8.net/svt/ejp?a8mat=1JYRN6+32Q4+691UQ+XXXXXX", "desc": "弔電・供花のご注文はVERY CARDへ。"}] },
    5: { title: "葬儀費用の相場【全国平均データ】", body: "葬儀スタイル別の費用相場と、費用を抑えるための具体的な方法を解説します。", a8: [{"name": "ライフリセット（遺品整理）", "url": "https://px.a8.net/svt/ejp?a8mat=1GZLMA+36X8+1ZGG0Y+XXXXXX", "desc": "葬儀後の遺品整理はプロに任せましょう。"}, {"name": "VERY CARD（弔電）", "url": "https://px.a8.net/svt/ejp?a8mat=1JYRN6+32Q4+691UQ+XXXXXX", "desc": "弔電・供花のご注文はVERY CARDへ。"}] },
    6: { title: "葬祭扶助制度とは？申請方法", body: "生活保護受給者・低所得者が使える葬祭扶助制度の対象条件と申請手順を解説します。", a8: [{"name": "ライフリセット（遺品整理）", "url": "https://px.a8.net/svt/ejp?a8mat=1GZLMA+36X8+1ZGG0Y+XXXXXX", "desc": "葬儀後の遺品整理はプロに任せましょう。"}, {"name": "VERY CARD（弔電）", "url": "https://px.a8.net/svt/ejp?a8mat=1JYRN6+32Q4+691UQ+XXXXXX", "desc": "弔電・供花のご注文はVERY CARDへ。"}] },
    7: { title: "互助会とは？メリット・デメリット", body: "葬儀の積立制度「互助会」の仕組み・メリット・解約時の注意点を解説します。", a8: [{"name": "ライフリセット（遺品整理）", "url": "https://px.a8.net/svt/ejp?a8mat=1GZLMA+36X8+1ZGG0Y+XXXXXX", "desc": "葬儀後の遺品整理はプロに任せましょう。"}, {"name": "VERY CARD（弔電）", "url": "https://px.a8.net/svt/ejp?a8mat=1JYRN6+32Q4+691UQ+XXXXXX", "desc": "弔電・供花のご注文はVERY CARDへ。"}] },
    8: { title: "葬儀の見積もりで騙されないポイント", body: "葬儀見積もりの落とし穴・追加費用が発生しやすい項目・比較のコツを解説します。", a8: [{"name": "ライフリセット（遺品整理）", "url": "https://px.a8.net/svt/ejp?a8mat=1GZLMA+36X8+1ZGG0Y+XXXXXX", "desc": "葬儀後の遺品整理はプロに任せましょう。"}, {"name": "VERY CARD（弔電）", "url": "https://px.a8.net/svt/ejp?a8mat=1JYRN6+32Q4+691UQ+XXXXXX", "desc": "弔電・供花のご注文はVERY CARDへ。"}] },
    9: { title: "宗派別 葬儀の違いと注意点", body: "仏教・神道・キリスト教・無宗教葬の違いとそれぞれの作法を解説します。", a8: [{"name": "ライフリセット（遺品整理）", "url": "https://px.a8.net/svt/ejp?a8mat=1GZLMA+36X8+1ZGG0Y+XXXXXX", "desc": "葬儀後の遺品整理はプロに任せましょう。"}, {"name": "VERY CARD（弔電）", "url": "https://px.a8.net/svt/ejp?a8mat=1JYRN6+32Q4+691UQ+XXXXXX", "desc": "弔電・供花のご注文はVERY CARDへ。"}] },
    10: { title: "生前予約・事前葬儀相談のメリット", body: "葬儀の事前相談・生前予約のメリットと、おすすめのタイミングを解説します。", a8: [{"name": "ライフリセット（遺品整理）", "url": "https://px.a8.net/svt/ejp?a8mat=1GZLMA+36X8+1ZGG0Y+XXXXXX", "desc": "葬儀後の遺品整理はプロに任せましょう。"}, {"name": "VERY CARD（弔電）", "url": "https://px.a8.net/svt/ejp?a8mat=1JYRN6+32Q4+691UQ+XXXXXX", "desc": "弔電・供花のご注文はVERY CARDへ。"}] },
  },
  'haka-col': {
    1: { title: "樹木葬とは？費用・選び方・デメリット", body: "樹木葬の費用相場・種類（個別・合祀）・選ぶときの注意点を解説します。", a8: [{"name": "墓石ナビ（一括見積）", "url": "https://px.a8.net/svt/ejp?a8mat=1I6GTU+46CI+BX3J6+XXXXXX", "desc": "全国の墓石会社に一括見積もり。費用を比較。"}] },
    2: { title: "納骨堂とは？種類・費用・選び方", body: "納骨堂の種類（ロッカー型・仏壇型・自動搬送型）と費用・選び方を解説します。", a8: [{"name": "墓石ナビ（一括見積）", "url": "https://px.a8.net/svt/ejp?a8mat=1I6GTU+46CI+BX3J6+XXXXXX", "desc": "全国の墓石会社に一括見積もり。費用を比較。"}] },
    3: { title: "散骨とは？方法・費用・法律", body: "海洋散骨・山林散骨の方法・費用・法的な注意点を解説します。", a8: [{"name": "墓石ナビ（一括見積）", "url": "https://px.a8.net/svt/ejp?a8mat=1I6GTU+46CI+BX3J6+XXXXXX", "desc": "全国の墓石会社に一括見積もり。費用を比較。"}] },
    4: { title: "墓じまいの費用と流れ", body: "お墓を撤去して改葬する「墓じまい」の費用・手続き・注意点を解説します。", a8: [{"name": "墓石ナビ（一括見積）", "url": "https://px.a8.net/svt/ejp?a8mat=1I6GTU+46CI+BX3J6+XXXXXX", "desc": "全国の墓石会社に一括見積もり。費用を比較。"}] },
    5: { title: "永代供養とは？費用・種類", body: "永代供養の仕組み・費用相場・一般墓との違いを解説します。", a8: [{"name": "墓石ナビ（一括見積）", "url": "https://px.a8.net/svt/ejp?a8mat=1I6GTU+46CI+BX3J6+XXXXXX", "desc": "全国の墓石会社に一括見積もり。費用を比較。"}] },
    6: { title: "お墓の管理費と維持費", body: "お墓にかかる年間管理費・修繕費・撤去費用の目安を解説します。", a8: [{"name": "墓石ナビ（一括見積）", "url": "https://px.a8.net/svt/ejp?a8mat=1I6GTU+46CI+BX3J6+XXXXXX", "desc": "全国の墓石会社に一括見積もり。費用を比較。"}] },
    7: { title: "仏壇の選び方と費用", body: "現代仏壇・ミニ仏壇・モダン仏壇の選び方と費用相場を解説します。", a8: [{"name": "墓石ナビ（一括見積）", "url": "https://px.a8.net/svt/ejp?a8mat=1I6GTU+46CI+BX3J6+XXXXXX", "desc": "全国の墓石会社に一括見積もり。費用を比較。"}] },
    8: { title: "位牌の種類と作り方", body: "位牌の種類・戒名の入れ方・費用・開眼供養の流れを解説します。", a8: [{"name": "墓石ナビ（一括見積）", "url": "https://px.a8.net/svt/ejp?a8mat=1I6GTU+46CI+BX3J6+XXXXXX", "desc": "全国の墓石会社に一括見積もり。費用を比較。"}] },
    9: { title: "お墓参りのマナーと作法", body: "お墓参りの持ち物・掃除の方法・お供え物・線香の立て方を解説します。", a8: [{"name": "墓石ナビ（一括見積）", "url": "https://px.a8.net/svt/ejp?a8mat=1I6GTU+46CI+BX3J6+XXXXXX", "desc": "全国の墓石会社に一括見積もり。費用を比較。"}] },
    10: { title: "デジタル仏壇・オンライン墓参とは", body: "スマートフォンから参拝できるデジタル仏壇・オンライン墓参サービスを紹介します。", a8: [{"name": "墓石ナビ（一括見積）", "url": "https://px.a8.net/svt/ejp?a8mat=1I6GTU+46CI+BX3J6+XXXXXX", "desc": "全国の墓石会社に一括見積もり。費用を比較。"}] },
  },
  'souzoku-col': {
    1: { title: "相続手続きの期限一覧【亡くなってからの流れ】", body: "死亡後7日・14日・3ヶ月・4ヶ月・10ヶ月の期限と手続きをまとめます。", a8: [{"name": "ライフリセット（遺品整理）", "url": "https://px.a8.net/svt/ejp?a8mat=1GZLMA+36X8+1ZGG0Y+XXXXXX", "desc": "相続後の遺品整理はプロに依頼を。"}] },
    2: { title: "相続税の申告が必要か確認する方法", body: "相続税の基礎控除（3,600万円＋600万円×相続人数）の計算方法を解説します。", a8: [{"name": "ライフリセット（遺品整理）", "url": "https://px.a8.net/svt/ejp?a8mat=1GZLMA+36X8+1ZGG0Y+XXXXXX", "desc": "相続後の遺品整理はプロに依頼を。"}] },
    3: { title: "遺産分割協議書の書き方", body: "相続人全員で合意した内容をまとめる遺産分割協議書の書き方・文例を解説します。", a8: [{"name": "ライフリセット（遺品整理）", "url": "https://px.a8.net/svt/ejp?a8mat=1GZLMA+36X8+1ZGG0Y+XXXXXX", "desc": "相続後の遺品整理はプロに依頼を。"}] },
    4: { title: "銀行口座の相続手続き", body: "亡くなった方の銀行口座の凍結・解約・払い戻しの手続きを解説します。", a8: [{"name": "ライフリセット（遺品整理）", "url": "https://px.a8.net/svt/ejp?a8mat=1GZLMA+36X8+1ZGG0Y+XXXXXX", "desc": "相続後の遺品整理はプロに依頼を。"}] },
    5: { title: "不動産の相続登記 義務化と手続き", body: "2024年から義務化された相続登記の手続き・期限・費用を解説します。", a8: [{"name": "ライフリセット（遺品整理）", "url": "https://px.a8.net/svt/ejp?a8mat=1GZLMA+36X8+1ZGG0Y+XXXXXX", "desc": "相続後の遺品整理はプロに依頼を。"}] },
    6: { title: "相続放棄の手続きと期限", body: "相続放棄の申請方法・3ヶ月の期限・注意点（プラスの財産も放棄）を解説します。", a8: [{"name": "ライフリセット（遺品整理）", "url": "https://px.a8.net/svt/ejp?a8mat=1GZLMA+36X8+1ZGG0Y+XXXXXX", "desc": "相続後の遺品整理はプロに依頼を。"}] },
    7: { title: "準確定申告とは？期限と書き方", body: "亡くなった方の確定申告（準確定申告）の期限（4ヶ月以内）と手続きを解説します。", a8: [{"name": "ライフリセット（遺品整理）", "url": "https://px.a8.net/svt/ejp?a8mat=1GZLMA+36X8+1ZGG0Y+XXXXXX", "desc": "相続後の遺品整理はプロに依頼を。"}] },
    8: { title: "デジタル遺産の整理方法", body: "SNS・ネット銀行・仮想通貨・サブスクなどデジタル遺産の整理と相続方法を解説します。", a8: [{"name": "ライフリセット（遺品整理）", "url": "https://px.a8.net/svt/ejp?a8mat=1GZLMA+36X8+1ZGG0Y+XXXXXX", "desc": "相続後の遺品整理はプロに依頼を。"}] },
    9: { title: "相続税を節税する方法", body: "生前贈与・小規模宅地等の特例など合法的な相続税節税策を解説します。", a8: [{"name": "ライフリセット（遺品整理）", "url": "https://px.a8.net/svt/ejp?a8mat=1GZLMA+36X8+1ZGG0Y+XXXXXX", "desc": "相続後の遺品整理はプロに依頼を。"}] },
    10: { title: "相続でもめやすいケースと対処法", body: "相続トラブルの典型パターンと、弁護士・調停を活用した解決策を解説します。", a8: [{"name": "ライフリセット（遺品整理）", "url": "https://px.a8.net/svt/ejp?a8mat=1GZLMA+36X8+1ZGG0Y+XXXXXX", "desc": "相続後の遺品整理はプロに依頼を。"}] },
  },
  'shukatsu-col': {
    1: { title: "エンディングノートの書き方入門", body: "エンディングノートに書くべき項目と、家族に喜ばれる書き方のコツを解説します。", a8: [{"name": "VERY CARD（弔電）", "url": "https://px.a8.net/svt/ejp?a8mat=1JYRN6+32Q4+691UQ+XXXXXX", "desc": "終活の一環として弔電サービスを把握しておきましょう。"}, {"name": "墓石ナビ（一括見積）", "url": "https://px.a8.net/svt/ejp?a8mat=1I6GTU+46CI+BX3J6+XXXXXX", "desc": "お墓の費用は一括見積もりで比較を。"}] },
    2: { title: "遺言書の種類と作り方", body: "自筆証書遺言・公正証書遺言の違い・費用・作成手順を解説します。", a8: [{"name": "VERY CARD（弔電）", "url": "https://px.a8.net/svt/ejp?a8mat=1JYRN6+32Q4+691UQ+XXXXXX", "desc": "終活の一環として弔電サービスを把握しておきましょう。"}, {"name": "墓石ナビ（一括見積）", "url": "https://px.a8.net/svt/ejp?a8mat=1I6GTU+46CI+BX3J6+XXXXXX", "desc": "お墓の費用は一括見積もりで比較を。"}] },
    3: { title: "終活でやるべきこと10選", body: "終活で最低限やっておくべきことをリスト形式で優先度順に解説します。", a8: [{"name": "VERY CARD（弔電）", "url": "https://px.a8.net/svt/ejp?a8mat=1JYRN6+32Q4+691UQ+XXXXXX", "desc": "終活の一環として弔電サービスを把握しておきましょう。"}, {"name": "墓石ナビ（一括見積）", "url": "https://px.a8.net/svt/ejp?a8mat=1I6GTU+46CI+BX3J6+XXXXXX", "desc": "お墓の費用は一括見積もりで比較を。"}] },
    4: { title: "老後の住まいをどう考えるか", body: "自宅継続・高齢者施設・サ高住・子供との同居のメリット・デメリットを比較します。", a8: [{"name": "VERY CARD（弔電）", "url": "https://px.a8.net/svt/ejp?a8mat=1JYRN6+32Q4+691UQ+XXXXXX", "desc": "終活の一環として弔電サービスを把握しておきましょう。"}, {"name": "墓石ナビ（一括見積）", "url": "https://px.a8.net/svt/ejp?a8mat=1I6GTU+46CI+BX3J6+XXXXXX", "desc": "お墓の費用は一括見積もりで比較を。"}] },
    5: { title: "介護の希望を家族に伝える方法", body: "在宅介護・施設入居など介護の希望を家族に上手に伝えるコツを解説します。", a8: [{"name": "VERY CARD（弔電）", "url": "https://px.a8.net/svt/ejp?a8mat=1JYRN6+32Q4+691UQ+XXXXXX", "desc": "終活の一環として弔電サービスを把握しておきましょう。"}, {"name": "墓石ナビ（一括見積）", "url": "https://px.a8.net/svt/ejp?a8mat=1I6GTU+46CI+BX3J6+XXXXXX", "desc": "お墓の費用は一括見積もりで比較を。"}] },
    6: { title: "延命治療・臓器提供の意思を残す方法", body: "リビングウィル・意思表示カードの書き方と法的な効力について解説します。", a8: [{"name": "VERY CARD（弔電）", "url": "https://px.a8.net/svt/ejp?a8mat=1JYRN6+32Q4+691UQ+XXXXXX", "desc": "終活の一環として弔電サービスを把握しておきましょう。"}, {"name": "墓石ナビ（一括見積）", "url": "https://px.a8.net/svt/ejp?a8mat=1I6GTU+46CI+BX3J6+XXXXXX", "desc": "お墓の費用は一括見積もりで比較を。"}] },
    7: { title: "不用品の生前整理・終活片付けの進め方", body: "生前整理の始め方・片付けの優先順位・業者への依頼方法を解説します。", a8: [{"name": "VERY CARD（弔電）", "url": "https://px.a8.net/svt/ejp?a8mat=1JYRN6+32Q4+691UQ+XXXXXX", "desc": "終活の一環として弔電サービスを把握しておきましょう。"}, {"name": "墓石ナビ（一括見積）", "url": "https://px.a8.net/svt/ejp?a8mat=1I6GTU+46CI+BX3J6+XXXXXX", "desc": "お墓の費用は一括見積もりで比較を。"}] },
    8: { title: "ペットのための終活準備", body: "ペットの引き取り先・ペット信託・ペット保険など終活でのペット対策を解説します。", a8: [{"name": "VERY CARD（弔電）", "url": "https://px.a8.net/svt/ejp?a8mat=1JYRN6+32Q4+691UQ+XXXXXX", "desc": "終活の一環として弔電サービスを把握しておきましょう。"}, {"name": "墓石ナビ（一括見積）", "url": "https://px.a8.net/svt/ejp?a8mat=1I6GTU+46CI+BX3J6+XXXXXX", "desc": "お墓の費用は一括見積もりで比較を。"}] },
    9: { title: "デジタル終活 パスワード管理の方法", body: "死後に家族が困らないためのパスワード・アカウント情報の管理方法を解説します。", a8: [{"name": "VERY CARD（弔電）", "url": "https://px.a8.net/svt/ejp?a8mat=1JYRN6+32Q4+691UQ+XXXXXX", "desc": "終活の一環として弔電サービスを把握しておきましょう。"}, {"name": "墓石ナビ（一括見積）", "url": "https://px.a8.net/svt/ejp?a8mat=1I6GTU+46CI+BX3J6+XXXXXX", "desc": "お墓の費用は一括見積もりで比較を。"}] },
    10: { title: "終活セミナー・無料相談の活用法", body: "自治体・葬儀社・FPが開催する終活セミナーの種類と活用方法を紹介します。", a8: [{"name": "VERY CARD（弔電）", "url": "https://px.a8.net/svt/ejp?a8mat=1JYRN6+32Q4+691UQ+XXXXXX", "desc": "終活の一環として弔電サービスを把握しておきましょう。"}, {"name": "墓石ナビ（一括見積）", "url": "https://px.a8.net/svt/ejp?a8mat=1I6GTU+46CI+BX3J6+XXXXXX", "desc": "お墓の費用は一括見積もりで比較を。"}] },
  },
}

const CAT_LABEL: Record<string, string> = {
  hajimete: '亡くなったらすること',
  'sougi-col': '葬儀の種類・費用',
  'haka-col': 'お墓・供養',
  'souzoku-col': '相続・手続き',
  'shukatsu-col': '終活・エンディング',
}

export async function generateStaticParams() {
  const params = []
  for (const cat of Object.keys(COLUMNS)) {
    for (const id of Object.keys(COLUMNS[cat])) {
      params.push({ category: cat, id })
    }
  }
  return params
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; id: string }> }): Promise<Metadata> {
  const { category, id } = await params
  const col = COLUMNS[category]?.[Number(id)]
  if (!col) return {}
  return { title: `${col.title} | 実家どうするナビ`, description: col.body.slice(0, 80) + '...' }
}

export default async function ColumnPage({ params }: { params: Promise<{ category: string; id: string }> }) {
  const { category, id } = await params
const col = COLUMNS[category]?.[Number(id)]
  if (!col) notFound()
  const catLabel = CAT_LABEL[category] || ''
  const idNum = Number(id)
  return (
    <main style={{ maxWidth: 480, margin: '0 auto', padding: '16px 16px 48px' }}>
      <div style={{ marginBottom: 16 }}>
        <Link href="/column" style={{ fontSize: 12, color: '#78716c', textDecoration: 'none' }}>← コラム一覧</Link>
        <p style={{ fontSize: 11, color: '#d4af6a', fontWeight: 600, margin: '8px 0 4px' }}>{catLabel}</p>
        <h1 style={{ fontSize: 18, fontWeight: 700, color: '#1f2937', lineHeight: 1.5 }}>{col.title}</h1>
      </div>
      <div style={{ background: '#fff', border: '0.5px solid #e5e7eb', borderRadius: 12, padding: '16px', marginBottom: 16 }}>
        <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.8 }}>{col.body}</p>
      </div>
      {col.a8.length > 0 && (
        <div style={{ marginBottom: 16 }}>
          <p style={{ fontSize: 12, color: '#9ca3af', marginBottom: 8 }}>※ 広告・PR</p>
          {col.a8.map((s, i) => (
            <a key={i} href={s.url} target="_blank" rel="nofollow noopener noreferrer"
              style={{ display: 'block', background: '#fff', border: '0.5px solid #e5e7eb', borderRadius: 10, padding: '12px 14px', marginBottom: 8, textDecoration: 'none' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#1f2937', marginBottom: 4 }}>{s.name}</div>
              <div style={{ fontSize: 12, color: '#6b7280' }}>{s.desc}</div>
            </a>
          ))}
        </div>
      )}
      <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
        {idNum > 1 && <Link href={`/column/${category}/${idNum - 1}`} style={{ flex: 1, display: 'block', textAlign: 'center', background: '#fff', border: '0.5px solid #e5e7eb', borderRadius: 8, padding: '10px', fontSize: 13, color: '#374151', textDecoration: 'none' }}>← 前の記事</Link>}
        {idNum < 10 && <Link href={`/column/${category}/${idNum + 1}`} style={{ flex: 1, display: 'block', textAlign: 'center', background: '#fff', border: '0.5px solid #e5e7eb', borderRadius: 8, padding: '10px', fontSize: 13, color: '#374151', textDecoration: 'none' }}>次の記事 →</Link>}
      </div>
      <div style={{ marginTop: 16, textAlign: 'center' }}>
        <Link href="/" style={{ fontSize: 13, color: '#78716c', textDecoration: 'none' }}>診断を受ける →</Link>
      </div>
    </main>
  )
}

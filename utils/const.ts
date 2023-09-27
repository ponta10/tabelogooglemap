export interface Area {
  code: string
  value: string
}

interface Genre {
  code: string
  value: string
}

interface Price {
  value: string | number
  label: string
}

interface Situation {
  value: string
  label: string
}

export const areaList: Area[] = [
  { code: 'A1301/A130101', value: '銀座' },
  { code: 'A1301/A130102', value: '新橋' },
  { code: 'A1301/A130103', value: '有楽町' },
  { code: 'A1c302/A130201', value: '丸の内' },
  { code: 'A1302/A130202', value: '日本橋' },
  { code: 'A1302/A130203', value: '八丁堀' },
  { code: 'A1302/A130204', value: '人形町' },
  { code: 'A1303/A130301', value: '渋谷' },
  { code: 'A1303/A130302', value: '恵比寿' },
  { code: 'A1303/A130303', value: '代官山' },
  { code: 'A1304/A130401', value: '新宿' },
  { code: 'A1304/A130402', value: '新宿御苑' },
  { code: 'A1304/A130403', value: '代々木' },
  { code: 'A1304/A130404', value: '新大久保' },
  { code: 'A1305/A130501', value: '池袋' },
  { code: 'A1305/A130502', value: '目白' },
  { code: 'A1305/A130503', value: '高田馬場' },
  { code: 'A1305/A130504', value: '早稲田' },
  { code: 'A1306/A130601', value: '原宿' },
  { code: 'A1306/A130602', value: '表参道' },
  { code: 'A1306/A130603', value: '青山・外苑前' },
  { code: 'A1307/A130701', value: '六本木・西麻布' },
  { code: 'A1307/A130702', value: '麻布十番' },
  { code: 'A1307/A130703', value: '広尾' },
  { code: 'A1307/A130701', value: '神谷町' },
  { code: 'A1308/A130801', value: '赤坂' },
  { code: 'A1308/A130802', value: '溜池山王・霞ヶ関' },
  { code: 'A1308/A130803', value: '永田町・半蔵門' },
  { code: 'A1308/A130802/R6877', value: '虎ノ門' },
  { code: 'A1309/A130901', value: '千駄ヶ谷・信濃町' },
  { code: 'A1309/A130902', value: '四ツ谷' },
  { code: 'A1309/A130903', value: '曙橋' },
  { code: 'A1309/A130904', value: '市ヶ谷' },
  { code: 'C13104/C36215', value: '神楽坂' },
  { code: 'A1309/A130905/R540', value: '飯田橋' },
  { code: 'A1310/A131001', value: '秋葉原' },
  { code: 'A1310/A131002/R2080', value: '御茶ノ水' },
  { code: 'A1310/A131002/R2954', value: '神田' },
  { code: 'A1310/A131003', value: '水道橋・神保町' },
  { code: 'A1310/A131004', value: '本郷・東大前' },
  { code: 'A1311/A131101/R1157', value: '上野' },
  { code: 'A1311/A131101/R1937', value: '御徒町' },
  { code: 'A1311/A131102', value: '浅草' },
  { code: 'A1311/A131103', value: '浅草橋' },
  { code: 'A1311/A131104', value: '鶯谷' },
  { code: 'A1311/A131105', value: '日暮里・西日暮里' },
  { code: 'A1311/A131106', value: '根津' },
  { code: 'A1314/A131201', value: '浜松町・芝公園' },
  { code: 'A1314/A131202', value: '田町・三田' },
  { code: 'A1314/A131203', value: '品川' },
  { code: 'A1314/A131204', value: '天王洲アイル' },
  { code: 'A1314/A131205', value: '北品川・新馬場' },
  { code: 'A1316/A131601', value: '目黒' },
  { code: 'A1316/A131602', value: '白金' },
  { code: 'A1316/A131603', value: '五反田' },
  { code: 'A1316/A131604', value: '大崎' },
  { code: 'A1317/A131701', value: '目黒' },
  { code: 'A1323/A132301', value: '巣鴨・駒込' },
  { code: 'A1323/A132302', value: '大塚' },
  { code: 'A1323/A132303', value: '王子' },
  { code: 'A1323/A132304', value: '十条' },
  { code: 'A1323/A132305', value: '赤羽' },
  { code: 'A1312/A131201', value: '両国・錦糸町' },
  { code: 'A1312/A131202', value: '亀戸' },
  { code: 'A1312/A131203', value: '押上' },
  { code: 'A1312/A131204', value: '小岩' },
  { code: 'A1313/A131301', value: '築地' },
  { code: 'A1313/A131302', value: '月島・勝どき' },
  { code: 'A1313/A131303', value: '門前仲町' },
  { code: 'A1313/A131305', value: '葛西' },
  { code: 'A1313/A131306', value: 'お台場' },
  { code: 'A1313/A131307', value: '豊洲' },
  { code: 'A1315/A131501', value: '大井町' },
  { code: 'A1315/A131502', value: '大森・平和島' },
  { code: 'A1315/A131503', value: '蒲田' },
  { code: 'A1315/A131504', value: '羽田空港' },
  { code: 'A1317/A131701', value: '中目黒' },
  { code: 'A1317/A131703', value: '自由が丘' },
  { code: 'A1317/A131704', value: '池尻大橋' },
  { code: 'A1317/A131705', value: '三軒茶屋' },
  { code: 'A1317/A131706', value: '駒沢' },
  { code: 'A1317/A131707', value: '二子玉川' },
  { code: 'A1318/A131802', value: '下北沢' },
  { code: 'A1318/A131807', value: '初台' },
  { code: 'A1318/A131810', value: '代々木八幡' },
  { code: 'A1318/A131811', value: '代々木上原' },
  { code: 'A1318/A131812', value: '世田谷代田' },
  { code: 'A1318/A131814', value: '祖師ヶ谷大蔵駅' },
  { code: 'A1319/A131902', value: '中野' },
  { code: 'A1319/A131904', value: '高円寺' },
  { code: 'A1322/A132201', value: '板橋' },
  { code: 'A1324/A132401', value: '南千住' },
  { code: 'A1324/A132402', value: '北千住' },
  { code: 'A1324/A132403', value: '葛飾' },
  { code: 'A1320/A132001', value: '吉祥寺' },
  { code: 'A1325/A132501', value: '小金井' },
  { code: 'A1325/A132502', value: '国分寺' },
  { code: 'A1325/A132503', value: '国立' },
  { code: 'A1326/A132601', value: '調布' },
  { code: 'A1326/A132602', value: '府中' },
  { code: 'A1326/A132603', value: '狛江' },
  { code: 'A1327/A132701', value: '町田' },
  { code: 'A1326/A132602', value: '多摩' },
  { code: 'A1327/A132703', value: '稲城' },
  { code: 'A1329/A132901', value: '立川' },
  { code: 'A1329/A132904', value: '八王子' },
  { code: 'A1329/A132905', value: '高尾山' },
]

export const genreList: Genre[] = [
  { code: 'italian', value: 'イタリアン' },
  { code: 'pizza', value: 'ピザ' },
  { code: 'pasta', value: 'パスタ' },
  { code: 'yakiniku', value: '焼肉' },
  { code: 'horumon', value: 'ホルモン' },
  { code: 'RC1302', value: 'ジンギスカン' },
  { code: 'curry', value: 'カレー' },
  { code: 'chinese', value: '中華' },
  { code: 'curry', value: 'カレー' },
  { code: 'gyouza', value: '餃子' },
  { code: 'RC0309', value: '肉まん' },
  { code: 'RC0310', value: '小籠包' },
  { code: 'RC0306', value: '台湾料理' },
  { code: 'koria', value: '韓国料理' },
  { code: 'thai', value: 'タイ料理' },
  { code: 'RC040202', value: 'ベトナム料理' },
  { code: 'RC0402', value: '東南アジア料理' },
  { code: 'RC040402', value: 'ケバブ' },
  { code: 'RC040401', value: 'トルコ料理' },
  { code: 'RC040403', value: 'モロッコ料理' },
  { code: 'RC041104', value: 'タコス' },
  { code: 'RC041101', value: 'メキシコ料理' },
  { code: 'RC041102', value: 'ブラジル料理' },
  { code: 'RC041103', value: 'シュラスコ' },
  { code: 'nabe', value: '鍋' },
  { code: 'motsu', value: 'もつ鍋' },
  { code: 'RC1404', value: '水炊き' },
  { code: 'RC21', value: '居酒屋' },
  { code: 'RC2103', value: 'バル' },
  { code: 'RC210302', value: '肉バル' },
  { code: 'RC2104', value: 'ビアガーデン' },
  { code: 'RC9808', value: 'チーズ料理' },
  { code: 'RC9807', value: 'サラダ・野菜' },
  { code: 'washoku', value: '和食' },
  { code: 'sushi', value: '寿司' },
  { code: 'seafood', value: '海鮮' },
  { code: 'RC0105', value: 'うなぎ・あなご' },
  { code: 'tempura', value: '天ぷら' },
  { code: 'tonkatsu', value: 'とんかつ' },
  { code: 'RC012502', value: '牛カツ' },
  { code: 'RC012504', value: '唐揚げ' },
  { code: 'yakitori', value: '焼き鳥' },
  { code: 'RC010604', value: 'もつ焼き' },
  { code: 'RC010606', value: '手羽先' },
  { code: 'RC0107', value: 'すき焼き' },
  { code: 'RC0121', value: 'しゃぶしゃぶ' },
  { code: 'RC0104', value: 'そば' },
  { code: 'RC0123', value: 'うどん' },
  { code: 'RC012302', value: 'カレーうどん' },
  { code: 'okonomiyaki', value: 'お好み焼き' },
  { code: 'monjya', value: 'もんじゃ焼き' },
  { code: 'RC010911', value: 'たこ焼き' },
  { code: 'RC011101', value: '牛丼' },
  { code: 'RC011102', value: '親子丼' },
  { code: 'RC011103', value: '天丼' },
  { code: 'RC011104', value: 'カツ丼' },
  { code: 'RC011105', value: '海鮮丼' },
  { code: 'RC011106', value: '豚丼' },
  { code: 'RC0108', value: 'おでん' },
  { code: 'RC019907', value: '牛タン' },
  { code: 'okinawafood', value: '沖縄料理' },
  { code: 'RC0209', value: '洋食' },
  { code: 'hamburgersteak', value: 'ハンバーグ' },
  { code: 'RC020912', value: 'オムライス' },
  { code: 'RC020915', value: 'コロッケ' },
  { code: 'steak', value: 'ステーキ' },
  { code: 'french', value: 'フレンチ' },
  { code: 'spain', value: 'スペイン料理' },
  { code: 'RC021903', value: 'ドイツ料理' },
  { code: 'RC021904', value: 'ロシア料理' },
  { code: 'RC021911', value: 'ギリシャ料理' },
  { code: 'hamburger', value: 'ハンバーガー' },
  { code: 'RC022003', value: 'ハワイ料理' },
  { code: 'MC0101', value: 'ラーメン' },
  { code: 'MC0130', value: 'つけ麺' },
  { code: 'MC0131', value: '油そば・まぜそば' },
  { code: 'MC0133', value: '担々麺' },
  { code: 'cafe', value: 'カフェ' },
  { code: 'SC1005', value: 'パンケーキ' },
  { code: 'SC1006', value: 'コーヒースタンド' },
  { code: 'pan', value: 'パン' },
  { code: 'BC01', value: 'バー' },
  { code: 'sweets', value: 'スイーツ' },
  { code: 'cake', value: 'ケーキ「' },
  { code: 'bistro', value: 'ビストロ' },
  { code: 'viking', value: 'ビュッフェ・バイキング' },
  { code: 'kushiage', value: '串揚げ' },
]

export const price: Price[] = [
  { value: 1, label: '¥1,000' },
  { value: 2, label: '¥2,000' },
  { value: 3, label: '¥3,000' },
  { value: 4, label: '¥4,000' },
  { value: 5, label: '¥5,000' },
  { value: 6, label: '¥6,000' },
  { value: 7, label: '¥8,000' },
  { value: 8, label: '¥10,000' },
  { value: 9, label: '¥15,000' },
  { value: 1, label: '¥20,000' },
  { value: 10, label: '¥30,000' },
  { value: 12, label: '¥50,000' },
]

export const situation: Situation[] = [
  { value: 'cond04-00-00', label: '大人数の宴会' },
  { value: 'cond04-00-01', label: '接待' },
  { value: 'cond04-00-02', label: '一人で入りやすい' },
  { value: 'cond04-00-03', label: 'デート' },
  { value: 'cond04-00-04', label: '家族・子供と' },
  { value: 'cond04-00-05', label: '知人・友人と' },
  { value: 'cond04-00-06', label: '女子会' },
  { value: 'cond04-00-07', label: '合コン' },
]

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Target, Compass, Award, X } from 'lucide-react';

export interface CaseItem {
  id: number;
  slug: string;
  title: string;
  en: string;
  type: string;
  category: string;
  img: string;
  designerView: string;
  metrics: { label: string; value: string }[];
  challenge: string;
  solution: string;
}

export const categories = [
  { cn: '全部', en: 'All' },
  { cn: '乡村', en: 'Rural' },
  { cn: '酒店', en: 'Hotel' },
  { cn: '文旅', en: 'Culture' },
  { cn: '私宅', en: 'Private' }
];

export const casesData: CaseItem[] = [
  { 
    id: 2, 
    slug: 'melia-chongqing',
    title: '重庆美利亚酒店', 
    en: 'Melia Chongqing',
    type: '酒店',
    category: '度假酒店 / Resort', 
    img: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E7%BE%8E%E5%88%A9%E4%BA%9A%E9%85%92%E5%BA%97/1.jpg',
    designerView: '本项目以“让建筑成为山水的延伸，让空间成为自然的容器”为核心，将东方山水意境与现代度假美学相融。建筑沿湖岸舒展排布，采用低缓的横向线条与玻璃幕墙，立面以浅灰石材、原木线条为基底，弱化人工与自然的边界；大堂以“层叠山峦”为灵感，用木质肌理墙还原自然地貌，搭配悬浮石艺装置，营造“入山寻幽”的东方禅意仪式感。',
    metrics: [
      { label: '建筑底色', value: '山水延伸' },
      { label: '空间意境', value: '自然容器' },
      { label: '核心体验', value: '卧枕听风' }
    ],
    challenge: ' 建筑与景观共鸣痛点：如何最大化引入湖光山色、弱化建筑与大湖的边界，在通往客房的走廊过渡空间中创造出极具仪式感的山水叙事？',
    solution: ' 沉浸式度假体验：客房以浅木色为基调，搭配温润皮革与亚麻，大面积落地窗与阳台让住客“推窗见湖，卧枕听风”；走廊借框景手法以竹林为景，让行走成为一场与自然对话的旅程，入则静谧，出则繁华。'
  },
  { 
    id: 3, 
    slug: 'pengli-home',
    title: '山西芃篱人家', 
    en: 'Shanxi Pengli Home',
    type: '乡村',
    category: '精品民宿 / B&B', 
    img: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E5%A4%AA%E5%BA%A6%E6%9D%91%E5%BA%A6%E5%81%87%E9%85%92%E5%BA%97%E7%BE%A4/IMG_7182.jpg',
    designerView: '本项目以“在地窑洞建筑为基底，用现代手法激活传统空间”为核心，打造一处承载地域记忆、兼具质朴松弛感的乡野民宿。🏡 建筑改造保留传统窑洞的拱券结构与青砖肌理，以清水混凝土勾勒门洞轮廓，让老砖墙成为建筑的“记忆载体”，搭配温润木构门窗以延续在地风土灵魂；🌿 室内以原木、麻质布艺为主材，搭配藤编灯具、老砖墙面与乡村木椅，营造出质朴松弛的疗愈氛围。',
    metrics: [
      { label: '营造核心', value: '修旧如旧' },
      { label: '空间表达', value: '新旧共生' },
      { label: '风土材质', value: '古窑青砖' }
    ],
    challenge: ' 传统窑体物理限制痛点：如何在深度进深、采光严重不足且旧土砖瓦易碎起屑的传统古老窑洞空间内，引入现代舒适的水电暖风管线？',
    solution: ' 细节与景观的温柔呼应：客房以浅木与亚麻灰为基底，床头背景墙以整面木饰面打造，暗藏灯带和暖调壁灯弱化边界；室内点缀传统剪纸与山水画作，户外保留乡野原生雪景与山地景观，用石墙与木平台构建观景场景，实现“人、建筑、自然”的共生。'
  },
  { 
    id: 4, 
    slug: 'daguan-origin',
    title: '南川大观原点', 
    en: 'Daguan Origin',
    type: '文旅',
    category: '文旅综合体 / Complex', 
    img: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E5%8D%97%E5%B7%9D%E5%A4%A7%E8%A7%82%E5%BA%A6%E5%81%87%E9%85%92%E5%BA%97/%E5%A4%A7%E8%A7%82/%E5%8D%97%E5%B7%9D%E5%A4%A7%E8%A7%82.jpg',
    designerView: '本案由中国建筑设计研究院操刀。设计秉承“山中屋·屋中山”的主题，作为生态大观园5镇27村的门户枢纽，我们用竹钢、青砖回廊和圆形下沉剧场，缝合散落的田园。它不仅是个小镇地标，更是长效农文旅融合社群的发生器。',
    metrics: [
      { label: '总建筑面积', value: '18,000 ㎡' },
      { label: '农特产品牌', value: '乡颂风物' },
      { label: '周末日均人流', value: '1.5万+' }
    ],
    challenge: '如何在川东传统林盘稻田的开阔地貌边缘，植入万平米以上的限制级服务综合体，而不破坏原生态的田园天际线与村民日常人伦？',
    solution: '控制总建筑高度低于大观原生的竹林树冠；通过下沉剧场消隐体量；在边缘架设低碳稻田栈桥，让游人漫步完全顺应原有自然机能。'
  },
  { 
    id: 7, 
    slug: 'liangyu-resort',
    title: '良瑜养生度假酒店', 
    en: 'Liangyu Resort',
    type: '酒店',
    category: '度假酒店 / Resort', 
    img: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E5%8D%97%E5%B7%9D%E8%89%AF%E7%91%9C%E5%85%BB%E7%94%9F%E5%BA%A6%E5%81%87%E9%85%92%E5%BA%97/IMG_8768.jpg',
    designerView: '本项目以“将江南山水意境融入当代度假语境”为核心，打造一处藏于山林间、兼具东方礼序与自然松弛感的度假酒店。🏞️ 建筑沿山林肌理排布，以白墙黛瓦的江南建筑为基底，将飞檐、花窗、游廊等传统元素进行现代演绎；园林以“移步异景”为设计逻辑，通过白墙、水景、罗汉松与漏窗造景，让建筑本身成为山水画卷的一部分。',
    metrics: [
      { label: '设计核心', value: '山水为底' },
      { label: '空间灵魂', value: '东方为魂' },
      { label: '游园体验', value: '人在画中' }
    ],
    challenge: ' 东方礼序与大空间阻隔痛点：如何在大挑空公区大堂与餐厅过渡空间中，既体现东方礼序美学的庄重，又借助含蓄而通透的屏风遮挡弱化空间绝对边界？',
    solution: ' 推窗见山的疗愈栖居：大堂对称布局，深胡桃木格栅与山水屏风相衬；客房以浅木色与低饱和灰为基调，搭配大面积落地窗将山林云雾引入室内，无主灯暖灯带营造出极致舒适的慢调安神氛围。'
  },
  { 
    id: 9, 
    slug: 'jianjia-home',
    title: '蒹葭乡居', 
    en: 'Jianjia Home',
    type: '乡村',
    category: '精品民宿 / B&B', 
    img: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E5%85%BC%E8%91%AD%E4%B9%A1%E5%B1%85/%E8%92%B9%E8%91%AD.jpeg',
    designerView: '蒹葭苍苍，沁河微漾。在蒹葭乡居的修旧如旧实践中，我们大比例应用了反射水景水面与粗棉麻布幔的质朴对话，拒绝了一切繁复虚华的修饰。这是一种关于“时间静止”的东方人居诗性实验，用极致的质朴，提供真正的安心。',
    metrics: [
      { label: '老瓦回收数', value: '3.5万 片' },
      { label: '古柏树避让', value: '2 株' },
      { label: '手开原石材', value: '100 吨' }
    ],
    challenge: '在极度受限的旧宅断墙边界内，如何在保留两百多年老合院传统风骨的前提下，植入高强标准的现代水暖与新风调湿管线？',
    solution: '中庭设立平静水塘水面反射天光；并将排湿、换新风等复杂管线平埋于石基，上层由天然竹钢板格栅架空木台。'
  },
  { 
    id: 10, 
    slug: 'fuxian-villa',
    title: '抚仙湖私邸', 
    en: 'Fuxian Lake Villa',
    type: '私宅',
    category: '私宅 / Villa', 
    img: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E6%8A%9A%E4%BB%99%E6%B9%96%E5%BA%A6%E5%81%87%E6%88%BF/IMG_8069.jpg',
    designerView: '本项目以“自然为底，野奢为魂”为核心，将侘寂的松弛质感与波西米亚的自由气息相融，打造一处与山海共生、适配度假生活的疗愈居所。🌿 公区以大尺度落地窗打造“室内庭院”，让树木成为天然画景，注入自由松弛氛围。🛏️ 卧室与露台采用暖棕与雾霾蓝为主调，配合亚麻床品，露台直面山海，将度假感延伸至生活的每一处。',
    metrics: [
      { label: '设计灵魂', value: '自然为底' },
      { label: '度假美学', value: '野奢为魂' },
      { label: '核心逻辑', value: '消弭边界' }
    ],
    challenge: ' 湖景隔绝与强日照痛点：如何在大平层空间中，打破室内与自然的物理阻隔，消弭起居室与室外高原大湖紫外线强日照边界？',
    solution: ' 核心设计逻辑：以“消弭边界”为底层逻辑，通过通透玻璃隔断、温润原木材质与柔和自然光；配以波西米亚元素，在侘寂静谧中注入自由，实现“身处室内，心归山海”的度假式居住体验。'
  },
  {
    id: 11,
    slug: 'zhongye-tongquetai',
    title: '中冶铜雀台',
    en: 'Zhongye Tongquetai',
    type: '私宅',
    category: '私宅 / Villa',
    img: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E4%B8%AD%E5%86%B6%E9%93%9C%E9%94%A3%E5%8F%B0/LFF_2453%20%E6%8B%B7%E8%B4%9D.jpg',
    designerView: '本项目以「东方雅致与现代简约共生」为核心，打造兼具社交仪式感与居住松弛感的都市奢居空间。公区以自然肌理承载社交，茶室以浅木饰面为底，搭配山水流动水墨画与长吊灯利落线条，温润而克制；客餐厅采用通透联动布局，浅灰布艺与大理石金属茶几冷暖相扣，餐厅选用白色岩板长桌与黄铜吊灯，兼顾日常用餐与轻社交，营造高级而不冰冷的质感。',
    metrics: [
      { label: '建筑格调', value: '东方雅致' },
      { label: '空间美学', value: '现代简约' },
      { label: '核心体验', value: '社交仪式' }
    ],
    challenge: ' 空间与功能失衡痛点：如何在相对受限的都市大平层空间内，通过材质的肌理碰撞与无主灯设计，在卧室构筑低饱和色调的疗愈睡眠场场域？',
    solution: ' 艺术与功能的平衡：卧室以浅灰+橡木为主调，床头结合木饰面与大理石，床品选用米白搭配墨绿，纱帘柔化自然光。灯光以线性吊灯、壁灯与落地灯组合，用柔和光影塑造空间层次，避免过度堆砌，让空间回归休憩的本质。'
  },
  {
    id: 12,
    slug: 'yorkville-villa',
    title: '约克郡',
    en: 'Yorkville Villa',
    type: '私宅',
    category: '私宅 / Villa',
    img: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E7%BA%A6%E5%85%8B%E9%83%A1%E7%8B%AC%E6%A0%8B%E5%88%AB%E5%A2%85/14%20WechatIMG8549.jpg',
    designerView: '本项目以“流动线条包裹多元生活场景”为核心，打破传统空间的刻板边界，用柔和有机的曲线语言串联不同功能区。公区融合曲线与艺术，客厅以奶油色弧形沙发为轴，呼应墙面抽象艺术画的流动感；过渡空间采用流畅的旋转楼梯，白色哑光护板搭配玻璃扶手，使原木踏步与墙面装置产生呼应，成为空间的“动态雕塑”。',
    metrics: [
      { label: '核心元素', value: '流动线条' },
      { label: '空间调性', value: '曲线语言' },
      { label: '核心体验', value: '动态雕塑' }
    ],
    challenge: ' 多元场景与个性冲突痛点：如何在统一的松弛调性下，融合奶油白、原木、深棕与墨绿，打造兼具美式复古与现代简约的高级情绪休闲场场域？',
    solution: ' 个性场景的情绪表达：休闲区采用墨绿色绒面躺椅搭配低饱和原木肌理画，静谧舒适；多功能区则由深色胡桃木墙面、黑色皮质沙发、复古棕皮椅与金属茶几构成，让空间既保有一致的松弛，又展现多元个性的美学张力。'
  },
  {
    id: 13,
    slug: 'zigong-howard-johnson',
    title: '自贡豪生酒店',
    en: 'Howard Johnson Zigong',
    type: '酒店',
    category: '度假酒店 / Hotel',
    img: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E8%87%AA%E8%B4%A1%E8%B1%AA%E7%94%9F%E9%85%92%E5%BA%97/%E5%85%AC%E5%8C%BA%E5%A4%A7%E5%A0%82/039A5563.jpg',
    designerView: '本项目以“融东方礼序于当代奢雅，让传统意境与现代质感共生”为核心，打造兼具仪式感与静谧感的高端空间。大堂对称布局呼应东方建筑礼序，深胡桃木搭配金属线条沉稳大气；巨型琉璃吊灯层叠演绎“山水”意象，倒影如镜。过渡空间格栅木构构成“呼吸界面”，含蓄而通透，营造高级而不冰冷的质感。',
    metrics: [
      { label: '设计核心', value: '东方礼序' },
      { label: '空间美学', value: '当代奢雅' },
      { label: '核心体验', value: '移步异景' }
    ],
    challenge: ' 公共大堂挑空声学痛点：如何在18米挑高、超大体量空腔的公共大堂内，既维持东方空间含蓄与通透，又有效控制声波混响并保障气流冷热循环？',
    solution: ' 客房与园林内外共生：客房背景墙以简化中式花窗线条为元素，结合温润皮革与亚麻，无主灯温润柔和；外部以廊亭、白砂造景移步异景，让建筑成为连接传统园林意境与当代舒适的完美载体。'
  },
  {
    id: 14,
    slug: 'huahai-villa-hotel',
    title: '花海别墅酒店',
    en: 'Flora Villa Hotel',
    type: '酒店',
    category: '度假酒店 / Hotel',
    img: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E8%8A%B1%E6%B5%B7%E5%88%AB%E5%A2%85%E9%85%92%E5%BA%97/%E5%8D%97%E5%B7%9D%E5%A4%A7%E8%A7%823.jpg',
    designerView: '本项目以“融于自然，归于静谧”为核心，打造一处藏于竹海深处的疗愈型度假空间。🌿 建筑设计采用与竹林共生的有机形态，以起伏的弧形屋面模拟山峦轮廓，消解体量感，让建筑如同从竹林中自然生长而出；立面融入深灰石材与原木构件，搭配通透的玻璃幕墙，弱化人工与自然的边界。🪑 室内以微水泥墙面、温润原木与亚麻织物营造侘寂风松弛氛围，客厅采用挑高落地窗引入竹林光影，让每一处细节都承载自然诗意。',
    metrics: [
      { label: '项目核心', value: '融于自然' },
      { label: '氛围导向', value: '归于静谧' },
      { label: '设计逻辑', value: '消隐建筑' }
    ],
    challenge: ' 建筑设计痛点：如何在起伏的竹林山势与缓坡中，消解大体量度假别墅的突兀体量感，建立人与自然共生的沉浸式半户外过渡场景？',
    solution: ' 核心设计逻辑：以“消隐建筑、激活自然”为底层逻辑。底层设计开放式檐下空间，以木质格栅与毛石矮墙围合休憩区，屋面采用仿木瓦片，立面融入深灰石材与原木，让建筑成为自然的“配角”，让室内侘寂风氛围成为疗愈情绪的载体。'
  },
  {
    id: 15,
    slug: 'daguan-resort-hotel',
    title: '大观度假酒店',
    en: 'Daguan Resort Hotel',
    type: '酒店',
    category: '度假酒店 / Hotel',
    img: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E5%8D%97%E5%B7%9D%E5%A4%A7%E8%A7%82%E5%BA%A6%E5%81%87%E9%85%92%E5%BA%97/%E5%A4%A7%E8%A7%82/%E5%8D%97%E5%B7%9D%E5%A4%A7%E8%A7%8217.jpg',
    designerView: '本项目以“从自然中取材，在空间中叙事”为核心，将在地木材、石材与艺术装置相融，打造一处让住客沉浸式感受自然肌理与东方意境的疗愈型度假空间。🌿 公区以自然为底、艺术为语，接待台以温润木构搭配大理石，大理石地面与挑高的木格栅天花呼应，传递质朴而高级的自然质感；🛏️ 客房以树木纹理为元素，无主灯设计与暗藏灯带弱化边界，让住客获得松弛休憩体感。',
    metrics: [
      { label: '设计核心', value: '材质叙事' },
      { label: '空间语言', value: '艺术为语' },
      { label: '核心体验', value: '入则静谧' }
    ],
    challenge: ' 自然材质活化痛点：如何在大面积使用粗砺原木、炭化老杉木等原生风物物料的同时，保障接待大堂的高级奢雅，并消除大空间挑空结构易生的温差死角？',
    solution: ' 材质叙事与内外共生：公区设计悬挂式木片矩阵与墙面木石拼贴，将山水转化为触觉肌理；户外利用廊亭、假山、白砂造景，以移步异景的古典框景手法连接大观花海的自然风风貌。'
  },
  {
    id: 16,
    slug: 'pingyao-ancient-city',
    title: '平遥古城文旅创建',
    en: 'Pingyao Ancient City Restoration',
    type: '文旅',
    category: '文旅综合体 / Complex',
    img: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E5%B9%B3%E9%81%A5%E5%8F%A4%E5%9F%8E/%E5%85%A8%E8%B2%8C.jpg',
    designerView: '以世界文化遗产保护为核心，晋商文化为灵魂，坚守“保护优先、活态传承”原则，完整保留明清城垣与原生肌理，不迁原住民、不搞拆真建假。深度挖掘晋商汇通天下的历史底蕴与北方民俗烟火气，以《又见平遥》实景演艺为破圈抓手，活化非遗匠艺、古城商脉与市井生活。',
    metrics: [
      { label: '活态保护', value: '不迁原住民' },
      { label: '文化品牌', value: '又见平遥' },
      { label: '运营布局', value: '一城两寺' }
    ],
    challenge: ' 遗产活化痛点：如何在严格守护世界文化遗产明清古城肌理的前提下，引入沉浸式夜游与元宇宙数字体验场景，实现烟火气留存与文物保护的共生？',
    solution: ' 保护与活态双赢：创新“文旅+科技”模式打造数字古城与元宇宙场景，升级影像展、电影展节庆IP；推动“游在古城、住在古村”联动周边堡群，实现文脉传承、商业共生与原乡留存的四维共赢，打造国际知名的中国古城文旅标杆。'
  },
  {
    id: 17,
    slug: 'qinghai-lake-eco',
    title: '青海湖生态旅游',
    en: 'Qinghai Lake Ecological Reserve',
    type: '文旅',
    category: '文旅综合体 / Complex',
    img: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E7%9F%B3%E5%A4%B4.jpg',
    designerView: '秉持“生态优先、保护为基”，紧扣“共抓大保护、不搞大开发”，以创建国际生态旅游目的地示范区为目标，严格守护青藏高原生态屏障与生物多样性。构建“一芯一环多带”发展格局，依托“中国最美湖泊”的高原风光，打造生态观光、自然教育、环湖自驾、星空露营与民族文化体验五大产品体系。',
    metrics: [
      { label: '核心底线', value: '生态优先' },
      { label: '发展格局', value: '一芯一环' },
      { label: '产品体系', value: '五大板块' }
    ],
    challenge: ' 高原生态平衡限制：如何在保护青藏高原极敏感的湖泊湿地生物多样性的同时，满足环湖自驾与深度自然科普教育的需求？',
    solution: ' 保护为基深体验：实施“不做大开发、只做深体验”策略，建设生态景观公路与低碳配套驿站；严格推行三证管理，深度融合藏族游牧文化与非遗，实现生态保护、民生保障与绿色旅游的协同统一，建设全季全域、主客共享的世界级高原生态旅游胜地。'
  },
  {
    id: 18,
    slug: 'nanchuan-jinfuoshan',
    title: '南川金佛山',
    en: 'Nanchuan Jinfoshan World Heritage',
    type: '文旅',
    category: '文旅综合体 / Complex',
    img: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E9%87%91%E4%BD%9B%E5%B1%B1/%E5%B1%B1.jpeg',
    designerView: '立足世界自然遗产稀缺禀赋，以“金佛山・世界遗产奇观”为核心品牌，坚持生态优先、绿色发展，守护“地球生物基因库”与“中华药库”的原生态本底。聚焦“山、佛、金”三篇文章，重塑祈福文化、自然研学、山地运动三大核心业态，构建“春赏花、夏避暑、秋登山、冬滑雪”的全季节产品体系。',
    metrics: [
      { label: '核心地位', value: '世界自然遗产' },
      { label: '环山自驾', value: '大金佛山178' },
      { label: '季节运营', value: '全季全域' }
    ],
    challenge: ' 世界自然遗产活化限制：如何摆脱传统文旅过度依赖门票经济的粗放开发状态，在严格保护中华药库生物本底的前提下实现全产业转型？',
    solution: ' 景村一体产业转型：深挖佛教文化、古佛洞遗址与三线建设精神，融合森林康养、洞穴体验与自驾，打造“大金佛山 178 环山趣驾”品牌，完善快进慢游配套，建设世界级山地康养旅游目的地与国家级旅游度假区。'
  }
];

const brandPartners = [
  '喜来登歐庭国際酒店', '豪生大酒店', '金陵酒店', 
  '金陽大酒店', '寧夏華祺國際飯店', '瑞祥國際大酒店', '寶難萬國酒店', 
  '索美麗雅酒店', '大足開元觀塘酒店', '開元名都大酒店', '西安高新酒店', 
  '恒旭大酒店', '麗柏酒店', '世纪精華心景酒店', '柏天酒店', 
  '寶柏精品酒店', '成都閱明酒店', '白雲新舍酒店', '雲涧酒店', 
  '林芝樾酒店', '重鏖半山子語酒店', '大理塵外酒店', '龍隅酒店', 
  '木原町酒店', '科力酒店', '喜都酒店', '奈思酒店', 
  '红璞酒店', '蒹葭鄉居', '大觀原點', '大觀·花海别墅酒店', 
];

const CaseArchives: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [selectedCase, setSelectedCase] = useState<CaseItem | null>(null);

  const filteredCases = selectedCategory === '全部' 
    ? casesData
    : casesData.filter(c => c.type === selectedCategory);

  // 1. Safe Mobile-First Scroll Lock
  React.useEffect(() => {
    if (selectedCase) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [selectedCase]);

  // 2. Keyboard Navigation - ESC key modular closing
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCase(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // 3. Secure image error loop breaker
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    target.onerror = null; // cut infinite loop
    target.src = "https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/DAC%20Office/IMG_0003.jpg";
  };

  return (
    <main className="bg-[#0a0a0a] text-[#d4d4d4] min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-[1800px] mx-auto space-y-20">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-white/5 pb-10">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-[10px] tracking-[0.5em] text-[#c5a059] uppercase block font-mono">物理实践档案</span>
            <h1 className="text-4xl md:text-7xl font-serif-sc text-white leading-none">
              物理营造档案。
            </h1>
          </div>
          <div className="lg:col-span-4 border-l border-[#c5a059]/30 pl-6">
            <p className="text-xs md:text-sm text-white/40 tracking-[0.2em] leading-relaxed uppercase font-light">
              我们通过极度的美学克制与结构安全验证，在绝壁松林、古老原土及避让古树旁，刻划时间的印记。
            </p>
          </div>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap gap-3">
          {categories.map(cat => (
            <button
              key={cat.cn}
              onClick={() => setSelectedCategory(cat.cn)}
              className={`py-2 px-6 border text-xs font-medium tracking-widest transition-all duration-500 rounded-sm focus:outline-none uppercase ${
                selectedCategory === cat.cn 
                  ? 'border-[#c5a059] bg-[#c5a059]/5 text-white'
                  : 'border-white/5 text-white/40 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat.cn} / {cat.en}
            </button>
          ))}
        </div>

        {/* Grid of Cases */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCases.map((item, idx) => (
              <motion.article
                layout
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                onClick={() => setSelectedCase(item)}
                className="bg-[#141414] border border-white/5 hover:border-[#c5a059]/30 rounded-sm overflow-hidden shadow-lg cursor-pointer transition-all duration-500 group flex flex-col justify-between min-h-[350px]"
              >
                <figure className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover brightness-[0.7] group-hover:brightness-95 transition-all duration-1000 group-hover:scale-103"
                    onError={handleImageError}
                  />
                  <figcaption className="absolute top-4 left-4 bg-black/60 border border-white/10 text-[9px] text-[#c5a059] tracking-widest uppercase px-2.5 py-1 font-mono rounded-sm">
                    {item.category.split(' / ')[0]}
                  </figcaption>
                </figure>
                
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <header className="flex justify-between items-baseline">
                      <span className="text-[9px] text-white/30 font-mono">营造档案</span>
                      <span className="text-[9px] tracking-widest uppercase text-[#c5a059] font-mono">{item.en}</span>
                    </header>
                    <h3 className="text-lg md:text-xl font-serif-sc text-white/95 font-bold group-hover:text-[#c5a059] transition-colors duration-500">
                      {item.title}
                    </h3>
                  </div>

                  <div className="flex justify-between items-center border-t border-white/5 pt-4">
                    <span className="text-[9px] text-white/20 tracking-wider font-mono uppercase">营造实践</span>
                    <div className="flex items-center gap-1 text-xs text-[#c5a059] font-mono">
                      探索详情 <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Brand Partners Section */}
        <section className="space-y-8 pt-16 border-t border-white/5">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[10px] tracking-[0.4em] text-[#c5a059] uppercase font-mono font-bold block">合作联合体展示</span>
            <h2 className="text-2xl md:text-4xl font-serif-sc text-white/90">
              我们与顶尖品牌共同前行。
            </h2>
            <p className="text-xs text-white/40 font-light leading-relaxed">
              达成文化（DAC）与全球先锋酒店管理机构及文旅资产方深度伴行，在不同维度共创具备长期资产溢价与情绪深度的未来生活文明。
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            {brandPartners.map((brand) => (
              <div 
                key={brand}
                className="p-4 bg-[#141414] border border-white/5 text-center rounded-sm hover:border-[#c5a059]/40 transition-all duration-300 group"
              >
                <span className="text-xs text-white/60 group-hover:text-[#c5a059] transition-colors block font-serif-sc tracking-wider">{brand}</span>
                <span className="text-[8px] tracking-wider text-white/25 font-mono uppercase block mt-1">合作伙伴</span>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Detailed Overlay Modal Drawer */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCase(null)}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#121212] max-w-4xl w-full rounded-sm border border-[#c5a059]/30 overflow-hidden shadow-2xl flex flex-col md:flex-row text-left max-h-[90vh]"
            >
              {/* Left Column: Visual Image + Core Metrics */}
              <div className="w-full md:w-1/2 relative flex flex-col justify-between bg-black">
                <button 
                  onClick={() => setSelectedCase(null)}
                  className="absolute top-4 left-4 z-20 w-8 h-8 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#c5a059] md:hidden"
                >
                  <X size={16} />
                </button>

                <div className="relative aspect-[16/10] md:aspect-auto md:flex-1 overflow-hidden">
                  <img 
                    src={selectedCase.img} 
                    alt={selectedCase.title} 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover brightness-75"
                    onError={handleImageError}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </div>

                {/* Metrics specs on bottom of left image */}
                <div className="p-6 space-y-4 relative z-10">
                  <h4 className="text-[10px] tracking-widest text-[#c5a059] font-mono uppercase border-b border-white/5 pb-2 flex items-center gap-2">
                    <Award size={12} /> 场域营造指标 Specifications
                  </h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {selectedCase.metrics.map(m => (
                      <div key={m.label} className="space-y-1">
                        <div className="text-[8px] text-white/30 uppercase tracking-wider font-mono font-light">{m.label}</div>
                        <div className="text-sm md:text-base font-serif-sc font-bold text-white/90">{m.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Detailed Editorial Narrative */}
              <div className="w-full md:w-1/2 p-6 md:p-10 overflow-y-auto space-y-6 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono text-[#c5a059] tracking-widest uppercase">{selectedCase.category}</span>
                      <h3 className="text-xl md:text-2xl font-serif-sc text-white font-bold">{selectedCase.title}</h3>
                    </div>
                    <button 
                      onClick={() => setSelectedCase(null)}
                      className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/55 hover:text-[#c5a059] hover:border-[#c5a059] transition-all hidden md:flex"
                    >
                      <X size={14} />
                    </button>
                  </div>

                  <div className="w-12 h-0.5 bg-[#c5a059]/40" />

                  <p className="text-xs md:text-sm text-white/80 leading-relaxed font-light italic pl-4 border-l-2 border-[#c5a059]/40">
                    “{selectedCase.designerView}”
                  </p>

                  <div className="space-y-4 pt-2 text-xs text-white/50 leading-relaxed font-light">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#c5a059] font-bold uppercase">
                        <Target size={12} /> 物理关隘 (Hurdle)
                      </div>
                      <p>{selectedCase.challenge}</p>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#c5a059] font-bold uppercase">
                        <Compass size={12} /> 解决方案 (Resolution)
                      </div>
                      <p>{selectedCase.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 flex justify-between items-center text-[9px] tracking-widest text-white/20 font-mono uppercase">
                  <span>DAC 达成文化 · 案例系统</span>
                  <button 
                    onClick={() => setSelectedCase(null)}
                    className="text-[#c5a059] hover:underline cursor-pointer"
                  >
                    Close / 关闭
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default CaseArchives;

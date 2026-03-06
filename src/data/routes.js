export const walkRoutes = [
  {
    id: 1,
    title: "市中心人文线",
    distance: "1.5km",
    duration: "45分钟",
    description: "从正阳步行街出发，穿过古色古香的东西巷，最后登顶逍遥楼远眺。",
    theme: "历史文化",
    color: "#8B4513",
    points: [
      { name: "正阳步行街", desc: "热闹的商业街，从桂林中心出发。", transport: "起点" },
      { name: "东西巷", desc: "明清风格历史街巷，拍照圣地。", transport: "步行5分钟" },
      { name: "逍遥楼", desc: "重建的唐代名楼，俯瞰漓江。", transport: "步行5分钟" }
    ]
  },
  {
    id: 2,
    title: "城徽经典线",
    distance: "2.0km",
    duration: "1小时",
    description: "领略桂林城徽象鼻山，打卡日月双塔，漫步两江四湖。",
    theme: "自然风光",
    color: "#0000AA",
    points: [
      { name: "象鼻山", desc: "桂林的象征，水月洞奇观。", transport: "骑行15分钟" },
      { name: "日月双塔", desc: "杉湖中的璀璨明珠。", transport: "步行5分钟" },
      { name: "两江四湖", desc: "环城水系，如梦如幻。", transport: "步行10分钟" }
    ]
  },
  {
    id: 3,
    title: "龙脊梯田秘境",
    distance: "80km",
    duration: "2.5小时",
    description: "向北探索宏伟的龙脊梯田，探访黄洛瑶寨长发村。",
    theme: "壮美山河",
    color: "#00AA00",
    points: [
      { name: "龙脊梯田", desc: "世界梯田之冠，震撼人心。", transport: "驾车1.5小时" },
      { name: "黄洛瑶寨", desc: "天下第一长发村。", transport: "驾车30分钟" },
      { name: "金坑大寨", desc: "梯田景观最壮丽的区域。", transport: "驾车30分钟" }
    ]
  },
  {
    id: 4,
    title: "阳朔风情线",
    distance: "65km",
    duration: "2.5小时",
    description: "前往阳朔，体验西街的繁华与十里画廊的如画风景。",
    theme: "民俗风情",
    color: "#FFAA00",
    points: [
      { name: "西街", desc: "洋人街，阳朔最古老繁华的街道。", transport: "驾车2小时" },
      { name: "十里画廊", desc: "如诗如画的田园风光。", transport: "骑行10分钟" }
    ]
  },
  {
    id: 5,
    title: "古镇寻幽",
    distance: "25km",
    duration: "40分钟",
    description: "探访漓江畔的大圩古镇，感受时光的静谧。",
    theme: "古镇文化",
    color: "#555555",
    points: [
      { name: "大圩古镇", desc: "广西四大古镇之一，石板路诉说着历史。", transport: "驾车35分钟" }
    ]
  }
];

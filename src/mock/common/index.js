const avatars = [
  'https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png',
  'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
  'https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png',
  'https://gw.alipayobjects.com/zos/rmsportal/WhxKECPNujWoWEFNdnJE.png',
  'https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png',
  'https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png'
]

const positions = [
  {
    CN: '管理员 | PAP-WE-1-后台管理',
    HK: 'Java工程師 | 螞蟻金服-計算服務事業群-微信平台部',
    US: 'Java engineer | Ant financial - Computing services business group - WeChat platform division'
  }
]

const sayings = [
  '那是一种内在的东西，他们到达不了，也无法触及的',
  '希望是一个好东西，也许是最好的，好东西是不会消亡的',
  '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
  '那时候我只会想自己想要什么，从不想自己拥有什么'
]

const logos = [
  'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
  'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
  'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
  'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
  'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png'
]

const admins = ['JACK', 'LUIS', 'DAVID']

const groups = [ '科学搬砖组', '程序员日常']

const users = [
  {
    name: '曲丽丽',
    avatar: avatars[0],
    groupId: 0
  },
  {
    name: '付晓晓',
    avatar: avatars[1],
    groupId: 0
  },
  {
    name: '林东东',
    avatar: avatars[2],
    groupId: 1
  },
  {
    name: '周星星',
    avatar: avatars[3],
    groupId: 2
  },
  {
    name: '朱偏右',
    avatar: avatars[4],
    groupId: 3
  },
  {
    name: '勒个',
    avatar: avatars[5],
    groupId: 4
  }
]

const teams = groups.map((item, index) => {
  return {
    name: item,
    avatar: avatars[index]
  }
})

export {logos, sayings, positions, avatars, admins, groups, users, teams}

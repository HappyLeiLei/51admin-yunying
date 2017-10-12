const { config } = require('./common')

const { apiPrefix } = config
let database = [
  {
    id: '1',
    icon: 'laptop',
    name: '仪表台',
    route: '/dashboard',
  },
  {
    id: '2',
    bpid: '1',
    name: '订单管理',
    icon: 'shopping-cart',
    route: '/UIElement/iconfont',
  },
  {
    id: '3',
    bpid: '1',
    name: '挂单管理',
    icon: 'exception',
    route: '/UIElement/iconfont',
  },
  {
    id: '4',
    bpid: '1',
    name: '行情管理',
    icon: 'area-chart',
    route: '/UIElement/iconfont',
  },
  {
    id: '5',
    bpid: '1',
    name: '会员管理',
    icon: 'user',
    route: '/UIElement/iconfont',
  },
    {
      id: '51',
      bpid: '5',
      mpid: '5',
      name: '会员设置',
      icon: 'smile-o',
      route: '/UIElement/iconfont',
    },
    {
      id: '52',
      bpid: '5',
      mpid: '5',
      name: '会员审核',
      icon: 'meh',
      route: '/UIElement/iconfont',
    },
    {
      id: '53',
      bpid: '5',
      mpid: '5',
      name: '会员挂起',
      icon: 'frown-o',
      route: '/UIElement/iconfont',
    },
  {
    id: '6',
    bpid: '1',
    name: '商品管理',
    icon: 'shop',
    route: '/UIElement/iconfont',
  },
  {
    id: '7',
    bpid: '1',
    name: '交易设置',
    icon: 'bank',
    route: '/UIElement/iconfont',
  },
  {
    id: '8',
    bpid: '1',
    name: '支付模块',
    icon: 'wallet',
    route: '/UIElement/iconfont',
  },
  {
    id: '9',
    bpid: '1',
    name: '系统维护',
    icon: 'setting',
  },
    {
      id: '91',
      bpid: '9',
      mpid: '9',
      name: '用户管理',
      icon: 'user-add',
      route: '/UIElement/iconfont',
    },
    {
      id: '92',
      bpid: '9',
      mpid: '9',
      name: '角色管理',
      icon: 'skin',
      route: '/UIElement/iconfont',
    },
    {
      id: '93',
      bpid: '9',
      mpid: '9',
      name: '系统基础参数',
      icon: 'tool',
      route: '/UIElement/iconfont',
    },
  {
    id: '10',
    bpid: '1',
    name: '日志管理',
    icon: 'switcher',
  },
    {
      id: '101',
      bpid: '10',
      mpid: '10',
      name: '操作日志',
      icon: 'solution',
      route: '/UIElement/iconfont',
    },
    {
      id: '102',
      bpid: '10',
      mpid: '10',
      name: '系统日志',
      icon: 'exception',
      route: '/UIElement/iconfont',
    },
  {
    id: '11',
    bpid: '1',
    name: '统计分析',
    icon: 'pie-chart',
  },
    {
      id: '111',
      bpid: '11',
      mpid: '11',
      name: '统计汇总',
      icon: 'area-chart',
      route: '/UIElement/dataTable',
    },
    {
      id: '112',
      bpid: '11',
      mpid: '11',
      name: '客户分析',
      icon: 'bar-chart',
      route: '/UIElement/iconfont',
    },
    {
      id: '113',
      bpid: '11',
      mpid: '11',
      name: '目标设置',
      icon: 'bars',
      route: '/UIElement/iconfont',
    },
  // {
  //   id: '2',
  //   bpid: '1',
  //   name: '用户',
  //   icon: 'user',
  //   route: '/user',
  // },
  // {
  //   id: '7',
  //   bpid: '1',
  //   name: '文章',
  //   icon: 'shopping-cart',
  //   route: '/post',
  // },
  // {
  //   id: '21',
  //   mpid: '-1',
  //   bpid: '2',
  //   name: 'User Detail',
  //   route: '/user/:id',
  // },
  // {
  //   id: '3',
  //   bpid: '1',
  //   name: '请求',
  //   icon: 'api',
  //   route: '/request',
  // },
  // {
  //   id: '4',
  //   bpid: '1',
  //   name: 'UI 组件',
  //   icon: 'camera-o',
  // },
  // {
  //   id: '41',
  //   bpid: '4',
  //   mpid: '4',
  //   name: '图标',
  //   icon: 'heart-o',
  //   route: '/UIElement/iconfont',
  // },
  // {
  //   id: '42',
  //   bpid: '4',
  //   mpid: '4',
  //   name: '数据表',
  //   icon: 'database',
  //   route: '/UIElement/dataTable',
  // },
  // {
  //   id: '43',
  //   bpid: '4',
  //   mpid: '4',
  //   name: '下拉菜单',
  //   icon: 'bars',
  //   route: '/UIElement/dropOption',
  // },
  // {
  //   id: '44',
  //   bpid: '4',
  //   mpid: '4',
  //   name: '搜索',
  //   icon: 'search',
  //   route: '/UIElement/search',
  // },
  // {
  //   id: '45',
  //   bpid: '4',
  //   mpid: '4',
  //   name: '编辑',
  //   icon: 'edit',
  //   route: '/UIElement/editor',
  // },
  // {
  //   id: '46',
  //   bpid: '4',
  //   mpid: '4',
  //   name: '模态窗 (Function)',
  //   icon: 'credit-card',
  //   route: '/UIElement/layer',
  // },
  // {
  //   id: '5',
  //   bpid: '1',
  //   name: '图表',
  //   icon: 'code-o',
  // },
  // {
  //   id: '51',
  //   bpid: '5',
  //   mpid: '5',
  //   name: 'LineChart',
  //   icon: 'line-chart',
  //   route: '/chart/lineChart',
  // },
  // {
  //   id: '52',
  //   bpid: '5',
  //   mpid: '5',
  //   name: 'BarChart',
  //   icon: 'bar-chart',
  //   route: '/chart/barChart',
  // },
  // {
  //   id: '53',
  //   bpid: '5',
  //   mpid: '5',
  //   name: 'AreaChart',
  //   icon: 'area-chart',
  //   route: '/chart/areaChart',
  // },

  // {
  //   id: '6',
  //   bpid: '1',
  //   name: '测试页',
  //   icon: 'setting',
  // },
  // {
  //   id: '61',
  //   bpid: '6',
  //   mpid: '6',
  //   name: 'Test Navigation1',
  //   route: '/navigation/navigation1',
  // },
  // {
  //   id: '62',
  //   bpid: '6',
  //   mpid: '6',
  //   name: 'Test Navigation2',
  //   route: '/navigation/navigation2',
  // },
  // {
  //   id: '621',
  //   bpid: '62',
  //   mpid: '62',
  //   name: 'Test Navigation21',
  //   route: '/navigation/navigation2/navigation1',
  // },
  // {
  //   id: '622',
  //   bpid: '62',
  //   mpid: '62',
  //   name: 'Test Navigation22',
  //   route: '/navigation/navigation2/navigation2',
  // },
]

module.exports = {

  [`GET ${apiPrefix}/menus`] (req, res) {
    res.status(200).json(database)
  },
}

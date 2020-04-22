Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    elements: [{
        title: '新人建议',
        name: 'suggestions',
        color: 'cyan',
        icon: 'newsfill'
      },
      {
        title: '刷初始',
        name: 'initial',
        color: 'blue',
        icon: 'newshotfill'
      },
      {
        title: '推荐阵容',
        name: 'recommended',
        color: 'purple',
        icon: 'myfill'
      },
      {
        title: '黑话合集',
        name: 'vernacular',
        color: 'mauve',
        icon: 'tagfill'
      },
      {
        title: '推图',
        name: 'push',
        color: 'pink',
        icon: 'timefill'
      },
    ],
  }
})
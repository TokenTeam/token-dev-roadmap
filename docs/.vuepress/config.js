module.exports = {
    title: 'Token团队培养方案',
    description: 'Token team dev roadmap',
    base: '/token-dev-roadmap/',      // 部署站点的基础路径
    dest: 'dist',   // build的输出位置
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
        // 默认主题配置文档:https://vuepress.vuejs.org/zh/theme/default-theme-config.html
        repo: 'https://github.com/TokenTeam/token-dev-roadmap',
        repoLabel: 'Github',

        // 导航栏
        nav: [
            { text: '基础', link: '/common/' },
            { text: '前端', link: '/front-end/' },
            { text: '后端', link: '/back-end/' },
            { text: '客户端', link: '/client/' },
            { text: '运维', link: '/operations/' },
            { text: '官网', link: 'https://itoken.team' },
        ],

        lastUpdated: 'Last Updated',

        // 以下为可选的编辑链接选项
        // 文档仓库
        docsRepo: 'TokenTeam/token-dev-roadmap',
        // 文档文件夹
        docsDir: 'docs',
        // 文档分支
        docsBranch: 'main',
        // 允许跳转源文件
        editLinks: true,
        editLinkText: '查看页面源文件'
    },

    plugins: {
        "vuepress-plugin-auto-sidebar": {
            title: {
                // 更多选项: 
                // `default`、`lowercase`、`uppercase`、`capitalize`、`camelcase`、`kebabcase`、`titlecase`
                mode: "titlecase"
            },
            sidebarDepth: 5,
        }
    },
}

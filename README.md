用到的技术点:
1.配置less支持
    1)拉取less   npm run eject
    2)安装less   npm install --save-dev less less-loader
    3)config.js中增加对less的配置
    4)增加less文件检验网页是否已经支持less
2.配置路由
3.配置路由同时,划分页面结构
    src-
        containers   容器
            -layout.jsx   主入口文件
        components   组件
        router       路由
4.底部导航
    字体图标:iconfont/icommon-font
5.顶部导航
6.焦点轮播图
    安装:npm install --save react-swipeable-views
    网址:https://github.com/oliviertassinari/react-swipeable-views
        https://react-swipeable-views.com/demos/demos/-----Autoplay模块
8.构建本地服务器
    get形式传参获取参数方式:
        var city = url.parse(req.url, true).query.city
    随机生成唯一id名方式:
        Math.random().toString().slice(2)
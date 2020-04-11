# test1

> 我的VueCli2学习测试小项目test1

## Build Setup

``` bash
# 运行该项目之前需要安装依赖
cd test1
npm install

# 运行node服务,通过 localhost:8080 访问项目
* 实际是在node环境执行build/dev-server.js, dev-server.js会去拿到config中的端口等配置，通过express起一个服务，通过插件自动打开浏览器，加载webpack编译后放在内存的bundle
npm run dev

# 最开始的测试页面(组件之间跳转演示)
http://localhost:8081/index

# 左侧点击导航,右侧显示列表(设计组件之间传递参数)
http://localhost:8081/first

# 构建页面到生产环境
* 实际上执行了build/build.js,通过webpack的一系列配置及插件，将文件打包合并丑化，并创建dist目录，放置编译打包后的文件，这将是未来用在生产环境的包。
* dist目录下的index.html和static放到部署服务器即可
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

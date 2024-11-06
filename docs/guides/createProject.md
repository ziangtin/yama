# pnpm搭建monorepo 项目

### 搭建
全局安装pnpm,创建项目文件夹
```shell
  #全局安装pnpm
  npm install -g pnpm
  mkdir yama
  cd yama
  # 创建pnpm-workspace.yaml
  touch pnpm-workspace.yaml
  vim pnpm-workspace.yaml
  # 批量创建文件夹
  mkdir -p  {packages/{ui,utils,api},apps/{docs}}
  #初始化
  pnpm init
```
项目结构
```
.
├─apps  # 应用代码目录
│  ├─docs  # 文档
│  └─micro-base # 基座
└─packages # 公共库
    ├─api # api管理
    ├─ui # 公共组件
    └─utils # 公共方法
```

新建公共库
```shell
  #初始化utils
  cd ./packages/utils
  pnpm init
```
修改packages/utils/package.json

一次将公共库添加到根目录的依赖
```shell
  pnpm add  yama-utils@workspace:^ -w
  pnpm add  yama-ui@workspace:^ -w
```

app下面创建项目
```shell
  #创建vue项目
  cd ./app
  pnpm create vite
```
将 apps/micro-base下面的生成的package.json 里的依赖配置剪切到根目录下的 package.json
在跟目录执行
```shell
  # -w 依赖安装到根目录的node_module
  pnpm install -w
  # 如果要在指定的应用中安装依赖，使用 --filter 参数，比如：
  pnpm --filter api add axios
  #或者在单独的子目录中
  pnpm install

  #启动子应用 micro-base是package.json的name
  pnpm --filter micro-base dev
```












## 个人主页

基于 Vue 的个人主页，刚接触 Vue 不太会用各种插件，代码有点难看，大佬们见谅

### Demo

- [预览](https://rusin7.com)

### 修改

图标默认采用 Font Awesome，如需修改图标，请前往 [Font Awesome](https://fa6.dashgame.com/) 复制图标

- 修改联系方式 **`src/config/links.json`** 文件中的内容值即可。
- 修改网站列表 **`src/config/site.json`** 文件中的内容值即可。
- 修改网站信息 **`.env`** 文件中的内容值即可。

### 部署

* **安装** [node.js](https://nodejs.org/zh-cn/) **环境**。

  > node > 16.16.0
  > npm > 8.15.0

* 然后以 **管理员权限** 运行 `cmd` 终端，并 `cd` 到 项目根目录
* 在 `终端` 中输入：

```bash
# 安装依赖
npm install
# 预览
npm run dev
# 构建
npm run build
```

> 构建完成后，静态资源会在 **`dist` 目录** 中生成，可将 **`dist` 文件夹下的文件**上传至服务器，也可使用 `Vercel`、`github pages` 等托管平台一键导入并自动部署。

### Vercel 部署

> 点击后自动部署并创建仓库

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ruying-suixing/go&repository-name=go)

### Github 部署

[新建仓库](https://github.com/new)，上传 dist 目录中的所有内容，[Settings → Pages](https://github.com/<username>/<reponame>/settings/pages) $\to$ Build and deployment $\to$ Branch $\to$ main $\to$ Save，在 https://\<username\>.github.io/\<reponame\> 访问。

![图片炸了](https://cloudflare-imgbed-1.pages.dev/file/1774175836586_%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202026-03-22%20183633.png)
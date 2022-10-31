## picgo-plugin-light-picture

<!-- [![下载](https://img.shields.io/npm/dm/picgo-plugin-smms-user.svg?color=brightgreen)](https://npmcharts.com/compare/picgo-plugin-light-picture?minimal=true)
[![版本](https://img.shields.io/npm/v/picgo-plugin-smms-user.svg?color=brightgreen)](https://www.npmjs.com/package/picgo-plugin-light-picture) -->
[![许可](https://img.shields.io/badge/license-mit-brightgreen.svg)](https://github.com/xlzy520/picgo-plugin-smms-user/blob/master/License)


为 [PicGo](https://github.com/Molunerfinn/PicGo) 开发的一款插件，用于 [LightPicture](https://github.com/osuuu/LightPicture) 图床。
LightPicture是一个使用thinkphp+vue开发，前后端分离的企业/团队图床系统。部署完图床系统后在插件输入你的系统的访问地址以及key即可使用。

### 安装

- 在线安装

    打开 [PicGo](https://github.com/Molunerfinn/PicGo) 详细窗口，选择**插件设置**，搜索**light-picture**安装，然后重启应用即可。

- 离线安装

    克隆该项目，复制项目到 以下目录：
    - Windows: `%APPDATA%\picgo\`
    - Linux: `$XDG_CONFIG_HOME/picgo/` or `~/.config/picgo/`
    - macOS: `~/Library/Application\ Support/picgo/`

    切换到目录执行 `npm install ./picgo-plugin-smms-user`，然后重启应用即可。

### 截图

![](https://sslbackend.deercloud.site:450/LightPicture/2022/10/d979ef86c966701d.png)

### 配置

注意⚠️：key在LightPicture右上角的个人资料里，不在左侧菜单的接口那里。

|参数名称|类型|描述|是否必须|
|:--:|:--:|:--:|:--:|
|服务器地址|input|即LightPicture网页地址（除非你的前后短分离部署的）|true|
|Key|input|Key即API密钥|true|
<!--
 * @Author: 姜彦汐
 * @Date: 2021-01-02 20:50:14
 * @LastEditors: 姜彦汐
 * @LastEditTime: 2021-01-02 21:11:29
 * @Description: 
 * @Contact: jiangyanxi@live.com
 * @FilePath: /egg-zip/README.md
-->
# egg-zip

## 安装

```bash
$ npm i egg-zip --save
# or
$ yarn add egg-zip
```

## 依赖说明

### 依赖的 egg 版本

egg-zip 版本 | egg 2.x | egg 1.x
--- | --- | ---
1.x | 😁 | ❌

### 依赖的插件

## 使用

```js
// {app_root}/config/plugin.js
exports.zip = {
  enable: true,
  package: 'egg-zip',
};
```

## 配置

```js
// {app_root}/config/config.default.js
exports.zip = {
  level: 9 // 压缩等级
};
```

## 示例

```js
// 压缩
await this.app.zip.zip(zips, output, level)
// 解压
await this.app.zip.unzip(zipFile, output)
```

## License

[MIT](LICENSE)

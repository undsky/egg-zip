# egg-zip

> Egg plugin for zip


## 安装

```bash
$ npm i egg-zip --save
# or
$ yarn add egg-zip
```

## 依赖说明

### 依赖的 egg 版本

egg 2.x | egg 1.x
--- | ---
😁 | ❌

### 依赖的插件

[archiver](https://github.com/archiverjs/node-archiver)

[node-stream-zip](https://github.com/antelle/node-stream-zip)

## 开启插件

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
config.zip = {

};
```

## 示例

## [查看更多项目](https://www.undsky.com)

## License

[MIT](LICENSE)
/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1612183670337_6375';

  // add your middleware config here
  // config.middleware = ['forbidIp', 'author'];
  // config.forbidIp = { whiteList: ['127.0.0.1'] }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks' //左边写成.html后缀，会自动渲染.html文件
    },
  }
  config.requestUrl = 'http://www.phonegap100.com'
  // mongo
  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1/wgtest',  //你的数据库地址，不要端口
      options: {
        useNewUrlParser: true,
      },
    }
  }


  return {
    ...config,
    ...userConfig,
  };
};

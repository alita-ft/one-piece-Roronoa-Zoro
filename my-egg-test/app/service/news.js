'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async getNewsList() {
    let list = await this.ctx.curl(this.config.requestUrl + '/appapi.php/?a=getPortalList&catid=20&page=1', { dataType: 'json' })
    return list
  }
}

module.exports = NewsService;

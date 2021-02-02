'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  async getList() {
    const list = ['111', '222', '333'];
    return list;
  }
}

module.exports = HomeService;

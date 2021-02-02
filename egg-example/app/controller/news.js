'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    const { ctx } = this
    ctx.body = '新闻列表'
  }
}

module.exports = NewsController;

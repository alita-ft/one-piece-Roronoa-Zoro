'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    const { ctx } = this
    ctx.body = '新闻列表'
  }

  async setCookie() {
    this.ctx.cookies.set('userName', 'yqc', {
      maxAge: 1000 * 30
    })
    this.ctx.body = JSON.stringify({ name: 'yqc', age: 18 })
  }

}

module.exports = NewsController;

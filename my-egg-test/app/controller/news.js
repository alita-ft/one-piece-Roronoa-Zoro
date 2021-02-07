'use strict';

const helper = require('../extend/helper');

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    let res = await this.service.news.getNewsList()
    let list = res.data.result

    list = {
      title: '1111'
    }
    await this.ctx.render('home', { list })
  }
}
module.exports = NewsController;
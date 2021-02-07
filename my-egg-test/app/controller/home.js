'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.cookies.set('username', 'yangqiancheng')
    let value = ctx.cookies.get('username')
    console.log(value);
    await ctx.render('home', { csrf: ctx.csrf })
  }
  async add() {
    let data = this.ctx.request.body
  }
  async API1() {
    this.ctx.body = JSON.stringify("API1")
  }
  async API2() {
    this.ctx.body = "API2"
  }
}


module.exports = HomeController;

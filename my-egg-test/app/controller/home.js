'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.cookies.set('username', 'yqc', {
      maxAge: 1000 * 20,
      httpOnly: false
    })
    let username = ctx.cookies.get('username')
    console.log(username);
    // let value = ctx.cookies.get('username')
    // await ctx.render('home', { csrf: ctx.csrf })
    ctx.body = 'cookie'
  }
  async login() {
    this.ctx.cookies.set("token", 'qwerqqq', {
      maxAge: 1000 * 3600 * 24,
      httpOnly: true,
      signed: true,
      encrypt: true
    })
    this.ctx.body = 'ok'
  }
  async getToken() {
    let token = this.ctx.cookies.get('token')
    console.log(token);
    this.ctx.body = 'token'
  }

}


module.exports = HomeController;

'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async login() {
    let { code } = this.ctx.query
    let url = `https://api.weixin.qq.com/sns/jscode2session?appid=${this.config.app.appid}&secret=${this.config.app.secret}&js_code=${code}&grant_type=authorization_code`
    const res = await this.ctx.curl(url, {
      dataType: 'json',
      timeout: 3000
    })
    let userInfo = await this.getUserInfo(res.data.openid)
    // console.log(userInfo);
    return { ...res.data, userInfo }
  }
  async getUserInfo(openid, jobNumber) {
    let str = ''
    if (openid) {
      str = `openId='${openid}'`
    } else if (jobNumber) {
      str = `jobNumber='${jobNumber}'`
    }
    let query = `select * from user where ${str}`
    let res = await this.app.mysql.query(query, {
      dataType: 'json'
    })
    return res.length == 0 ? {} : res[0]
  }

  async binding() {
    let { jobNumber, openid } = this.ctx.request.body
    let res = await this.getUserInfo(null, jobNumber)
    if (!res.jobNumber) {
      return { code: 1, msg: '该工号不存在' }
    } else {
      if (res.openId) {
        return { code: 1, msg: '该工号已被绑定' }
      } else {
        let query = `UPDATE USER SET openId='${openid}' WHERE jobNumber='${jobNumber}'`
        let res = await this.app.mysql.query(query, {
          dataType: 'json'
        })
        if (res.affectedRows) {
          let userInfo = await this.getUserInfo(openid)
          return {
            code: 0, msg: '绑定成功', userInfo
          }
        } else {
          return { code: 1, msg: '绑定失败' }
        }
      }
    }
  }
}

module.exports = UserService;


module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const OrderSchema = new Schema({
    name: {
      type: String
    },
  });
  // 返回model，其中projects为数据库中表的名称
  return mongoose.model('Projects', OrderSchema, 'user')
}

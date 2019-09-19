// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  return await db.collection('locations').add({
    data: {
      place: event.place,
      //第一个是经度（longitude），第二个是纬度（latitude）
      location: db.Geo.Point(event.longitude, event.latitude),
      show: false,
      created_at: event.created_at
    }
  })
}
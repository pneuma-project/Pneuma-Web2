// 获取历史吸雾数据（注意：老接口，所有的都不变，只加参数：startDate 和 endDate）
// * @param loginKey      用户登录凭证
//     * @param key           搜索关键字 （userId  ||   phone）
//     * @param currentPageNo 当前第几页
//     * @param pageSize      一页显示的条数
//     * @param startDate     开始时间
//     * @param endDate       结束时间
//     * @param checkSum
//     * @return
// 接口地址：http://pneuma-admin.com/pneuma-manager/web/suck/fog/get/history/data
// 参数：loginKey=0d84d928e1433298&key=13055082954&currentPageNo=0&pageSize=20&startDate=2019-05-22 17:13:01&endDate=2019-06-26 16:38:57
// 返回内容：{
//     "success": true,
//     "message": "操作成功！",
//     "code": 200,
//     "result": {
//          "pageSize": 20,
//          "totalRecord": 5,
//          "currentPageNo": 1,
//          "totalPage": 1,
//          "offset": 0,
//          "list": [
//               {
//                    "suckFogData": "103.678,147.135,148.660,144.298,134.874,87.132,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000",
//                    "dataSum": 1.037,
//                    "medicineId": "9223372036854775807",
//                    "addDate": 1561365212000
//               },
//               {
//                    "suckFogData": "92.570,131.201,142.463,160.336,161.737,165.413,166.319,144.298,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000",
//                    "dataSum": 1.782,
//                    "medicineId": "9223372036854775807",
//                    "addDate": 1561365285000
//               },
//               {
//                    "suckFogData": "100.363,142.463,151.911,164.730,165.867,129.471,17.340,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000",
//                    "dataSum": 1.283,
//                    "medicineId": "9223372036854775807",
//                    "addDate": 1561365359000
//               },
//               {
//                    "suckFogData": "104.401,147.645,152.405,150.419,100.363,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000",
//                    "dataSum": 0.908,
//                    "medicineId": "9223372036854775807",
//                    "addDate": 1561365537000
//               },
//               {
//                    "suckFogData": "124.136,175.768,193.090,202.589,202.589,202.589,202.589,201.286,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000",
//                    "dataSum": 2.952,
//                    "medicineId": "9223372036854775807",
//                    "addDate": 1561367109000
//               }
//          ]
//     }
// }


// 获取历史吸雾数据统计  （正常用药的天数、用药次数少的天数、用药次数多的天数、用药量小于训练量的天数）
// * @param loginKey  用户登录凭证
//     * @param key       搜索关键字 （userId  ||   phone）
//     * @param startDate 开始时间
//     * @param endDate   结束时间
//     * @param checkSum
// 接口地址：http://pneuma-admin.com/pneuma-manager/web/suck/fog/get/suck/data/count
// 参数：loginKey=0d84d928e1433298&key=13055082954&startDate=2019-05-22 17:13:01&endDate=2019-06-26 16:38:57
// 返回内容：{
//     "success": true,
//     "message": "操作成功！",
//     "code": 200,
//     "result": {
//          "gtDayNum": 1,
//          "ltDayNum": 33,
//          "eqDayNum": 2,
//          "ltTrainNum": 7
//     }
// }


 /**
    * 创建病人账号
    * @param loginKey     用户名
    * @param name         病人姓名
    * @param phone        病人电话
    * @param relationship 关系
    * @param sex          性别   1：男  2：女
    * @param birthday     生日  例如"2000-10-01"
    * @param race         地区
    * @param height       身高 cm
    * @param weight       体重 kg
    * @param password     密码 （md5 16位加密）
    * @param checkSum
    * @return   result :  0:异常失败   1：成功  2：该手机号已被创建
    * @throws ApiException
    */

// 接口地址：http://localhost:8080/pneuma-manager/web/login/save/patient/account
// 参数：loginKey=0d84d928e1433298&name=zhangsan&phone=18674000102020&relationship=父子&sex=1&birthday=2000-10-01&race=shanghai&height=178&weight=70&password=49ba59abbe56e05
// 返回内容：{
//     "success": true,
//     "message": "操作成功！",
//     "code": 200,
//     "result": 1
// }



/**
    * 获取病人信息
    * @param loginKey
    * @param key             搜索关键字 （name||phone） 如果未有搜索内容，默认空字符串
    * @param currentPageNo   当前第几页
    * @param pageSize        一页显示的条数
    * @param type       1:查询医生名下的病人   2：查询患者信息
    * @param checkSum
    * @return
    * @throws ApiException
    */
// 接口地址：http://localhost:8080/pneuma-manager/web/login/get/patient/info
// 参数：loginKey=0d84d928e1433298&key=13055082954&currentPageNo=0&pageSize=20&type=1
// 返回内容：{
//     "success": true,
//     "message": "操作成功！",
//     "code": 200,
//     "result": {
//          "pageSize": 20,
//          "totalRecord": 3,
//          "currentPageNo": 1,
//          "totalPage": 1,
//          "offset": 0,
//          "list": [
//               {
//                    "ssId": 10000001,
//                    "userId": 30000,
//                    "username": "admin",
//                    "password": "9def65456fc2a68a",
//                    "name": "jack",
//                    "headImg": "https://sheng-1252923386.image.myqcloud.com/pic/83F1475460C78BEA5193734C6C616961.png",
//                    "relationship": "父子",
//                    "sex": 1,
//                    "race": "旧金山",
//                    "height": 178,
//                    "weight": 70,
//                    "phone": "021-12165",
//                    "macAddress": null,
//                    "isFrozen": 0,
//                    "addDate": 1557989148000,
//                    "editDate": 1558070141000,
//                    "loginKey": null,
//                    "machineCode": "machine",
//                    "lastPasswordErrorTime": 1558004574000,
//                    "lastPasswordErrorNum": 0,
//                    "birthday": 958320000000,
//                    "doctorId": null
//               },
//               {
//                    "ssId": 10000002,
//                    "userId": 30001,
//                    "username": "13055082954",
//                    "password": "9def65456fc2a68a",
//                    "name": "linfang",
//                    "headImg": "https://sheng-1252923386.image.myqcloud.com/pic/83F1475460C78BEA5193734C6C616961.png",
//                    "relationship": "父子",
//                    "sex": 1,
//                    "race": "Shenzhen",
//                    "height": 175,
//                    "weight": 65,
//                    "phone": "13055082954",
//                    "macAddress": "11310210cbd685fa55ec",
//                    "isFrozen": 0,
//                    "addDate": 1558086733000,
//                    "editDate": 1558323294000,
//                    "loginKey": null,
//                    "machineCode": "machine2954",
//                    "lastPasswordErrorTime": null,
//                    "lastPasswordErrorNum": 0,
//                    "birthday": 777571200000,
//                    "doctorId": null
//               },
//               {
//                    "ssId": 10000003,
//                    "userId": 30002,
//                    "username": "18674018213",
//                    "password": "49ba59abbe56e057",
//                    "name": "张三",
//                    "headImg": null,
//                    "relationship": "父子",
//                    "sex": 1,
//                    "race": "shanghai",
//                    "height": 178,
//                    "weight": 70,
//                    "phone": "18674018213",
//                    "macAddress": null,
//                    "isFrozen": 0,
//                    "addDate": 1567251885000,
//                    "editDate": 1567251885000,
//                    "loginKey": null,
//                    "machineCode": null,
//                    "lastPasswordErrorTime": null,
//                    "lastPasswordErrorNum": 0,
//                    "birthday": 1561478400000,
//                    "doctorId": null
//               }
//          ]
//     }
// }





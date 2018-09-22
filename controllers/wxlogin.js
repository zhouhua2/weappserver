const {mysql} =require('../qcloud')

var fly = require("flyio")
module.exports= async ctx=>{
    const code = ctx.query.code
    const appid = 'wxd4229eb5c9505ece'
    const secret ='de6a771b7452c0892d644ae5ff103300'
    const api = `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${code}&grant_type=authorization_code`

    const userinfo = await fly.get(api)
    if (userinfo.status==200){
        const userOpenIdKey = JSON.parse(userinfo.response.body)
        const fingRes = await mysql('useropenidkey')
                                .select()
                                .where('openid', userOpenIdKey.openid)
        if (fingRes.length){
            ctx.state={
                code:-1,
                data:{
                    msg:"用户以存在",
                    userOpenIdKey
                }
            }
        }else{
            try{
                const { openid, session_key } = userOpenIdKey
                await mysql('useropenidkey')
                    .insert({ openid, session_key})
                    ctx.state={
                        code:0,
                        data: {userOpenIdKey}
                    }
            }catch(e){
                ctx.state={
                    code:-1,
                    data: {
                        msg: "新增失败" + e.sqlMessage
                    }
                }
            }
        }
     }
}
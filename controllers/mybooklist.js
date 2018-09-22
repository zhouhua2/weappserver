const { mysql } = require('../qcloud')

module.exports = async ctx => {
    const data = ctx.request.query
    const openid = data.openid
    if (openid ) {
        const findres = await mysql('userbook')
                                .select()
                                .where('openid', openid)

        if (findres){
            ctx.state = {
                code: 0,
                data: findres
            }
        }else{
            ctx.state = {
                code: -1,
                data: '数据不完整'
            }
        }
    }
}
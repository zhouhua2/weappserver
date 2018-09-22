const { mysql } = require('../qcloud')

module.exports = async ctx => {
    const data = ctx.request.body
    const openid = data.openid
    if (openid ) {
        const itemid = data.v.id
        const findres = await mysql('userlike')
                                .select()
                                .where('openid', openid)
                                .where('itemid', itemid)
        if (findres.length) {
            try {
                await mysql('userlike')
                        .delete()
                        .where('openid', openid)
                        .where('itemid', itemid)
                ctx.state={
                    code:0,
                    data:'删除成功'
                }
            } catch (e) {
                ctx.state = {
                    code: -1,
                    data: '出错' + e.sqlMessage
                }
            }
        } else {
            ctx.state = {
                code: -1,
                data: '数据不存在'
            }
        }
    }
}
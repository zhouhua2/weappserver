const { mysql } = require('../qcloud')

module.exports = async ctx => {
    const data = ctx.request.body
    const isbn = data.isbn
    const openid = data.openid
    if (openid && isbn) {
        const findres = await mysql('userbook')
                                 .select()
                                 .where('isbn', isbn)
                                 .where('openid', openid)
        if (findres.length) {
            try {
                await mysql('userbook')
                        .delete()
                        .where('isbn', isbn)
                        .where('openid', openid)
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
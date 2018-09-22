const { mysql } = require('../qcloud')

module.exports = async ctx => {
    const data = ctx.request.body
    const homeDetail = data.v
    const openid = data.openid
    if (openid ) {
        const itemid = homeDetail.id
        const findres = await mysql('userlike')
                                .select()
                                .where('openid', openid)
                                .where('itemid', itemid)
        if (findres.length) {
            ctx.state = {
                code: -1,
                data: '数据以存在'
            }
        } else {
            const { type, title, text, image } = homeDetail
            const src = homeDetail.src||''
            try {
                await mysql('userlike').insert({
                    openid, itemid,type, title, text, image, src
                })
                ctx.state.data = {
                    title,
                    msg: 'success'
                }
            } catch (e) {
                ctx.state = {
                    code: -1,
                    data: '出错' + e.sqlMessage
                }
            }
        }
    }
}
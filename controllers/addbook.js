const {mysql}=require('../qcloud')

module.exports = async ctx=>{
    const data = ctx.request.body
    const bodyDetail = data.detail
    const openid = data.openid
    if (openid && bodyDetail){
        const { binding, image, pages, price, pubdate, publisher, title, summary, author } = bodyDetail
        const isbn = bodyDetail.isbn10 || bodyDetail.isbn
        const findres=await mysql('userbook')
                                .select()
                                .where('isbn', isbn)
                                .where('openid',openid)
        if (findres.length){
            ctx.state = {
                code: -1,
                data: '数据以存在'
            }
        } else {
            try {
                await mysql('userbook').insert({
                    author, binding, image, isbn, pages, price, pubdate, publisher, title, summary, openid
                })
                ctx.state.data = {
                    title,
                    msg: 'success'
                }
            } catch (e) {
                ctx.state= {
                    code: -1,
                    data: '出错' + e.sqlMessage
                }
            }
        }
    }
}
const { mysql } = require('../qcloud')
module.exports = async ctx => {
    const data=ctx.request.body.data
    const { type, title, text, image } = data
    const src = data.src||''
    
        try {
            await mysql('home').insert({
                type, title, text, image, src
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

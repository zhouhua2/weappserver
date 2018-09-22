var fly = require("flyio")

module.exports = async ctx => {
    const isbn = ctx.query.isbn
    const url = `https://api.douban.com/v2/book/isbn/${isbn}`
    const datadetail = await fly.get(url)
    if (datadetail.status == 200) {
        const bookdetail = datadetail.data
        ctx.state.data = { bookdetail }
    } else {
        ctx.state.data = {
            code: -1,
            msg: "豆瓣api出错"
        }
    }
}
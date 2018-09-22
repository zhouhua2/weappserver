const { mysql } = require('../qcloud')
const size=8
module.exports = async ctx => {
    const booklist = await mysql('userbook')
                            .select('*')
                            .offset(0)
                            .limit(size)
                            .orderBy('id', 'desc')
    ctx.state = {
        code: 0,
        data: booklist
    }
}
const { mysql } = require('../qcloud')

module.exports = async ctx => {
    const list = await mysql('home')
    
    ctx.state={
        code:0,
        data:list
    }
}

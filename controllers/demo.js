module.exports = async (ctx) => {
    ctx.state.data = {
        msg: 'hello app'
    }
    console.log(ctx)
}
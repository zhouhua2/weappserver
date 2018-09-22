const { mysql } = require('../qcloud')

module.exports = async ctx => {
    const data = ctx.request.query
    const itemid = data.id
    const openid = data.openid
    if ( itemid ) {
        if (openid){
            const findres = await mysql('userlike')
                                    .select()
                                    .where('openid', openid)
                                    .where('itemid', itemid)

            const total = await mysql('userlike')
                                   .select()
                                   .where('itemid', itemid)
                
                ctx.state.data={
                    findres: findres.length,
                    total: total.length
                }
        }else{
            const total = await mysql('userlike')
                                  .select()
                                  .where('itemid', itemid)
            ctx.state.data = {
                findres:0,
                total: total.length
            }
        }
    }
}
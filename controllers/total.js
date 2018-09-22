const { mysql } = require('../qcloud')

module.exports = async ctx => {
    const data = ctx.request.query
    console.log(ctx);
    
    if (data){
        const isbn = data.isbn
        const openid = data.openid||''
        try {const findres = await mysql('userbook')
                                     .select()
                                     .where('isbn', isbn)
             const find  = await mysql('userbook')
                                  .select()
                                  .where('isbn', isbn)
                                  .where('openid', openid)
            ctx.state = {
                code:0,
                data: {
                    find: find.length,
                    findres: findres.length
                }
            }
           }catch(e){
              ctx.state = {
                code: -1,
                data: "错误" +  e.sqlMessage
            }   
        }                    
    } 
}
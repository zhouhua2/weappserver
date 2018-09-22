var fly = require("flyio")

module.exports =async ctx=>{
    const bookName = ctx.query.bookName
    const count=50
    const url = `https://api.douban.com/v2/book/search?q=${bookName}&count=${count}`
    const datalist =await fly.get(url)
    if (datalist.status==200){
        const booklist =  datalist.data.books
        ctx.state.data = {booklist}
    }else{
        ctx.state.data={
            code:-1,
            msg:"豆瓣api出错"
        }
    }
}
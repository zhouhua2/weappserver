const {mysql} =require('../qcloud')

module.exports=async ctx=>{
    const hotspots = await mysql("hotspot")
    const data = hotspots.map(item => item.hot)

    ctx.state={
        code:0,
        data
    }
}
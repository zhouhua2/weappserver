
const { mysql } = require('../qcloud')
const fly =require('flyio')
let list=[{
    type: 'movie',
    title: '奇迹男孩',
    text: '生命流逝太快,我们都没来得及多看对方一眼',
    image:'http://img1.xmspc.com/uploads/movie-poster/q8po5edu49zu.jpg'
}
,{
    type: 'movie',
    title: '飞屋环游记 ',
    text: '找回丟失已久的梦想吧 !,在我还未老去的時候',
    image:'http://img1.xmspc.com/uploads/movie-poster/743.jpg'
}
,{
    type: 'movie',
    title: '忠犬八公的故事 ',
    text: '等有一天它会给你捡球的时候,一定有什么特殊的理由',
    image:'http://img1.xmspc.com/uploads/movie-poster/925.jpg'
},{
    type: 'music',
    title: '参商',
    text: '谁念过 千字文章,秋冬已收藏',
    src: 'http://ws.stream.qqmusic.qq.com/C1000011Yk2f3gxSmB.m4a?fromtag=0&guid=126548448',
    image: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000wJini3RBYbm.jpg?max_age=2592000'
} , {
    type: 'music',
    title: '倒数',
    text: '有你就别无所求了',
    src: 'http://ws.stream.qqmusic.qq.com/C100002Jbzn235xaQZ.m4a?fromtag=0&guid=126548448',
    image: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003cKIKZ1J4Yyu.jpg?max_age=2592000'
}, {
    type: 'music',
    title: '她说',
    text: '我们爱的没有错,只是美丽的独秀',
    src: 'http://ws.stream.qqmusic.qq.com/C100001IpbDW34m1Gy.m4a?fromtag=0&guid=126548448',
    image: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000TuW8h0AH2n4.jpg?max_age=2592000'
},{
    type: 'sentence',
    title: '未名',
    text: '这个夏天又是个毕业季',
    image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1534992814&di=694b5bc34341d0b9f472430b5d52d813&src=http://pic.58pic.com/58pic/14/18/39/95r58PICKy9_1024.jpg'
}, {
    type: 'sentence',
    title: '未名',
    text: '这节操掉地了怎么办？捡起来,然后再扔去垃圾桶里....',
    image: 'https://img2.woyaogexing.com/2017/08/26/4c97e60488c2f877!600x600.jpg'
}]


list.forEach(item=>{
    // const src = item.src||''
    // const type = item.type
    // const title = item.title
    // const text = item.text
    // const image = item.image
    //  mysql('home').insert({
    //     type, title, text, image, src
    // })
    fly.post('/weapp/addhome', { data: item})
})


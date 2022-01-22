
var cfg = {
    runningDate: {
        enable: true,
        //插件开关
        url:'diy_hcj/lasthero/js/runningDate.js',
        //插件名
        reference: 1000,
        //定时更新运行时间,可设置false关闭
        titleTip: {
            buildTip: "本站点自{year}年{month}月{day}日运行至今",
            runTip: "存活{day}天{hour}小时{minute}分{second}秒"
        },
        sartDate: [2022, 1, 18, 0, 0, 0]
        //年，月，日 等等
    },
    format:{
        enable:true,
        url:'diy_hcj/lasthero/tools_js/format.js'
    }
}
for (const diy_js in cfg){  
    if(cfg[diy_js]['enable']===true&&cfg[diy_js]['url']!=undefined){
        let scriptURL = document.createElement('script')
        scriptURL.src = cfg[diy_js]['url']
        scriptURL.type = 'module'
        document.getElementById('diy_js').appendChild(scriptURL)
        scriptURL=(`${scriptURL} <script src="${cfg[diy_js]['url']}" type="module></script>`)
    }
} 
export {cfg}

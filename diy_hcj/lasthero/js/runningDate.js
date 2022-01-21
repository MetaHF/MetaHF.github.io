import config from '../config.js'
var cfg = config()
//导入配置文件

if (cfg['runningDate']['enable']===true){
    //模块是否加载
    let runDate = cfg['runningDate']['sartDate']
    let startDate = new Date(runDate['year'],runDate['month']-1,runDate['day'])
    document.getElementById('diy_startDate').innerHTML = `本站于${runDate['year']}年${runDate['month']}月${runDate['day']}建立`
    displayDate()
    function displayDate(){
        let day = 0
        let nowDate = new Date()
        console.log(nowDate.getTime())
        let runTime = nowDate - startDate
        console.log(runTime)
        let runday = Math.floor(runTime/24/60/60/1000)
        document.getElementById('diy_runningDate').innerHTML = `已存活${runday}天`
    }
}
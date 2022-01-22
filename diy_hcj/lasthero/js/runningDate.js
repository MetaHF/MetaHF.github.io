import {cfg} from '../config.js'
import format from '../tools_js/format.js'
//导入配置文件
if (cfg['runningDate']['enable']===true){
    //模块是否加载
    let runDate = cfg['runningDate']['sartDate']
    let startDate = new Date(runDate[0],runDate[1]-1,runDate[2],runDate[3],runDate[4],runDate[5])
    document.getElementById('diy_buildDate').innerHTML = format(cfg['runningDate']['titleTip']['buildTip'],{
        year:runDate[0],
        month:runDate[1],
        day:runDate[2]
    })
    if (cfg['runningDate']['reference']!=false){
        setInterval(displayDate,cfg['runningDate']['reference'])
    }else{
        displayDate()
    }
    function displayDate(){
        let nowDate = new Date()
        let runTime = nowDate - startDate
        let runDay = Math.floor(runTime/24/60/60/1000)
        let runHour = Math.floor(runTime/60/60/1000%24)
        let runMinute = Math.floor(runTime/60/1000%(24*60)%60)
        let runSecond = Math.floor(runTime/1000%(24*60*60)%(24*60)%60)
        document.getElementById('diy_runDate').innerHTML = format(cfg['runningDate']['titleTip']['runTip'],{
            day:runDay,
            hour:runHour,
            minute:runMinute,
            second:runSecond
        })
    }
}
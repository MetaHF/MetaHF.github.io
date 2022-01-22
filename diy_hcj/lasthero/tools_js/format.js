
function format(str,arg){
    if(arguments!=undefined||arg!=undefined){
        //实参不为空
        if(arguments.length==2 && (typeof(arg)==="object")){
            for (const key in arg) {
                str = str.replace('{'+key+'}',arg[key])
            }
            return str
        }
    }
    return str
}

export default format
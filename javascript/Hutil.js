var Hutil = {
    maxInArr:function(arr){
        return Math.max.apply(null,arr);
    },
    minInArr:function(arr){
        return Math.min.apply(null,arr);
    },
    formatDate:function(date,format){
        var paddNum = function(num){
            num += "";
            return num.replace(/^(\d)$/,"0$1");
        };
        //指定格式字符
        var cfg = {
            yyyy : date.getFullYear() //年 : 4位
            ,yy : date.getFullYear().toString().substring(2)//年 : 2位
            ,M  : date.getMonth() + 1  //月 : 如果1位的时候不补0
            ,MM : paddNum(date.getMonth() + 1) //月 : 如果1位的时候补0
            ,d  : date.getDate()   //日 : 如果1位的时候不补0
            ,dd : paddNum(date.getDate())//日 : 如果1位的时候补0
            ,h  : date.getHours() //时 如果1位的时候不补0
            ,hh : paddNum(date.getHours())  //时 如果1位的时候补0
            ,m  : date.getMinutes() //分 如果1位的时候不补0
            ,mm : paddNum(date.getMinutes()) //分 如果1位的时候补0
            ,s  : date.getSeconds() //秒 如果1位的时候不补0
            ,ss : paddNum(date.getSeconds()) //秒 如果1位的时候补0
        };
        format || (format = "yyyy-MM-dd hh:mm:ss");
        return format.replace(/([a-z])(\1)*/ig,function(m){
            return cfg[m];
        });
    }
}
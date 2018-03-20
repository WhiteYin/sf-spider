function format(str) {
    const today = new Date(),
        year = today.getFullYear(),
        month = today.getMonth() + 1,
        date = today.getDate(),
        hour = today.getHours(),
        MS_PER_HOUR = 60 * 60 * 1000,
        MS_PER_DAY = 24 * MS_PER_HOUR,
        regex = /(\d{1,2})\D{1}(\d{1,2})\D{1}/g,
        regexYear = /(\d{4})\D{1}(\d{1,2})\D{1}(\d{1,2})\D{1}/g;
    
    let newDate,newStr;
    //小时
    if (str.indexOf("小时前")>=0) {
        let hours = Number.parseInt(str);
        newDate = new Date(today.valueOf() - hours * MS_PER_HOUR);
    }
    //天
    else if (str.indexOf("天前") >= 0) {
        let days = Number.parseInt(str);
        newDate = new Date(today.valueOf() - days * MS_PER_DAY);
    }
    //没有年
    else if (str.indexOf("年") === -1) {
        newStr = str.replace(regex, "2018-$1-$2");
        return newStr;
    }
    //有年
    else {
        newStr = str.replace(regexYear, "$1-$2-$3");
        return newStr;
    }
    newStr = "" + newDate.getFullYear() + "-" + (newDate.getMonth() + 1) + "-" + newDate.getDate();
    return newStr;
}

module.exports = format;
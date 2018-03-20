const formatTime = require("./formatTime");

const ANSWER = "回答",
ANSWER_BE_HONORED = "回答被赞",
ANSWER_BE_ADOPTED = "答案被采纳";


function solveList(res,state) {
    let $ = res.$;
    //获取每一页的声望列表并将其转为数组
    let list = $(".record-list li");
    list = Array.from(list);
    //遍历该列表
    list.forEach(item => {
        //获取声望获取方式
        let type = $(".profile-mine__content--text",item).text();
        //数据
        let store = null;
        switch (type) {
            case ANSWER:
                store = state.answer;    
                break;
            case ANSWER_BE_ADOPTED:
                store = state.answerBeAdopted;    
                break;
            case ANSWER_BE_HONORED:
                store = state.answerBeHonored;    
                break;
            default:
                return false;
        }
        //检测是否存在取消行为
        let isCanceled = $(".red",item).length !== 0;
        if (isCanceled) {
            return;
        } else {
            //获取声望记录，转成Number
            let honor = +($(".badge",item).text());
            //获取声望时间
            let time = $(".profile-mine__content--date",item).text();
            //格式化为yyyy-MM-dd
            time = formatTime(time);
            //如果该日期已有声望记录
            if (store.hasOwnProperty(time)) {
                store[time] += honor;
            } else {
                store[time] = honor;
            }
        }
    })
    return state;
}

module.exports = solveList;
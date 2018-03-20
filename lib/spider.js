const Crawler = require("crawler");
const solve = require("./solve.js");
const write = require("./write.js");
function spider(url, pageCnt) {
    //存储数据
    let state = {
        answer: {
            //"2018-3-20": 10
        },
        answerBeHonored: {},
        answerBeAdopted: {}
    }

    var c = new Crawler({
        rateLimit: 1000,
        forceUTF8:true,
        // 这个回调每个爬取到的页面都会触发
        callback: function (err, res, done) {
            if (err) {
                console.error(err);
            } else {
                state = solve(res, state);
            }
            done();
        }
    });
    c.queue(url);
    c.on('drain',function(){
        // 队列为空时输出数据
        //console.log(JSON.stringify(state, null, 2));
        write(state);
    });
}

module.exports = spider;
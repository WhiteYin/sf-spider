const spider = require("./lib/spider");

const url = "https://segmentfault.com/u/baiyinling/rank";
const pageCnt =22;

let urls = [];
for (let i = 1; i <= pageCnt; i++){
    urls[i] = url + "?page=" + i;
}

spider(urls, pageCnt);
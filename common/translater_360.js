'use strict';
// use 360 translation
const request = require('request');

exports.translate = function(txt, callback) {

    let url = `http://fanyi.so.com/index/search?query=${txt}&eng=0`
    request.get(encodeURI(url), function (error, response, body) {
        let res = JSON.parse(body);
        if(response.statusCode == 200 && res.error == 0) {
            let fanyi = res.data.fanyi;
            console.log(`success to get fanyi result: ${fanyi}`);
            if (callback) {
                callback(fanyi);
            }
        }
        else {
            console.log("fail to get fanyi result");
            if (callback) {
                callback("");
            }
        }

    })
}

// translate("你好");
// translate("hello");
'use strict';
// use 360 translation
const request = require('request');

exports.robot = function(txt, callback) {

    let host = '192.168.0.65';
    let port = '8087';
    let request_url = `http://${host}:${port}/tote/pool/getPreAGVQueueActionInfoByAGVId?AGVId=1`;

    var options = {
        'method': 'GET',
        'url': request_url,
        'headers': {
          'sectionid': '1',
          'Authorization': 'Bearer eyJraWQiOiJhcHBUb2tlbiIsInR5cCI6IkpXVCIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiI2MGI5ZTgzM2M0ZjMyMjAwMDExNTVkZGEifQ.CKg__cjsX07zTmGgJP8_r8ckEhvtZOFQdqLuaNoEJwI',
          'Content-Type': 'application/json'
        }
    }

    request.get(options, function (error, response, body) {
        let res = JSON.parse(body);
        if(response.statusCode == 200) {
            let fanyi = res.data;
            console.log(`success to get robot result: ${fanyi}`);
            if (callback) {
                callback(fanyi);
            }
        }
        else {
            console.log("fail to get robot result");
            if (callback) {
                callback("");
            }
        }

    })
}


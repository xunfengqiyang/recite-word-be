const router = require("express").Router();
const log4js = require('log4js');
const logger = log4js.getLogger();
const uuidv1 = require('uuid/v1');

const path = require('path');
var mutipart= require('connect-multiparty');
var mutipartMiddeware = mutipart();
var fs = require("fs")
var user = require('../data/user.json');
const translator = require('../common/translater_360')


// get book list
router.get('/book', function (req, res) {
    console.log("get book list");
    let fileList = user['upload'];
    res.send({"success": true, "result": fileList});
})

// get a book info
router.get('/book/:id', function (req, res) {
    let bookId = req.params.id;
    console.log("get book info:"+bookId);
    let fileList = user['upload'];

    for (let i = 0; i < fileList.length; i++) {
        const element = fileList[i];
        if (element.id == bookId) {
            res.send({"success": true, "result": element});
            return;
        }
    }
    res.send({"success": true, "result": {}});
})

// get word list by book id
router.get('/book/words/:id', function (req, res) {
    let bookId = req.params.id;
    let fileList = user['upload'];

    for (let i = 0; i < fileList.length; i++) {
        const element = fileList[i];
        if (element.id == bookId) {
            let file_path = path.resolve(__dirname + '/../upload/' + element.save_name);
            fs.readFile(file_path, function (err, data) {
                if (err) {
                    res.send({"success": false, "result": ""});
                }
                else {
                    let content = data.toString("utf-8");
                    let arr = content.split('\n');
                    res.send({"success": true, "result": arr });
                }
            })
            return;
        }
    }
    res.send({"success": false, "result": "can't find this book"});
})

// delete a book
router.delete("/book/:id", function (req, res) {
    let bookId = req.params.id;
    let fileList = user['upload'];

    for (let i = 0; i < fileList.length; i++) {
        const element = fileList[i];
        if (element.id == bookId) {
            let file_path = path.resolve(__dirname + '/../upload/' + element.save_name);
            fileList.splice(i, 1);
            writeFileList(fileList);
            fs.unlink(file_path, function(err) {
                if (err) {
                    logger.error(err);
                    res.send({"success": false, "result": arr });
                }
                res.send({"success": true, "result": "" });
             });
        }
    }
    res.send({"success": false, "result": "can't find this book"});
})

// upload a book
router.post('/book', mutipartMiddeware, function (req,res) {
    
    let filePath = req.files.file.path;
    let fileName = req.files.file.name;

    let arr = filePath.split('/');
    let newName = arr[arr.length-1];
    let fileId = uuidv1();
    logger.info("upload file", newName);
    var myDate = new Date();

    let fileInfo = {
        "id": fileId,
        "display_name": fileName,
        "save_name": newName,
        "create_by": "sys",
        "create_dt": myDate.toLocaleDateString() + myDate.toLocaleTimeString()
    }
    let fileList = user['upload'];
    fileList.push(fileInfo);

    writeFileList(fileList);
    res.cookie("fileId", fileId);
    res.send(req.cookies);
})

// check the text is correct
// router.get('/check/:bookId/:wordIndex', function (req, res) {
//     let bookId = req.params.bookId;
//     let wordIndex = req.params.wordIndex;
//     let word = req.query.word;

//     for (let i = 0; i < fileList.length; i++) {
//         const element = fileList[i];
//         if (element.id == bookId) {
//             element.save_name
//         }
//     }

//     res.send({"success": true})
// })

// search translation
router.get('/search', function (req, res) {
    let word = req.query.word;
    translator.translate(word, function (txt) {
        res.send({"success": true, "result": txt})
    });
})

//心跳
router.get('/heart', function (req, res) {
    logger.info("heart beat");
    res.send({"success": true})
})

function writeFileList(fileList) {
    user['upload'] = fileList;
    let userPath = path.resolve(__dirname + '/../data/user.json');
    fs.writeFile(userPath, JSON.stringify(user), { 'flag': 'w' }, function (err) {
        if (err) {
            logger.error("write user data", err); 
        }
    })
}

module.exports = router;
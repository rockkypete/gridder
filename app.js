//node server

//module imports
const http = require('http');
const fs = require('fs');
const path = require('path');

//create server instance
const server = http.createServer( (req, res)=> {
    //set request path
    let reqPath = path.join(__dirname, 'static',
    req.url === '/' ? 'index.html' : req.url);
    let path404 = path.join(__dirname, 'static', '404.html');

    //setfile extension
    let fileExt = path.extname(req.url);

    //set content-type
    let contentType;
    //switch content-type
    switch(fileExt){
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application.json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image.jpg';
            break;
        default:
            contentType = 'text/html'
            break;
    }

    //render page
    fs.readFile(reqPath, (err, content)=> {
        if(err){
            if(err.code === 'ENOENT'){
                //page not found
                fs.readFile(path404, (err, content)=>{
                    if(err){
                        console.log(err);
                    }
                    res.writeHead(404, {'content-Type':'text/html'});
                    res.end(content, 'utf8');
                })
            }else {
                //possible server error
                res.writeHead(500);
                res.end(`Server Error: ${ err.code }. Please try again later.`);
            }
        }else {
            //request successful
            res.writeHead(200, {'content-Type': contentType});
            res.end(content, 'utf8');
        }
    })
});

const PORT = process.env.PORT || 7000
server.listen(PORT, ()=>{
    console.log(`Server is now running on port ${ PORT }`);
});

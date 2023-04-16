console.log("hi")
let http=require("http") //built in
let url =require("url") //built in

// let server = http.createServer(function(req, res){
//     console.log("req",req)
//     res.writeHead(200, {"Content-type":"text/plain"})
//     res.write("hello")
//     res.end()
// });

// server.listen(8000)


// Create web server
const server = http.createServer(function (req, res) {


        var q = url.parse(req.url, true);
        /*The parse method returns an object containing url properties*/
        console.log(q.host);
        console.log(q.pathname);
        console.log(q.search);
        if (q.pathname == "/json") {
            /*The query property returns an object with all the querystring parameters as properties:*/
            var qdata = q.query;
            console.log(qdata.month);
            console.log(qdata.year);
            let obj={}
            obj.month =qdata.month
            obj.year =qdata.year
            res.setHeader('Content-type', 'application:json');
            res.end(JSON.stringify(obj))

        }else if(q.pathname == "/html"){
            res.setHeader('Content-type','text/html')
            res.write(`<html><body style="text-align:center;">
            <h1 style="color:green;">GeeksforGeeks</h1>
            <a href="https://www.geeksforgeeks.org/fundamentals-of-algorithms/">
            Read Algorithm analysis and Design Content
            </a>
            </body></html>`);
            res.end()
        }
        else{
            res.end('Invalid Request!'); //end the response
        }

	// Server object listens on port 8081
}).listen(8000, () => console.log('Server running on port 3000'));

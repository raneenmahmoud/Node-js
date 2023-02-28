/*For creating text file and append the result request in it*/ 
var fs = require("fs");
fs.writeFileSync("Result.txt", "All Requsts Results of Request URL Calculator are: \n")
/* For Request URL */
const http = require("http");
var count =0;
/*For only one request*/
http.createServer((req,res)=>{
    if(req.url != "/favicon.ico"){
        let Arrreq = req.url.split("/");
        let operation = Arrreq[Arrreq.length-1];
        let operands = Arrreq.slice(1,Arrreq.length-1);
        var Result = Number(operands[0]);
        switch (operation){
            case 'add':
               for(let i=1; i<operands.length; i++){
                Result += Number(operands[i])
               }
               count++;
                break;
            case 'sub':
                for(let i=1; i<operands.length; i++){
                    Result -= Number(operands[i])
                }
                count++;
                break;
            case 'mult':
                for(let i=1; i<operands.length; i++){
                    Result *= Number(operands[i])
                }
                count++;
                break;
            case 'div':
                for(let i=1; i<operands.length; i++){
                    Result /= Number(operands[i])
                }
                count++;
                break; 
            case 'mod':
                for(let i=1; i<operands.length; i++){
                    Result %= Number(operands[i])
                }
                count++;
                break;
            default:
                res.write("<h1>Sorry this request is not avilable</h1>");
                break;  
        }
        console.log(req.url);
        console.log(Arrreq[Arrreq.length-1]);
        console.log(Arrreq[1]);
        console.log(req.method);
        console.log(res.statusCode);
        res.write("<h1>The Result of "+`${operands}`.split(", ")+" is "+`${Result}`)
        fs.appendFileSync("Result.txt",`${count}`+" url request of "+`${operands}`.split(",")+" is "+`${Result}`+"\n")
        console.log(Arrreq);
        console.log(operands);
        console.log(count);
    }
    res.end(); //End of individual request
})
.listen("8000",()=>{
    console.log("Listening on port 8000")
})

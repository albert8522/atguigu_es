const fs = require('fs');
const { resolve } = require('path');

function readWeiXue(){

    return new Promise((resolve,reject)=>{

        fs.readFile('./为学.md',(err,data)=>{

            if(err)reject(err);

            resolve(data);
        });

    })
    
}

async function main(){
    let weiXue = await readWeiXue();
    console.log(weiXue.toString());
}

main();
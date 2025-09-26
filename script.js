let hour = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let cnt = document.getElementById("cnt");


let startBtn = document.querySelector(".Start");
let stopBtn = document.querySelector(".Stop");
let resetBtn = document.querySelector(".Reset");

let start;
let count=0,secCnt=1,minCnt = 1,hrCnt=1;

startBtn.addEventListener('click',()=>{
    start = setInterval(()=>{   
        if(count<=60)
        {
            cnt.innerText=count;
            if(count==60)
            {
                sec.innerText=secCnt;
                secCnt++;
                if(secCnt<=60)
                {
                    if(secCnt==60)
                    {
                        min.innerText=minCnt;
                        minCnt++;
                        if(minCnt<60)
                        {
                            if(minCnt==60)
                            {
                                hour.innerText=hrCnt;
                                hrCnt++;
                            }
                        }
                        else{
                            minCnt=1;
                        }
                    }
                }
                else{
                    secCnt=1;
                }
            }
        }
        else{
            count=0;
        }
        count++;
    },100);

})


stopBtn.addEventListener('click',()=>{
    clearInterval(start);
})

resetBtn.addEventListener('click',()=>{
    count=0,secCnt=1,minCnt=1,hrCnt=1;
    hour.innerText='00';
    min.innerText='00';
    sec.innerText='00';
    cnt.innerText='00';
});
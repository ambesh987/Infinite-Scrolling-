const container=document.querySelector('.container');
let count=1;

const getResult=()=>{
    for(let i=0;i<25;i++){
        const s=`<div id="text">Student ${count}</div><br/>`;
        count++;
        container.insertAdjacentHTML("beforeend",s);
    }
}
container.addEventListener("scroll", ()=>{
    const { scrollHeight, scrollTop, clientHeight } = container;
    if (scrollHeight <= Math.ceil(scrollTop + clientHeight)) {
        getResult();
    }
});
getResult();

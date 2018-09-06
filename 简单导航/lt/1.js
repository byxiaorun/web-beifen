// JavaScript Document
lastScrollY=0;
function heartBeat(){ 
var diffY;
if (document.documentElement && document.documentElement.scrollTop)
    diffY = document.documentElement.scrollTop;
else if (document.body)
    diffY = document.body.scrollTop
else
    {/*Netscape stuff*/}
percent=.1*(diffY-lastScrollY); 
if(percent>0)percent=Math.ceil(percent); 
else percent=Math.floor(percent); 
document.getElementById("full").style.top=parseInt(document.getElementById("full").style.top)+percent+"px";
lastScrollY=lastScrollY+percent; 
}
suspendcode="<div id=\"full\" style='right:30px;POSITION:absolute;TOP:150px;z-index:100'><a href='#Top'><img src=Ufb5FTH.gif border=0 alt='返回顶部'></a><br><img src=DZf1hS4.gif border=0></a><br><a href='#end'><img src=rTnucYk.gif border=0 alt='跳到底部'></a></div>"
document.write(suspendcode);
window.setInterval("heartBeat()",1); 
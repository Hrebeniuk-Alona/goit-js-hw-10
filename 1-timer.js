import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{f as b,i as y}from"./assets/vendor-BbbuE1sJ.js";const n=document.querySelector('input[type = "text"]'),e=document.querySelector("button[data-start]"),u=document.querySelector(".timer");e.addEventListener("click",g);e.disabled=!0;let l=null,c=null;const p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){S(t)}};b(n,p);function g(){e.disabled=!0,n.disabled=!0,c=setInterval(()=>{const t=l-Date.now();if(t<=0){clearInterval(c),u.textContent="00:00:00:00",n.disabled=!1;return}const{days:r,hours:a,minutes:s,seconds:i}=C(t);u.textContent=`${o(r)}:${o(a)}:${o(s)}:${o(i)}`},1e3)}function S(t){if(t[0]<Date.now()){y.show({title:"Error",titleColor:"#fafafb",message:"Please choose a date in the future",messageColor:"#fafafb",position:"topRight",backgroundColor:"#EF4040",iconUrl:"../img/error.svg"}),e.disabled=!0;return}else l=t[0],e.disabled=!1}function o(t){return String(t).padStart(2,"0")}function C(t){const d=Math.floor(t/864e5),f=Math.floor(t%864e5/36e5),m=Math.floor(t%864e5%36e5/6e4),h=Math.floor(t%864e5%36e5%6e4/1e3);return{days:d,hours:f,minutes:m,seconds:h}}
//# sourceMappingURL=1-timer.js.map

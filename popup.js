
var uptime=document.querySelector("#uptime");
var last_12=document.querySelector("#last_12");
var uptime_today=document.querySelector("#uptime_today");
var uptime_week=document.querySelector("#uptime_week");


var d=new Date();
const this_date=d.getDate();
const this_time=d.getMinutes();
var str="";
 chrome.storage.local.get(["start_time","start_date"], function(result) {
  var date_elapsed=this_date-result.start_date;
  if(date_elapsed>1)
  {
    str+=date_elapsed;
    str+=" Days";
  }
  var time_elapsed=this_time-result.start_time;
  str+=(Math.floor(time_elapsed/60));
  str+=" hr ";
  time_elapsed%=60;
  str+=time_elapsed;
  str+=" min";
  uptime.innerHTML=str;
});

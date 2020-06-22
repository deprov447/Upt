var d=new Date();
var uptime_date=d.getDate();
var uptime_time=d.getMinutes();
chrome.storage.local.set({start_date: uptime_date}, function() {
  });
chrome.storage.local.set({start_time: uptime_time}, function() {
});
while(1)
{
    var d=new Date();
    var this_date=d.getDate();
    if(this_date!=uptime_date)
    {
        
    }
}
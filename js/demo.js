function $(name){return document.getElementById(name);}
function tag(tagName){return document.getElementsByTagName(tagName);}
function start(){
	getTime();
	getCountdwon();
}
function getTime(){
    var date = new Date();
    var day = date.getDay();
    if(day<6){
        var tds = tag("td");
        for(var i=day; i<tds.length; i+=7){
            tds[i].style.color = "red"
        }
    }
    var year = date.getFullYear();
    var month2;
    if((year%4==0&&year%100!=0)||year%400==0){
        month2 = 29;
    } else {
        month2 = 28;
    }
    var months= [31,month2,31,30,31,30,31,31,30,31,30,31];
    var begin = 0;
    for(var i =0; i<9; i++){
        begin+=months[i];
    }
    begin+=7;
    var now = 0;
    for(var i=0; i<date.getMonth()+1; i++){
        now+=months[i];
    }
    now+=date.getDate();
    weeks = now-begin;
    if (weeks%7==0){
        weeks = weeeks/7;
    }else {
        weeks = weeks/7+1;
    }
    $("week").innerHTML = Math.floor(weeks);
}
function changeOption(){
    var index = $("mySelect").selectedIndex;
    $("show").src=$("mySelect").options[index].value;
}
function getCountdwon(){
	var message=$("message");
	var CET4Date = new Date(2020,11,12); //2020年12月考试时间为2020年12月12日
	var winterHolidayDate = new Date(2021,0,24); //第一学期(2020-09-07)至(2021-01-24)
	var summerHolidayDate = new Date(2021,6,11); // 第二学期(2021-03-01)至(2021-07-11)
	var cet4 = compteCountdown(CET4Date);
	var winterHoliday = compteCountdown(winterHolidayDate);
	var summerHoliday = compteCountdown(summerHolidayDate);
	$("cet4").innerHTML = cet4;
	$("winter").innerHTML = winterHoliday;
	$("summer").innerHTML = summerHoliday;
}
function compteCountdown(endDate){
	return Math.floor((endDate.getTime()-new Date().getTime())/(1000*60*60*24));
}
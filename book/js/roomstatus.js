function onjson(data)
{
	var items = [];

	items = "<tr>";

	var i = 0;

	$.each(data, function(key, roominfo) {
	//	alert(val.booker.name);
		var booker = roominfo.booker;
		items += '<td id="' + roominfo.roomid + '">' + '<p id="roomid">' + roominfo.roomid + '</p>';

		if(roominfo.free)
			items += '<p color=#00FF00> 空闲 </p>' + "</td>\n";
		else
			items += '<p >' + booker.name + '</p>' + "</td>\n";
		
		i+=1;
		if(i==5){
			items += "</tr>\n<tr>";
			i=0;
		}
	});

	items+="</tr>";

	$("table.roomstatus").html(items);

	$("table.roomstatus tr td").mouseover(function(){
		
		/* 鼠标划过就显示  */
		$("#test").html($(this).html())
		// TODO more work

	});

	$("table.roomstatus tr td").click(function(){
		
		/* 鼠标点击了 */
		var roomid = $(this).children("#roomid").html();
		var formateddate = $('#inputDate').DatePickerGetDate(true);

		// 刷新，跳到新页面！

		window.open("prebook.html?date="+formateddate+"&room="+roomid);

	});
}


function ondatepick(formated, dates)
{
	var formateddate = $('#inputDate').DatePickerGetDate(true);

	var i="hello"+formateddate;
	$("table.roomstatus").html("");


	$.getJSON("/cgi/hm-cgi/status?"+formateddate ,onjson );
}

$(document).ready(function(){

	$("table.roomstatus tr td").mouseover(function(){
		
		$("#test").html($(this).html())

	});

});
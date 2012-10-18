function decode(s) {
    return decodeURIComponent(s.replace(/\\(u[0-9a-fA-F]{4})/gm, '%$1'));
}

function bookresult(data)
{
	if(data.status=="true")
		alert(data.status)
	else{
		var reason =decodeURIComponent(data.reason);
		alert(reason)

		$("#result").html(reason)

	}
}

function submitbook()
{
	var name=$("#clientlist").val();

	var jsondata = { room: roomid, name: name , date:datestr  } ;

	// 构建 json 并发送，
	$.post('/cgi-bin/hm-cgi/book', $.toJSON(jsondata),bookresult,"json");
}

$(document).ready(function(){

	var addstr= document.URL;
	var num=addstr.indexOf("?");
	addstr=addstr.substr(num+1);

	$("#querystring").html("打开的参数是：" + addstr );
	
	

	
	num = addstr.indexOf("&room=");
	
	roomid = addstr.substr(num + 6, 4 );
	
	num = addstr.indexOf("date=");
	
	datestr =  addstr.substr(num+5,addstr.indexOf("&room=") - num -5);

		$("title").html("预定房间 "  + roomid);
	
	$("#date").html(datestr);
	
	$( "#clientlist" ).autocomplete({
            source: "/cgi-bin/hm-cgi/clientautocomp"
        });
	
	$("#roomid").html(roomid);

	$("#submitbook").click(submitbook);

});

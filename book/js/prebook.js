
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

});

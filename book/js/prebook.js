function decode(s) {
    return decodeURIComponent(s.replace(/\\(u[0-9a-fA-F]{4})/gm, '%$1'));
}

function bookresult(data)
{
	if(data.status=="true"){
		alert("预订成功")
		$("#result").html("预订成功")
	}
	else{
		var reason =decodeURIComponent(data.reason);

		$("#result").html(reason)

	}
}


function submitbook()
{


	var name=$("#clientlist").val();
	var special=$("#special").val();

	var jsondata = { room: roomid, name:encodeURIComponent(name) , date:datestr , special:encodeURIComponent(special) } ;

	// 构建 json 并发送，
	$.post('/cgi-bin/hm-cgi/book', $.toJSON(jsondata),bookresult,"json");

}

function activeprebook(_roomid , _datestr){

	roomid = _roomid;

	datestr= _datestr;

	$("#querystring").html("预订的房间是：" + roomid );
	

	$("title").html("预定房间 "  + roomid);
	
	$("var#roomid").html(roomid);

	$("#submitbook").click(submitbook);

	$("var#date").html(datestr[0]+ " - " + datestr[1]);
};

$(document).ready(function(){

	$( "#clientlist" ).autocomplete({          source: "/cgi-bin/hm-cgi/clientautocomp"         });

	$("#prebook").hide()	
	

});

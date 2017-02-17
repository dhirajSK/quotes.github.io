$(document).ready(function(){	   
  $("#rand").on("click",function(data){
    data.preventDefault();
    $.getJSON('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=40&callback=',function(data){
    var s="";
      i=Math.floor(Math.random()*40);
    s+=data[i].content+"<br>-"+data[i].title;  
    $(".me").html(s);
	   	//console.log(JSON.stringify(data));
      });
  });
  $(".twitter").click(function(){
    var qs=$(".me").text();
     var tweet ="http://www.twitter.com/intent/tweet?text="+qs;
     $("a").attr('href',tweet);
  });
})
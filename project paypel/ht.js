var span=document.getElementById("user").value;
var span1=document.getElementById("user").value;
function sample()
{
    var us =document.getElementById("user").value;
    var ps=document.getElementById("pass").value;
    if( us.length<=5||us.length>10)
    {
        span.innerHTML+"user namr must be 6 character";
        span.style.color="red";
    }
    else{
        span.innerHTML="null";
    }
}
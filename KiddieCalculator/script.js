
var value1,flag=0,result=0
var operationMenu=['+','-','*','/']

function buttonClick(number)
{
    document.getElementById("display").style.color='white'
    document.getElementById("display").value+=number
}
function clearButton()
{
    document.getElementById("display").value=""

    document.getElementById("fValue").innerHTML=0
    document.getElementById("sValue").innerHTML=0
    document.getElementById("rValue").innerHTML=0
    document.getElementById("oValue").innerHTML="#"

    value1=0;
    value2=0;
    result=0;
}
function operatorClicked(op)
{
    value1=document.getElementById("display").value
    document.getElementById("fValue").innerHTML=value1
    for(var i=0;i<4;i++)
    {
        if(op==operationMenu[i])
        {
            flag=i+1
            document.getElementById("oValue").innerHTML=operationMenu[i]
            break;
        }
    }
    document.getElementById("display").value=""
}
function equalButton()
{
    var value2=document.getElementById("display").value
    document.getElementById("sValue").innerHTML=value2
    if(flag==1)
    {
        result = Number(value1) + Number(value2);
    }
    else if(flag==2)
    {
        result = Number(value1) - Number(value2);
    }
    else if(flag==3)
    {
        result = Number(value1) * Number(value2);
    }
    else if(flag==4)
    {
        result = Number(value1) / Number(value2);
    }

    document.getElementById("display").style.color='black'
    document.getElementById("display").value=result
    document.getElementById("rValue").innerHTML=result
    value1=0
    value2=0
    result=0
}

var today=new Date();
var now=today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
var time=today.getHours()+':'+today.getMinutes()

document.getElementById("date").innerHTML=now
document.getElementById("time").innerHTML=time

console.log(now + time)

$(document).ready(function(){
    $('#intro').mouseenter(function(){
        $('#lab').hide(3000)
        $('#lab1').hide(2000)
        $('#lab2').css({"color":"red"})
        $("#plane").show(1000)
    })
    $('#intro').mouseleave(function(){
        $("#lab").show(1000)
        $("#lab1").show(2000)
        $("#lab2").css({"color":"white"})
        $("#plane").hide(2000)

    })
    $("#calculatorBody").mouseenter(function(){
        $("#fValue").show(3000)
        $("#sValue").show(2500)
        $("#rValue").show(2000)
        $("#oValue").show(1000)
       $("#lockMonitor").hide(3000)
    })
    $("#calculatorBody").mouseleave(function(){
        $("#fValue").hide(3000)
        $("#sValue").hide(2500)
        $("#rValue").hide(2000)
        $("#oValue").hide(1000)
        $("#lockMonitor").show(2000)
    })

})

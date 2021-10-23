/* document.addEventListener("DOMContentLoaded", function(event) { 
    //Do work
}); */
var totalbill = 0;
var billratio = 0;
var noOfPeople;
var tipPerPerson;
var billPerPerson;

function calcBill(){
    if(noOfPeople==0 || document.querySelector("#input-box-2 input").value==""){
        document.getElementById("tip-result").innerText = '₹0.00';
        document.getElementById("contri-result").innerHTML = "₹0.00";    
    }else{
    tipPerPerson = ((totalbill * (billratio/100))/noOfPeople).toFixed(2);
    billPerPerson = (totalbill/noOfPeople).toFixed(2);
    document.getElementById("tip-result").innerText = '₹'+ tipPerPerson;
    document.getElementById("contri-result").innerText = '₹'+ billPerPerson;
    }
}


// dealing with total bill
document.getElementById("bill-input").addEventListener('input',function(event){
    totalbill = event.target.value;
    totalbill = Number(totalbill);
    calcBill();
});

document.getElementById("input-box").onclick = function(){
    document.getElementById("input-box").style.border = "solid 2px hsl(172, 67%, 45%)";
}

//dealing with tip percentage
var billRatioButton = document.querySelectorAll("#select-tip-section span");

for(let a=0;a<billRatioButton.length;a++){
        billRatioButton[a].onclick = function(){
            for(var b=0;b<billRatioButton.length;b++){
                billRatioButton[b].style.backgroundColor = "hsl(183, 100%, 15%)";
                billRatioButton[b].style.color = "hsl(0, 0%, 100%)";               
            }
            document.querySelector("#select-tip-section input").style.border = "none";
            document.querySelector("#select-tip-section input").value = "";
            billRatioButton[a].style.backgroundColor = "hsl(172, 67%, 45%)";
            billRatioButton[a].style.color = "hsl(183, 100%, 15%)";
            billratio = Number(billRatioButton[a].innerHTML.replace("%",""));
            calcBill();
        }
}

document.querySelector("#select-tip-section input").onclick = function(){
    for(var b=0;b<billRatioButton.length;b++){
        billRatioButton[b].style.backgroundColor = "hsl(183, 100%, 15%)";
        billRatioButton[b].style.color = "hsl(0, 0%, 100%)";              
    }
    document.querySelector("#select-tip-section input").style.border = "solid 2px hsl(172, 67%, 45%)";
}
document.querySelector("#select-tip-section input").addEventListener('input',function(event){
    billratio = event.target.value;
    calcBill();
});

// dealing with total people

document.querySelector("#input-box-2 input").onclick = function(){
    if(noOfPeople==0){
        document.getElementById("input-box-2").style.border = "solid 2px red";
    }
    document.querySelector("#input-box-2").style.border = "solid 2px hsl(172, 67%, 45%)";
}
document.querySelector("#input-box-2 input").addEventListener("input",function(event){
    if(event.target.value == 0){
        document.getElementById("warning").innerText = "Can't be Zero";
        document.getElementById("warning").style.color = "red";
        document.getElementById("input-box-2").style.border = "solid 2px red";
        tipPerPerson = '₹0.00';
    }else{
    document.querySelector("#input-box-2").style.border = "solid 2px hsl(172, 67%, 45%)";
    document.getElementById("warning").innerText = "";
    noOfPeople = event.target.value;
    noOfPeople = Number(noOfPeople);
    calcBill();
    }
});


document.getElementById("button").onclick = function(){
    console.log("clicked");
    for(var b=0;b<billRatioButton.length;b++){
        billRatioButton[b].style.backgroundColor = "hsl(183, 100%, 15%)";
        billRatioButton[b].style.color = "hsl(0, 0%, 100%)";              
    }
    document.querySelector("#input-box-2").style.border = "none";
    document.querySelector("#input-box").style.border = "none";
    document.querySelector("#select-tip-section input").value = "";
    document.getElementById("bill-input").value = "";
    document.querySelector("#input-box-2 input").value = "";
    totalbill = 0;
    billratio = 0;
}
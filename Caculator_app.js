function add() {
   let data1= parseInt(document.getElementById("data1").value);
   let data2  = parseInt(document.getElementById("data2").value);
   let c
}

function sub() {
    let data1= parseInt(document.getElementById("data1").value);
    let data2  = parseInt(document.getElementById("data2").value);
    let result = data1-data2;
    document.getElementById("result").innerHTML ='result = '+result;
}

function multi() {
    let data1= parseInt(document.getElementById("data1").value);
    let data2  = parseInt(document.getElementById("data2").value);
    let result = data1*data2;
    document.getElementById("result").innerHTML ='result = '+result;
}

function div() {
    let data1= parseInt(document.getElementById("data1").value);
    let data2  = parseInt(document.getElementById("data2").value);
    let result = data1/data2;
    document.getElementById("result").innerHTML ='result = '+result;
}


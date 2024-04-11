console.log("calculator connected");

clicker = document.getElementById("calculate");
resultD = document.getElementById("result-d");
resultM = document.getElementById("result-m");
resultY = document.getElementById("result-y");

const date = new Date();
currentD = date.getDate();
currentM = date.getMonth()+1;
currentY = date.getFullYear();

//done all as arrays for consistency with feb
const jan = [31];
const feb = [28, 29];
const mar = [31];
const apr = [30];
const may = [31];
const jun = [30];
const jul = [31];
const aug = [31];
const sep = [30];
const oct = [31];
const nov = [30];
const dec = [31];

const months = [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec];


clicker.addEventListener("click",() => {
    inputD = document.getElementById("day").value;
    inputM = document.getElementById("month").value;
    inputY = document.getElementById("year").value;

    console.log(`${inputD}, ${inputM}, ${inputY}`);

    if (inputD > 31){
        document.getElementById("day").classList.add("error");
        console.log("day error");
    }
    else{
        document.getElementById("day").classList.remove("error");
    }

    if (inputM > 12){
        document.getElementById("month").classList.add("error");
        console.log("month error");
    }
    else{
        document.getElementById("month").classList.remove("error");
    }

    if (inputY > currentY){
        document.getElementById("year").classList.add("error");
        console.log("year error");
    }
    else{
        document.getElementById("year").classList.remove("error");
    }

    const outputY = currentY-inputY;
    const outputM = currentM-inputM;

    resultY.innerHTML = outputY;
    resultM.innerHTML = outputM;

})

console.log(`Date: ${currentD}, ${currentM}, ${currentY}`);


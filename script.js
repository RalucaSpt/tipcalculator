document.getElementById("tippercentage").addEventListener("change", function() {
    const customTip=document.getElementById("custom-tip");
    if(this.value==="custom") {
        customTip.style.display="block";
    } else {
        customTip.style.display="none";
    }
});

function calculate() {
    const billAmount = parseFloat(document.getElementById("bill").value);
    if (isNaN(billAmount) || billAmount <= 0) {
        document.getElementById("tipAmount").innerText = "Please enter a valid bill amount.";
        document.getElementById("initialAmount").innerText = "";
        document.getElementById("totalBill").innerText = "";
        return;
    }

    let tipPercentage;
    if(document.getElementById("tippercentage").value==="custom") {
        tipPercentage = parseFloat(document.getElementById("custom-tip").value);
        if (isNaN(tipPercentage) || tipPercentage < 0) {
            document.getElementById("tipAmount").innerText = "Please enter a valid custom tip percentage.";
            document.getElementById("initialAmount").innerText = "";
            document.getElementById("totalBill").innerText = "";
            return;
        }
    }
    else {
        tipPercentage = parseFloat(document.getElementById("tippercentage").value);
    }
    const tipAmount = billAmount * tipPercentage / 100;
    const totalBillAmount = billAmount + tipAmount;        
    document.getElementById("initialAmount").innerText = `Initial bill = ${billAmount.toFixed(2)} RON`;
    document.getElementById("tipAmount").innerText = `Tip amount = ${tipAmount.toFixed(2)} RON`;
    document.getElementById("totalBill").innerText = `Total bill = ${totalBillAmount.toFixed(2)} RON`;
}

function reset(){
    document.getElementById("bill").value="";
    document.getElementById("tippercentage").value="0";
    document.getElementById("custom-tip").value="";
    document.getElementById("tipAmount").innerText="";
    document.getElementById("custom-tip").style.display="none";
    document.getElementById("initialAmount").innerText="";
    document.getElementById("totalBill").innerText="";
}
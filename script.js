const resultBefore = document.getElementById('result-area');
const resultAfter = document.querySelector('.result-after');
const calculateButton = document.querySelector('.calculate-repayments');
const mortageAmount = document.getElementById('mortage-amount');
const mortageTerm = document.getElementById('mortage-term');
const InterstRate = document.getElementById('interst-rate');
const inputBox = document.querySelectorAll('.input-box');
const spanDiv = document.querySelectorAll('.span');
const monthlyEmi = document.getElementById('monthly-emi');
const TotalEmi = document.getElementById('total-value');

function clearAll(){
   mortageAmount.value= "";
   mortageTerm.value="";
   InterstRate.value = "";
   const repayment = document.querySelector('input[type="radio"]:checked');
   if(repayment){
    repayment.checked = false;

   }
 
   
}
let selected = true;
calculateButton.addEventListener('click', (event) => {
    event.preventDefault();   
    const repayment = document.querySelector('input[type="radio"]:checked');
    const errorDisplay = document.getElementById('error-display');
    let isValid = true;
    if (!repayment) {
        errorDisplay.textContent = "This field isrequied";
        errorDisplay.style.color = "red";
        removeMessageAfterDelay(errorDisplay);
        isValid = false;
    } 
    if (mortageAmount.value === '') {
        showErrorEmpty(mortageAmount, "This field is requied");
        showBorder(mortageAmount);
        spanDivColor(mortageAmount);
        isValid = false;
    }

    else if (/[^\d]/.test(mortageAmount.value)) {
        showErrorNumber(mortageAmount, "Please Enter a number");
        showBorder(mortageAmount);
        spanDivColor(mortageAmount);
        isValid = false;
    }
    if (mortageTerm.value === '') {
        showErrorEmpty(mortageTerm, "This field is requied");
        showBorder(mortageTerm);
        spanDivColor(mortageTerm);
        isValid = false;
    }
    else if (/[^\d]/.test(mortageTerm.value)) {
        showErrorNumber(mortageTerm, "Please Enter a number");
        showBorder(mortageTerm);
        spanDivColor(mortageTerm);
        isValid = false;
    }

    if (InterstRate.value === '') {
        showErrorEmpty(InterstRate, "This field is requied");
        showBorder(InterstRate);
        spanDivColor(InterstRate);
        isValid = false;
    }
    else if (/[^\d]/.test(InterstRate.value)) {
        showErrorNumber(InterstRate, "Please Enter a number");
        showBorder(InterstRate);
        spanDivColor(InterstRate);
        isValid = false;
    }
    if(isValid){

        calculate();
    }
    
});
   
    //     showError();
    // } 
    // else{

    //     // showError("");
    //     console.log("e3")
    // }
    // if(mortageTerm.value === ""){
    //     // noValue();
    //     // removeMessageAfterDelay(mortageAmountPara);  
    //     showError() ;
    //     showBorder();
    //     spanDivColor();

    // }
    // else if (/[^\d]/.test(mortageTerm.value)) {   
    //     // showError("Please Enter a number")
    //     showBorder();
    //     spanDivColor();


    // } 
    // if(InterstRate.value === ""){
    //     // noValue();
    //     // showError("This field is required3");
    //     showBorder();
    //     spanDivColor();

    // }
    // else if (/[^\d]/.test(InterstRate.value)) {   
    //     // showError("Please Enter a number");
    //     showBorder();
    //     spanDivColor();

    //     // removeMessageAfterDelay(mortageAmountPara);  




    // function showError(message){
    //     mortageAmountPara.forEach((item) =>{
    //         if(mortageAmount.value === ''){
    //             item.textContent = 'This field is required';
    //             item.style.color = 'red';

    //         }        
    //         console.log(item);   
    //         console.log(mortageAmount);


    //     })

    //     removeMessageAfterDelay(mortageAmountPara);
    // }

    // showError();



    // function noValue(){
    // mortageAmountPara.textContent ="This field is required";
    // mortageAmountPara.style.color = "red";       
    // }
    // function numberValue(){
    //     mortageAmountPara.textContent ="Please Enter a number";
    //     mortageAmountPara.style.color = "red";
    // }





function removeMessageAfterDelay(element) {

    setTimeout(() => {
        // element.forEach((item) => {

        // });
        element.textContent = "";
    }, 2000);
}

function showBorder(element) {    
    
    const inputControl = element.parentElement.parentElement;
    const error = inputControl.querySelector('.input-box-second');
    error.style.borderColor = "red";
    removeInputBorder(error);
    // removeInputBorder();
    // console.log(element)
    // const inputControls = element.parentElement.parentElement;
    // console.log(`parentelement ${inputControls}`)/
   
}

function spanDivColor(element) {
    // spanDiv.forEach((item) => {
    // element.style.backgroundColor = "red";
    // console.log(element)
    // })
    const inputControl = element.parentElement.parentElement;
    const error = inputControl.querySelector('span');
    error.style.backgroundColor = "red";
    removeInputBorder(error);

}


function removeInputBorder(element) {
    setTimeout(() => {
        // inputBox.forEach((item) => {
        //     item.style.borderColor = "";
        // });

        // spanDiv.forEach((item) => {
        //     item.style.backgroundColor = "";

        // });
        element.style.borderColor = "";
        element.style.backgroundColor = "";
       
    
    }, 2000);


}

showErrorEmpty = (element, message) => {
    const inputControl = element.parentElement.parentElement;
    const error = inputControl.querySelector('.mortage-amount-para');
    error.textContent = message;
    error.style.color = 'red';
    removeMessageAfterDelay(error);
  
    
}

showErrorNumber = (element, message) => {
    // mortageAmountPara.textContent = message;   
    const inputControl = element.parentElement.parentElement;
    const error = inputControl.querySelector('.mortage-amount-para');
    error.textContent = message;
    error.style.color = 'red';
    removeMessageAfterDelay(error);
   


}

function calculate(){
        const p = mortageAmount.value;
        const n = mortageTerm.value;
        const r = InterstRate.value;
        const monthlyRate = r/(100*12);  
        const  totalPayments = n*12;
        const monthlyPayment = p * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / (Math.pow(1 + monthlyRate, totalPayments) - 1);
        const totalRepayment = monthlyPayment*totalPayments;
        const  totalInterst  = totalRepayment-p;         
        const repayment = document.querySelector('input[type="radio"]:checked');      
       
    
        if (repayment.id === 'interst'){
            monthlyEmi.textContent = monthlyRate;
            TotalEmi.textContent = Math.round(totalInterst,0); 
              
              
        }
        else if(repayment.id === 'repayment'){
            monthlyEmi.textContent =  Math.round(monthlyPayment,0);
            TotalEmi.textContent = Math.round(totalRepayment,0);         
        }

        if (selected) {
            resultBefore.style.display = 'none';
            resultAfter.style.display = 'block';
            selected = false;
        }
      
    
    
  
}


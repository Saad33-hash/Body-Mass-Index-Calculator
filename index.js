const weightInputField=document.getElementById("weightinput");
const heightInputField=document.getElementById("heightinput");
const calBMI=document.getElementById("calbtn");
const statsOfBMI=document.getElementById("bmiresult");
const errorMessage=document.getElementById("heightError");
const errorMessageWeight=document.getElementById("weightError");
//decalring varaibles i meet need
let valueInWeight;
let valueInHeight;

//function for making code more readable
function validateweight(weight){
if(weight<0){
    errorMessageWeight.innerText="Weight can not be negative"
    weightInputField.value=0;   
  
    }
    else{
        errorMessageWeight.innerText="";
  return weight;
}
}

function validateHeight(height){
     if(height<0){
        errorMessage.innerText="Height cannot be negative";
        heightInputField.value=0;
    }
   
    else if(height>3.0){
   errorMessage.innerText="Height can not be greater than 3.0";
    }
    else{
        errorMessage.innerText="";
        return height;
    }
   
}

//adding event listener on weight input field
weightInputField.addEventListener("input",function(){
      valueInWeight=validateweight(parseFloat(weightInputField.value) || 0);
//   if(weightInputField.value<0){
//      weightInputField.value=0;
//      errorMessageWeight.innerText="Weight can not be negative"
//    }
//    else{
//        errorMessageWeight.innerText="";
//  valueInWeight=weightInputField.value;
//  console.log("value of weight",valueInWeight);
//}
    })
  

//adding event listener on height input field
heightInputField.addEventListener("input",function(){
    valueInHeight=validateHeight(parseFloat(heightInputField.value) || 0);
//      if(heightInputField.value<0){
//        heightInputField.value=0;
//    }
//    else{
//  valueInHeight=heightInputField.value;
//  console.log("value of weight",valueInHeight);
//  }
//    if(valueInHeight>3.0){
//   errorMessage.innerText="Height can not be greater than 3.0";
//      
//    }
//    else{
//        errorMessage.innerText=""
//    }
//   console.log("value of height",valueInHeight);
})

calBMI.addEventListener("click",function(){
    const weightValue=validateweight(valueInWeight);

    console.log("weight in add btn",weightValue)
    const heightValue=validateHeight(valueInHeight);
    console.log("height in add btn",heightValue);
    if(weightInputField.value == "" || heightInputField.value==""){
        return;
    }
    //checking the condittion that value should not be greater tah  3.0
//    if(valueInHeight>3.0){
 //  errorMessage.innerText="Height can not be greater than 3.0";
      
 //   }
 //   else{
 //       errorMessage.innerText=""
 //   }
    
    //calculating BMI
    const BMI=(weightValue/(heightValue*heightValue));
    console.log("total BMI",BMI.toFixed(1))

    //checking the range and what condittion the user is suffering from and what will be the message displayed
    let condittion;
    let description;
    //for every condition that shows on screen i want to make it colorful so the patient can is it serious normal or etc
    let condittionColor;
    if(BMI<18.5){
    condittion="Under Weight";
    condittionColor="#F8B4B4";
    description="You may need to gain weight. Consider consulting with a healtcare provider for personalized advice."
    }
    else if(BMI>=18.5 && BMI<=24.9){
        condittion="Normal Weight";
         condittionColor="#229954";
        description="You have a healthy weight for your height. Maintain your current lifestyle with regular excercise and balanced nutrition";

    }
        else if(BMI>=25.0 && BMI<=29.9){
        condittion="Over Weight";
        condittionColor="#f7b731";
        description="You may benefit from weight loss.Consider adopting a healthy diet and increasing physical acativity";
        
    }
    else{
        condittion="obese";
        condittionColor="#EB5757";
        description="Consider consultin with a healthcare provider for a comprehensive weight management plan"
    }
    //creating a div on run
  //  const bmiReportDiv=document.createElement("div");
   // bmiReportDiv.classList.add("newdiv"); 
   console.log(condittion,condittionColor,description)
   statsOfBMI.style.display="block";
statsOfBMI.innerHTML=`
    <p id='ValueofBMI' >${BMI.toFixed(2)}</p>
    <p id='condittion' style="background-color:${condittionColor} ">${condittion}</p>
    <p id="prescription">${description}</p>

     `
    //appending into the statsOfBMI continer
    

})
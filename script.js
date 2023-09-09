
//Input format Change


document.getElementById('height_select').addEventListener('change',function(){
    if(document.getElementById('height_select').value=="feet")
    {inchAdd();}
    else
    {   inchRem();
}
});

document.getElementById("resultCard").style.visibility="hidden";

function inchRem(){
    let child=document.getElementById('height_feet');
    child.parentNode.removeChild(child); 
    document.getElementById("height_label").innerHTML="Enter your Height";
    
}

function inchAdd(){
let inch=document.createElement('div');
inch.className='form-floating';
inch.innerHTML=`<input type="number" class="form-control" id="height2" placeholder="enter your height">
<label for="weight" class="form-label">Enter Inches</label>`
inch.id="height_feet";

document.getElementById('feet').after(inch);

document.getElementById("height_label").innerHTML="Enter Feets";
}


//BMI Calculations

function calculate(){

    let weight=document.getElementById('weight').value;
    let height1=document.getElementById('height1').value;
    let height2=0;
    let totalHeight=height1;
    let bmi=0;

    let weight_unit=document.getElementById('weight_select').value;
    let height_unit=document.getElementById('height_select').value;

    console.log("the height entered is "+height1+"cm"+height2);
    console.log("The weight unit selected is "+weight_unit);
    console.log("The height unit selected is "+height_unit);

    //pounds to kg conversion
    if(weight_unit=="pounds")
    {   console.log("the weight is "+weight+" pounds");
        weight=weight*0.453;
    }
    else{
    console.log("the weight is "+weight+" kg")
    }
    console.log("the converted weight is "+weight);
   //feet,inches,cm to meter conversion
    if(height_unit=="feet")
    {
        height2=document.getElementById("height2").value;
        totalHeight=(height1*0.3048)+(height2*0.0254);
    }
    else if(height_unit=="cm")
    {
        totalHeight=height1/100;
    }

    console.log("the converted height is "+totalHeight+"m");

    bmi=(weight/(totalHeight**2)).toPrecision(3);
    console.log("the BMI is "+bmi);
    document.getElementById("bmi").innerHTML=bmi;
    
    return bmi; 



}

const person={
    category:"",
    index:0
};


// BMI category 

function bmiRange(bmi){


    console.log("The BMI Entered in the function bmiRange() is "+bmi);

    if(bmi < 18.5){
        person.category="Under Weight";
        person.index=0;
    }
    else if(bmi < 24.9){
        person.category="Normal Weight";
        person.index=1;
    }
    else if(bmi < 29.9  && bmi > 25){
        person.category="Over Weight";
        person.index=2;
    }
    else if(bmi >30){
        person.category="Obese";
        person.index=3;
    }

    console.log("the category is "+person.category);

    document.getElementById("category").innerHTML=person.category;

return person;

}

// BMI Image loader

function imgLoader(person){

    let imgArr=["underweight.jpg","normal.png","overweight.png","obese.png"];

    let colorArr=["primary","success","warning","danger"];
    
    document.getElementById("result").setAttribute("class",`card text-bg-${colorArr[person.index]}`);
    document.getElementById("img").src=`/Images/${imgArr[person.index]}`;

   

}

// Click Event()
//Another comment for test

function finalOutput(){

    document.getElementById("resultCard").style.visibility="visible";
    let bmi=calculate();
    let personObj=bmiRange(bmi);
    imgLoader(personObj);


}
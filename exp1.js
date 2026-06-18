function calculateresult(){
    let n = document.getElementById("subjects").value;
    let total = 0;
    for(let i=1;i<=n;i++){
    let marks = parseFloat(prompt("Enter marks for subjcts"+1));
    total=total+marks;     
    }
    let average=total/n;
    let grade;
    let reslut;
    if(average>=90){
        grade="A+";
    }
    else if(average >=75){
        grade="A";
    }
    else if(average >=60){
        grade="B";
    }
    else if(average >=50){
        grade="C";
    }
    else{
        grade="F";
    }
    else if(average >=40){
        result="pass";
    }
    else{
        result="Fail";
    }
    document.getElementById("result").innerHTML = 
    "Total Marks: " + 
    }
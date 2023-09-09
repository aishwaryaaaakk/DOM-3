// fill in javascript code here
let myForm = document.querySelector("form");
let Name = document.getElementById("name");
let DocID = document.getElementById("docID");
let Department = document.getElementById("dept");
let Exp = document.getElementById("exp");
let Email = document.getElementById("email");
let Mobile = document.getElementById("mbl");
let tbody = document.querySelector("tbody");

let AllData=[];

myForm.addEventListener("submit",function(e){
    e.preventDefault();
    let Data={
        name : Name.value,
        docID : DocID.value,
        dept : Department.value,
        exp : Exp.value,
        email : Email.value,
        mob : Mobile.value,

    }
    console.log(Data);
    AllData.push(Data);
    console.log(AllData);

    tbody.innerHTML="";
    AllData.map((ele)=>
    {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const td4 = document.createElement("td");
        const td5 = document.createElement("td");
        const td6 = document.createElement("td");
        const td7 = document.createElement("td");
        const td8 = document.createElement("td");
        td8.style.backgroundColor="red";


        

        td1.innerText = ele.name;
        td2.innerText = ele.docID;
        td3.innerText = ele.dept;
        td4.innerText = ele.exp;
        td5.innerText = ele.email;
        td6.innerText = ele.mob;
        td8.innerText = "Delete";

        if(ele.exp>5)
        {
            td7.innerText = "Senior";
        }
        else if(ele.exp>2 && ele.exp<=5)
        {
            td7.innerText = "Junior";
        }
        else if(ele.exp<=1)
        {
            td7.innerText = "Traniee";
        }
        
        td8.addEventListener("click",function(){
            tbody.removeChild(tr);
        })

        tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
        tbody.append(tr);
    })
})


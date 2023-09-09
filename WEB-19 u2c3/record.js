// fill in javascript code here
let myForm = document.querySelector("form");
let Name = document.getElementById("name");
let EmployeeID = document.getElementById("employeeID");
let Department = document.getElementById("department");
let Exp = document.getElementById("exp");
let Email = document.getElementById("email");
let Mob = document.getElementById("mbl");
let tbody = document.querySelector("tbody");

let AllData=[];

myForm.addEventListener("submit",function(e){
    e.preventDefault();

    let Data={
        name : Name.value,
        employeeID : EmployeeID.value,
        department : Department.value,
        exp : Exp.value,
        email : Email.value,
        mbl : Mob.value,

    }
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


        

        td1.innerText = ele.name;
        td2.innerText = ele.employeeID;
        td3.innerText = ele.department;
        td4.innerText = ele.exp;
        td5.innerText = ele.email;
        td6.innerText = ele.mbl;
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
            td7.innerText = "Fresher";
        }
        
        td8.addEventListener("click",function(){
            tbody.removeChild(tr);
        })

        tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
        tbody.append(tr);
    })
})

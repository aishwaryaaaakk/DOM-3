let myForm = document.querySelector("form");
let inpTask = document.getElementById("task");
let selectPriority = document.getElementById("priority");
let tbody = document.querySelector("tbody");

let AllData=[];

myForm.addEventListener("submit",function(e){
    e.preventDefault()
    let Data =
    {
        input : inpTask.value,
        priority : selectPriority.value,
    }
    AllData.push(Data);
    tbody.innerHTML="";
    AllData.map((ele) =>
    {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");

        td1.innerText = ele.input;
        td2.innerText = ele.priority;

        tr.append(td1,td2);
        tbody.append(tr);


    })
})
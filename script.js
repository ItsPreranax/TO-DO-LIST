let tasks=JSON.parse(localStorage.getItem("tasks"))||[];
tasks.forEach(function(task){
    let li=document.createElement("li");
    li.textContent=task.text;

    if(task.completed){
        li.style.textDecoration="line-through";

    }

    li.onclick=function(){
        if(li.style.textDecoration=="line-through"){
            li.style.textDecoration="none";
            task.completed=false;
        }else{
            li.style.textDecoration="line-through";
            task.completed=true;
        }
        localStorage.setItem("tasks",JSON.stringify(tasks));
    }

    let editBtn=document.createElement("button");
    editBtn.textContent="Edit";
    editBtn.onclick=function(event){
        event.stopPropagation();

        let inputBox=document.createElement("input");
        inputBox.type="text";
        inputBox.value=task.text;

        li.firstChild.remove();
        li.prepend(inputBox);

        editBtn.textContent="Save";

        editBtn.onclick=function(event){
            event.stopPropagation();

            let newValue=inputBox.value;

            li.firstChild.remove();
            li.prepend(document.createTextNode(newValue));

            task.text=newValue;
            localStorage.setItem("tasks",JSON.stringify(tasks));

            editBtn.textContent="Edit";
        };
    };

    li.appendChild(editBtn);

    let btn=document.createElement("button");
    btn.textContent="Delete";

    btn.onclick=function(){
        event.stopPropagation();
        li.remove();

        tasks=tasks.filter(function(t){
            return t.text!==task.text;
        });
        localStorage.setItem("tasks",JSON.stringify(tasks));

    };

    li.appendChild(btn);
    document.getElementById("taskList").appendChild(li);
});


function addTask(){
        //document.getElementById("taskInput");
//alert("hello")
   //getting the value what we have enterd

   let input=document.getElementById("taskInput");

   let a=input.value;

   //to handle empty task
   if(a==""){
    alert("Enter a task.");
    return;
   }
//this will not work when i have to marked task permeanently
   //tasks.push(a);
//doing this makes taske tick permanent
tasks.push({
    text:a,
    completed:false
});

   localStorage.setItem("tasks",JSON.stringify(tasks));


//    //to handle empty task
//    if(a==""){
//     alert("Enter a task.");
//     return;
//    }


   //createing li ,
   // not storing new (li) list items
   let li=document.createElement("li");

   //adding text to li (items)

   li.textContent=a;

   //toogle event to marks the task as done or not
   li.onclick=function(){
    if(li.style.textDecoration==="line-through"){
        li.style.textDecoration="none";
        tasks[tasks.length-1].completed=false;
        }else{
            li.style.textDecoration="line-through";
            tasks[tasks.length-1].completed=true;
        }
        localStorage.setItem("tasks",JSON.stringify(tasks));

   };

   //edit button

   let editBtn=document.createElement("button");
    editBtn.textContent="Edit";

    editBtn.onclick=function(event){
        event.stopPropagation();

        let inputBox=document.createElement("input");
        inputBox.type="text";
        inputBox.value=a;

        li.firstChild.remove();
        li.prepend(inputBox);

        editBtn.textContent="Save";

        editBtn.onclick=function(event){
            event.stopPropagation();

            let newValue=inputBox.value;

            li.firstChild.remove();
            li.prepend(document.createTextNode(newValue));

            tasks[tasks.length-1].text=newValue;

            localStorage.setItem("tasks",JSON.stringify(tasks));

            editBtn.textContent="Edit";
        };
    };

    li.appendChild(editBtn);


 //creating the button


     // //its means i have created { <button> </button> } this , i have created button in js
    let btn=document.createElement("button");

    //adding text to the button

    btn.textContent="Delete";

    //<button>Delete</button>

    //for that click behaviour when click the delete button the task should remove from the list.

    btn.onclick=function(event){
        //clicking delete btn should not trigger marked option like in rasks to removing it we writing this code

        event.stopPropagation();

        li.remove();

        tasks=tasks.filter(function(t){
            return t.text!==a;
        });
        localStorage.setItem("tasks",JSON.stringify(tasks));
    };

    //attching buttom
     li.appendChild(btn);

         //appending li to ul
   document.getElementById("taskList").appendChild(li);

    input.value="";
    
}
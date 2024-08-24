

let ul = document.querySelector("ul");
let inputBox = document.querySelector("input");
let addButton = document.querySelector(".addButton");

addButton.addEventListener("click",(e)=>{
   if(inputBox.value==""){
    alert("please write the task");
   }
else{

  // creating listItem 
      let listItem = document.createElement("li");
      listItem.innerHTML = inputBox.value
      ul.appendChild(listItem) ;
     inputBox.value = "";

       // creating delete icon
      let deleteIcon = document.createElement("span");
      deleteIcon.className = "deleteIcon";
      deleteIcon.innerHTML = "&#x00d7";
     listItem.appendChild(deleteIcon);

   saveData();


}
})




  ul.addEventListener("click",(el)=>{
        
    if(el.target.tagName === "LI"){
        el.target.classList.toggle("list-item");
        saveData();
    }
    else if(el.target.tagName === "SPAN"){
        el.target.parentElement.remove()
        saveData();
    }
    });
   

    // function saveData(){
    //     localStorage.setItem("data",ul.innerHTML);
    // }


    // function showTask(){
    //     ul.innerHTML = localStorage.setItem("data");
    // }

    // showTask();
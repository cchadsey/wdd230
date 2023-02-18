const button = document.querySelector("#add");
const input = document.querySelector("#favchap");
const list = document.querySelector("#list");

function growList(){
    if (input.value === ""){
    } 

    else{
        let newEntry = document.createElement("li");
        let delBu = document.createElement("button");

        newEntry.innerText = input.value;
        delBu.innerText = "❌";
        delBu.setAttribute("class", "deleteButton");
        newEntry.appendChild(delBu);
        list.appendChild(newEntry);

        input.value = "";

    }
};

function shrinkList(e){
    const doomed = e.target;
    
    if (doomed.classList[0] === "deleteButton"){
        const parentElement = doomed.parentElement;

        parentElement.remove();
    }
};

input.focus();

input.value = "";



button.addEventListener('click', growList)
list.addEventListener('click', shrinkList)

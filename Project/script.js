
document.getElementById("changeTextBtn").addEventListener("click", function() {
  document.getElementById("myParagraph").textContent = "I am always discovering new hobbies and passions!";
});


document.getElementById("addItemBtn").addEventListener("click", function() {
  let hobby = prompt("Enter a new hobby:");
  if (hobby) {
    let newItem = document.createElement("li");

   
    newItem.innerHTML = `<img src="https://cdn-icons-png.flaticon.com/512/3176/3176366.png" 
                           alt="Hobby Icon" class="hobby-img"> ${hobby}`;
    document.getElementById("myList").appendChild(newItem);
  }
});

document.getElementById("removeElementBtn").addEventListener("click", function() {
  let list = document.getElementById("myList");
  if (list.lastElementChild) {
    let confirmDelete = confirm("Do you want to remove the last hobby?");
    if (confirmDelete) {
      list.removeChild(list.lastElementChild);
    }
  }
});


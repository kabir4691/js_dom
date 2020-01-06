//Select the section with an id of container without using querySelector.
let a = document.getElementById("container");

//Select the section with an id of container using querySelector.
let b = document.querySelector("#container");

//Select all of the list items with a class of "second".
let c = document.querySelectorAll(".second");


//Select a list item with a class of third, but only the list item inside of the ol tag.
document.querySelector("li.third").style.background = "red";


//Give the section with an id of container the text "Hello!".
document.querySelector("#container").append("Hello");


//Add the class main to the div with a class of footer.
document.querySelector("div, .footer").classList.add("main");


//Remove the class main on the div with a class of footer.
document.querySelector("div, .footer").classList.remove("main");


//Create a new li element.
let listItem = document.createElement("li");


//Give the li the text "four".
listItem.textContent = "four";


//Append the li to the ul element.
document.querySelector("ul").appendChild(listItem);


//Loop over all of the list inside the ol tag and give them a background color of "green".
Array.from(document.querySelectorAll("ol > li")).forEach(element => {
    element.style.background = "green";
});


//Remove the div with a class of footer.
let footerDiv = document.querySelector("div.footer");
footerDiv.parentNode.removeChild(footerDiv);
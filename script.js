// Body onload function
var stop;
function loader() {
  stop = setTimeout(showPage, 2200);
}
function showPage() {
  document.getElementById("loader-page").style.display = "none";
  document.getElementById("container").style.display = "block";
}

// Welcome guest onclick
function greeting() {
  try { 
    let visitor = prompt("What's your good name?");
    let greeting = document.querySelector(".greeting");
    greeting.style.fontFamily='"Gotu","sans-serif"';
    greeting.style.color="#0628A1";
    if(visitor == "") throw "Don't you know your name?";
    if(!isNaN(visitor)) throw "OMG! You own number as your name";
    if(isNaN(visitor)) greeting.innerHTML = "Welcome " + visitor + `  <i class="fa-regular fa-face-smile"></i>`;
  }  
  catch(error) {
    alert(error);
  }
  finally {
    alert("Thanks for visiting my website");
  }
  //greeting.onclick = null;
}

// display grades onclick
var collegeScore = document.getElementById("college-score");
var schoolScore = document.getElementById("school-score");
var building = document.getElementsByClassName("image");

function school() {
  for(let i = 0; i< building.length; i++) {
    building[0].classList.add("zoom");
    building[1].classList.remove("zoom");
  }
  collegeScore.style.display = "none";
  schoolScore.style.display ="block";
}
function college() {
  for(let i = 0; i< building.length; i++) {
    building[1].classList.add("zoom");
    building[0].classList.remove("zoom");
  }
  schoolScore.style.display = "none";
  collegeScore.style.display ="block";
}

// skill details to show onclick
const ids = ["html", "css", "js", "react", "c", "c++", "java", "db"];
const contents = ["HTML stands for Hyper Text Markup Language. It is the standard markup language for creating Web pages. It describes the structure of a Web page. It consists of a series of elements. HTML elements tell the browser how to display the content.",

                 "CSS stands for Cascading Style Sheets. It describes how HTML elements are to be displayed on screen, paper, or in other media. It saves a lot of work. It can control the layout of multiple web pages all at once. External stylesheets are stored in CSS files.",

                "Javascript is an interpreted programming language to create dynamic and interactive web content like applications and browsers. JavaScript is so popular that it's the most used programming language in the world, used as a client-side programming language by 97.0% of all websites.",

                "ReactJS is an open-source, component-based front end library responsible only for the view layer of the application. It is maintained by Facebook. React is used to build single-page applications. Allows to create reusable UI components.",

                "C is a general-purpose programming language. C is very fast, compared to other programming languages, like Java and Python. C is very versatile; it can be used in both applications and technologies.",
                
                "C++ is a cross-platform and object-oriented programming language that can be used to create high-performance applications. Commonly used in advanced graphics applications, Embedded systems and video games.",

                "Java is a widely used object-oriented programming language. Extremely flexible,it is used extensitevely by Businesses, web apps, android apps, games. JDK provides an environment for developing and executing the Java source code. JRE identifies all the helpful class libraries needed for execution, while JVM is a subclass of JRE that decodes the bytecode into machine language.",

                "SQL stands for Structured Query Language for managing RDBMS. Used to CRUD [Create, Rettrieve, Update, Delete] data from a database."];

                
for(let i = 0; i < ids.length; i++) {
  document.getElementById(ids[i]).addEventListener("click", function() {
  //this.classList.add("on");
  let text = document.getElementById("content");
  text.innerText = contents[i];
  //text.parentElement.style.border="dotted #0628A1";
  })
}

// Active skill 
let skills = document.querySelectorAll(".skill");
console.log(skills);
skills.forEach(element=> {
  element.addEventListener("click", function(){
    skills.forEach(skill=>skill.classList.remove("on"))
    this.classList.add("on");
  })
});

// Media Queries 







 

   






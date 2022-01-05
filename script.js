window.onload = function(){
    fetch("./manifest.json")
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        console.log(data);

    const container = document.querySelector("#porfolio-containter"); //the section where we find the projects

      for(var i = 0; i < data["projects"].length; i++){ //1° for all project in the manifest.json file...
        var div = document.createElement("div");//2° create a div..
        var img = document.createElement("img"); 
        console.log(container);
        

        var imageSource = data["projects"][i]["imagesrc"]; //3° store the image's source (also adds "" nessessary for th next step)...
        console.log(imageSource);
        img.setAttribute("src", imageSource);//4° changes the div's background url...

        var title = document.createElement("h2");
        var text = document.createElement("p");
        title.innerHTML = data["projects"][i]["title"];
        text.innerHTML = data["projects"][i]["text"];

        var link = document.createElement("a");
        link.innerHTML = "View site"; 
        link.href = data["projects"][i]["link"];

        container.appendChild(div);
        div.appendChild(title);
        div.appendChild(text);
        div.appendChild(link);

        div.appendChild(img); //add the div to the page

        
        }  
    })
    .catch(function(){
        console.log("something went wrong")
    })

 

    
}


const menuButton = document.querySelector("img#menu-icon");
const menu = document.querySelector("nav");

menuButton.addEventListener("click", function(){
    menu.classList.toggle("menu");
    if (menu.classList.contains("menu")===true){
        menuButton.src = "./icons-images/close_black_24dp (1).svg"
    }else{
        menuButton.src = "icons-images/menu_black_24dp (1).svg";
    }
})

if(window.innerWidth > 800){
    menu.classList.remove("menu");
    menu.classList.add("menu-desktop")
}







window.onload = function(){

    fetch("./manifest.json") //call the manifest.json file the projects are stored
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        console.log(data);

    const container = document.querySelector("#porfolio-containter"); //the section where the projects are place on the web page

      for(var i = 0; i < data["projects"].length; i++){ //1° for all project in the manifest.json file...
        var div = document.createElement("div");//2° create a div..
        var img = document.createElement("img"); //3°create an image

        var imageSource = data["projects"][i]["imagesrc"]; //4° store the image's source (also adds "" nessessary for th next step)...
        img.setAttribute("src", imageSource);//5° set the image's source...

        var title = document.createElement("h2"); //6° create an h2 for the project title...
        var text = document.createElement("p");//7° create a paragraph for the project description...
        title.innerHTML = data["projects"][i]["title"]; 
        text.innerHTML = data["projects"][i]["text"];

        var link = document.createElement("a"); //8° create a link for each project
        link.innerHTML = "View site"; 
        link.href = data["projects"][i]["link"]; //9° set the link's href

        container.appendChild(div);// places the div in the container
        div.appendChild(title);//add the title in the div
        div.appendChild(text);//add the text in the div
        div.appendChild(link);//add the link in the div
        div.appendChild(img); //add the image to the div

        
        }  
    })
    .catch(function(){
        console.log("something went wrong")
    })

 
    
}


const menuButton = document.querySelector("img#menu-icon"); //hamburger menu icon
const menu = document.querySelector("nav"); //mobileversion menu

//display or close the mobile version menu
menuButton.addEventListener("click", function(){
    menu.classList.toggle("menu");
    if (menu.classList.contains("menu")===true){
        menuButton.src = "./icons-images/close_black_24dp (1).svg"
    }else{
        menuButton.src = "icons-images/menu_black_24dp (1).svg";
    }
})

//changes the navigation bar class depending on the window size.
window.addEventListener("resize", function(){
    
   if(window.innerWidth > 800){
    if (menu.classList.contains("menu")===true){
    menu.classList.remove("menu");
    }
    menu.classList.add("menu-desktop");
} else{
    menu.classList.remove("menu-desktop");
}
 
})







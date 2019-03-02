let mainSection= document.getElementById("main-doc");
let navbar= document.getElementById("navbar");
let navList= document.getElementById("nav-list");

for (let section of sections) {

  //Creating the new elements
  let newSection= document.createElement("section");
  let title= document.createElement("header");
  let paragraphOne= document.createElement("p");
  let paragraphTwo= document.createElement("p");
  let code= document.createElement("code");
  let navListItem= document.createElement("li");
  let navLink= document.createElement("a");

  //Adding the elements to the main section
  mainSection.appendChild(newSection);
  newSection.appendChild(title);
  newSection.appendChild(paragraphOne);
  newSection.appendChild(paragraphTwo);
  newSection.appendChild(code);
  navList.appendChild(navListItem);
  navListItem.appendChild(navLink);
  
  //Includes a list if the Object has a list
  if(section.list){
    let unorderedList= document.createElement("ul");
    for (let listItem of section.list){
      let li= document.createElement("li");
      li.innerHTML= listItem;
      unorderedList.appendChild(li);
    }
    newSection.appendChild(unorderedList);
  }
  //Filling in the data for the newly created elements
  title.innerHTML= "<h2>"+section.title+"</h2>";
  paragraphOne.innerHTML= section.paragraphOne;
  paragraphTwo.innerHTML= section.paragraphTwo;
  code.innerHTML= section.code;
  navLink.innerHTML= section.title;
  newSection.className= "main-section";
  newSection.id= section.title;
  navLink.className= "nav-link";
  navLink.href= "#"+newSection.id;
}
//Simple but effective code that can adapt to changing requirements or add to for more depth.

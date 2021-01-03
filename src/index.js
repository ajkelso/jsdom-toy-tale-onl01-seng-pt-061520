let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});
const toyCollection = document.getElementById('toy-collection')
fetch('http://localhost:3000/toys')
 .then( res => res.json() )
 .then( function(obj) {
    obj.forEach(function(toy){ 
      createCard(toy)
    })
  })

function createCard(toy) {
  const div = document.createElement('div')
  div.classList.add("card")
  const info = []
  //h2
  const h2 = document.createElement('h2')
  h2.innerHTML = toy.name
  //img
  const img = document.createElement('img')
  img.src = toy.image
  img.classList.add("toy-avatar")
  //p
  const p = document.createElement('p')
  p.innerHTML = `${toy.likes} Likes`
  //button
  const button = document.createElement('button')
  button.innerHTML = "Like"
  button.classList.add("like-btn")
  
  info.push(h2, img, p, button)

  appendChildren(div, info)
  toyCollection.appendChild(div)
}

function appendChildren(parent, children) {
  children.forEach(function (child) {
    parent.appendChild(child);
  })
}

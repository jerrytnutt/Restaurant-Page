
export function myFunction() { 
    const content = document.querySelector("#content");

    const homeContainer = document.createElement("div")
    homeContainer.classList.add('homeContainer')
    const homeText = document.createElement("homeText");
    homeText.classList.add('homeText')

    const h1 = document.createElement("h1");
    h1.textContent += "The Seafood & Salad Shack"
    const p = document.createElement("p");
    p.textContent += "Grab a bite to eat from a delicious creature of the sea, or a fresh flavorful salad!"
    const h5 = document.createElement("h5");
    h5.textContent += "Hours of Operation"

    const ul = document.createElement("ul")
    const liTextContent = ["Mon-Fri","12:00PM - 11:00PM","Sat-Sun","11:30AM - 11:45PM"]
    for (let i = 0; i < 4;i++){
        let li = document.createElement('li');
        li.textContent += liTextContent[i]
        ul.appendChild(li)
    }
    ul.children[0].classList.add('day')
    ul.children[2].classList.add('day')
    
    const homePhoto = document.createElement("div");
    homePhoto.classList.add('homePhoto')

    homeContainer.appendChild(homeText)
    homeContainer.appendChild(homePhoto)

    homeText.appendChild(h1)
    homeText.appendChild(p)
    homeText.appendChild(h5)
    homeText.appendChild(ul)
    
    content.appendChild(homeContainer)
    
};

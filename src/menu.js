
export function menu(){
  const content = document.querySelector('#content')

  const menuContainer = document.createElement('div')
  menuContainer.classList.add('menuContainer')

  const foodDescription = [['image','Lobster','Mouth Watering fresh lobster straight from the sea, served with your choice of side.','$12.99'],
    ['imageTwo','Seafood and Salad Mix','Fresh shrimp and/or crawfish served with your choice of salad.','$8.99'],
    ['imageThree','Shrimp','Delicious shrimp served with our special seafood seasoning.','$7.99'], 
    ['imageFour','Veggie Bowl','Your choice of veggies mixed together in one of our health Veggie Bowls.','$10.99']]
  
  for(var i = 0; i< 4;i++){
    const menuOption = document.createElement('menuOption')
    menuOption.classList.add('menuOption')
    menuContainer.appendChild(menuOption)

    const image = document.createElement('div')
    image.classList.add(foodDescription[i][0])
    menuOption.appendChild(image)

    const mealDescription = document.createElement('mealDescription')
    mealDescription.classList.add('mealDescription')
    menuOption.appendChild(mealDescription)

    const h2 = document.createElement('h2')
    h2.textContent += foodDescription[i][1]
    const p = document.createElement('p')
    p.textContent += foodDescription[i][2]
    const price = document.createElement('p')
    price.textContent += foodDescription[i][3]

    mealDescription.appendChild(h2)
    mealDescription.appendChild(p)
    mealDescription.appendChild(price)
  }

    content.appendChild(menuContainer)
}

    


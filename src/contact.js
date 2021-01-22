
export function displayContact(){
  const content = document.querySelector('#content')

  const contactContainer = document.createElement('div')
  contactContainer.classList.add('contactContainer')
  
  const map = document.createElement('div')
  map.setAttribute("id", "map");
  contactContainer.appendChild(map)

  const contactInfo = document.createElement('div')
  contactInfo.classList.add('contactInfo')
  contactContainer.appendChild(contactInfo)

  const addressHeader = document.createElement('h2')
  addressHeader.textContent += 'Address:'
  contactInfo.appendChild(addressHeader)
  const address = document.createElement('p')
  address.textContent += '123 WestWord place Miami FL'
  contactInfo.appendChild(address)

  const phoneHeader = document.createElement('h2')
  phoneHeader.textContent += 'Phone:'
  contactInfo.appendChild(phoneHeader)
  const phone = document.createElement('p')
  phone.textContent += '(123)-456-7891'
  contactInfo.appendChild(phone)

  const emailHeader = document.createElement('h2')
  emailHeader.textContent += 'Email:'
  contactInfo.appendChild(emailHeader)
  const email = document.createElement('p')
  email.textContent += 'seafoodandsalad@restaurant.com'
  contactInfo.appendChild(email)

  
  const mediaBox = document.createElement('div')
  mediaBox.classList.add('mediaBox')
  contactInfo.appendChild(mediaBox)
  
  for(var i = 0; i < 3; i ++){

    const socialMedia = [['https://www.twitter.com/','fa fa-twitter fa-3x icon-3d','twitter'],
    ['https://www.instagram.com/','fa fa-instagram fa-3x icon-3d','instagram'],
    ['https://www.facebook.com/','fa fa-facebook fa-3x icon-3d','facebook']]

    const a = document.createElement('a')
    a.href = socialMedia[i][0]
    a.target = "_blank"
    const symbol = document.createElement('i')
    symbol.setAttribute("id", socialMedia[i][2]);
    a.appendChild(symbol )
   
    const classString = socialMedia[i][1].split(' ')
    symbol.classList.add(classString[0],classString[1],classString[2],classString[3])
    mediaBox.appendChild(a)

  }
  content.appendChild(contactContainer)

  let mapOf;
        
        function initMap() {
          mapOf = new google.maps.Map(document.getElementById("map"), {
            center: { lat: 25.761681, lng: -80.191788 },
            zoom: 12,
            
          });
        }
        initMap()
  
}



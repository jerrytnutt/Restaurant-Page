
export function contact(){
  const content = document.querySelector('#content')

  let contactContainer = document.createElement('div')
  contactContainer.classList.add('contactContainer')
  
  let map = document.createElement('div')
  map.setAttribute("id", "map");
  contactContainer.appendChild(map)

  let contactInfo = document.createElement('div')
  contactInfo.classList.add('contactInfo')
  contactContainer.appendChild(contactInfo)

  let addressHeader = document.createElement('h2')
  addressHeader.textContent += 'Address:'
  contactInfo.appendChild(addressHeader)
  let address = document.createElement('p')
  address.textContent += '123 westword place'
  contactInfo.appendChild(address)

  let phoneHeader = document.createElement('h2')
  phoneHeader.textContent += 'Phone:'
  contactInfo.appendChild(phoneHeader)
  let phone = document.createElement('p')
  phone.textContent += '(123)-456-7891'
  contactInfo.appendChild(phone)

  let emailHeader = document.createElement('h2')
  emailHeader.textContent += 'Email:'
  contactInfo.appendChild(emailHeader)
  let email = document.createElement('p')
  email.textContent += 'seafoodandsalad@restaurant.com'
  contactInfo.appendChild(email)

  
  let mediaHolder = document.createElement('div')
  mediaHolder.classList.add('mediaHolder')
  contactInfo.appendChild(mediaHolder)
  
  for(var i = 0; i < 3; i ++){

    const socialMedia = [['https://www.twitter.com/','fa fa-twitter fa-3x icon-3d','twitter'],
    ['https://www.instagram.com/','fa fa-instagram fa-3x icon-3d','insta'],
    ['https://www.facebook.com/','fa fa-facebook fa-3x icon-3d','facebook']]

    let a = document.createElement('a')
    a.href = socialMedia[i][0]
    a.target = "_blank"
    let symbol = document.createElement('i')
    symbol.setAttribute("id", socialMedia[i][2]);
    a.appendChild(symbol )
   
    let classString = socialMedia[i][1].split(' ')
    symbol.classList.add(classString[0],classString[1],classString[2],classString[3])
    mediaHolder.appendChild(a)

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



const jsonFile = 'js/local.json';
const resultElement = document.getElementById('cards')

fetch(jsonFile)
  .then(function (response) {
    return response.json(); 
  })
  .then(function (jsonObject) {
    console.log(jsonObject); 

    const businesses = jsonObject['businesses'];
    let card = document.createElement('section');


    for ( let i = 0; i < businesses.length; i++) {

        if (businesses[i].name == "Ambasader Hotel" || businesses[i].name == "Capital Hotel" || businesses[i].name == "Haile Hotel"
        || businesses[i].name == "Lobela Hotel" || businesses[i].name == "Monarch Hotel" || businesses[i].name == "Raddison Hotel") 
        {
            let image = document.createElement('img')

            let h2 = document.createElement('h2');
            let div = document.createElement("div")
            div.setAttribute('class', "division")
            h2.setAttribute('class', "name")
            let h5 = document.createElement('h5');
            h5.setAttribute('class', "name")
            let article = document.createElement('article');
            article.setAttribute('class', "name")
            let p = document.createElement('p');
            p.setAttribute('class', "name")
            let p2 = document.createElement('p');
            p.setAttribute('class', "name")
            let p3 = document.createElement('p');

            image.setAttribute('src', 'images/' + businesses[i].photo);
            image.setAttribute('class', "photos" )
            image.setAttribute('alt', 'Images of Hotels')
            image.apphend = businesses[i].photo

            h2.textContent = businesses[i].name;
            h5.textContent = businesses[i].motto; 
            p.textContent = "Price: " + businesses[i].price; 
            p2.textContent = "Website: " + businesses[i].website;
            
            div.appendChild(h2);
            div.appendChild(h5);
            div.appendChild(p)
            div.appendChild(p2)
            div.appendChild(p3)
            article.appendChild(div)
            article.appendChild(image)
            card.appendChild(article); 
        }

    }
    resultElement.appendChild(card); 

}); 
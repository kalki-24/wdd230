const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
const resultElement = document.getElementById('cards')

fetch(requestURL)
  .then(function (response) {
    return response.json(); 
  })
  .then(function (jsonObject) {
    console.log(jsonObject); 

    const towns = jsonObject['towns'];
    let card = document.createElement('section');


    for ( let i = 0; i < towns.length; i++) {

        if (towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven" || towns[i].name == "Preston") {
            let image = document.createElement('img')

            let h2 = document.createElement('h2');
            let div = document.createElement("div")
            let h5 = document.createElement('h5');
            let article = document.createElement('article');
            let p = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');

            div.setAttribute('class', "division")
            h2.setAttribute('class', "name")
            h5.setAttribute('class', "name")
            article.setAttribute('class', "name")
            p.setAttribute('class', "name")
            p.setAttribute('class', "name")

            image.setAttribute('src', 'image/' + towns[i].photo);
            image.setAttribute('class', "photo" )
            image.setAttribute('alt', 'Image of the town')
            image.apphend = towns[i].photo

            h2.textContent = towns[i].name;
            h5.textContent = towns[i].motto; 
            p.textContent = "Year Founded: " + towns[i].yearFounded; 
            p2.textContent = "Population: " + towns[i].currentPopulation;
            p3.textContent = "Annual Rainfall: " + towns[i].averageRainfall;

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
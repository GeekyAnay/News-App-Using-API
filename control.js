const btn = document.getElementById("btn");
const article1 = document.getElementById("article1");
const article2 = document.getElementById("article2");
btn.addEventListener("click", ()=>{
    const query = document.getElementById("query").value;



    fetch(`https://gnews.io/api/v4/top-headlines?&q=${query}&max=4&lang=en&sortby=relevance&token=fc7015ffc46cadc096d5468a180ac0f4`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        
        title1.innerHTML = data.articles[0].title;
        img1.src = data.articles[0].image;
        description1.innerHTML = data.articles[0].description;

        title2.innerHTML = data.articles[1].title;
        img2.src = data.articles[1].image;
        description2.innerHTML = data.articles[1].description;

        title3.innerHTML = data.articles[2].title;
        img3.src = data.articles[2].image;
        description3.innerHTML = data.articles[2].description;

    });
    
})
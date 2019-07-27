import './scss/main.scss';
import GetData from './js/GetData'
import NewsItem from './js/news-item';



window.onload = function() {

    const API_KEY = "84543b73865e4cf090fd0c7ea360a90f";
    const COUNTRY = "ru";

    let isLoad = true;
    let pageNumber = 1;
    let pageSize = 10;

    let container = document.querySelector('.news-container');

    let getData = new GetData(API_KEY, COUNTRY, pageNumber, pageSize);

    let data = getData.get();

    container.addEventListener('scroll', scrollHandler);

    data
        .then(response => JSON.parse(response))
        .then((json) => {
            createElements(json, container);
            pageNumber++;
        })
        .catch(error => console.log(error));



    function createElements(json, container) {
        if (json.articles.length) {
            json.articles.forEach(element => {
                let item = new NewsItem(element.title, element.description, element.url, element.urlToImage);
                item.create();
                item.insert(container);
            });
        } else {
            pageNumber = 0;
        }
    }

    function scrollHandler(event) {
        if(event.target.scrollHeight - event.target.scrollTop < 2000 && isLoad) {
            let newData = getData.nextPage(pageNumber);
            newData
                .then(response => JSON.parse(response))
                .then((json) => {
                    createElements(json, container);
                    isLoad = !isLoad;
                pageNumber++;
                })
                .catch(error => console.log(error));
            isLoad = false;
        }
    }
    
}
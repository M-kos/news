import './scss/main.scss';
import GetData from './js/GetData'

const API_KEY = "84543b73865e4cf090fd0c7ea360a90f";
const COUNTRY = "ru";

let data = new GetData(API_KEY, COUNTRY).get();

data
    .then(response => JSON.parse(response))
    .then((json) => {
        console.log(json.articles[0].title);
    })
    .catch(error => console.log(error))
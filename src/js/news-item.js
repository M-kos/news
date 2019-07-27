/******************************************************/
/******receive: Title, Description, Url, UrlImage******/
/***Creates an DOMelement & inserts it into the page***/
/******************************************************/

class NewsItem {
    constructor(title, description, url, urlImage) {
        this.title = title;
        this.description = description;
        this.url = url;
        this.urlImage = urlImage;
    }

    create() {
        let div = document.createElement('div');
        div.className = "news-item";

        let img = document.createElement('img');
        img.className = "news-item__img";
        img.src = this.urlImage;

        let h1 = document.createElement('h1');
        h1.className = "news-item__title";
        h1.innerHTML = this.title;

        let p = document.createElement('p');
        p.className = "news-item__description";
        p.innerHTML = this.description;

        let a = document.createElement('a');
        a.className = "news-item__link";
        a.href = this.url;

        div.append(img, h1, p, a);

        this.div = div;
    }

    insert(element) {
        element.appendChild(this.div);
    }
}

export default NewsItem;
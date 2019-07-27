/********************************/
/***receive: API_KEY & Country***/
/*******returns: Promise*********/
/********************************/
class GetData {
    constructor(key, country, page, pageSize) {
        this.key = key;
        this.country = country;
        this.page = page;
        this.pageSize = pageSize;
        this.url = `https://newsapi.org/v2/everything?sources=lenta,rbc,rt,reuters&language=ru&page=${this.page}&pageSize=${this.pageSize}`;
    }

    get() {
        let promise = new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
    
            xhr.open('GET', this.url);
    
            xhr.onload = function() {
                if(this.status == 200) {
                    resolve(this.responseText)
                } else {
                    let error = new Error(this.responseText);
                    reject(error);
                }
            }
    
            xhr.onerror = function() {
                reject(new Error("Network Error"));
            }

            xhr.setRequestHeader('X-Api-Key', this.key);
    
            xhr.send();
        });

        return promise;
    }

    nextPage(pageNumber, pageSize = 10) {
        this.page = pageNumber;
        this.url = `https://newsapi.org/v2/everything?sources=lenta,rbc,rt,reuters&language=ru&page=${this.page}&pageSize=${this.pageSize}`;
        return this.get();
        
    }
}

export default GetData;
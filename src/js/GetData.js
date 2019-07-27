/**********************/
/*receive: API_KEY & Country*/
/*returns: Promise*/
/**********************/
class GetData {
    constructor(key, country) {
        this.key = key;
        this.country = country;
        this.url = `https://newsapi.org/v2/top-headlines?country=${this.country}`;
    }

    get() {
        let promise = new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
    
            xhr.open('GET', this.url);
    
            xhr.onload = function() {
                if(this.status == 200) {
                    resolve(this.responseText)
                } else {
                    let error = new Error(this.statusText);
                    error.code = this.status;
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
}

export default GetData;
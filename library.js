function parseArticle(childNodes) {
    let article = [];    
    let obj = [];
    var arr = Array.prototype.slice.call(childNodes);

    for(let i=0;i<arr.length;i++){
        if(arr[i].nodeName !=='#text' && arr[i].tagName !== 'DIV' && arr[i] !== 'undefined') {
            if(arr[i].firstElementChild){
                article.push(arr[i]);
            }
        }
    }
    for(let i=0;i<article.length;i++){
        if(article[i] === null ) continue;
        if(article[i].tagName == 'P'){
            if (article[i].firstElementChild.tagName == "SPAN") {
                obj.push({'p': article[i].firstElementChild.innerText})
            }else if (article[i].firstElementChild.tagName == "IMG") {
                obj.push({'img': article[i].firstElementChild.getAttribute('src')})
            }else if (article[i].firstElementChild.tagName == "B") {
                if(article[i].firstElementChild.innerText == ""){
                    obj.push({'p': article[i].firstElementChild.nextElementSibling.innerHTML})
                }else{
                    obj.push({'strong': article[i].firstElementChild.innerText})
                }
            }
        }

        if(article[i].tagName == 'UL'){
            let lis = [];
            let liElements = article[i].children;
            liElements = Array.prototype.slice.call(liElements);
            liElements.forEach(function(item){
                lis.push(item.innerText);
            });
            obj.push({'ul': lis});
        }
    }
    return obj;
}


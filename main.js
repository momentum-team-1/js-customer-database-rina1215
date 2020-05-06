
//should I list the pictures?//

const customers= [
    {
        title: 'Curtis Ryan'
        imgUrL: 'https://randomuser.me/api/portraits/thumb/men/0.jpg'
    },
    {
        title: 'Martin Terry'
        imgUrl: ''https://randomuser.me/api/portraits/thumb/men/6.jpg'
        '
    },
    {
        title: Christine Cooper
        imgUrl: 'https://randomuser.me/api/portraits/thumb/women/52.jpg'
    },

    }


//copying the same format as the restaurant site sample but I am not sure it works//
    function renderPageContent (){
        let targetElement=document.querySelector (".customers")
    }
    for (let customer of customerDataBase){
        let listCustomerElement=document.createElement("li")
        listCustomerElement.innerHTML= createImageElement (customer.imgURL)
        listCustomerElement.appendChild(createTitleElement (item.title))
        targetElement.appendChild(listItemElement)
    }
    function createImageElement (url) {
        return `<img src=${url}>`
    }
    
    function createTitleElement (title) {
      let titleEl = document.createElement("h3")
      titleEl.innerText = `${title}`
      return titleEl
    }
    
    renderPageContent()
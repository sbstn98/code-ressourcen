var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
          var response = JSON.parse(xhttp.responseText);
          var article = response.article;

          var output = "";
          for(var i = 0;i < article.length;i++){
            
            output += '<section class="section-padding">';
            output += '<div class="columns is-centered">';
            output += '<div class="column is-half">';
            output += '<div class="card" id="card">';
            output += '<div class="card-content" id="content">';
           
            output += '<h3 class="tag my-3" style="display:inline">' +article[i].categorie+'</h3>' + '<h4 class="mx-3" style="display:inline ">' +article[i].id+ '</h4>';
            output += '<h2 class="title"><a href="'+article[i].url+'">' +article[i].title+'</a></h2>';
            output += '<h3 class="subtitle">' +article[i].subtitle+'</h3>'
            output += '<p class="has-text-black mb-3">' +article[i].description+'</p>';
            output += '&nbsp;';
            output += '<p class="is-pulled-right tag has-text-black mr-3">'+article[i].language+'</p>';
            output += '<p class="is-pulled-right tag has-text-black mr-3">'+article[i].media+'</p>';
              

        
           
            output += '</div>';
            output += '</div>';
            output += '</div>';
            output += '</section>';


          }
          document.getElementById('items').innerHTML = output;
          

          // Search Function

          const searchInput = document.getElementById('search-input');
          console.log(searchInput);
          searchInput.addEventListener('keyup', search);

          function search(){
            // get the input value from the input field
            const inputValue = searchInput.value;
            console.log(inputValue);
    
    
           // const sections = document.getElementById('items').querySelectorAll("section")
           const cards = document.getElementById('card');

            console.log(response);
            

            for (let i = 0; i < article.length; i++){
                const isVisible = article[i].title.includes(inputValue) // || article[i].subtitle.includes(inputValue) || article[i].description.includes(inputValue) ;
                console.log(isVisible);
            }

/*          article.forEach(element => {
                const isVisible = article[0].title.includes(inputValue);
                console.log(isVisible);
            });
*/
    
    
    
        };

 }
};
xhttp.open("GET", "inhalt.json", true);
xhttp.send();




//  Selector

    const searchInput = document.getElementById('search-input');


// Eventlistener

    // If something is typed in the input field, fire the search function

    

// Functions





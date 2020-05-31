$(document).ready(function(){
    var searchUrl = 'http://' + window.location.host + "/api/products" + window.location.search;
    
    $.ajax({
        url: searchUrl, 
        type: "GET", 

        error: (jqXHR, textStatus, error) => console.log(`${textStatus} -> ${error}`),
        success: function(data){
            let products = data;
            console.log(products);

            for(var product of products){
                var div = document.createElement("div");
                div.classList.add("gallery");
                var a = document.createElement("a");
                a.href = "#";
                var img = document.createElement("img");
                img.src = product.link;
                img.alt = product.name;
                var desc = document.createElement("div");
                desc.classList.add("desc");
                desc.innerHTML = product.name + "<br>" + product.price + "<br>" + product.details;
                a.appendChild(img);
                div.appendChild(a);
                div.appendChild(desc);
                var container = document.getElementById("gallery-container");
                container.appendChild(div); 
            }
        }
    });
});
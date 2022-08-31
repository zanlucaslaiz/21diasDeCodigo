let searchBox = document.querySelector('#search-box');
let imagens = document.querySelectorAll('.container .container-imagem .imagem');

searchBox.oninput = () => {
    imagens.forEach(hide => hide.style.display = 'none');
    let value = searchBox.value;

    imagens.forEach(filter =>{
        let title = filter.getAttribute('data-title');

        if(value == title){
            filter.style.display = "block";
        }

        if(searchBox.value == ''){
            filter.style.display = "block";
        }
    })
}
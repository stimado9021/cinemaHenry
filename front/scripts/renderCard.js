const renderCard = (data)=>{
    const films = data.data
    console.log(films)
    films.map((item)=>{                     
        const html =  `<div class="col-md-4" >
                            <div class="card mb-3" style="box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);">
                                <img src="${item.poster}"  class="card-img-top h-60" alt="${item.title}">
                                    <div class="card-body">
                                        <h5 class="card-title">${item.title}</h5>
                                        <p class="card-text">Director : ${item.director}</p>
                                        <p class="card-text">genero : ${item.genre.join(' - ')}</p>                       
                                    </div>
                                    <a class="btn btn-primary m-1" href="detalleMovie.html?id=${item._id}">Leer Mas...</a>
                            </div>
                        </div>`                   
         return   document.getElementById('pelis').innerHTML+=html
    })
}

module.exports = renderCard;
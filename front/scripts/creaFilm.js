   const axios = require('axios');


const  getMovieById= async (id)=>{
    await axios.get(`http://localhost:3000/movies/${id}`)
    .then(response=>{
            const reg = response.data 
           
            const h1 = `<h3 class="text-uppercase text-success text-center">${reg.title}</h3>`            
            document.getElementById('titulo').innerHTML=h1
            const img = `<div class="col-12 p-3">
                            <img src="${reg.poster}" alt="${reg.title}" width="100%"  />
                        </div>`
            document.getElementById('poster').innerHTML=img
            const datosfilms = ` <div class="p-4">
                                    <small>Director</small> <strong>${reg.director}</strong>
                                    <br>
                                    <small>Year</small> <strong>${reg.year}</strong>
                                    <br>
                                    <small>genre</small> <strong>${reg.genre}</strong>
                                    <br>
                                    <small>duration</small> <strong>${reg.duration}</strong>
                                    <br>
                                    <small>rate</small> <strong>${reg.rate}</strong>
                                    <br><br>
                                    <small>description</small> <strong>${reg.description}</strong>
                                </div>`
             document.getElementById('datosPeli').innerHTML=  datosfilms                  
    })
}



   document.addEventListener('DOMContentLoaded', ()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
        getMovieById(id)
    })

const sendDatos= async(datosMovie)=>{
    console.log(datosMovie)
   await axios.post('http://localhost:3000/movies',datosMovie)
    .then(response=>{
       alert(response.data.message) 
    })
}


   const saveMovie= document.getElementById('saveMovie')
   saveMovie.addEventListener('click', ()=>{
    //let formData = new FormData(formMovies);
    var title = document.getElementById('title').value;
    var year = document.getElementById('year').value;
    var director = document.getElementById('director').value;
    var duration = document.getElementById('duration').value;
    var genre = document.getElementById('genero').value;
    var rate = document.getElementById('rate').value;
    var poster = document.getElementById('poster').value;
    var description = document.getElementById('description').value;

    // Validación de campos vacíos
    if (title === '' || year === '' || director === '' || duration === '' || rate === '' || poster === '' || description === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }
    if (isNaN(year) || year.length !== 4) {
        alert('Por favor, introduce un año válido.');
        return;
    }
    if (isNaN(rate) || rate < 0 || rate > 10) {
        alert('Por favor, introduce una tasa válida entre 0 y 10.');
        return;
    }
   const datosMovie={
     title, 
     year, 
     director,
     duration,
     genre,
     rate,
     poster,
     description
    } 

    sendDatos(datosMovie)
})

const cleanForm = document.getElementById('cleanForm')
cleanForm.addEventListener('click', () =>{
    const allInputs = document.getElementsByTagName('input')
    for (var i=0;i<allInputs.length;i++){
      allInputs[i].value=''
    }
})
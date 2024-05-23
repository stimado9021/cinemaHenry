function postCard({_id,title,poster,description}){

    return `<div class="col-lg-4 col-md-6 col-sm-12 col-xl-3 mb-4 owl-carousel owl-theme" >
                <div class="card" key="${_id}" style=" box-shadow: 5px 5px 20px rgba(0,0,0,0.4);
                transform: translateY(-3%);">
                    <img src="${poster}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h7 class="card-title text-danger">${title}</h7>
                        <small>creadores : <strong>${description}</strong></small>                                    
                    </div>
                        <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
            </div>`    
}
module.exports = postCard;

//***************************************************************** */
//***************************************************************** */
//***************************************************************** */
// function llenarTarjeta({poster,title,director,duration,year,genre,rate}){
//     return  `<div class="col-2 ">
//                     <div class="card bg-dark text-white shadow-lg">
//                         <img src="${poster}" class="card-img-top" alt="${title}">
//                         <div class="card-body">
//                         <strong class="card-title text-warning ">${title}</strong>
//                         <br/>
//                         <small>Director : ${director}</small>
//                         <br/>
//                         <small>Duraccion : ${duration}</small>
//                         <br/>
//                         <small>Fecha : ${year}</small>                                     
//                         <br/>
                        
//                         Calificacion : <small class="bg-danger p-1 rounded-circle">${rate}</small> 
//                         <br/>
//                         <small>Genero</small>
//                         <br/>
//                         <small class="text-warning  ">${genre.join('-')}</small> 
//                         </div>
//                         <div class="card-footer p-2">
//                         <a href="" class="btn btn-warning">Ver Mas...</a>  
//                         </div>
//                     </div>
//             </div>`
// }

// module.exports = llenarTarjeta;

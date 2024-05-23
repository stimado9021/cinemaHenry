
const postCard = require("./cargarCard.js") 
const llenarTarjeta = require("./cargarCard.js") 

//***************************************************************** */
//***************************************************************** */
//***************************************************************** */

function  topMarvel(){ 
 
    axios.get( "http://localhost:3000/movies")
     .then(( response )=>{
        var series = response.data
         const marvelSeries = series.map((serie)=>{                      
                    return postCard(serie)
                  })
                  document.getElementById('moviConte').innerHTML = marvelSeries             
      })
      .catch(( err )=>{
        console.log(err)  
      })                     
}
module.exports = topMarvel;

//***************************************************************** */
//***************************************************************** */
//***************************************************************** */
// function cargarMovi(){
     
//     $.get( "https://gateway.marvel.com:443/v1/public/series?ts=1&apikey=9ce9c9313a235f6f23dc67b408f88c73&hash=485848342f448d2f176965abe058eaad", function( data ) {         
//       let series = data.data.results 
//                     const caja = series.map(item=>{                        
//                        return postCard(item)                            
//                     })         
//                   console.log( caja );               
//                       //  document.getElementById('moviConte').innerHTML = caja
                    
//     });       
// }

// module.exports = cargarMovi;
//***************************************************************** */
//***************************************************************** */
//***************************************************************** */
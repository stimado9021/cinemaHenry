const axios = require('axios')
const renderCard = require('./renderCard')

const loadData = ()=>{
   axios.get("http://localhost:3000/movies")
   .then(data => {
  
        renderCard(data)       
    });
};

module.exports=loadData;
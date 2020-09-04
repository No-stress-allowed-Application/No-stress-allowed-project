const axios = require('axios')

class SportsController {
    static getSport(req, res, next){
        axios({
            method:"GET",
            url:"https://free-football-soccer-videos1.p.rapidapi.com/v1/",
            headers:{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"free-football-soccer-videos1.p.rapidapi.com",
            "x-rapidapi-key":"282b93a72emsh4e73ee5789244b8p1a468djsna09112b9a3c2",
            "useQueryString":true
            }
            })
            .then((response)=>{
              console.log(response.data)
              res.status(200).json({res})
            })
            .catch(err => next(err))
    }
}

module.exports = SportsController;
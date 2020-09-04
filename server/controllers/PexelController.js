const axios = require('axios').default;

class PexelController {
  static getPexel (req, res, next) {
    axios({
      method:"GET",
      url : "http://api.pexels.com/v1/search?query=example+query&per_page=15&page=1",
      headers: {
      'Authorization': '563492ad6f917000010000014eb73d02e9134f9d8f70fa9d5b0c39cc'
      } 
    })
    .then((response)=>{
      console.log(response.data)
      res.status(200).json(response.data)
    })
    .catch(err => next(err))
  }
}

module.exports = PexelController
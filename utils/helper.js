function getEndpoint(ep) {
    if(!window.location.hostname.includes('localhost'))
      return 'http://ramonvalerio.azurewebsites.net/' + ep; 
      
    return 'http://localhost:5000/' + ep;
  }

module.exports = {
    getEndpoint: getEndpoint
}
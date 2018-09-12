function copyObj(obj) {
    var copy = {};
    if (typeof obj === 'object' && obj !== null) {
      for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) {
          copy[attr] = copyObj(obj[attr]);
        }
      }
    } else {
      copy = obj;
    }
    return copy;
  }


  var localCopy = copyObj(localStorage) 
 
  delete localCopy["loglevel:webpack-dev-server"]
 
  export default localCopy

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





const localStorageCopy = copyObj(localStorage);

delete localStorageCopy["loglevel:webpack-dev-server"]

/* 로컬스토리지 value의 index값에따라 정렬 */
// var len = Object.keys(localStorageCopy).length;
// const ordered = {};
// for (var i = 0; i < len; i++) {
//   localStorageCopy[Object.keys(localStorageCopy)[i]]
//   console.log( localStorageCopy[Object.keys(localStorageCopy)[i]] )
// }






let viewData = []
for (var keys in localStorageCopy) {
  var key = JSON.parse(localStorageCopy[keys])
  var value = key.value
  var index = key.index
  viewData.push({
    value: value,
    index: index
  })
}

viewData.sort(function (a, b) {
  return a.index - b.index
})
 
module.exports = viewData

function sendData(data, endpoint) {
if (document.location.href.search('appspot.com') == -1) {
var xhr = new XMLHttpRequest();
  var stringifiedData = JSON.stringify(data);

  xhr.open('POST', endpoint);
  xhr.send(stringifiedData);
  xhr.onload = function () {
    if (xhr.status.toString()[0] !== '2') {
      console.error(xhr.status + '> ' + xhr.statusText);
    }
  };
} 
}

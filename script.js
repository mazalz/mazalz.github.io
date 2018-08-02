
window.onload = function() {

  document.getElementById("theImage").onclick = function() {
      changeImage();
  }
  var i = 0;
  function changeImage() {
      var List = ["nba_finals.jpg", "kevindurant.jpg", "klaythompson.jpg", "draymondgreen.jpg", "warriors.jpg", "steph_curry.jpg","kdcurry.jpg"]
      i++;
      if (i > 6) {
        i= 0;
        }
      var newImg = List[i];
      document.getElementById("theImage").src = newImg;
  }
}

$(document).ready(function() {
  btn = document.getElementById("submit-btn");
  btn.addEventListener("click", function(){
    alert("cccc");
    var img = document.getElementById("uploaded-img");
    EXIF.getData(img, function() {
      alert("gotten");
      alert("gotten");
      alert("gotten");
      alert("gotten");
      alert("gotten");
      alert("gotten");
    });
  }, false);

  // $(document).on("click", "#submit-btn", function() {
  //   console.log("CLICKED");
  //   // var img = document.getElementById("uploaded-img");
  //   // EXIF.getData(img, function() {
  //   //   console.log("gotten");
  //   //   console.log(EXIF);
  //   //   // var make = EXIF.getTag(this, "Make");
  //   //   // var model = EXIF.getTag(this, "Model");
  //   //   // var makeAndModel = document.getElementById("makeAndModel");
  //   //   // makeAndModel.innerHTML = `${make} ${model}`;
  //   // });
  // });

});

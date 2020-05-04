$(document).ready(function() {

  metadataOfInterest = [
    "Artist",
    "Copyright",
    "DateTime",
    "ImageDescription",
  ]

  // Prevent form to reload page on submit
  $(".form-inline").submit(function(e) {
    e.preventDefault();
  });

  // Populate and show image preview
  function showPreview(input) {
    if (input.files && input.files[0]) {
      let reader = new FileReader();

      reader.onload = function(e) {
        $('#preview-img').attr('src', e.target.result);
        $('#preview-img').show();
      }

      reader.readAsDataURL(input.files[0]); // convert to base64 string
    }
  }

  // Add preview to onChange
  $("#uploaded-img").change(function() {
    showPreview(this);
  });

  // Shows all the information given by param line by line
  function showMetadata(metadata) {
    let str = "";
    for (fieldName in metadata) {
      let info = metadata[fieldName];
      str += fieldName + ": " + info + "\n";
    }
    if (str === "") {
      str = "No relevant info found";
    }
    alert(str);
  }

  // Feches info data corresponding to the fields described by
  // metadataOfInterest, if available
  // function fetchMetadata() {
  //   EXIF.getData(document.getElementById("preview-img"), function() {
  //     let index = 0;
  //     let metadata = {};
  //     for (index in metadataOfInterest) {
  //       let fieldName = metadataOfInterest[index];
  //       let info = EXIF.getTag(this, fieldName);
  //       if (info) {
  //         metadata[fieldName] = info;
  //       }
  //     }
  //     showMetadata(metadata);
  //   });
  // };
  function fetchMetadata() {
    let jpegBase64 = document.getElementById("preview-img").src;
    let exifObj = piexif.load(jpegBase64);
    let metadata = {};
    for (let ifd in exifObj) {
      if (ifd == "thumbnail") {
          continue;
      }
      for (let tag in exifObj[ifd]) {
        if (metadataOfInterest.includes(piexif.TAGS[ifd][tag]["name"])) {
          metadata[piexif.TAGS[ifd][tag]["name"]] = exifObj[ifd][tag]
        }
      }
    }
    showMetadata(metadata);
    // var newJpegBase64 = piexif.insert(piexif.dump(exifObj), jpegBase64)
  };

  // Add metadata fetcher to submit button
  document.getElementById("submit-btn")
    .addEventListener("click", fetchMetadata, false);

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

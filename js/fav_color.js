function fav_color(){
  // Initialize scores
  var black = 0;
  var seafoam_green = 0;
  var lavendar = 0;
  var powder_blue = 0;
  var maroon = 0;
  var salmon = 0;

  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'black') {
        black++;
      }
      else if (e.value == 'seafoam_green') {
        seafoam_green++;
      }
      else if (e.value == 'lavendar') {
        lavendar++;
      }
      else if (e.value == 'powder_blue') {
        powder_blue++;
      }
      else if (e.value == 'maroon') {
        maroon++;
      }
    else if (e.value == 'salmon') {
      salmon++;
    }
  }
}

  // Determine result
  var counts = "black: " + black + ", " +
               "seafoam_green: " + seafoam_green  + ", " +
               "lavendar: " + lavendar + ", " + "powder_blue: "
               + powder_blue + ", " + "maroon: " + maroon + ", " +
               "salmon: " + salmon;


  // What is the highest value?
  var max = Math.max(black, seafoam_green, lavendar, powder_blue, maroon, salmon);
  var title = 'Build Your Ideal Breakfast and We Will Tell You Your Favorite Color'
  // Form a message
  var message;

  if (max == black) {

    message = "Matches your soul... Black";
  }
  else if (max == seafoam_green) {
    message = "Under the... SEAfoam Green";
  }
  else if (max == lavendar) {
    message = "Are you mysterious and spiritual?... Lavendar";
  }
  else if (max == powder_blue) {
    message = "Cool, calm and collected... Powder Blue";
  }
  else if (max == maroon) {
    message = "Moves like Jagger... Maroon(5)";
  }
  else if (max == salmon) {
    message = "Is it pink or is it orange? Such a fishy situation... Salmon";
  }

  // Display result
  document.getElementById('result-text').innerHTML = message;
  document.getElementById('result-title').innerHTML = title;
  // document.getElementById('result-text').innerHTML = message;
}

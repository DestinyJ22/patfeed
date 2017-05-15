function starbucks(){
  // Initialize scores
  var happy = 0;
  var sad = 0;
  var mad = 0;

  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'happy') {
        happy++;
      }
      else if (e.value == 'sad') {
        sad++;
      }
      else if (e.value == 'mad') {
        mad++;
      }
    }
  }

  // Determine result
  var counts = "happy: " + happy + ", " +
               "sad: " + sad  + ", " +
               "mad: " + mad;


  // What is the highest value?
  var max = Math.max(happy, sad, mad);
  var title = 'Chose a Starbucks Drink To Determine Your Mood'

  // Form a message
  var message;

  if (max == happy) {

    message = "Because you're... Happy!";
  }
  else if (max == sad) {
    message = "What's raining on you're parade?... Sad";
  }
  else if (max == mad) {
    message = "Who peed in your cheerios this morning?... Mad";
  }

  // Display result
  document.getElementById('result-text').innerHTML = message;
  document.getElementById('result-title').innerHTML = title;
  // document.getElementById('result-text').innerHTML = message;
}

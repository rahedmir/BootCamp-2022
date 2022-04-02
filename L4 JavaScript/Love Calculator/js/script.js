function match() {
  var name1 = document.getElementById('your_name').value;
  var name2 = document.getElementById('your_crush').value;

  var rand0m = Math.random();

  rand0m = Math.floor(rand0m * 100);

  rand0m = rand0m + 1;

  var emo = "😍";

  function display() {
    document.getElementById('DISPLAY').innerHTML = "The match between " + name1 + " & " + name2 + " is " + rand0m + "% " + emo;
  }

  if (name1 == "" || name1 == null || name2 == "" || name2 == null) {
    document.getElementById('DISPLAY').innerHTML = "Matching Error !! Please don't leave your & your partner's name empty 😭";
  } else {
    if (rand0m >= 80) {
      emo = "😍";
      display();
    } else if (rand0m >= 70) {
      emo = "🥰";
      display();
    } else if (rand0m >= 60) {
      emo = "😊";
      display();
    } else if (rand0m >= 50) {
      emo = "😀";
      display();
    } else if (rand0m >= 40) {
      emo = "🙂";
      display();
    } else if (rand0m >= 30) {
      emo = "🙃";
      display();
    } else if (rand0m >= 20) {
      emo = "😐";
      display();
    } else if (rand0m >= 10) {
      emo = "😥";
      display();
    } else if (rand0m < 10) {
      emo = "😭";
      display();
    }
  }
}

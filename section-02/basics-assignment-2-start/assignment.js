const task3Element = document.getElementById('task-3');

function showAlert() {
  alert('some text of your choice');
}

function showName(name) {
  alert(name);
}

function concatStrings(string1, string2, string3) {
  return string1 + string2 + string3;
}

showAlert();
showName('Jeff');
alert(concatStrings('string1', 'string2', 'string3'));

task3Element.addEventListener('click', showAlert);

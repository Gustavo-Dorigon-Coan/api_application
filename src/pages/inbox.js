function getLoveData() {

  var primaryName = document.getElementById('primaryName').value;
  var secondName = document.getElementById('secondName').value;
  var percentage = document.getElementById('percentage');
  var result = document.getElementById('result');

  fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${primaryName}&fname=${secondName}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '7a9133d8a1msh230eb935a74fda6p1888b9jsn05e1b1f6b469',
        'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
      }
    }).then(response => response.json())
    .then(response => {
      percentage.innerText = response.percentage
      result.innerText = response.result
    })
    .catch(err => console.error(err));
}
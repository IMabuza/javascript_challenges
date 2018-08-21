// Challenge 1
function isSixFive(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;

    var sum = parseInt(num1) + parseInt(num2);

    if(num1 == 65 || num2 == 65){
      document.getElementById('answer').innerHTML = "true";
    }else if(sum === 65){
      document.getElementById('answer').innerHTML = "true";
    } else{
      document.getElementById('answer').innerHTML = "false";
    }
  }

// Challenge 2

function triangleArea(){
  var area1 = parseInt(document.getElementById('area1').value);
  var area2 = parseInt(document.getElementById('area2').value);
  var area3 = parseInt(document.getElementById('area3').value);

  var area = (area1 + area2 + area3) / 2;

  document.getElementById('area').innerHTML = "area = " + area;
}

//Challenge 3

function largestNumber(){
  var userNum1 = parseInt(document.getElementById('userNum1').value);
  var userNum2 = parseInt(document.getElementById('userNum2').value);
  var userNum3 = parseInt(document.getElementById('userNum3').value);

if(userNum1 > userNum2 && userNum1 > userNum3){
  document.getElementById('largest').innerHTML = "The largest number = " + userNum1;
} else if(userNum2 > userNum1 && userNum2 > userNum3){
  document.getElementById('largest').innerHTML = "The largest number = " + userNum2;
} else{
  document.getElementById('largest').innerHTML = "The largest number = " + userNum3;
}

    }

    //Challenge 4

function turnToHoursAndMinutes(){

  var numToCovert = parseInt(document.getElementById('numToCovert').value);

  var minutes = numToCovert % 60;
  var hours = (numToCovert - minutes) / 60;

  document.getElementById('hours').innerHTML = hours + " hours and " + minutes + " minutes ";
}

//Challenge 5
function commonLetters(){
  var userStr1 = document.getElementById('userStr1').value;
  var userStr2 = document.getElementById('userStr2').value;

  var commonLetters = "";
  for(var i = 0; i < userStr1.length; i++){
    for(var j = 0;j < userStr2.length; j++){
      if(userStr1.charAt(i) == userStr2.charAt(j)){
        if(commonLetters.indexOf(userStr1.charAt(i)) > -1){
          continue;
        } else{
          commonLetters = commonLetters + userStr1.charAt(i) + ",";
        }

      }
    }
  }

  document.getElementById('letters').innerHTML = commonLetters;
}

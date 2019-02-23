(function(){
  'use strict';
  angular.module("LunchCheck", [])
  .controller("LunchCheckController", LunchCheckController);
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){

  $scope.lunchMenu = "";
  $scope.messageToReturn = "";
  $scope.messageFontColor;

  $scope.fillMessageToReturn = function(menu){
    var wordsCount = countSeparatedWords(menu);
    if (wordsCount == 0){
      $scope.messageToReturn = "Please enter data first";
      $scope.messageFontColor = {color: 'red'};
    }
    else{
    $scope.messageFontColor = {color: 'green'};
    if (wordsCount <= 3)
      $scope.messageToReturn = "Enjoy!";
    else
      $scope.messageToReturn = "Too much!";
    }
  }
}

function countSeparatedWords(stringToCountWords){
  var separatedWordsCount = 0;
  var separatedWordsArray = separateWords(stringToCountWords);

  separatedWordsCount = separatedWordsArray.length;
  return separatedWordsCount;
}

  function isStringEmptyOrWhiteSpace(string){
    if (string == "")
      return true;
    return checkIfAllWhiteSpaces(string);
  }

  function checkIfAllWhiteSpaces(string){
    var stringCharacters = string.split('');
    var result = true;
    stringCharacters.forEach(function(character) {
       if (character!=' ' && character!='' && character!=','){
         result = false;
    }});
    return result;
  }

  function separateWords(stringToSplit){
    var separatedWordsArray = [];
    if (!isStringEmptyOrWhiteSpace(stringToSplit)){
      separatedWordsArray = stringToSplit.split(',');
    separatedWordsArray = removeWhiteSpacesWord(separatedWordsArray)
    }
    return separatedWordsArray;
  }

  function removeWhiteSpacesWord(words){
    words.forEach(function(word) {
        if (isStringEmptyOrWhiteSpace(word))
          words.splice(words.indexOf(word), 1);
      });
      console.log(words);
    return words;
  }

})();

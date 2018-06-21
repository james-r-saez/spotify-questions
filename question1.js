function sortByStrings(s,t) {
  var x = [];
  for (var i = 0; i < t.length; i++){
    for (var j = 0;  j < s.length; j++){
      if (s[j] === t[i]){
        x.push(s[j]);
      }
    }
  }
  return x.join('');
}

sortByStrings("weather","therapyw");
sortByStrings("good","odg");

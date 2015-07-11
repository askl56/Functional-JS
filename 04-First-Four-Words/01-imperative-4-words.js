var words = [], count = 0;
text = myString.split(' ');
for (i=0; count<4, i<text.length; i++) {
  if (!text[i].match(/[0-9]/)) {
    words = words.concat(text[i]);
    count++;
  }
}
console.log(words);

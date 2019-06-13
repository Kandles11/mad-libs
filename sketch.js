
var data;

var txt = '$$Exclamation$$! they said $$Adverb$$ as they jumped into their $$Noun$$ and flew off with their $$Adjective$$ $$PluralNoun$$.';

function setup() {
  noCanvas();
  Tabletop.init({
    key: '1FuwatfZ6TU6JwvnyLDqpBoLNK6uLOiuMWbm5x1s140Q',
    callback: gotData,
    simpleSheet: true
  });

  var button = createButton('generate madlib');
  button.mousePressed(generate);
}

function replacer(match, pos) {
  var entry = random(data);
  return entry[pos];
}


function generate() {
  //console.log('generate');
  var madlib = txt.replace(/\$\$(.*?)\$\$/g, replacer);
  createP(madlib);
}

function gotData(stuff, tabletop) {
  data = stuff;
}


var data;
var prompt;

var prompt1blank = '___! they said ___ as they jumped into their ___ and flew off with their ___ ___.';
var prompt2blank = 'Driving a car can be fun if you follow this ___ advice: When approaching an ___ on the right, always blow your ___, Before making an ___ turn, always stick your ___ out of the window. Every 2000 miles, have your ___ inspected and your ___ checked. When approaching a school, watch out for ___ ___. Above all, drive ___ The ___ you save may be your own!'

var prompt1 = '$$Exclamation$$! they said $$Adverb$$ as they jumped into their $$Noun$$ and flew off with their $$Adjective$$ $$PluralNoun$$.';
var prompt2 = 'Driving a car can be fun if you follow this $$Adjective$$ advice: When approaching an $$Noun$$ on the right, always blow your $$Noun$$, Before making an $$Adjective$$ turn, always stick your $$Noun$$ out of the window. Every 2000 miles, have your $$Noun$$ inspected and your $$Noun$$ checked. When approaching a school, watch out for $$Adjective$$ $$PluralNoun$$. Above all, drive $$Adverb$$ .The $$Noun$$ you save may be your own!'

function setup() {
  noCanvas();
  Tabletop.init({
    key: '1FuwatfZ6TU6JwvnyLDqpBoLNK6uLOiuMWbm5x1s140Q',
    callback: gotData,
    simpleSheet: true
  });

  var random = Math.floor(Math.random() * 2);

 if (random == 0) {
    promptblank = prompt1blank;
    prompt = prompt1;
 }

 if (random == 1) {
    promptblank = prompt2blank;
    prompt = prompt2;
 }

  document.getElementById('promptblank').innerHTML = promptblank;

  var button = createButton('generate madlib');
  button.mousePressed(generate);
}

function replacer(match, pos) {
  var entry = random(data);
  return entry[pos];
}


function generate() {
  //console.log('generate');
  var madlib = prompt.replace(/\$\$(.*?)\$\$/g, replacer);
  createP(madlib);
}

function gotData(stuff, tabletop) {
  data = stuff;
}

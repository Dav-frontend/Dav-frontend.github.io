    function myFunction(a){a.classList.toggle('change')}var words=document.getElementsByClassName('word'),wordArray=[],currentWord=0;words[currentWord].style.opacity=1;for(var i=0;i<words.length;i++)splitLetters(words[i]);function changeWord(){for(var a=wordArray[currentWord],b=currentWord==words.length-1?wordArray[0]:wordArray[currentWord+1],c=0;c<a.length;c++)animateLetterOut(a,c);for(var c=0;c<b.length;c++)b[c].className='letter behind',b[0].parentElement.style.opacity=1,animateLetterIn(b,c);currentWord=currentWord==wordArray.length-1?0:currentWord+1}function animateLetterOut(a,b){setTimeout(function(){a[b].className='letter out'},80*b)}function animateLetterIn(a,b){setTimeout(function(){a[b].className='letter in'},340+80*b)}function splitLetters(a){var b=a.innerHTML;a.innerHTML='';for(var e,c=[],d=0;d<b.length;d++)e=document.createElement('li'),e.className='letter',e.innerHTML=b.charAt(d),a.appendChild(e),c.push(e);wordArray.push(c)}changeWord(),setInterval(changeWord,4e3);function x(){document.getElementById('clickOn').style.transform='translate(0%)',document.querySelector('body').style.height='0vh'}

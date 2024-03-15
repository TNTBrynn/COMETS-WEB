
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay)) //setting up a sleep function


function animateTitle() {
    let intervalId; //setting up an interval for a Timeout function
    document.title = " -- COMETS | Bienvenue -- Club | Moto | Électrique";
    intervalId = setTimeout(animateTitle, 300);

    //setting up a function to animate the title
    function animateTitle() {
      if (document.title === "_🏍️⚡⚡___________") {
        let text = document.title;
        document.title = text.slice(3) + text.slice(0, 3);
        intervalId = setTimeout(animateTitle, 400);
      } else {
        let text = document.title;
        document.title = text.slice(2) + text.slice(0, 2);
        intervalId = setTimeout(animateTitle, 400);
      }
    }
    //setting up a function to stop the animation and start a new one
    async function stopAnimation() { //🏍️ 🔴 ⚫ ⚡
      clearTimeout(intervalId);
      document.title = "____________🏍️⚡⚡";
      intervalId = setTimeout(animateTitle, 300);
    }

    //calling the proper functions when the window is loaded, blurred or focused
    window.onload = function () {
      document.title = " -- COMETS | Bienvenue -- Club | Moto | Électrique";
      intervalId = setTimeout(animateTitle, 300);
    };
    window.onblur = stopAnimation;
    window.onfocus = function () {
      clearTimeout(intervalId);
      document.title = " -- COMETS | Bienvenue -- Club | Moto | Électrique";
      intervalId = setTimeout(animateTitle, 300);
    }
}

function animateSlogan() { 
    const slogan = document.querySelector('.animationEscape');
    const slogan1 = document.querySelector('.slogan');
    const slogan2 = document.querySelector('.slogan2');
    const slogan3 = document.querySelector('.slogan3');
    
    // Define the callback
    const callback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the animation class when the element enters the viewport
          entry.target.classList.add('animate');
        } else {
          // Remove the animation class when the element exits the viewport
          entry.target.classList.remove('animate');
        }
      });
    };
    
    // Create the observer
    const observer = new IntersectionObserver(callback);
    
    // Start observing
    observer.observe(slogan);
    observer.observe(slogan1);
    observer.observe(slogan2);
    observer.observe(slogan3);
}

// function([string1, string2],target id,[color1,color2])    
consoleText(['Hello World!', 'Génie Logiciel', 'code(\'forever\')'], 'text',['tomato','white','lightblue']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}
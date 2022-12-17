///////////////     drag and drop players script  ////////////////////

function drag_start(event) {
    var style = window.getComputedStyle(event.target, null);
    var str = (parseInt(style.getPropertyValue("left")) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top")) - event.clientY) + ',' + event.target.id;
    event.dataTransfer.setData("Text", str);
}

function drop(event) {
    var offset = event.dataTransfer.getData("Text").split(',');
    var dm = document.getElementById(offset[2]);

    dm.style.left = (event.clientX + parseInt(offset[0], 10)) + 'px';
    dm.style.top = (event.clientY + parseInt(offset[1], 10)) + 'px';
    event.preventDefault();
    return false;
}

function drag_over(event) {
    event.preventDefault();
    return false;
}

///////////////            aggiornamento goals Classifica           ///////////////////







const cardsContainer = document.getElementById('containerCarte')

// Set a unique id attribute on each list element
const listElements = document.querySelectorAll('.player');
listElements.forEach((element, index) => {
  element.dataset.id = index;
});

// Set a unique id attribute on each card element
const cardElements = document.querySelectorAll('.carte');
cardElements.forEach((element, index) => {
  element.dataset.id = index;
});

// Attach a click event listener to the list elements
listElements.forEach((element) => {
  element.addEventListener('click', (event) => {
    // Get the clicked list element
    const clickedElement = event.target;
    cardsContainer.style.display = 'block';

    // Loop through the card elements and show the one that corresponds to the clicked list element
    cardElements.forEach((cardElement) => {
      if (cardElement.dataset.id === clickedElement.dataset.id) {
        cardElement.style.display = 'block';
        console.log(cardElement);
      }
      if (cardElement.dataset.id != clickedElement.dataset.id) {
        cardElement.style.display = 'none';

      }
      const btnCard = document.querySelectorAll('.closeBtn')
      for (i = 0; i < btnCard.length; i++) {
        btnCard[i].addEventListener('click', function() {
          this.parentElement.style.display = 'none';
          cardsContainer.style.display = 'none';
        });
      }
    });
  });
});









// //////////////////////////////////////////////////////////////////////////////////



const classifica = []
const giocatori = [
 ale = {
  nome : 'Alessandro',
  cognome: 'Caiazzo',
  foto : 'img/players/ale.png',
  goal : function goal() {
    let goals = [3];
    let sum = 0;
    for (var i = 0; i < goals.length; i++) {
      sum += goals[i]
      // console.log(sum);
    }
    // console.log(ale.nome + sum);
    document.getElementById('ale').innerHTML = ale.nome;
    document.getElementById('score_ale').innerHTML = sum;
    classifica.push(sum)
  }
},



 simone = {
  nome : 'Simone',
  goal : function goal() {
    let goals = [1];
    let sum = 0;
    for (var i = 0; i < goals.length; i++) {
      sum += goals[i]
      // console.log(sum);
    }
    // console.log(simone.nome + sum);
    document.getElementById('simone').innerHTML = simone.nome;
    document.getElementById('score_simone').innerHTML = sum;
    classifica.push(sum)
  }
},

 pasqualino = {
  nome : 'Pasqualino',
  goal : function goal() {
    let goals = [7];
    let sum = 0;
    for (var i = 0; i < goals.length; i++) {
      sum += goals[i]
      // console.log(sum);
    }
    // console.log(pasqualino.nome + sum);
    document.getElementById('pasqualino').innerHTML = pasqualino.nome;
    document.getElementById('score_pasqualino').innerHTML = sum;
    classifica.push(sum)
  }
},


 pasquale = {
  nome : 'Pasquale',
  goal : function goal() {
    let goals = [0];
    let sum = 0;
    for (var i = 0; i < goals.length; i++) {
      sum += goals[i]
      // console.log(sum);
    }
    // console.log(pasquale.nome + sum);
    document.getElementById('pasquale').innerHTML = pasquale.nome;
    document.getElementById('score_pasquale').innerHTML = sum;
    classifica.push(sum)
  }
},

 gabriele = {
  nome : 'Gabriele',
  goal : function goal() {
    let goals = [1];
    let sum = 0;
    for (var i = 0; i < goals.length; i++) {
      sum += goals[i]
      // console.log(sum);
    }
    // console.log(gabriele.nome + sum);
    document.getElementById('gabriele').innerHTML = gabriele.nome;
    document.getElementById('score_gabriele').innerHTML = sum;
    classifica.push(sum)
  }
},

 luca = {
  nome : 'Luca',
  goal : function goal() {
    let goals = [0];
    let sum = 0;
    for (var i = 0; i < goals.length; i++) {
      sum += goals[i]
      // console.log(sum);
    }
    // console.log(luca.nome + sum);
    document.getElementById('luca').innerHTML = luca.nome;
    document.getElementById('score_luca').innerHTML = sum;
    classifica.push(sum)
  }
},

 giovanni = {
  nome : 'Giovanni',
  goal : function goal() {
    let goals = [0];
    let sum = 0;
    for (var i = 0; i < goals.length; i++) {
      sum += goals[i]
      // console.log(sum);
    }
    // console.log(giovanni.nome + sum);
    document.getElementById('giovanni').innerHTML = giovanni.nome;
    document.getElementById('score_giovanni').innerHTML = sum;
    classifica.push(sum)
  }
},

 danilo = {
  nome : 'Danilo',
  goal : function goal() {
    let goals = [3];
    let sum = 0;
    for (var i = 0; i < goals.length; i++) {
      sum += goals[i]
      // console.log(sum);
    }
    // console.log(danilo.nome + sum);
    document.getElementById('danilo').innerHTML = danilo.nome;
    document.getElementById('score_danilo').innerHTML = sum;
    classifica.push(sum)
  }
},

 nicola = {
  nome : 'Nicola',
  goal : function goal() {
    let goals = [4];
    let sum = 0;
    for (var i = 0; i < goals.length; i++) {
      sum += goals[i]
      // console.log(sum);
    }
    // console.log(nicola.nome + sum);
    document.getElementById('nicola').innerHTML = nicola.nome;
    document.getElementById('score_nicola').innerHTML = sum;
    classifica.push(sum)
  }

},

 emanuele = {
  nome : 'Emanuele',
  goal : function goal() {
    let goals = [0];
    let sum = 0;
    for (var i = 0; i < goals.length; i++) {
      sum += goals[i]
      // console.log(sum);
    }
    // console.log(emanuele.nome + sum);
    document.getElementById('emanuele').innerHTML = emanuele.nome;
    document.getElementById('score_emanuele').innerHTML = sum;
    classifica.push(sum)
  }
},

giuseppe = {
 nome : 'Giuseppe',
 goal : function goal() {
   let goals = [0];
   let sum = 0;
   for (var i = 0; i < goals.length; i++) {
     sum += goals[i]
     // console.log(sum);
   }
   // console.log(emanuele.nome + sum);
   document.getElementById('giuseppe').innerHTML = giuseppe.nome;
   document.getElementById('score_giuseppe').innerHTML = sum;
   classifica.push(sum)
 }
}
];

ale.goal();
simone.goal()
pasqualino.goal()
pasquale.goal()
gabriele.goal()
luca.goal()
giovanni.goal()
danilo.goal()
nicola.goal()
emanuele.goal()
giuseppe.goal()



//////////////////////////////////////  sortin functions di classifica marcatori /////////////////////////////


const parent = document.getElementById('classifica');

[].slice.call(parent.children).sort(function(a, b) {
    return getPoints(b) - getPoints(a);
  }).forEach(function(ele) {
    parent.appendChild(ele);
  })

function getPoints(ele) {
  return Number(ele.querySelector('.score').textContent.replace(/[^\d.]+/g, ''))
    || 0;
}

// //////////////////   sorting classifica squadre    ///////////
//           da sviluppare                           //////////
/////////////////////////////////////////////////////////////

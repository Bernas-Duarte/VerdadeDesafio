(function () {

  let btAddPlayer = document.getElementById('btAddPlayer');
  let btStart = document.getElementById('btStart');
  let btSortear = document.getElementById('btSortear');
  let players = [];
  let secPlayers = document.querySelector('.sec-players');
  let secVerdadeDesafio = document.querySelector('.sec-verdade-desafio');
  let secPergunta = document.querySelector('.sec-pergunta');

  btAddPlayer.addEventListener('click', () => {
    let input = document.querySelector('.input-group').cloneNode(true);
    document.querySelector('.sec-players .wrap').appendChild(input).lastChild;

    let inputs = document.querySelectorAll('.sec-players .wrap .input-group input');

    inputs.forEach((el, i, arr) => {
      if((i + 1) == arr.length) {
        el.value = '';
      }
    });

  });



  btStart.addEventListener('click', () => {
    let playersNames = document.querySelectorAll('.player-name');

    playersNames.forEach((el) => {
      if(el.value !== '') {
        players.push(el.value);
      }
    });

    if(players.length < 2) {

      let alert = document.querySelector('.sec-players .alert');
      
      alert.style.display = 'block';

      alert.innerHTML = '<b>ERRO!</b> Insira pelo menos <b>2 jogadores</b> para começar.';

    } else {

      let player = Math.floor(Math.random() * players.length);
      let playerName = document.getElementById('playerName');
      let btVerdade = document.getElementById('btVerdade');
      let btDesafio = document.getElementById('btDesafio');
      let loading = document.getElementById('loading');

      loading.style.display = 'flex';

      setTimeout(() => {
        loading.style.display = 'none';

        secPlayers.style.display = 'none';
        secVerdadeDesafio.style.display = 'block';
        secPergunta.style.display = 'none';

        playerName.innerHTML = players[player];
        
        btVerdade.addEventListener('click', () => {

          secVerdadeDesafio.style.display = 'none';
          secPergunta.style.display = 'block';

          fetch("https://mateusdanieel.github.io/VerdadeDesafio/src/js/questions.json")
          .then(response => {
            return response.json();
          })
          .then(data => 
            (function() {
              let random = Math.floor(Math.random() * data.verdades.length);
              document.querySelector('.sec-pergunta .sec-title').innerHTML = data.verdades[random];

            })()

              
          );

        });
 
        btDesafio.addEventListener('click', () => {

          secVerdadeDesafio.style.display = 'none';
          secPergunta.style.display = 'block';

          fetch("https://mateusdanieel.github.io/VerdadeDesafio/src/js/questions.json")
          .then(response => {
            return response.json();
          }) 
          .then(data => 
            (function() {
              let random = Math.floor(Math.random() * data.desafios.length);
              document.querySelector('.sec-pergunta .sec-title').innerHTML = data.desafios[random];
              console.log(random, data.desafios[random])
            })()

              
          );

          

        });

        }, 3000);

        btSortear.addEventListener('click', () => {
          var i = 0;
          btStart.dispatchEvent(new Event('click'));
      
          console.log(i++); // AJUSTAR DPS
        });
        
      }

      

  });

  
















})();
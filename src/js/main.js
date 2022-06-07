(function () {
  
  let btAddPlayer = document.getElementById('btAddPlayer');
  let btStart = document.getElementById('btStart');
  let players = [];
  let secPlayers = document.querySelector('.sec-players');

  btAddPlayer.addEventListener('click', () => {
    let input = document.querySelector('.input-group').cloneNode(true);
    document.querySelector('.sec-players .wrap').appendChild(input).lastChild;
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
      
      secPlayers.style.display = 'none';
      
      
      
    }

  });















})();
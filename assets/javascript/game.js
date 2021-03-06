var game = {
  // properties
  crystals: [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }],
  crystalParams: [1, 12],
  targetParams: [19, 120],
  wins: 0,
  losses: 0,
  targetVal: 0,
  playerVal: 0,
  lossPlayAgain: "You've lost. Insert floppy disk to continue. Just kidding. Press Ok.",
  winPlayAgain: 'You won! Press Ok to play again!',

  // methods
  clearValues: function () {
    this.targetVal = 0;
    this.playerVal = 0;
  },
  // accumulated player values
  playerNum: function (crystalsIndex) {
    this.playerVal += crystalsIndex;
    return this.playerVal;
  },

  // generate random number
  randNum: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  // reset game to play again
  updateGame: function () {
    this.clearValues();
    this.targetVal = this.randNum(this.targetParams[0], this.targetParams[1]),

      $('#randNum').text(this.targetVal),
      $('#wins').text(this.wins),
      $('#losses').text(this.losses),
      $('#playerNum').append(this.playerNum);
    // apply value to crystals
    for (let i = 0; i <= 3; i++) {
      this.crystals[i].value = game.randNum(this.crystalParams[0], this.crystalParams[1]);
    }
    return this.targetVal;
  },

  // checks playerNum for equality; if equal player wins, else not
  checkScore: function (crystalVal, targetVal) {
    this.playerVal += crystalVal;

    if (this.playerVal === targetVal) {
      alert(this.winPlayAgain);
      this.wins++;
      this.updateGame();
    } else if (this.playerVal > targetVal) {
      alert(this.lossPlayAgain);
      this.losses++;
      this.updateGame();
    }
  }
};

// on-click functions
$('#button1').click(function () {
  var crystalVal = game.crystals[0].value;
  var targetVal = game.targetVal;
  game.checkScore(crystalVal, targetVal);
  $('#playerNum').text(game.playerVal);
}),

  $('#button2').click(function () {
    var crystalVal = game.crystals[1].value;
    var targetVal = game.targetVal;
    game.checkScore(crystalVal, targetVal);
    $('#playerNum').text(game.playerVal);
  }),

  $('#button3').click(function () {
    var crystalVal = game.crystals[2].value;
    var targetVal = game.targetVal;
    game.checkScore(crystalVal, targetVal);
    $('#playerNum').text(game.playerVal);
  }),

  $('#button4').click(function () {
    var crystalVal = game.crystals[3].value;
    var targetVal = game.targetVal;
    game.checkScore(crystalVal, targetVal);
    $('#playerNum').text(game.playerVal);
  })

game.updateGame();

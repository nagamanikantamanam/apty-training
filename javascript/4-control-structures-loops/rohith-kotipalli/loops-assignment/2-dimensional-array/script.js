const rohithArray = [
    ['R', 'R', ' ', ' ', ' ', ' ', 'O', 'O', ' ', ' ', 'H', ' ', ' ', 'H', ' ',  'I', ' ',  'T', 'T', 'T', 'T', 'T', ' ',  'H', ' ', ' ', 'H'],
    ['R', ' ', 'R', ' ', ' ', 'O', ' ', ' ', 'O', ' ', 'H', ' ', ' ', 'H', ' ',  'I', ' ',  ' ', ' ', 'T', ' ', ' ', ' ',  'H', ' ', ' ', 'H'],
    ['R', 'R', ' ', ' ', ' ', 'O', ' ', ' ', 'O', ' ', 'H', 'H', 'H', 'H', ' ',  'I', ' ',  ' ', ' ', 'T', ' ', ' ', ' ',  'H', 'H', 'H', 'H'],
    ['R', ' ', 'R', ' ', ' ', 'O', ' ', ' ', 'O', ' ', 'H', ' ', ' ', 'H', ' ',  'I', ' ',  ' ', ' ', 'T', ' ', ' ', ' ',  'H', ' ', ' ', 'H'],
    ['R', ' ', ' ', 'R', ' ', ' ', 'O', 'O', ' ', ' ', 'H', ' ', ' ', 'H', ' ',  'I', ' ',  ' ', ' ', 'T', ' ', ' ', ' ',  'H', ' ', ' ', 'H']
  ];

  for (let row of rohithArray){
      let sentence = ""
      for(let i of row){
        sentence += i + " "
      }
      console.log(sentence)
  }
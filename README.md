  const keysOptions = [
    {value: "a", label:"A"},
    {value: "b", label: "B"},
    {value: "c", label: "C"},
    {value: "d", label: "D"},
    {value: "e", label: "E"},
    {value: "f", label: "F"},
    {value: "g", label: "G"},
    {value: "sharp", label: "♯"},
    {value: "flat", label: "♭"},
    {value: "minor", label: "min"},
    {value: "major", label: "maj"}
    
  ]

  function calculateTime(secs , current = 0){
  let minutes = parseInt(secs / 60 )
  let seconds = parseInt(secs % 60)

  let currentmin = parseInt(current / 60 )
  let currentsecs = parseInt(current % 60 )
  if (seconds < 10) {
    seconds = "0" + seconds
  } 
  if (currentsecs < 10) {
    currentsecs = "0" + currentsecs
  } 
  return {minutes , seconds , current : {currentmin , currentsecs}}
}
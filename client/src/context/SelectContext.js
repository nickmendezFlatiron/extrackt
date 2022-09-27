import { createContext } from "react";

export const genres = [ "pop","rock","hip-hop","rap","country","rnb", "jazz", "metal", 
  "electronic", "soul", "ambient", "funk","raggae", "disco","classical","house","indie",
  "techno","trap","dubstep", "gospel","latin", "raggaeton", "grime", "edm", "synthwave", 
  "cinematic", "trance", "experimental","electro","idm","acapella"]

export const types = [
    { value: 'drum', label: 'Drum' },
    { value: 'foley', label: 'Foley' },
    { value: 'fx', label: 'FX' },
    { value: 'loop', label: 'Loop' },
    { value: 'melody', label: 'Melody' },
    { value: 'one-shot', label: 'One Shot' },
    { value: 'pad', label: 'Pad' },
    { value: 'percussion', label: 'Percussion' },
    { value: 'vocal', label: 'Vocal' },
  ]
  
export const songKeys = [
    {value: "a", label:"A"},
    {value: "b", label: "B"},
    {value: "c", label: "C"},
    {value: "d", label: "D"},
    {value: "e", label: "E"},
    {value: "f", label: "F"},
    {value: "g", label: "G"}
  ]

  export const halfStep = [
    {value: "flat", label: "♭"},
    {value: "sharp", label: "♯"}
  ]

export const scales = [
  {value: "major", label: "maj"},
  {value: "minor", label: "min"}
]


export const selectDropdownStyles = {
  menuList: styles => ({...styles , height: 200})
};

export const SelectContext = createContext({genres , types , scales, songKeys, halfStep, selectDropdownStyles})
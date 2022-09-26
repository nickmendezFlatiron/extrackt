import React, {useState, useEffect} from 'react'

import Container from 'react-bootstrap/Container'

const Downloads = () => {

  useEffect(()=>{
    fetch('/downloads')
      .then(r => {
        if(r.ok){
          r.json().then(r => console.log(r))
      }
    })
  },[])
  return (
    <Container>
      Downloads
    </Container>
  )
}

export default Downloads
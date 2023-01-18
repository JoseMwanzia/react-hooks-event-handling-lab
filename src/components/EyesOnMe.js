// Code EyesOnMe Component Here

import React from 'react'

function EyesOnMe() {

    function handleFocus(event) {
        console.log('Good1');
    }

    function handleBlur(event) {
        console.log('Hey! Eyes on me!');
    }

  return (
    <div>
        <button onClick={handleBlur, handleFocus}>Eyes on me</button>
    </div>
  )
}

export default EyesOnMe;
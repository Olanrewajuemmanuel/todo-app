import React from 'react'

function TourModal({ msg, changeTourStatus, step }) {
 
  return (
    <div className='tour-modal'>
        <p style={{ maxWidth: '300px' }}>{msg}</p>
        <button className='nav-modal-btn float-right' onClick={() => changeTourStatus(step => step + 1)}>{ step === 3 ? "Finish" : 'Next' }</button>
    </div>
  )
}

export default TourModal
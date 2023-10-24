import React from 'react'
import Button from '@mui/material/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function About() {
  return (
    <main>
      <img src="react-logo.png" alt="react-logo" />
      <h2>Oliver Hernandez</h2>
      <h3>Lead Architect</h3>
      <h5>Oliver Website</h5>
      <Button variant="contained">
        <FontAwesomeIcon
          className="main--icons"
          icon={faEnvelope}
        />{' '}
        Email
      </Button>
      <Button variant="contained">
        <FontAwesomeIcon
          className="main--icons"
          icon={faLinkedin}
        />{' '}
        LinkedIn
      </Button>
    </main>
  )
}

export default About

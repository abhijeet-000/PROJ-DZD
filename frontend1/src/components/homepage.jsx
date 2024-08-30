import React from 'react'
import "./homepage.css"
import Navbar from "./navbar"
// import { Link } from 'react-router-dom';

const Homepage = ({user,logout}) => {
  console.log("user"+user)
  return (
    <><div className='container1'>
      <Navbar user={user} logout={logout} />
          
      <div className="content">
        <h2><br />ZeroDay attack detection</h2>
        <p >Empowering defenders against the unknown,<br />Unveiling the secrets of zero-day vulnerabilities.</p>
      </div>

    </div><div class="containerr my-5 py-2">
        <h2 class="text-center font-weight-bold my-5"></h2>
        <div class="row">
          <div class="col-md-4 text-center">
            <img src="https://i.ibb.co/m9KnRXR/smart-protect-3.jpg" alt="Smart Scan" class="mx-auto" />
            <h3 style={{ fontWeight: 'bold' }}>Smart Scan</h3>
            <p className="card123">Scanning of the network logs are done by our integrated cic flowmeter tool</p>
          </div>

          <div class="col-md-4 text-center">
            <img src="https://i.ibb.co/dBZb5ZK/smart-protect-2.jpg" alt="Phishing Detect" class="mx-auto" />
            <h3 style={{ fontWeight: 'bold' }}>Detection</h3>
            <p className="card123">The logs collected are loaded into our machine learning models to get the result</p>
          </div>
          <div class="col-md-4 text-center">
            <img src="https://i.ibb.co/SNyc7XX/smart-protect-1.jpg" alt="Anti-spam" class="mx-auto" />
            {/* <h3 style={{fontWeight:'bold'}}>Email</h3>
               */}
            <h3 style={{ fontWeight: 'bold' }}>Email</h3>

            <p className="card123">An email is sent to the user regarding the details of the scan</p>
          </div>

        </div>
        
      </div>
      <br />
      
      <div>
      <div class="jumbotron jumbotron-fluid feature" id="feature-first">
    <div class="container my-5">
      <div class="row justify-content-between text-center text-md-left">
        <div class="col-md-6">
          <h1 className="imgtxt1">Take a look inside</h1>
          <br />
          <p className="imgtxt2">A website build to detect the undiscovered vulnerabilities through machine learning models</p>
          <a href="/about" class="learnn">Learn More</a>
        </div>
        <div class="col-md-6 align-self-center">
          <img src="https://i.ibb.co/Tk7jY5S/feature-1.png" alt="Take a look inside" className="mx-auto d-block" />

        </div>
      </div>
    </div>
  </div>
      </div>


    </>
  )
}

export default Homepage


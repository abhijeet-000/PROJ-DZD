import React from 'react'
import Navbar from './navbar'
import "./instructions.css"
import Instruction1 from './code_snippets/Instruction1'
import Instruction1_2 from './code_snippets/Instruction1_2'
import Instruction2 from './code_snippets/Instruction2'
import Instruction3 from './code_snippets/Instruction3'
import Instruction4 from './code_snippets/Instruction4'

const Instructions = ({user, logout}) => {
console.log("user"+user);
  const downloadfile = () => {
    const downloadFile = (fileUrl, fileName) => {
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = fileName;
      link.click();
    };

    downloadFile(process.env.PUBLIC_URL + '/collectlogs.zip', 'collectlogs.zip');
  };


  return (
    <div>
      <Navbar user = {user} logout={logout}/>
      <div class='maegin'>
        <div class='institle'>
          <p>Generate your own network logs</p>
        </div>
        <div class='insread'>
          <p>Download the zipfile to collect the network logs </p>
          <a href="#" onClick={downloadfile} className='downl'>Download</a>
          <br/>
        </div>
       
      </div>
      <div class="linkkk">
        {user?(
      <a href="/scan" class="hire">UPLOAD</a>
        ):(
          <a href="/login" class="hire">UPLOAD</a>
        )}
    </div>
    <div className='inss'>
      <ol>
        <li>
          Install 
          <strong> npcap.exe </strong>
           on your system.
        </li>
        <li>
          Run 
          <strong> collectlogs.exe </strong>
           on your system.
        </li>
        <li>
          Upload the  
          <strong> flows.csv </strong>
           file generated in the 
          <strong> Upload </strong>
           page.

        </li>

      </ol>
    </div>
    </div>
  )
}

export default Instructions
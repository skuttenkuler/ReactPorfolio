import React from 'react';
import PDF from './SamKuttenkuler_Resume.pdf'
import './pdfButton.css'
export default function Resume() {
    return(
       <div className="resume-button">
           <a href={PDF}>Resume</a>
       </div>
    )
}
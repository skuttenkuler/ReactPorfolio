import React from 'react';
import PDF from './cv-sk.pdf'
import './pdfButton.css'
export default function Resume() {
    return(
       <div className="resume-button">
           <a href={PDF}>Resume</a>
       </div>
    )
}
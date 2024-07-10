import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <>

            <div className="contactpage">
                <div className="contact">
                    <h1><span>C</span>ontact <span>M</span>e</h1>
                    <div className="mobileno"><span><i className="fa-solid fa-phone-volume" /></span><span>:</span>
                        <span>8090981203</span></div>
                    <div className="mobileno"><span><i className="fa-solid fa-envelope" /> </span><span>:</span><span>sachinkyadav457@gmail.com</span></div>
                </div>

                <div className="message">
                    <h1><span>M</span>essage <span>M</span>e</h1>
                    <input type="text" className='inputfield' defaultValue={"Name"} />
                    <input type="text" className='inputfield' defaultValue={123} />
                    <textarea id="txt" rows={7} defaultValue={"Message"}></textarea>
                    <button className='subbutton'>Submit</button>
                </div>
            </div>

        </>
    )
}

export default Contact

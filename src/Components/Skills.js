import React from 'react'
import './Skills.css'

const Skills = () => {
    return (
        <>
            <div className="hd">
                <h1><span>M</span>y <span>S</span>kills</h1>
            </div>
            <div className="thirdpage">
                <div className="tpcolumn1">
                    <div className="column1contents"><img src="https://cdn-icons-png.flaticon.com/128/919/919854.png" alt="" /></div>
                    <div className="column1contents"><img src="https://cdn-icons-png.flaticon.com/128/5968/5968267.png" alt="" /></div>
                    <div className="column1contents"><img src="https://cdn-icons-png.flaticon.com/128/16183/16183567.png" alt="" /></div>
                    <div className="column1contents"><img src="tailwindcsslogo.png" alt="" /></div>
                </div>

                <div className="tpcolumn2">
                    <div className="column1contents"><img src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png" alt="" /></div>
                    <div className="column1contents"><img src="https://cdn-icons-png.flaticon.com/128/1183/1183672.png" alt="" /></div>
                    {/* <div className="column1contents"></div>
          <div className="column1contents"></div> */}
                </div>
            </div>

        </>
    )
}

export default Skills

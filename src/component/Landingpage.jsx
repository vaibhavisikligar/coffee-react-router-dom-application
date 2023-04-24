import React from 'react'
import './style.css'

function Landingpage() {
  return (
    <div className='container-fluid landing-section py-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 col-12 '>
                    <div className='landing-page py-5  text-white'>
                    <h1 className='mb-4 '>Coffee time <span>is a chance to slowdown</span> </h1>
                    <p className='mb-4 '>Coffee is a beverage prepared from roasted coffee beans. Darkly colored, bitter, and slightly acidic, coffee has a stimulating effect on humans, primarily due to its caffeine content. It has the highest sales in the world market for hot drinks.</p>
                    <button className='btn btn-warning me-4 '>Book a Table</button>
                    <button className='btn btn-warning '>Leran More</button>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Landingpage
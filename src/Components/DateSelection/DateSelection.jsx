import React from 'react'
import './DateSelection.css'
export const DateSelection = () => {
  return (
    <div className="ds-dates">
                    <div className='ds-day'>
                        <p className='ds-date ds-selected'>Mon, 10 Feb</p>
                        <p className='ds-price ds-selected'>$120 </p>
                        <div className='ds-current-date'>Best Value</div>
                    </div>
                    <div className='ds-day'>
                        <p className='ds-date'>Tue, 11 Feb</p>
                        <p className='ds-price'>$130 </p>
                    </div>
                    <div className='ds-day'>
                        <p className='ds-date'>Wed, 12 Feb</p>
                        <p className='ds-price'>$130 </p>
                    </div>
                    <div className='ds-day'>
                        <p className='ds-date'>Thu, 13 Feb</p>
                        <p className='ds-price'>$140 </p>
                    </div>
                    <div className='ds-day'>
                        <p className='ds-date'>Fri, 14 Feb</p>
                        <p className='ds-price'>$140 </p>
                    </div>
                    <div className='ds-day'>
                        <p className='ds-date'>Sat, 15 Feb</p>
                        <p className='ds-price'>$140 </p>
                    </div>
                    <div className='ds-day'>
                        <p className='ds-date'>Sun, 16 Feb</p>
                        <p className='ds-price'>$140 </p>
                    </div>
                    <div className='ds-day'>
                        <p className='ds-date ds-fade'>Mon, 17 Feb</p>
                        <p className='ds-price ds-fade'>$140 </p>
                    </div>

    </div>
  )
}

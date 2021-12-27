import React from 'react'
import Chartbar from './Chartbar'

function TableList() {
  return (
    <div>
      <div className='container'>
        <div className="card col-lg-6">
            <h2>Today's Sales</h2>
            <p>Looking all things are good</p>
            <div>
            <Chartbar/>
            </div>
        </div>

      </div>
    </div>
  )
}

export default TableList

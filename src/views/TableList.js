import React from 'react'
import Chartbar from './Chartbar'
import profile from '../assets/img/profile.svg';

function TableList() {
  return (
    <div>
      <div className='container d-flex'>
        <div className="card col-lg-6">
            <h2>Today's Sales</h2>
            <p>Looking all things are good</p>
            <div>
            <Chartbar/>
            </div>
        </div>
        <div className='card container'style={{marginLeft:"20px"}}>
          <h2>Top Performer</h2>
          <div>
          <img src={ profile} width={"70px"} />
          <img style={{marginTop:"20px", marginLeft:"40px"}} src={ profile} width={"70px"} />
          <img style={{marginTop:"20px", marginLeft:"40px"}} src={ profile} width={"70px"} />

          </div>
        </div>
      </div>
    </div>
  )
}

export default TableList

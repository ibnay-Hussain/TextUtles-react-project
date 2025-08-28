import React from 'react'

export default function Alert({alert}) {
  return (
    <>
      <div style={{height:'20px'}}>
        {alert && <div className={`alert alert-${alert.type}`} role="alert">
            {alert.msg}
        </div>}
      </div>
    </>
  )
}




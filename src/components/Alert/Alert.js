import React from 'react'

export default function Alert({alert}) {
  return (
    <>
    {alert && <span className={`alert alert-${alert.type}`} role="alert">
        {alert.msg}
    </span>}
    </>
  )
}




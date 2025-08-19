import React from 'react'
import PropTypes from 'prop-types'

export default function Alert({alert}) {
  return (
    <>
    {alert && <span class={`alert alert-${alert.type}`} role="alert">
        {alert.msg}
    </span>}
    </>
  )
}




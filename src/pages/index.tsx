// create a pages componente that uses reac-router-dom v6

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from './SignIn'

function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Pages
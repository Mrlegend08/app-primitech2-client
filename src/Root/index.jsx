import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainPage from '../pages/mainPage'
const Root = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>

    </>
  )
}

export default Root

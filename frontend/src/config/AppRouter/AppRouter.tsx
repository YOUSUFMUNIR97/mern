
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from '../../screens/Home'
import Course from '../../screens/course/Course'


const AppRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path='/' element={<Protected Screen={Admin} />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/course/*" element={<Course />} />
          
        </Routes>
      </Router>
    </>
  )
}

export default AppRouter
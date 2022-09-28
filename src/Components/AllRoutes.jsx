import { Route, Routes } from 'react-router-dom';
import React from 'react'
import Home from '../Pages/Home';
import Companies from '../Pages/Companies';
import SalaryGuide from '../Pages/SalaryGuide';
import Signin from '../Pages/Signin';
import PostJob from '../Pages/PostJob';
function AllRoutes() {
  return (
    <Routes>
        <Route path="/" element = {<Home/>}></Route>
        <Route path="/companies" element = {<Companies/>}></Route>
        <Route path="/salaryguide" element = {<SalaryGuide/>}></Route>
        <Route path="/signin" element = {<Signin/>}></Route>
        <Route path="*" element = {<Home/>}></Route>
        <Route path="/postjob" element = {<PostJob/>}></Route>
    </Routes>
  )
}

export default AllRoutes
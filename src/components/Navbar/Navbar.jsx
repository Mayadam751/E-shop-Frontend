import React from 'react'
import { Button,Navbar } from 'flowbite-react';
import { NavLink } from 'react-router-dom';

export default function Navigationbar() {
  return (
    <>
   <Navbar fluid rounded>
      <Navbar.Brand>
        <NavLink to='/home' className='flex justify-between align-middle'>
        <img src={require("../../images/cooltshirt.png")} className="mr-6 h-6 sm:h-9 flex" alt="Flowbite React Logo" /><h4>E-Shop</h4>
        </NavLink></Navbar.Brand>
     
      <Navbar.Collapse>
        <Navbar.Link to="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/products">Products</Navbar.Link>
        
        <Navbar.Link href="/cart">Cart</Navbar.Link>
      </Navbar.Collapse>
      <div className="flex md:order-2 justify-between">
        <Button className='mr-4' href="/login">Login</Button>
        <Button className='mr-4' href="/Register">Register</Button>
        <Button  className='mr-4'  href="/home">Logout</Button>
        <Navbar.Toggle />
      </div>
    </Navbar>
    </>
  )
}

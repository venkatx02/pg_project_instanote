import React from 'react'

function Home() {
  return (
    <>
    <table className='abouttable' border={1}>
    <div className='heading'>About InstaNote</div>
    <div>Welcome to InstaNote...!
    Want to gain audience for your events? Want to attend events and have fun? Then your'e at the right place.
    InstaNote helps you to create and advertise your events and interested people who finds your event will join! Have Fun...! Get started by <a className='rlink' href='http://localhost:3000/login'>logging into your account</a>. New here? <a className='rlink' href='http://localhost:3000/register'>Create an account</a>.
    <br />
    <br />
    Created by: Tejaswe, Venkat, Dheeraj, Supriya, Manasa
    </div>
    </table>
    </>
  )
}

export default Home
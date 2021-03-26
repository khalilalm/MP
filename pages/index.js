import React from "react";
import styles from '../styles/Home.module.css'
import Head from "next/head";
import {signIn,signOut, useSession } from 'next-auth/client'
import Link from "next/link";
export default function Home() {

  const [session, loading] = useSession();

  return (
  <div className="signup-page">
    <Head>
      <title>Minority Programmer Signup</title>
      <link rel="icon" href="/mp_gradient_rock.svg" />
    </Head>
<main className={styles.main}>
 {!session &&  (
   <>
   Not signed in <br />
   <div className="signup-container">
      <form className="signup-form">
        <h1 style={{"color":"white"}}>Welcome!</h1>
        <input
          required
          className="form-control"
          placeholder="Youre Name"
        ></input>
        <br />

        <input
          required
          className="form-control"
          placeholder="Youre Email"
        ></input>
        <br />

        <input className="form-control" placeholder="Youre Password"></input>
        <br />
       
          <div className="form-buttons">
             <button className="button" onClick>Create Account</button>
          <button className="button" onClick={signIn}>Sign In</button>
          </div>
        
      </form>
      
    </div>
   
   </>
 )}
 {
   session && (
     <>
     Signed in as {session.user.email} <br />
     <div> You can now access page</div>
     <button onClick={signOut}>sign out</button>
     </>
   )
 }
    <div className="signup-container">
      <form className="signup-form">
        <h1 style={{"color":"white"}}>Welcome!</h1>
        <input
          required
          className="form-control"
          placeholder="Youre Name"
        ></input>
        <br />

        <input
          required
          className="form-control"
          placeholder="Youre Email"
        ></input>
        <br />

        <input className="form-control" placeholder="Youre Password"></input>
        <br />
       
          <div className="form-buttons">
             <button className="button" onClick>Create Account</button>
          <button className="button">Sign In</button>
          </div>
        
      </form>
      
    </div>
    </main>
  </div>
)}

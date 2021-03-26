import React from "react";
import Head from "next/head";

import styles from '../styles/Home.module.css'
import { useSession } from 'next-auth/client'
export default function Home() {

  const [session, loading] = useSession();

  return (
  <div className="signup-page">
    <Head>
      <title>Minority Programmer Signup</title>
      <link rel="icon" href="/mp_gradient_rock.svg" />
    </Head>

    <div className="signup-container">
      <form className="signup-form">
        <h1>Welcome!</h1>
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
        <div className={styles.user}>
          {loading && <div className={styles.title}>Loading...</div>}
          {session && <> <p style={{ marginBottom: '10px' }}> Welcome, {session.user.name ?? session.user.email}</p> <br />
            <img src={session.user.image} alt="" className={styles.avatar} />
          </>}
          {!session &&
            <>
              <p className={styles.title}>Please Sign in</p>
              {/* <img src="https://cdn.dribbble.com/users/759083/screenshots/6915953/2.gif" alt="" className={styles.avatar} /> */}        
</>
          }
          <div className="form-buttons">
             <button className="button" onClick>Create Account</button>
          <button className="button">Sign In</button>
          </div>
         
        </div>
      </form>
      
    </div>
  </div>
)}

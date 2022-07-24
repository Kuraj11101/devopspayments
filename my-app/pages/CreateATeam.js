import Head from 'next/head'
import Image from 'next/image'
 import Link from 'next/link'
//import { Link } from "react-router-dom";
import styles from '../styles/Home.module.css'

import React, { useState } from "react";


export default function CreateATeam() {

    const [query, setQuery] = useState({
        podname: "",
        email: ""
      });

      // Update inputs value
      const handleParam = () => (e) => {
        const podname = e.target.name;
        const value = e.target.value;
        setQuery((prevState) => ({
          ...prevState,
          [name]: value
        }));
      };
      // Form Submit function
      const formSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.entries(query).forEach(([key, value]) => {
          formData.append(key, value);
        });
        fetch("https://getform.io/{your-form-endpoint}", {
          method: "POST",
          body: formData
        }).then(() => setQuery({ podname: "", email: "", message: "" }));
      };

    return (
        <div className={styles.container}>
      <Head>
        <title>TeamPod Finance</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeNavbar />
      {/* <HomeBody /> */}

      <main className={styles.main}>

      <div className="App">
      <h1>Create a TeamPod</h1>
      <br></br>
      <form onSubmit={formSubmit}>
        <div>
          <label>Pod Name</label>
          <input
            type="text"
            name="podname"
            required
            placeholder="Team Name"
            className="form-control"
            value={query.podname}
            onChange={handleParam()}
          />
        </div>
        <div>
          <label>Team Size</label>
          <input
            type="email"
            name="email"
            required
            placeholder="Team Size"
            className="form-control"
            value={query.email}
            onChange={handleParam()}
          />
        </div>
        <div>
          <label>Stake Amount</label>
          <input
            type="number"
            name="number"
            required
            placeholder="Stake Amount"
            className="form-control"
            value={query.number}
            onChange={handleParam()}
          />
        </div>
        <div>
          <label>TeamPod Leader Name</label>
          <input
            type="text"
            name="message"
            required
            placeholder="Leader Name"
            className="form-control"
            value={query.message}
            onChange={handleParam()}
          />
        </div>
        <br></br>
        <button className="btn-primary" type="submit">Submit</button>
      </form>
    </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/Tpod.png" alt="Logo" width={80} height={30} />
          </span>
        </a>
      </footer>
    </div>
    )
}
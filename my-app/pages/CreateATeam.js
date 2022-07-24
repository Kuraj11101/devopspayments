import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
//import React from 'next/react'
 //import { useCallback,  useEffect, useRef, useState } from 'react'
import styles from '../styles/Home.module.css'
import HomeNavbar from '../components/HomeNavbar'
//import React, { useEffect, useState } from 'react';
import React, { useState } from "react";
// import { useFormik } from 'formik';
// import { InputText } from 'primereact/inputtext';
// import { Button } from 'primereact/button';
// import { Dropdown } from 'primereact/dropdown';
// import { Calendar } from 'primereact/calendar';
// import { Password } from 'primereact/password';
// import { Checkbox } from 'primereact/checkbox';
// import { Dialog } from 'primereact/dialog';
// import { Divider } from 'primereact/divider';
// import { classNames } from 'primereact/utils';
// import { TeamSize } from '../components/TeamSize';


export default function CreateATeam() {

    const [query, setQuery] = useState({
        name: "",
        email: ""
      });

      // Update inputs value
      const handleParam = () => (e) => {
        const name = e.target.name;
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
        }).then(() => setQuery({ name: "", email: "", message: "" }));
      };

    // const [sizes, setSizes] = useState([]);
    // const [showMessage, setShowMessage] = useState(false);
    // const [formData, setFormData] = useState({});
    // const teamsize = new TeamSize();

    // useEffect(() => {
    //     teamsize.getSizes().then(data => setSizes(data));
    // }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // const formik = useFormik({
    //     initialValues: {
    //         name: '',
    //         email: '',
    //         password: '',
    //         date: null,
    //         size: null,
    //         accept: false
    //     },
    //     validate: (data) => {
    //         let errors = {};

    //         if (!data.name) {
    //             errors.name = 'Name is required.';
    //         }

    //         if (!data.email) {
    //             errors.email = 'Email is required.';
    //         }
    //         else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
    //             errors.email = 'Invalid email address. E.g. example@email.com';
    //         }

    //         if (!data.password) {
    //             errors.password = 'Password is required.';
    //         }

    //         if (!data.accept) {
    //             errors.accept = 'You need to agree to the terms and conditions.';
    //         }

    //         return errors;
    //     },
    //     onSubmit: (data) => {
    //         setFormData(data);
    //         setShowMessage(true);

    //         formik.resetForm();
    //     }
    // });

    // const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
    // const getFormErrorMessage = (name) => {
    //     return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    // };

    // const dialogFooter = <div className="flex justify-content-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></div>;
    // const passwordHeader = <h6>Pick a password</h6>;
    // const passwordFooter = (
    //     <React.Fragment>
    //         <Divider />
    //         <p className="mt-2">Suggestions</p>
    //         <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: '1.5' }}>
    //             <li>At least one lowercase</li>
    //             <li>At least one uppercase</li>
    //             <li>At least one numeric</li>
    //             <li>Minimum 8 characters</li>
    //         </ul>
    //     </React.Fragment>
    // );


//     const searchRef = useRef(null)
//   const [query, setQuery] = useState('')
//   const [active, setActive] = useState(false)
//   const [results, setResults] = useState([])

//   const searchEndpoint = (query) => `/api/search?q=${query}`

//   const onChange = useCallback((event) => {
//     const query = event.target.value;
//     setQuery(query)
//     if (query.length) {
//       fetch(searchEndpoint(query))
//         .then(res => res.json())
//         .then(res => {
//           setResults(res.results)
//         })
//     } else {
//       setResults([])
//     }
//   }, [])

//   const onFocus = useCallback(() => {
//     setActive(true)
//     window.addEventListener('click', onClick)
//   }, [])

//   const onClick = useCallback((event) => {
//     if (searchRef.current && !searchRef.current.contains(event.target)) {
//       setActive(false)
//       window.removeEventListener('click', onClick)
//     }
//   }, [])

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
            name="name"
            required
            placeholder="Name"
            className="form-control"
            value={query.name}
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

      {/* <div className="form-demo">
            <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                <div className="flex align-items-center flex-column pt-6 px-3">
                    <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
                    <h5>Registration Successful!</h5>
                    <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
                        Your account is registered under name <b>{formData.name}</b> ; it'll be valid next 30 days without activation. Please check <b>{formData.email}</b> for activation instructions.
                    </p>
                </div>
            </Dialog>

            <div className="flex justify-content-center">
                <div className="card">
                    <h5 className="text-center">Register</h5>
                    <form onSubmit={formik.handleSubmit} className="p-fluid">
                        <div className="field">
                            <span className="p-float-label">
                                <InputText id="name" name="name" value={formik.values.name} onChange={formik.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('name') })} />
                                <label htmlFor="name" className={classNames({ 'p-error': isFormFieldValid('name') })}>Name*</label>
                            </span>
                            {getFormErrorMessage('name')}
                        </div>
                        <div className="field">
                            <span className="p-float-label p-input-icon-right">
                                <i className="pi pi-envelope" />
                                <InputText id="email" name="email" value={formik.values.email} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('email') })} />
                                <label htmlFor="email" className={classNames({ 'p-error': isFormFieldValid('email') })}>Email*</label>
                            </span>
                            {getFormErrorMessage('email')}
                        </div>
                        <div className="field">
                            <span className="p-float-label">
                                <Password id="password" name="password" value={formik.values.password} onChange={formik.handleChange} toggleMask
                                    className={classNames({ 'p-invalid': isFormFieldValid('password') })} header={passwordHeader} footer={passwordFooter} />
                                <label htmlFor="password" className={classNames({ 'p-error': isFormFieldValid('password') })}>Password*</label>
                            </span>
                            {getFormErrorMessage('password')}
                        </div>
                        <div className="field">
                            <span className="p-float-label">
                                <Calendar id="date" name="date" value={formik.values.date} onChange={formik.handleChange} dateFormat="dd/mm/yy" mask="99/99/9999" showIcon />
                                <label htmlFor="date">Birthday</label>
                            </span>
                        </div>
                        <div className="field">
                            <span className="p-float-label">
                                <Dropdown id="size" name="size" value={formik.values.size} onChange={formik.handleChange} options={sizes} optionLabel="name" />
                                <label htmlFor="size">Team Size</label>
                            </span>
                        </div>
                        <div className="field-checkbox">
                            <Checkbox inputId="accept" name="accept" checked={formik.values.accept} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('accept') })} />
                            <label htmlFor="accept" className={classNames({ 'p-error': isFormFieldValid('accept') })}>I agree to the terms and conditions*</label>
                        </div>

                        <Button type="submit" label="Submit" className="mt-2" />
                    </form>
                </div>
            </div>
        </div> */}

        {/* <h2 className={styles.title}>
          Select a savings <b style={{color: "blue"}}>TeamPod</b> and Stake! */}
          {/* <a href="https://nextjs.org"></a> */}
        {/* </h2> */}
        {/* <input
        className={styles.search}
        // onChange={onChange}
        //onFocus={onFocus}
        placeholder='Search Teams'
        type='text'
        //value={query}
      /> */}

        {/* <p className={styles.description}> */}
          {/* <p style={{fontFamily: "Sans-Serif"}}> */}
            {/* Closely connecting the world financially with protected team modeled community safe financing method! */}
            {/* </p> */}
          {/* Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code> */}
        {/* </p> */}

        {/* <div className={styles.grid}>
          <a href="/JoinATeam" className={styles.card}>
            <h2>Jab Pod</h2> */}
                {/* &rarr; */}
            {/* <p>Stake is $200 per month. Pod size limit is 20 with two team members as earners each month.</p>
          </a>

          <a href="" className={styles.card}>
            <h2>Yop Pod</h2> */}
                 {/* &rarr; */}
            {/* <p>Stake is $700 per month. Pod size limit is 30 with 5 team members as earners each month.</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          > */}
            {/* <h2>Quash Pod</h2> */}
                {/* &rarr; */}
            {/* <p>Stake is $2000 per month. Pod size limit is 15 with 2 team members as earners each month.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Fil Pod</h2> */}
                {/* &rarr; */}

            {/* <p>
            Stake is $5000 per month. Pod size limit is 20 with 6 team members as earners each month.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>i Pod</h2> */}
                {/* &rarr; */}

            {/* <p>
            Stake is $7000 per month. Pod size limit is 50 with 5 team members as earners each month.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Lt Pod</h2> */}
                {/* &rarr; */}

            {/* <p>
            Stake is $10,000 per month. Pod size limit is 50 with 5 team members as earners each month.
            </p>
          </a>
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Gu Pod</h2> */}
                {/* &rarr; */}

            {/* <p>
            Stake is $3000 per month. Pod size limit is 20 with 6 team members as earners each month.
            </p>
          </a>
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Si Pod</h2> */}
                {/* &rarr; */}

            {/* <p>
            Stake is $15,000 per month. Pod size limit is 20 with 2 team members as earners each month.
            </p>
          </a>
        </div> */}
      </main>

      <footer className={styles.footer}>
        <a
          href=""
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
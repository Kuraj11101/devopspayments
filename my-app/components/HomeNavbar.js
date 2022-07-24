// import Tpod from "../public/Tpod.png"
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function HomeNavbar() {
	return (
		<nav className="navbar bg-white">
			<div className="container-fluid">
				<Link href="/" className="navbar-brand ms-3">
					{/* <img src={Tpod} width={100} height={50} /> */}
					<Image src="/Tpod.png" alt="Vercel Logo" width={80} height={40} />
				</Link>
				<div className="d-flex">
          <div className="d-flex align-items-center">

            {/* <p className={styles.button}>Open TeamPod</p> */}
			{/* <button color="primary" round disabled>Open TeamPod</button> */}
			<button type="button" className="btn btn-primary btn-lg px-4">Open TeamPod</button>
            {/* <p className="me-3">Sign Up</p> */}
          </div>
        </div>
			</div>
		</nav>
	);
}

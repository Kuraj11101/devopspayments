import React from 'react'
import ReactDOM from 'react-dom/client'
import MyApp from './MyApp'
import '../styles/globals.css'
import '../styles/index.css'
import '../styles/FormDemo.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './pages/index'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import CreateATeam from './pages/CreateATeam'
import JoinATeam from './pages/JoinATeam'
import HomeNavbar from './components/HomeNavbar'
// import TeamSize from './components/TeamSize';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
        <Route path="/" element={<MyApp />} />
        <Route path="/index" element={<Index />} />
        <Route path="/CreateATeam" element={<CreateATeam />} />
        <Route path="/JoinATeam" element={<JoinATeam />} />
        <Route path="/HomeNavbar" element={<HomeNavbar />} />
        {/* <Route path="/TeamSize" element={<TeamSize />} /> */}
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

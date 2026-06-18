import Navbar from '../Landingpage/Navbar'
import Dashboard from './Dashboard'

export default function DashboardPage({ darkMode, setDarkMode }) {
  return (
    <>
      <main
        id="main-content"
        className="pt-5"
      >
        <Dashboard
           darkMode={darkMode}
           setDarkMode={setDarkMode}
        />
      </main>
    </>
  )
}
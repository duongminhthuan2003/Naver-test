import './App.css'
import HomePage from './pages/HomePage.tsx'
import SettingsPage from './pages/SettingsPage.tsx'
import TasksPage from './pages/TasksPage.tsx'
import NavigationBar from "./components/NavigationBar.tsx";
import { Routes, Route, useLocation } from 'react-router-dom';
import SearchPage from "./pages/SearchPage.tsx";

function App() {
  const location = useLocation();

  return (
    <div className="m-4">
        <NavigationBar />

        <div>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
                <Route path="/tasks" element={<TasksPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/search" element={<SearchPage />} />
            </Routes>
        </div>
    </div>
  )
}

export default App

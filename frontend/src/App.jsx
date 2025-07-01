// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';
import GitHub from './pages/GitHub';
import Profile from './pages/Profile';
import Login from './pages/Login';
import GitHubSuccess from './pages/GitHubSuccess';


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/github" element={<GitHub />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/github-success" element={<GitHubSuccess />} />
      </Routes>
    </Layout>
  );
}




export default App;
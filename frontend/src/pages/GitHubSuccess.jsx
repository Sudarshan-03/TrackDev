import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function GitHubSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');

    if (token) {
      localStorage.setItem('token', token);
      navigate('/tasks');
    } else {
      navigate('/login');
    }
  }, []);

  return (
    <div className="text-center mt-10 text-lg">
      Logging you in with GitHub... ⏳
    </div>
  );
}
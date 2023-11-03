import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthAuthenticated } from 'redux/auth.selectors';

export default function PrivateRoute({ children, redirectTo = '/login' }) {
    const authenticated = useSelector(selectAuthAuthenticated);
  
    return (
        authenticated ? children : <Navigate to={redirectTo} replace />
  );
}

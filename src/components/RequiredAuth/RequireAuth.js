import {useAuth} from '../../utils/auth/auth';
import {Navigate} from 'react-router-dom';
import {constRoute} from '../../utils/route';

export const RequireAuth = ({children}) => {
  const auth = useAuth();
  if (!auth.user) {
    return <Navigate to={constRoute.home} />;
  }
  return children;
};

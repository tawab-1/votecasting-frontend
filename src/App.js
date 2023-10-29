import {Route, Routes} from 'react-router-dom';
import './App.css';
import WelcomePage from './components/welcome/welcomePage';
import CoreDashboard from './components/coreTeamDashboard';
import {constRoute} from './utils/route';
import Dashboard from './components/coreTeamDashboard/dashboard';
import PollingStatistics from './components/coreTeamDashboard/pollingStatPage';
import Users from './components/coreTeamDashboard/usersPage';
import {AuthProvider} from './utils/auth/auth';
import {RequireAuth} from './components/RequiredAuth/RequireAuth';
import PollingTeamDashboard from './components/pollingTeamDashboard';
import {OnlineUserDashboard} from './components/onlineUserDashboard';
import { PollingDashboard } from './components/pollingTeamDashboard/dashboard';
import { StartPollingPage } from './components/pollingTeamDashboard/startPolling';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path={constRoute.home} element={<WelcomePage />} />
        <Route
          path={constRoute.coreTeam}
          element={
            <RequireAuth>
              <CoreDashboard />
            </RequireAuth>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path={constRoute.dashboard} element={<Dashboard />} />
          <Route path={constRoute.users} element={<Users />} />
          <Route
            path={constRoute.pollingStatistics}
            element={<PollingStatistics />}
          />
        </Route>
        <Route
          path={constRoute.pollingTeamDashboard}
          element={
            <RequireAuth>
              <PollingTeamDashboard />
            </RequireAuth>
          }
        >
          <Route index element={<PollingDashboard/>} />
          <Route path={constRoute.startPollingPage} element={<StartPollingPage/>} />
        </Route>
        <Route
          path={constRoute.onlineUserDashboard}
          element={
            <RequireAuth>
              <OnlineUserDashboard />
            </RequireAuth>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;

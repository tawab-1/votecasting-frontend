import CustomButton from '../../commonComponents/commonButton';
import {
  CommonHeader,
  HeaderText,
} from '../../commonComponents/CommonHeader/CommonHeader';
import {Layout} from 'antd';
import { useAuth } from '../../utils/auth/auth';
import { Outlet } from 'react-router-dom';

const PollingTeamDashboard = () => {
  const auth = useAuth();
  return (
    <Layout style={{height: '100vh', overflow: 'hidden'}}>
      <CommonHeader>
        <HeaderText>Welcome to election commission of Pakistan</HeaderText>
        <CustomButton 
        color='#1f5a32' 
        backgroundColor='#fff' 
        onClick={() => auth.logout()}
        title='Logout'
          />
      </CommonHeader>
      <Outlet />
    </Layout>
  );
}

export default PollingTeamDashboard;

import React from 'react';
import styled from 'styled-components';
import {Layout} from 'antd';
import {Link, Outlet} from 'react-router-dom';
import {constRoute} from '../../utils/route';
import Sider from 'antd/es/layout/Sider';
import {MdDashboard} from 'react-icons/md';
import {FaChartBar, FaUsers} from 'react-icons/fa';
import CustomButton from '../../commonComponents/commonButton';
import {useAuth} from '../../utils/auth/auth';
import {
  CommonHeader,
  HeaderText,
} from '../../commonComponents/CommonHeader/CommonHeader';
import {CommonContentWrapper} from '../../commonComponents/CommonContentWrapper';

function CoreDashboard() {
  const auth = useAuth();
  const logout = () => {
    auth.logout();
  };
  return (
    <Layout style={{height: '100vh', overflow: 'hidden'}}>
      <StyledSide>
        <Link style={{marginTop: '10px'}} to={constRoute.coreTeam}>
          {' '}
          <MdDashboard />
          Dashboard
        </Link>
        <Link to={constRoute.users}>
          <FaUsers />
          Users
        </Link>
        <Link to={constRoute.pollingStatistics}>
          <FaChartBar />
          Polling Statistics
        </Link>
      </StyledSide>
      <Layout>
        <CommonHeader>
          <HeaderText>Election Commission of Pakistan</HeaderText>
          <CustomButton
            backgroundColor='white'
            onClick={logout}
            title={'Logout'}
          />
        </CommonHeader>
        <CommonContentWrapper>
          <Outlet />
        </CommonContentWrapper>
      </Layout>
    </Layout>
  );
}

export default CoreDashboard;

const StyledSide = styled(Sider)`
  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #1f5a32;
    padding: 10px 5px;

    a {
      display: flex;
      align-items: center;
      gap: 10px;
      background-color: white;
      padding: 12px 6px;
      text-decoration: none;
      color: black;
      text-align: center;
      border-radius: 12px;
      border: 1px solid transparent;
      transition: all 0.2s ease-in;
      font-family: 'Poppins' !important;
      font-weight: 500;

      svg {
        fill: black;
      }

      :hover {
        color: white;
        border-color: white;
        background-color: #1f5a32;

        svg {
          fill: white;
        }
      }
    }
  }
`;

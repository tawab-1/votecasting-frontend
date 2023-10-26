import {Helmet} from 'react-helmet';
import {Col, Row} from 'antd';
import styled from 'styled-components';
import topIcon from '../../assets/images/topicon.png';
import polygon from '../../assets/images/polygon.svg';
import {documentTitle} from '../../utils/page-title';
import CustomButton from '../../commonComponents/commonButton';
import {useState} from 'react';
import CoreTeamForm from '../loginForms/coreTeamForm';
import PollingTeamForm from '../loginForms/pollingStationForm';
import OnlineUserForm from '../loginForms/onlineUserForm';

const WelcomePage = () => {
  const [loginForm, setLoginForm] = useState(null);


  return (
    <>
      {loginForm === 'pollingTeam' ? (
        <PollingTeamForm setLoginForm={setLoginForm} />
      ) : loginForm === 'coreTeam' ? (
        <CoreTeamForm setLoginForm={setLoginForm} />
      ) : loginForm === 'onlineUser' ? (
        <OnlineUserForm setLoginForm={setLoginForm} />
      ) : (
        <LoginWrapper>
          <Helmet>
            <title>{documentTitle.login}</title>
          </Helmet>
          <SignInFormWrapper>
            <Row>
              <Col xs={24} md={12} lg={12}>
                <StyledPolygonWrapper>
                  <StyledFormWrapper>
                    <h1>SignIn</h1>
                    <p className='mb-4'>Select Your Related Login</p>
                    <LoginButtonsWrapper>
                      <CustomButton
                        className='d-block w-100'
                        title='Login Via Core Team'
                        htmlType='button'
                        color={'white'}
                        backgroundColor={'#1f5a32'}
                        onClick={() => setLoginForm('coreTeam')}
                      />
                      <CustomButton
                        className='d-block w-100'
                        title='Login Via Polling Team'
                        htmlType='button'
                        color={'white'}
                        backgroundColor={'#1f5a32'}
                        onClick={() => setLoginForm('pollingTeam')}
                      />
                      <CustomButton
                        className='d-block w-100'
                        title='Login Via Online User'
                        htmlType='button'
                        color={'white'}
                        backgroundColor={'#1f5a32'}
                        onClick={() => setLoginForm('onlineUser')}
                      />
                    </LoginButtonsWrapper>
                  </StyledFormWrapper>
                </StyledPolygonWrapper>
              </Col>
              <Col xs={24} md={12} lg={12}>
                <StyledRightWrapper>
                  <StyledHeadingPara>
                    <StyledHeading1>Welcome Pakistan</StyledHeading1>
                    <p>
                      We are proud to introduce a secure voting system based on
                      fingerprint identification, aiming to eliminate corruption
                      and ensure fair elections. With our cutting-edge
                      technology, voters can now cast their votes conveniently
                      and securely from the comfort of their homes.
                    </p>
                  </StyledHeadingPara>
                  <StyledMiddleImgWrapper>
                    <StyledMiddleImg src={topIcon} alt={topIcon} />
                  </StyledMiddleImgWrapper>
                  <StyledHeading1>
                    Election Commission of Pakistan
                  </StyledHeading1>
                </StyledRightWrapper>
              </Col>
            </Row>
          </SignInFormWrapper>
        </LoginWrapper>
      )}
    </>
  );
};

export default WelcomePage;

const StyledMiddleImgWrapper = styled.div`
  background-color: white;
  border-radius: 240px 240px 40px 40px;
`;

const LoginButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const LoginWrapper = styled.div`
  .ant-form-item-label
    > label.ant-form-item-required:not(
      .ant-form-item-required-mark-optional
    )::before {
    display: none;
    visibility: hidden;
  }

  .ant-form-item-label
    > label.ant-form-item-required:not(
      .ant-form-item-required-mark-optional
    )::after {
    display: none;
    visibility: hidden;
  }
`;

const StyledPolygonWrapper = styled.div`
  background-image: url(${polygon});
  background-size: cover;
  background-position: right center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  padding-right: 4em;
`;

const StyledMiddleImg = styled.img`
  position: relative;
  top: -30px;
  width: 100%;
  max-width: 380px;

  @media (max-width: 1440px) {
    max-width: 350px;
  }

  @media (max-width: 1366px) {
    max-width: 388px;
  }
`;

const StyledRightWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: 0 25px;
  gap: 30px;
`;
const StyledHeading1 = styled.h1`
  color: white;
  font-family: 'Poppins' !important;
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
  font-weight: 500;
  text-align: center;
`;
const StyledHeadingPara = styled.div`
  p {
    color: white;
    font-weight: 400;
    margin-bottom: 0.5;
    text-align: center;
    padding: 0px 40px;
  }
`;

const StyledFormWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 0 25px;

  h1 {
    color: white;
    font-family: 'Poppins' !important;
    margin-bottom: 0.5rem;
    font-size: 2.5rem;
    font-weight: 500;
  }

  p {
    color: white;
    font-weight: 400;
    margin-bottom: 1.5rem;
  }

  .textSpace {
    margin-bottom: 59px;
  }
`;

const SignInFormWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  background-color: #216036;
  font-family: 'poppins';

  * {
    word-spacing: 0px !important;
  }

  .ant-form-item-explain-error {
    color: red;
    word-spacing: 0 !important;
    font-style: italic;
    margin-top: 2px;
  }
`;

import {Helmet} from 'react-helmet';
import {Col, Form, Row} from 'antd';
import styled from 'styled-components';
import signInBg from '../../assets/images/signInBg.jpg';
import {MdLock, MdMail} from 'react-icons/md';
import {documentTitle} from '../../utils/page-title';
import FormItem from 'antd/es/form/FormItem';
import {FaIdCard} from 'react-icons/fa';

const CommonLoginWrapper = (props) => {
    const {children} = props;
    return (
        <>
            <LoginWrapper>
                <Helmet>
                    <title>{documentTitle.login}</title>
                </Helmet>
                <SignInFormWrapper>
                    <Row>
                        <Col xs={24} md={12} lg={12}>
                            <StyledPolygonWrapper>
                                <StyledFormWrapper>
                                    <div>
                                        <h1>SignIn</h1>
                                        {children}
                                    </div>
                                </StyledFormWrapper>
                            </StyledPolygonWrapper>
                        </Col>
                        <Col xs={24} md={12} lg={12}>
                            <StyledImagesWrapper>
                                <h1>Welcome</h1>
                                <h2>Election Commission of Pakistan</h2>
                            </StyledImagesWrapper>
                        </Col>
                    </Row>
                </SignInFormWrapper>
            </LoginWrapper>
        </>
    );
};

export default CommonLoginWrapper;

export const LoginWrapper = styled.div`
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

export const SignInFormWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  background-image: url(${signInBg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  font-family: 'poppins' !important;

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

export const StyledPolygonWrapper = styled.div`
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

export const StyledFormWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 85%;
  padding: 25px 35px;
  border-radius: 12px;
  background-color: #015d00;
  background-image: linear-gradient(221deg,
    rgb(236, 240, 246) -69%,
  rgb(33, 96, 54) 40%);
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;

  h1 {
    color: white;
    font-family: 'Outfit';
    margin-bottom: 0.5rem;
    font-size: 2.5rem;
    font-weight: 500;
  }

  p {
    font-weight: 400;
    margin-bottom: 1.5rem;
  }

  .textSpace {
    margin-bottom: 59px;
  }

  div {
    width: 100%;
  }
`;

export const StyledImagesWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: start;
  position: relative;
  padding: 20px 25px;

  h1 {
    color: white;
    font-family: 'Poppins' !important;
    margin: 0.5rem 0;
    font-size: 2.5rem;
    font-weight: 500;
  }

  h2 {
    color: white;
    font-family: 'Poppins' !important;
    margin-bottom: 0.1rem;
    font-size: 2rem;
    font-weight: 400;
  }
`;

export const StyledsigninButtonItem = styled.div`
  
  .ant-btn {
    background-color: rgb(31, 90, 50);
    border: 1px solid #ffffff66;
    border-radius: 38px;
    font-weight: 700;
    font-size: 20px;
    letter-spacing: 1px;
    transition: all 0.3s;
    height: 52px;
    margin-top: 18px;

    &:hover {
      background-color: #fff;
      background-image: unset;
      border-color: rgb(31, 90, 50);

      span {
        color: rgb(31, 90, 50);
      }
    }

    &:focus {
      background-color: #fff;
      background-image: unset;
    }
  }
`;

export const StyledFormItem = styled(FormItem)`
  .ant-input-affix-wrapper {
    background-color: ${(props) => (props.bgNone ? '' : 'rgb(31 90 50)')};
    border: ${(props) => (props.bgNone ? '' : '1px solid #ffffff66')};
    border-radius: 8px;
    padding-top: 5px;
    height: 52px !important;

    .ant-input {
      background-color: ${(props) => (props.bgNone ? '' : 'rgb(31 90 50)')};
      padding-left: 10px;
      position: relative;
      color: ${(props) => (props.bgNone ? '' : '#fff')};
      font-size: 16px;

      &::placeholder {
        color: rgb(255, 255, 255);
      }
    }

    .ant-input-password-icon {
      color: #fff;
      font-size: 18px;
      margin-right: 5px;
    }

    &:hover {
      border-color: rgb(31 90 50);
    }
  }

  .ant-form-item-has-error {
    .ant-input-affix-wrapper {
      border: 1px solid #ffec40 !important;

      &:focus {
        border: 1px solid #ffec40 !important;
      }
    }

    svg {
      color: #ffec40;
    }
  }
`;

export const StyledLockIcon = styled(MdLock)`
  color: #fff;
  font-size: 24px;
  z-index: 1;
  left: 14px;
`;

export const StyledMailIcon = styled(MdMail)`
  color: #fff;
  font-size: 24px;
  z-index: 1;
  left: 14px;
`;
export const StyledIdIcon = styled(FaIdCard)`
  color: #fff;
  font-size: 24px;
  z-index: 1;
  left: 14px;
`;

export const StyledForm = styled(Form)`
  .ant-form-item-label {
    label {
      color: ${(props) => (props.labelColor ? props.labelColor : 'white')};
      font-weight: 400;
      font-size: 14px;
    }
  }

  .ant-form-item-label {
    .ant-form-item-required {
      &::after {
        content: unset;
      }
    }
  }
`;

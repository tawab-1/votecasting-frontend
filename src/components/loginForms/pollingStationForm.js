import React from 'react';
import CommonLoginWrapper, {
  StyledForm,
  StyledFormItem,
  StyledIdIcon,
  StyledLockIcon,
  StyledsigninButtonItem,
} from '../../commonComponents/commonLoginWrapper/commonLoginWrapper';
import {Form} from 'antd';
import {useNavigate} from 'react-router-dom';
import CommonInput from '../../commonComponents/commonInput';
import CustomButton from '../../commonComponents/commonButton';
import {constRoute} from '../../utils/route';
import {useAuth} from '../../utils/auth/auth';

function PollingTeamForm({setLoginForm}) {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const auth = useAuth();
  const onLogin = async () => {
    auth.login('user');
    navigate(constRoute.pollingTeamDashboard, {replace: true});
  };

  return (
    <CommonLoginWrapper>
      <StyledForm
        layout='vertical'
        form={form}
        name='basic'
        initialValues={{remember: true}}
        onFinish={onLogin}
        autoComplete='on'
      >
        <StyledFormItem
          name='areaCode'
          label='Enter Area Code'
          rules={[
            {
              type: 'areaCode',
              message: 'Area Code is not Valid',
            },
            {required: true, message: 'Area Code is required'},
          ]}
        >
          <CommonInput
            prefix={<StyledIdIcon />}
            inputType='areaCode'
            placeholder='21593'
          />
        </StyledFormItem>
        <StyledFormItem
          label='Password'
          name='password'
          rules={[{required: true, message: 'Password is required'}]}
        >
          <CommonInput
            prefix={<StyledLockIcon />}
            inputType='password'
            placeholder='Password'
            onInput={(e) => {
              e.target.value = e.target.value.trim();
            }}
          />
        </StyledFormItem>
        <StyledFormItem>
          <StyledsigninButtonItem>
            <CustomButton
              className='w-100'
              title={'LOGIN'}
              htmlType={'submit'}
              color={'white'}
              backgroundColor={'#1f5a32'}
            />
            <CustomButton
              className='w-100'
              title={'Chose Another Login Method'}
              htmlType='button'
              onClick={() => setLoginForm(null)}
              color={'white'}
              backgroundColor={'#1f5a32'}
            />
          </StyledsigninButtonItem>
        </StyledFormItem>
      </StyledForm>
    </CommonLoginWrapper>
  );
}

export default PollingTeamForm;

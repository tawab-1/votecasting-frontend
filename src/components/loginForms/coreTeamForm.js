import {Form} from 'antd';
import CommonLoginWrapper, {
  StyledForm,
  StyledFormItem,
  StyledLockIcon,
  StyledMailIcon,
  StyledsigninButtonItem,
} from '../../commonComponents/commonLoginWrapper/commonLoginWrapper';
import CommonInput from '../../commonComponents/commonInput';
import CustomButton from '../../commonComponents/commonButton';
import React from 'react';
import {useAuth} from '../../utils/auth/auth';
import {useNavigate} from 'react-router-dom';
import {constRoute} from '../../utils/route';
import {useStore} from '../../stores/root-store';
import {notification} from '../../utils/notifications';

function CoreTeamForm({setLoginForm}) {
  const [form] = Form.useForm();
  const {
    signinInfo: {addInfo},
  } = useStore(null);
  const navigate = useNavigate();
  const auth = useAuth();

  const onLogin = async (values) => {
    const payload = {
      email: values.email,
      password: values.password,
    };
    const response = await addInfo(payload);
    const userData = response?.data?.user;
    if (response.status === 200 && userData.role === 'admin') {
      auth.login(userData.username);
      navigate(constRoute.coreTeam, {replace: true});
    } else {
      notification.error('Admin access required!');
    }
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
          name='email'
          label='Email'
          rules={[
            {type: 'email', message: 'Email is not Valid'},
            {required: true, message: 'Email is required'},
          ]}
        >
          <CommonInput
            prefix={<StyledMailIcon />}
            inputType='text'
            placeholder='example@gmail.com'
            onFocus={() => form.setFields([{name: 'email', errors: []}])}
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
        <StyledsigninButtonItem>
          <CustomButton
            className='w-100'
            title='LOGIN'
            color={'white'}
            backgroundColor={'#1f5a32'}
            htmlType={'submit'}
          />
          <CustomButton
            className='w-100'
            title={'Chose Another Login Method'}
            htmlType='button'
            color={'white'}
            onClick={() => setLoginForm(null)}
            backgroundColor={'#1f5a32'}
          />
        </StyledsigninButtonItem>
      </StyledForm>
    </CommonLoginWrapper>
  );
}

export default CoreTeamForm;

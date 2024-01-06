import React, { useState } from 'react';
import CommonLoginWrapper, {
  StyledForm,
  StyledFormItem,
  StyledIdIcon,
  StyledSignInButtonItem,
} from '../../commonComponents/commonLoginWrapper/commonLoginWrapper';

import {Form} from 'antd';
import {useNavigate} from 'react-router-dom';
import CommonInput from '../../commonComponents/commonInput';
import CustomButton from '../../commonComponents/commonButton';
import {constRoute} from '../../utils/route';
import { observer } from 'mobx-react-lite';

const OnlineUserForm = observer(({setLoginForm}) => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [cnic, setCnic] = useState(null)


  const onLogin = (values) => {
    navigate(constRoute.onlineUserDashboard);
  };
  const handleInputChange = (event) => {
    const value = event.target.value;
    // Allow only numbers
    const numericInput = value.replace(/[^0-9]/g, '').replace(/(\d{5})(\d{7})(\d{1})/, '$1-$2-$3');
  
    // Insert dashes at the appropriate positions
    // const formattedInput = numericInput;
  
    // Limit the length to 15 characters
    const limitedInput = numericInput.substring(0, 15);
  
    setCnic(limitedInput);
  };



  return (
    <CommonLoginWrapper>
      <StyledForm
        layout='vertical'
        form={form}
        name='basic'
        initialValues={{remember: true}}
        onFinish={onLogin}
        autoComplete='off'
      >
        <StyledFormItem
          name='cnic'
          label='Enter CNIC without dashes'
          rules={[
            {
              type: 'cnic',
              message: 'CNIC is not Valid',
            },
            {required: true, message: 'CNIC is required'},
          ]}
        >
          <CommonInput
            prefix={<StyledIdIcon />}
            inputType='cnic'
            placeholder='21593-3527936-8'
            onChange={handleInputChange}
            value={cnic}
            // onKeyPress={handleKeyPress}
          />
        </StyledFormItem>
        <StyledFormItem>
          <StyledSignInButtonItem>
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
          </StyledSignInButtonItem>
        </StyledFormItem>
      </StyledForm>
    </CommonLoginWrapper>
  );
})

export default OnlineUserForm;

import React from 'react';
import CommonLoginWrapper, {
  StyledForm,
  StyledFormItem,
  StyledIdIcon,
  StyledsigninButtonItem,
} from '../../commonComponents/commonLoginWrapper/commonLoginWrapper';

import {Form} from 'antd';
import {useNavigate} from 'react-router-dom';
import CommonInput from '../../commonComponents/commonInput';
import CustomButton from '../../commonComponents/commonButton';
import {constRoute} from '../../utils/route';

function OnlineUserForm({setLoginForm}) {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onLogin = (values) => {
    console.log(values.cnic, '-------');
    navigate(constRoute.onlineUserDashboard);
  };
  // const handleCnicChange = (e) => {
  //   const value = e.target.value;
  //   const formattedValue = value
  //     .replace(/\D/g, '') // Remove any non-numeric characters
  //     .substring(0, 5); // Limit the input to 5 characters
  //   setCnic(formattedValue);
  // };

  // const handleKeyPress = (e) => {
  //   const charCode = e.which ? e.which : e.keyCode;
  //   const inputValue = e.target.value;

  //   // Only allow numeric characters (0-9) and hyphen (-)
  //   if (
  //     charCode < 48 ||
  //     charCode > 57 ||
  //     (inputValue.length >= 15 && charCode !== 8 && charCode !== 46)
  //   ) {
  //     e.preventDefault();
  //     return;
  //   }

  //   //Insert hyphen automatically
  //   if (charCode !== 8 && charCode !== 46) {
  //     const formattedValue = inputValue
  //       .replace(/[^0-9-]/g, '')
  //       .replace(/^(\d{5})-?(\d{0,7})-?(\d?)$/, (match, p1, p2, p3) => {
  //         return p1 + '-' + p2 + (!p3 ? '-' + p3 : '');
  //       });
  //     e.target.value = formattedValue;
  //   }
  // };
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
            // onChange={handleCnicChange}
            maxLength={15}
            // value={cnic}
            // onKeyPress={handleKeyPress}
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

export default OnlineUserForm;

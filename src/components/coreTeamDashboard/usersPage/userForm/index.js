import FormItem from 'antd/lib/form/FormItem';
import {CommonForm} from '../../../../commonComponents/commonForm';
import CommonInput from '../../../../commonComponents/commonInput';
import {Col, DatePicker, Row, Tooltip} from 'antd';
import {useState} from 'react';
import { CustomSelector } from '../../../../commonComponents/commonSelector';
import CustomButton from '../../../../commonComponents/commonButton';
import { useStore } from '../../../../stores/root-store';
import { observer } from 'mobx-react-lite';
import { notification } from '../../../../utils/notifications';

const UserForm = observer(({onClose}) => {
  const {
    signinInfo: {registerUser},
  } = useStore(null);

  const [dateOfBirth, setDateOfBirth] = useState(null);
  const dateFormat = 'DD-MM-YYYY';
  const cityData = [
    {
      value: 'admin',
      label: 'Admin',
    },
    {
      value: 'voter',
      label: 'Voter',
    },
    {
      value: 'chairman',
      label: 'chairman',
    },
    {
      value: 'pollingTeam',
      label: 'Polling Team',
    },
  ]
  const handleDateChange = (date, dateString) => {
    setDateOfBirth(dateString);
  };

  const onFinish = async (values) => {
    if (values.cnic.length  === 13) {
      if (values.cnic.slice(0, 5) !==  values.areaCode) {
        notification.error('Area code and CNIC not match!')
        return
      } else {
        const formattedCnic = `${values.cnic.slice(0, 5)}-${values.cnic.slice(5, 12)}-${values.cnic.slice(12, 13)}`;
        const payload = {
          firstName: values.firstName,
          lastName: values.lastName,
          cnic: formattedCnic,
          password: values.password,
          roles: values.roles,
          areaCode: values.areaCode,
          dateOfBirth: dateOfBirth,
        }
        const res = await registerUser(payload)
        onClose();
      }
    } else {
      notification.error('Enter 13 digits CNIC!')
      return;
    }
  };
  return (
    <CommonForm layout='vertical' style={{display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between'}} onFinish={onFinish}>
      <Row gutter={24}>
        <Col span={12}>
          <FormItem
          name='firstName'
          label='First Name'
          rules={[
            {
              required: true,
              message: 'First name is required!',
            },
          ]}
          >
            <CommonInput
              name='firstName'
              inputType='text'
              placeholder='First Name'
            />
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem
          name='lastName'
          label='Last Name'
          rules={[
            {
              required: true,
              message: 'First name is required!',
            },
          ]}
          >
            <CommonInput
              name='lastName'
              inputType='text'
              placeholder='Last Name'
            />
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem
          name='email'
          label='Email'
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'E-mail is required!',
            },
          ]}
          >
            <CommonInput
              name='email'
              inputType='email'
              placeholder='example@gmail.com'
            />
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem
          name='password'
          label='Password'
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          >
            <CommonInput
              name='password'
              inputType='password'
              placeholder='Enter Password'
            />
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem
          name='areaCode'
          label='Area Code'
          rules={[
            {
              required: true,
              message: 'Area code is required!',
            },
          ]}
          >
            <CommonInput
              name='areaCode'
              inputType='areaCode'
              placeholder='21504'
            />
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem name='roles' label='Roles'>
           <CustomSelector
            mode='multiple'
            defaultValue='voter'
            options={cityData}
            name='roles'
            />
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem
          name='cnic'
          label='CNIC'
          rules={[
            {
              required: true,
              message: 'Area code is required!',
            },
          ]}
          >
            <CommonInput
              name='cnic'
              inputType='cnic'
              placeholder='12345-1234567-1'
            />
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem name='dateOfBirth' label='Birth date' rules={[
            {
              required: true,
              message: 'Birth date is required!',
            },
          ]}>
            <DatePicker style={{width: '100%', height: '45px'}} allowClear={false} format={dateFormat} onChange={handleDateChange}/>
          </FormItem>
        </Col>
        </Row>
        <Row gutter={[16, 16]}>
        <Col span={12}>
          <FormItem>
          <CustomButton
            className='w-100'
            title={'Cancel'}
            htmlType='button'
            color={'white'}
            backgroundColor={'#1f5a32'}
            onClick={onClose}
          />
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem>
          <CustomButton
            className='w-100'
            title={'Register'}
            htmlType='submit'
            color={'white'}
            backgroundColor={'#1f5a32'}
          />
          </FormItem>
        </Col>
        </Row>
    </CommonForm>
  );
});

export default UserForm;

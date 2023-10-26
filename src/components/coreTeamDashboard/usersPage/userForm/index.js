import FormItem from 'antd/lib/form/FormItem';
import {CommonForm} from '../../../../commonComponents/commonForm';
import CommonInput from '../../../../commonComponents/commonInput';
import {Col, Row} from 'antd';
import {useEffect} from 'react';
import axios from 'axios';

const UserForm = () => {
  useEffect(() => {
    const data = async () => {
      await axios
        .get('http://127.0.0.1:8000/signup/')
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    };
    data();
  }, []);

  return (
    <CommonForm layout='vertical'>
      <Row gutter={24}>
        <Col span={12}>
          <FormItem name='username' label='Name'>
            <CommonInput
              name='username'
              inputType='text'
              placeholder='Enter name'
            />
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem name='email' label='Email'>
            <CommonInput
              name='email'
              inputType='email'
              placeholder='example@gmail.com'
            />
          </FormItem>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <FormItem name='password' label='Password'>
            <CommonInput
              name='password'
              inputType='password'
              placeholder='Enter Password'
            />
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem name='areaCode' label='Area Code'>
            <CommonInput
              name='areaCode'
              inputType='areaCode'
              placeholder='21504'
            />
          </FormItem>
        </Col>
      </Row>
    </CommonForm>
  );
};

export default UserForm;

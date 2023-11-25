import {notification as antdNotification} from 'antd';
import error from '../../assets/images/error.png';
import success from '../../assets/images/success.png';
import info from '../../assets/images/info.png';
import warning from '../../assets/images/warning.png';
import alertIcon from '../../assets/images/alertIcon.png';
import style from './style.module.scss';

const notification = {
  error(message) {
    return antdNotification.error({
      message: '',
      placement: 'topRight',
      description: message,
      key: 'error',
      duration: 2,
      closeIcon: false,
      className: style.allNotification,
      icon: (
        <img
          src={error}
          style={{width: '86px', marginLeft: '-21px', marginTop: '0px'}}
          alt='Error Message'
        />
      ),
    });
  },

  success(message) {
    return antdNotification.success({
      message: '',
      placement: 'topRight',
      description: message,
      key: 'success',
      duration: 2,
      closeIcon: false,
      icon: (<img 
      src={success}
      style={{width: '86px', marginLeft: '-21px', marginTop: '0px'}}
      alt='Error Message'
      />)
    });
  },

  info(message) {
    return antdNotification.info({
      message: '',
      placement: 'topRight',
      key: 'info',
      description: message,
      duration: 2,
      closeIcon: false,
      icon: (<img 
        src={info}
        style={{width: '86px', marginLeft: '-21px', marginTop: '0px'}}
        alt='Info Message'
        />),
    });
  },

  firebaseInfo(title, body) {
    return antdNotification.info({
      message: title,
      placement: 'topRight',
      key: 'info',
      description: body,
      closeIcon: false,
      duration: 2,
      icon: `<img style="width: 90px; margin-left: -29px; margin-top: -21px;" src="${info}"></img>`,
    });
  },

  warning(message) {
    return antdNotification.warning({
      message: 'Something went wrong!',
      placement: 'bottomRight',
      key: 'warning',
      description: message,
      duration: 3,
      icon: `<img style="width: 60%; margin-left: -4px; margin-top: -5px;" src="${warning}"></img>`,
    });
  },

  attendenceAlert(message, name) {
    return antdNotification.open({
      message: `Hi,${name}`,
      placement: 'topRight',
      key: 'warning',
      description: message,
      duration: 2,
      closeIcon: `<img style="width: 70px; margin-left: 0px; margin-top: -2px; height: 66px;" src="${alertIcon}"></img>`,
    });
  },

  inactiveEmployees(message) {
    return antdNotification.open({
      placement: 'topRight',
      key: 'warning',
      description: `<div style="width: 300px;">${message}</div>`,
      duration: 2,
      closeIcon: `<img style="width: 50px; margin-left: 0px; margin-top: -2px; height: 55px;" src="${alertIcon}" alt="Alert Icon" />`,
      message: '',
    });
  },
};

// Usage example:
// notification.error('This is an error message');
// notification.success('This is a success message');
// ... and so on

export {notification};

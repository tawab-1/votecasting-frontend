import React, {useState} from 'react';
import {CommonModel} from '../../commonComponents/commonModel';
import CustomButton from '../../commonComponents/commonButton';

export const OnlineUserDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <div>
      <CommonModel
        title='Basic Modal'
        open={isModalOpen}
        displayOkButton={false}
        displayCancelButton={false}
        headerBgcolor='#2c6840'
      >
        <div>modal</div>
        <CustomButton
          title='close modal'
          htmltype='button'
          onClick={() => setIsModalOpen(false)}
        />
      </CommonModel>
    </div>
  );
};

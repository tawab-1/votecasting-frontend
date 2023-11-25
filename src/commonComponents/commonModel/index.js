import {Modal} from 'antd';
import React from 'react';
import styled from 'styled-components';

export const CommonModel = ({title, open, displayOkButton, displayCancelButton, onCancel, onOk, headerBgcolor, children}) => {
    return (
        <StyledCommonModel
            title={title}
            visible={open} // Use "visible" instead of "open"
            okButtonProps={{
                style: {display: !displayOkButton ? 'none' : ''},
            }}
            cancelButtonProps={{
                style: {display: !displayCancelButton ? 'none' : ''},
            }}
            onCancel={onCancel}
            onOk={onOk}
            closable={false}
            headerBgcolor={headerBgcolor}
        >
            {children}
        </StyledCommonModel>
    );
};

export const StyledCommonModel = styled(Modal)`

  .ant-modal-content {
    display: flex;
    flex-direction: column;

    .ant-modal-header {
      background-color: ${(props) => (props.headerBgcolor ? props.headerBgcolor : '')};
      border-radius: 8px;
      padding: 10px;
    }
  }
`;


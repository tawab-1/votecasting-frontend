import {Modal} from 'antd';
import React from 'react';
import styled from 'styled-components';
import {MdOutlineFingerprint} from 'react-icons/md';

export const CommonModel = (props) => {
    return (
        <StyledCommonModel
            title={props.title}
            visible={props.open} // Use "visible" instead of "open"
            okButtonProps={{
                style: {display: !props.displayOkButton ? 'none' : ''},
            }}
            cancelButtonProps={{
                style: {display: !props.displayCancelButton ? 'none' : ''},
            }}
            onCancel={props.onCancel}
            onOk={props.onOk}
            closable={false}
            headerBgcolor={props.headerBgcolor}
        >
            {props.children}
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

const FingerprintScannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Fingerprint = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #e6e6e6;
  overflow: hidden;

  svg {
    path {
      color: #2c6840;
    }
  }
`;

const FingerprintIcon = styled(MdOutlineFingerprint)`
  font-size: 150px;
`;

const Message = styled.div`
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #333333;
`;

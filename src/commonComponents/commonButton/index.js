import React from 'react';
import {Button} from 'antd';
import styled from 'styled-components';

const CustomButton = (props) => {
    const {
        className,
        block,
        danger,
        disabled,
        ghost,
        href,
        htmlType,
        form,
        icon,
        loading,
        shape,
        size,
        target,
        type,
        onClick,
        color,
        backgroundColor,
        title,
    } = props;
    return (
        <>
            <StyledCustomButton
                className={className}
                block={block}
                danger={danger}
                disabled={disabled}
                ghost={ghost}
                href={href}
                htmlType={htmlType}
                form={form}
                icon={icon}
                loading={loading}
                shape={shape}
                size={size}
                target={target}
                type={type}
                onClick={onClick}
                color={color}
                backgroundcolor={backgroundColor}
            >
                {title}
            </StyledCustomButton>
        </>
    );
};

export default CustomButton;

const StyledCustomButton = styled(Button)`
  box-shadow: rgba(0, 0, 0, 0.32) 0px 2px 4px;
  transition: all 0.3s ease 0s;
  display: flex;
  align-items: center;
  border: 1px solid transparent;
  justify-content: center;
  background-color: ${(props) =>
          props.backgroundcolor ? props.backgroundcolor : ' #1f5a32'} !important;
  border-radius: 25px;
  min-height: 40px;

  :hover {
    border-color: white !important;
    background-color: ${(props) =>
            props.backgroundcolor === '#1f5a32'
                    ? 'white'
                    : props.backgroundcolor === 'white' || '#ffffff' || '#fff'
                            ? '#1f5a32'
                            : 'black'} !important;

    span {
      color: ${(props) =>
              props.color === '#1f5a32'
                      ? 'white'
                      : props.color === 'white' || '#fff' || '#ffffff'
                              ? '#1f5a32'
                              : ''};
    }
  }

  span {
    font-weight: 500;
    font-size: 16px;
    font-family: Poppins !important;
    color: ${(props) => (props.color ? props.color : '#1F5A32')};
  }
`;

import React, {useState} from 'react';
import {Input} from 'antd';
import {MdVisibility, MdVisibilityOff} from 'react-icons/md';
import styled from 'styled-components';
import {Label} from '../label';

const {TextArea} = Input;

const InputSize = {
  Small: 0,
  Medium: 1,
  Large: 2,
};

const renderInputSize = (size) => {
  switch (size) {
    case InputSize.Small:
      return {
        height: 30,
        fontSize: 12,
        fontWeight: 'lighter',
        fontFamily: 'Poppins',
      };
    case InputSize.Medium:
      return {
        height: 45,
        fontSize: 14,
        fontWeight: 'lighter',
        fontFamily: 'Poppins',
      };
    case InputSize.Large:
      return {
        height: 60,
        fontSize: 14,
        fontWeight: 'lighter',
        fontFamily: 'Poppins',
      };
    default:
      return null;
  }
};

const renderTextAreaSize = (size) => {
  switch (size) {
    case InputSize.Small:
      return {
        height: 55,
        fontSize: 12,
        fontWeight: 'lighter',
        fontFamily: 'Poppins',
      };
    case InputSize.Medium:
      return {
        height: 70,
        fontSize: 12,
        fontWeight: 'lighter',
        fontFamily: 'Poppins',
      };
    case InputSize.Large:
      return {
        height: 90,
        fontSize: 14,
        fontWeight: 'lighter',
        fontFamily: 'Poppins',
      };
    default:
      return null;
  }
};

const CommonInput = (props) => {
  const [inputSize] = useState(InputSize.Medium);
  const [label] = useState(null);
  const [autoSizeCheck] = useState(false);

  return (
    <CustomInp>
      {label && (
        <Label htmlFor={props.name} id={props.id}>
          {label}
        </Label>
      )}
      {props.inputType === 'textarea' ? (
        <TextArea
          name={props.name}
          value={props.value}
          placeholder={props.placeholder}
          autoSize={autoSizeCheck}
          onChange={props.onChange ? props.onChange : null}
          onInput={props.onInput ? props.onInput : null}
          style={renderTextAreaSize(inputSize)}
          autoFocus={props.autoFocus}
          readOnly={props.readOnly}
          disabled={props.disabled}
          prefix={props.prefix}
        />
      ) : props.inputType === 'number' ? (
        <StyledNumberInput
          data-cy={props.cyId}
          onPressEnter={props.onPressEnter}
          onInput={props.onInput ? props.onInput : null}
          onBlur={props.onBlur ? props.onBlur : null}
          onKeyDown={props.onKeyDown}
          onFocus={props.onFocus ? props.onFocus : null}
          type={'number'}
          name={props.name}
          value={props.value || props.defaultValue}
          defaultValue={props.defaultValue}
          placeholder={props.placeholder}
          onChange={props.onChange ? props.onChange : null}
          style={renderInputSize(inputSize)}
          autoFocus={props.autoFocus}
          maxLength={props.maxlength}
          readOnly={props.readOnly}
          ref={props.ref}
          max={props.max}
          onWheel={
            !props.incrementOnWheel
              ? (event) => event.currentTarget.blur()
              : () => null
          }
          prefix={props.prefix}
          disabled={props.disabled}
          required={props.isRequired}
        />
      ) : props.inputType === 'password' ? (
        <Input.Password
          // keypress={props.keypress ? props.keypress : null}
          data-cy={props.cyId}
          onPressEnter={props.onPressEnter}
          onInput={props.onInput ? props.onInput : null}
          onBlur={props.onBlur ? props.onBlur : null}
          onFocus={props.onFocus ? props.onFocus : null}
          type={props.inputType || 'text'}
          name={props.name}
          value={props.value || props.defaultValue}
          defaultValue={props.defaultValue}
          placeholder={props.placeholder}
          onChange={props.onChange ? props.onChange : null}
          style={renderInputSize(inputSize)}
          autoFocus={props.autoFocus}
          maxLength={props.maxlength}
          readOnly={props.readOnly}
          ref={props.ref}
          iconRender={(visible) =>
            visible ? <MdVisibility /> : <MdVisibilityOff />
          }
          disabled={props.disabled}
          required={props.isRequired}
          prefix={props.prefix}
        />
      ) : props.inputType === 'cnic' ? (
        <StyledNumberInput
          data-cy={props.cyId}
          onPressEnter={props.onPressEnter}
          onInput={props.onInput ? props.onInput : null}
          onBlur={props.onBlur ? props.onBlur : null}
          onFocus={props.onFocus ? props.onFocus : null}
          type={'number'}
          name={props.name}
          value={props.value || props.defaultValue}
          defaultValue={props.defaultValue}
          placeholder={props.placeholder}
          onChange={props.onChange ? props.onChange : null}
          style={renderInputSize(inputSize)}
          autoFocus={props.autoFocus}
          maxLength={15}
          readOnly={props.readOnly}
          ref={props.ref}
          allowClear={props.allowClear}
          disabled={props.disabled}
          required={props.isRequired}
          prefix={props.prefix}
        />
      ) : props.inputType === 'areaCode' ? (
        <Input
          data-cy={props.cyId}
          onPressEnter={props.onPressEnter}
          onInput={props.onInput ? props.onInput : null}
          onBlur={props.onBlur ? props.onBlur : null}
          onFocus={props.onFocus ? props.onFocus : null}
          type={'number'}
          name={props.name}
          value={props.value || props.defaultValue}
          defaultValue={props.defaultValue}
          placeholder={props.placeholder}
          onChange={props.onChange ? props.onChange : null}
          style={renderInputSize(inputSize)}
          autoFocus={props.autoFocus}
          maxLength={5}
          readOnly={props.readOnly}
          ref={props.ref}
          allowClear={props.allowClear}
          disabled={props.disabled}
          required={props.isRequired}
          prefix={props.prefix}
        />
      ) : (
        <Input
          // keypress={props.keypress}
          data-cy={props.cyId}
          onPressEnter={props.onPressEnter}
          onInput={props.onInput ? props.onInput : null}
          onBlur={props.onBlur ? props.onBlur : null}
          onFocus={props.onFocus ? props.onFocus : null}
          type={props.inputType || 'text'}
          name={props.name}
          value={props.value || props.defaultValue}
          defaultValue={props.defaultValue}
          placeholder={props.placeholder}
          onChange={props.onChange ? props.onChange : null}
          style={renderInputSize(inputSize)}
          autoFocus={props.autoFocus}
          maxLength={props.maxlength}
          readOnly={props.readOnly}
          ref={props.ref}
          allowClear={props.allowClear}
          disabled={props.disabled}
          required={props.isRequired}
          prefix={props.prefix}
        />
      )}
      <span className={props.iconClasses}>{props.icon && props.icon}</span>
    </CustomInp>
  );
};
export default CommonInput;

const StyledNumberInput = styled(Input)`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
const CustomInp = styled.div`
  display: flex;
  position: relative;
  width: 100%;

  input,
  .roundInput {
    border-radius: 8px !important;
    font-weight: 400;
    transition: 0.3s all ease-in-out;
    width: 100%;

    &:hover {
      outline: none;
      transition: 0.3s all ease-in-out;
    }

    &:focus,
    &:active,
    &:visited {
      border-right-width: 1px !important;
      box-shadow: 0 3px 10px rgb(0 0 0 / 11%);
      outline: 0;
    }
  }

  .inputNumber {
    border: 0;
    width: 100%;

    input {
      height: 100%;
      position: absolute;
      top: 0;
      border: 1px solid #d9d9d9;
    }
  }

  input {
    &::placeholder {
      font-size: 14px;
    }
  }
`;

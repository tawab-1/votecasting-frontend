import {Card} from 'antd';
import styled from 'styled-components';

export const StyledCard = styled(Card)`
  cursor: ${(props) => (props.isClickAble ? 'pointer' : 'default')};
  width: ${(props) => (props.width ? props.width : '378px')};
  height: ${(props) => (props.height ? props.height : 'auto')};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : '12px'};
  background-color: ${(props) => (props.bgColor ? props.bgColor : '#fff')};
  display: ${(props) => (props.dFlex ? props.dFlex : 'flex')};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : 'column'};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'center'};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  gap: ${(props) => (props.gap ? props.gap : '10px')};
  flex-shrink: ${(props) => (props.flexShrink ? props.flexShrink : '0')};
  box-shadow: ${(props) =>
    props.BoxShadow ? props.BoxShadow : '0px 0px 15px 0px rgba(0, 0, 0, 0.1)'};
  padding: ${(props) => (props.padding ? props.padding : '17px 20px')};
  border: ${(props) => (props.border ? props.border : 'auto')};
  &:hover {
    box-shadow: ${(props) =>
    props.cardHoverShadow ? props.cardHoverShadow : ''};;
  }
  .ant-card-head {
    padding: ${(props) => (props.headPadding ? props.headPadding : '')};
    justify-content: flex-start;
    align-self: ${(props) => (props.alignHead ? props.alignHead : '')};
    border-bottom: ${(props) => (props.headBorder ? props.headBorder : '')};
    .ant-card-head-wrapper {
      .ant-card-head-title {
        color: ${(props) => (props.headColor ? props.headColor : '#010101')};
        font-family: Outfit;
        font-size: 2rem;
        font-style: normal;
        font-weight: 500;
        line-height: 1.2;
      }
    }
  }
  .ant-card-body {
    display: ${(props) => (props.bodyDisplay ? props.bodyDisplay : '')};
    flex-direction: ${(props) =>
      props.bodyDirection ? props.bodyDirection : ''};
    align-items: ${(props) =>
      props.alignBodyItems ? props.alignBodyItems : ''};
    justify-content: ${(props) =>
      props.justifyBodyContent ? props.justifyBodyContent : ''};
    flex-wrap: wrap;
    color: ${(props) => (props.color ? props.color : '#000000')};
    padding: 5px;
    text-align: ${(props) =>
      props.alignBodyText ? props.alignBodyText : 'center'};
    font-size: ${(props) => (props.fontSize ? props.fontSize : '')};
    font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '')};
    font-family: ${(props) =>
      props.fontFamily ? props.fontFamily : ''} !important;
    overflow-x: hidden;
    overflow-y: ${(props) => (props.bodyScroll ? props.bodyScroll : '')};
    &::before,
    &::after {
      display: none;
    }
  }
`;

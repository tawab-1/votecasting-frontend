import {Image} from 'antd';
import styled from 'styled-components';

export const CustomImage = styled(Image)`
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : '')};
  overflow: hidden !important;
`;

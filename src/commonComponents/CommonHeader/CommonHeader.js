import {Header} from 'antd/es/layout/layout';
import styled from 'styled-components';

export const CommonHeader = styled(Header)`
  min-height: 60px;
  background-color: rgb(31, 90, 50);
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    border: 1px solid transparent;
    background-color: white;
    transition: all 0.2s ease-in;

    :hover {
      background-color: #1f5a32;
      border-color: white;

      span {
        color: white;
      }
    }

    span {
      color: black;
    }
  }
`;

export const HeaderText = styled.div`
  color: white;
  font-family: 'Outfit';
  font-size: 2.5rem;
  font-weight: 500;
  text-align: center;
`;

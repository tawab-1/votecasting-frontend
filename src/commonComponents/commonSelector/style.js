import styled from "styled-components";
import {Select} from "antd";

export const StyledSelector = styled(Select)`
width: 100%;
  .ant-select-selector {
    overflow: hidden;
    min-height: 45px;
    border-radius: 8px;

    .ant-select-selection-overflow {
      .ant-select-selection-overflow-item {
        align-items: center;

        .ant-select-selection-item {
          height: 46px;
          display: flex;
          align-items: center;
        }
      }
    }
  }
`
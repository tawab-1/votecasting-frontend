import styled from "styled-components";
import {Select} from "antd";

export const StyledSelector = styled(Select)`
  .ant-select-selector {
    overflow: hidden;
    height: 52px;
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
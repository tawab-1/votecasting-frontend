import styled from 'styled-components';
import {Drawer} from 'antd';

export const StyledCommonDrawer = styled(Drawer)`
  border-radius: 12px 0px 0px 12px;
  .ant-drawer-wrapper-body {
    .ant-drawer-header {
      background: #1f5a32;
      .ant-drawer-header-title {
        .ant-drawer-title {
          color: white;
        }
      }
    }
  }
`;

import {Table} from 'antd';
import styled from 'styled-components';

function CommonTable(props) {
  return (
    <StyledCommonTable
      scroll={{y: props.tableHeight}}
      columns={props.columns}
      dataSource={props.dataSource}
      pagination={props.pagination}
      headerColor={props.headerColor}
    />
  );
}

export default CommonTable;

const StyledCommonTable = styled(Table)`
  .ant-table-header {
    .ant-table-thead {
      tr {
        th {
          background-color: ${(props) =>
            props.headerColor ? props.headerColor : ''} !important;
        }
      }
    }
  }
  td {
    color: black;
  }
  .ant-pagination {
    li {
      path {
        color: black;
      }
      a {
        color: black;
      }
    }
  }
`;

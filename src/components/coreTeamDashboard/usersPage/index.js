import React, {useState} from 'react';
import {StyledCard} from '../../../commonComponents/commonCard';
import CommonTable from '../../../commonComponents/commonTable';
import {Avatar, Col, List, Progress, Row, Space} from 'antd';
import styled from 'styled-components';
import {WelcomeDiv} from '../dashboard';
import CustomButton from '../../../commonComponents/commonButton';
import {CommonDrawer} from '../../../commonComponents/commonDrawer';
import UserForm from './userForm';

function Users() {
  const [open, setOpen] = useState(false);
  const addUserHandler = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const tableHeight = 274;
  const dataSource = [];
  for (let i = 1; i <= 50; i++) {
    dataSource.push({
      id: i,
      pollingStationName: `Polling station ${i}`,
      areaName: ['Bahawalpur', 'Multan', 'Faisalabad', 'Rawalpindi'][
        Math.floor(Math.random() * 4)
      ],
      teamName: ['Team Green', 'Team Blue', 'Team Red', 'Team Black'][
        Math.floor(Math.random() * 4)
      ],
      city: ['New York', 'London', 'Paris', 'Tokyo'][
        Math.floor(Math.random() * 4)
      ],
      progress: Math.floor(Math.random() * 100),
    });
  }
  const columns = [
    {
      title: 'Polling Station',
      dataIndex: 'pollingStationName',
    },
    {
      title: 'Area Name',
      dataIndex: 'areaName',
    },
    {
      title: 'Team Name',
      dataIndex: 'teamName',
    },
    {
      title: 'City',
      dataIndex: 'city',
    },
    {
      title: 'progress',
      dataIndex: 'progress',
      render: (record) => {
        return (
          <Progress
            percent={`${record < 100 ? record : record}`}
            strokeColor={`${
              record < 100 && record > 70
                ? '#1f5a32'
                : record < 70 && record > 40
                ? 'yellow'
                : record < 40 && record > 0
                ? 'red'
                : ''
            }`}
          />
        );
      },
    },
  ];
  const condidatesData = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
    {
      title: 'Ant Design Title 5',
    },
    {
      title: 'Ant Design Title 6',
    },
    {
      title: 'Ant Design Title 7',
    },
    {
      title: 'Ant Design Title 8',
    },
    {
      title: 'Ant Design Title 9',
    },
    {
      title: 'Ant Design Title 10',
    },
    {
      title: 'Ant Design Title 11',
    },
  ];
  return (
    <>
      <Row className='mt-3 justify-content-between'>
        <WelcomeDiv>
          <h1>
            Polling <span>Candidates.</span>
          </h1>
          <h2>Welcome to candidates</h2>
        </WelcomeDiv>
        <CustomButton
          color='white'
          backgroundColor='#1f5a32'
          onClick={addUserHandler}
          title={'Add User'}
        />
      </Row>
      <Row gutter={8}>
        <Col sm={24} className='d-flex justify-content-between pb-2'>
          <StyledCard width='49%'>
            Candidates <br />
            2000
          </StyledCard>
          <StyledCard width='49%' borderRadius='12px'>
            Parties <br />
            768
          </StyledCard>
        </Col>
      </Row>
      <StyledTaleRow className='mt-3 mb-3 p-1'>
        <Col
          sm={24}
          className='d-flex'
          style={{backgroundColor: 'white', padding: '2px 15px'}}
        >
          <h2 style={{color: 'black'}}>Total Polling Stations</h2>
        </Col>
        <Col sm={24}>
          <CommonTable
            dataSource={dataSource}
            columns={columns}
            pagination={false}
            tableHeight={tableHeight}
            headerColor={'white'}
          />
        </Col>
      </StyledTaleRow>
      <StyledTaleRow
        className='mt-3 mb-3'
        boxShadow='none'
        borderRadius='0px'
        backgroundColor='transparent'
      >
        <Col sm={24} className='d-flex justify-content-between'>
          <StyledCard
            alignItems='none'
            border='0px'
            width='60%'
            title='Condidates Position'
            alignHead='flex-start'
            headBorder='none'
            padding='8px 10px'
            headPadding='0px 0px'
            bodyScroll='auto'
            height='500px'
          >
            <StyledCondidateList
              itemLayout='horizontal'
              dataSource={condidatesData}
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                      />
                    }
                    title={<span>{item.title}</span>}
                    description='Party: PMLN,Voting Sign: Loin'
                  />
                  <span>Votes: 80,000</span>
                </List.Item>
              )}
            />
          </StyledCard>
          <StyledCard
            alignItems='none'
            border='0px'
            title='Party Statistics'
            alignHead='flex-start'
            headBorder='none'
            padding='8px 10px'
            headPadding='0px 0px'
            width='39%'
            height='500px'
          >
            <Space wrap>
              <StyledPartyProgressDiv>
                <Progress type='circle' percent={90} strokeColor={'#FFAB00'} />
                <p>PTI</p>
              </StyledPartyProgressDiv>
              <StyledPartyProgressDiv>
                <Progress type='circle' percent={47} strokeColor={'red'} />
                <p>PMLN</p>
              </StyledPartyProgressDiv>
              <StyledPartyProgressDiv>
                <Progress type='circle' percent={83} strokeColor={'green'} />
                <p>JUI</p>
              </StyledPartyProgressDiv>
              <StyledPartyProgressDiv>
                <Progress type='circle' percent={75} strokeColor={'purple'} />
                <p>PMLQ</p>
              </StyledPartyProgressDiv>
            </Space>
          </StyledCard>
        </Col>
      </StyledTaleRow>
      <CommonDrawer
        size='large'
        title='Add User'
        open={open}
        closable={false}
        onClose={onClose}
      >
        <UserForm />
      </CommonDrawer>
    </>
  );
}

export default Users;

const StyledTaleRow = styled(Row)`
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : '12px'};
  box-shadow: ${(props) =>
    props.boxShadow ? props.boxShadow : '0px 0px 15px 0px rgba(0, 0, 0, 0.1)'};
  padding: 4px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : 'white'};
`;

const StyledCondidateList = styled(List)`
  .ant-list-items {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .ant-list-item {
      border-radius: 38px;
      border: 1px solid #e3e3e3;
      padding: 6px 10px;

      .ant-list-item-meta {
        align-items: center;

        .ant-list-item-meta-avatar {
          border: 1px solid #e3e3e3;
          border-radius: 50px;

          .ant-avatar {
            img {
              width: 50px;
              height: 50px;
            }
          }
        }

        .ant-list-item-meta-content {
          .ant-list-item-meta-title {
            display: flex;

            span {
              color: #010101;
              font-family: Outfit;
              font-size: 18px;
              font-style: normal;
              font-weight: 500;
              line-height: normal;
              letter-spacing: 1px;
            }
          }

          .ant-list-item-meta-description {
            text-align: start;
          }
        }
      }

      span {
        color: #010101;
        font-family: 'Poppins' !important;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 1px;
      }
    }
  }
`;

const StyledPartyProgressDiv = styled.div`
  p {
    color: #525353;
    text-align: center;
    font-family: Outfit;
    font-size: 19px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: capitalize;
  }
`;

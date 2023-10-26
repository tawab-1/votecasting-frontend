import React from 'react';
import {StyledCard} from '../../../commonComponents/commonCard';
import GaugeChart from 'react-gauge-chart';
import CommonTable from '../../../commonComponents/commonTable';
import {Row, Col, Progress} from 'antd';
import styled from 'styled-components';

function Dashboard() {
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
  return (
    <>
      <Row className='mt-3'>
        <WelcomeDiv>
          <h1>
            Good morning <span>Admin.</span>
          </h1>
          <h2>Welcome to your dashboard</h2>
        </WelcomeDiv>
      </Row>
      <Row gutter={12}>
        <Col sm={18} className='d-flex flex-column justify-content-between'>
          <Row gutter={12}>
            <Col sm={8}>
              <StyledCard width='100%'>
                Total Polling Stations <br />
                2000
              </StyledCard>
            </Col>
            <Col sm={8}>
              <StyledCard width='100%' borderRadius='12px'>
                Polling Stations Process Completed <br />
                768
              </StyledCard>
            </Col>

            <Col sm={8}>
              <StyledCard width='100%' borderRadius='12px'>
                Polling Stations Process Pending <br />
                546
              </StyledCard>
            </Col>
          </Row>
          <Row gutter={12}>
            <Col sm={8}>
              <StyledCard width='100%' borderRadius='12px'>
                Total Casted Votes <br />
                657
              </StyledCard>
            </Col>
            <Col sm={8}>
              <StyledCard width='100%' borderRadius='12px'>
                Pending votes <br />
                548
              </StyledCard>
            </Col>
            <Col sm={8}>
              <StyledCard width='100%' borderRadius='12px'>
                Total Votes <br />
                7456
              </StyledCard>
            </Col>
          </Row>
        </Col>
        <Col sm={6}>
          <StyledCard
            width='100%'
            height='100%'
            borderRadius='12px'
            color='#1f5a32'
            fontSize='24px'
            fontWeight='600'
            fontFamily='Poppins'
            padding='0px 20px'
          >
            Over All Casted
            <StyledGaugeChart
              id='gauge-chart4'
              nrOfLevels={1}
              arcPadding={0.1}
              cornerRadius={3}
              percent={0.4}
              CircleColor={'#1f5a32'}
              needleColor={'#1f5a32'}
            />
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
    </>
  );
}

export default Dashboard;
export const WelcomeDiv = styled.div`
  color: black;
  h1 {
    color: #010101;
    font-size: 32px;
    font-family: 'Poppins' !important;
    font-weight: 600;
    letter-spacing: 1px;
    span {
      color: #1f5a32;
    }
  }
  h2 {
    color: #525353;
    font-size: 18px;
    font-family: 'Poppins' !important;
    font-weight: 500;
    letter-spacing: 1px;
  }
`;

const StyledGaugeChart = styled(GaugeChart)`
  svg {
    g {
      .doughnut {
        .arc {
          path {
            fill: ${(props) =>
              props.CircleColor ? props.CircleColor : ''} !important;
          }
        }
      }
      .needle {
        path {
          fill: ${(props) =>
            props.needleColor ? props.needleColor : ''} !important;
        }
        circle {
          fill: ${(props) =>
            props.needleColor ? props.needleColor : ''} !important;
        }
      }
    }
  }
`;

const StyledTaleRow = styled(Row)`
  border-radius: 12px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
  padding: 4px;
  background-color: white;
`;

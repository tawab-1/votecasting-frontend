import CustomButton from '../../commonComponents/commonButton';
import {CommonContentWrapper} from '../../commonComponents/CommonContentWrapper';
import {
  CommonHeader,
  HeaderText,
} from '../../commonComponents/CommonHeader/CommonHeader';
import {Col, Layout, Row} from 'antd';
import {Heading1} from '../../commonComponents/CustomHeadings';
import {StyledCard} from '../../commonComponents/commonCard';
import Imran_Khan from '../../assets/images/Imran_Khan.jpg';
import {CustomImage} from '../../commonComponents/CustomImage';

function PollingTeamDashboard() {
  return (
    <Layout style={{height: '100vh', overflow: 'hidden'}}>
      <CommonHeader>
        <HeaderText>Welcome to election commission of Pakistan</HeaderText>
        <CustomButton
          backgroundColor='white'
          onClick={() => {}}
          title={'Logout'}
        />
      </CommonHeader>
      <CommonContentWrapper>
        <Row>
          <Col span={24} className='my-3 p-2'>
            <Heading1 textAlign='center'>Pollings Station of Bughdad</Heading1>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Row>
              <Col span={24}>
                <h3 className='text-center'>Your area candidates</h3>
              </Col>
            </Row>
            <Row gutter={12} className='my-3'>
              <Col lg={8}>
                <StyledCard
                  dFlex='block'
                  width='100%'
                  alingBodyText='start'
                  bodyDisplay='flex'
                  alignBodyItems='center'
                  justifyBodyContent='space-between'
                >
                  <div>
                    <h6>
                      <strong>Name</strong> Imran Khan
                    </h6>
                    <h6>
                      <strong>Party Name</strong> PTI
                    </h6>
                    <h6>
                      <strong>Votes Gained</strong> 566
                    </h6>
                  </div>
                  <CustomImage
                    src={Imran_Khan}
                    width={120}
                    height={120}
                    borderRadius='12px'
                  />
                </StyledCard>
              </Col>
              <Col lg={8}>
                <StyledCard width='100%' alingBodyText='start'>
                  <h6>
                    <strong>Name</strong> Imran Khan
                  </h6>
                  <h6>
                    <strong>Party Name</strong> PTI
                  </h6>
                  <h6>
                    <strong>Votes Gained</strong> 566
                  </h6>
                </StyledCard>
              </Col>
              <Col lg={8}>
                <StyledCard width='100%' alingBodyText='start'>
                  <h6>
                    <strong>Name</strong> Imran Khan
                  </h6>
                  <h6>
                    <strong>Party Name</strong> PTI
                  </h6>
                  <h6>
                    <strong>Votes Gained</strong> 566
                  </h6>
                </StyledCard>
              </Col>
            </Row>
            <Row gutter={12} className='my-3'>
              <Col lg={8}>
                <StyledCard width='100%' alingBodyText='start'>
                  <h6>
                    <strong>Name</strong> Imran Khan
                  </h6>
                  <h6>
                    <strong>Party Name</strong> PTI
                  </h6>
                  <h6>
                    <strong>Votes Gained</strong> 566
                  </h6>
                </StyledCard>
              </Col>
              <Col lg={8}>
                <StyledCard width='100%' alingBodyText='start'>
                  <h6>
                    <strong>Name</strong> Imran Khan
                  </h6>
                  <h6>
                    <strong>Party Name</strong> PTI
                  </h6>
                  <h6>
                    <strong>Votes Gained</strong> 566
                  </h6>
                </StyledCard>
              </Col>
              <Col lg={8}>
                <StyledCard width='100%' alingBodyText='start'>
                  <h6>
                    <strong>Name</strong> Imran Khan
                  </h6>
                  <h6>
                    <strong>Party Name</strong> PTI
                  </h6>
                  <h6>
                    <strong>Votes Gained</strong> 566
                  </h6>
                </StyledCard>
              </Col>
            </Row>
          </Col>
        </Row>
      </CommonContentWrapper>
    </Layout>
  );
}

export default PollingTeamDashboard;

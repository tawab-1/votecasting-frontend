import { Heading1 } from '../../../commonComponents/CustomHeadings';
import { StyledCard } from '../../../commonComponents/commonCard';
import Imran_Khan from '../../../assets/images/Imran_Khan.jpg';
import { CustomImage } from '../../../commonComponents/CustomImage';
import { CommonContentWrapper } from '../../../commonComponents/CommonContentWrapper';
import { Col, Row } from 'antd';
import CustomButton from '../../../commonComponents/commonButton';
import { Link } from 'react-router-dom';
import { constRoute } from '../../../utils/route';

export const PollingDashboard = () => {
    return (
        <CommonContentWrapper>
            <Row>
                <Col span={24} className='my-1 p-2'>
                    <Heading1 textAlign='center'>Pollings Station of Bughdad</Heading1>
                </Col>
            </Row>
            <Row className='mb-2 d-flex justify-content-center'>
                <Col span={24}>
                    <Row>
                        <Col span={24}>
                            <h3 className='text-center'>Your area candidates</h3>
                        </Col>
                    </Row>
                    <Row gutter={12} className='my-2'>
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
                    </Row>
                    <Row gutter={12} className='my-2'>
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
                    </Row>
                </Col>
                <Link style={{textDecoration: 'none'}} to={constRoute.startPollingPage}>
                    <CustomButton
                        color='#1f5a32'
                        backgroundColor='white'
                        title='Start Voting Process'
                    />
                </Link>
            </Row>
        </CommonContentWrapper>
    )
}
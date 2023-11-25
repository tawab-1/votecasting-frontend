import { Heading1 } from '../../../commonComponents/CustomHeadings';
import { StyledCard } from '../../../commonComponents/commonCard';
import ImranKhan from '../../../assets/images/Imran_Khan.jpg';
import NawazSharif from '../../../assets/images/Nawaz_Sharif.jpg'
import MaulanaFazlUrRehman from '../../../assets/images/Maulana_Fazl_Ur_Rehman.jpg'
import BilawalBhutto from '../../../assets/images/Bilawal_Bhutto.jpg'
import { CustomImage } from '../../../commonComponents/CustomImage';
import { CommonContentWrapper } from '../../../commonComponents/CommonContentWrapper';
import { Col, Row } from 'antd';
import CustomButton from '../../../commonComponents/commonButton';
import { Link } from 'react-router-dom';
import { constRoute } from '../../../utils/route';
import styled from 'styled-components';

export const PollingDashboard = () => {
    const votingCandidates = [
        {
            candidateName: 'Imran Khan',
            partyName: 'PTI',
            votesGained: 3746,
            candidateImage: ImranKhan
        },
        {
            candidateName: 'Nawaz Sharif',
            partyName: 'PML(N)',
            votesGained: 3426,
            candidateImage: NawazSharif
        },
        {
            candidateName: 'M Fazl Ur Rehman',
            partyName: 'JUI(F)',
            votesGained: 3746,
            candidateImage: MaulanaFazlUrRehman
        },
        {
            candidateName: 'Bilawal Bhutto',
            partyName: 'PPP',
            votesGained: 3146,
            candidateImage: BilawalBhutto
        },
        {
            candidateName: 'Imran Khan',
            partyName: 'PTI',
            votesGained: 3746,
            candidateImage: ImranKhan
        },
        {
            candidateName: 'M Fazl Ur Rehman',
            partyName: 'JUI(F)',
            votesGained: 3746,
            candidateImage: MaulanaFazlUrRehman
        },
        {
            candidateName: 'Nawaz Sharif',
            partyName: 'PML(N)',
            votesGained: 3426,
            candidateImage: NawazSharif
        },
        {
            candidateName: 'Bilawal Bhutto',
            partyName: 'PPP',
            votesGained: 3146,
            candidateImage: BilawalBhutto
        },
        {
            candidateName: 'Imran Khan',
            partyName: 'PTI',
            votesGained: 3746,
            candidateImage: ImranKhan
        },
        {
            candidateName: 'Nawaz Sharif',
            partyName: 'PML(N)',
            votesGained: 3426,
            candidateImage: NawazSharif
        },
    ]
    return (
        <CommonContentWrapper>
            <Row>
                <Col span={24} className='mt-1 px-2 pt-2 pb-1'>
                    <Heading1 className='mb-0' textAlign='center'>Pollings Station of Bughdad</Heading1>
                </Col>
            </Row>
            <Row className='mb-2 d-flex justify-content-center'>
                <Col span={24}>
                    <Row>
                        <Col span={24}>
                            <h3 className='text-center'>Your area candidates</h3>
                        </Col>
                    </Row>
                    <CandidatesContainer gutter={[12, 12]} className='mb-2'>
                        {votingCandidates?.map(singlePerson => (
                             <Col xs={24} sm={12} lg={8} xl={6} xxl={4}>
                             <StyledCard
                                 dFlex='block'
                                 width='100%'
                                 alignBodyText='start'
                                 bodyDisplay='flex'
                                 alignBodyItems='center'
                                 justifyBodyContent='space-between'
                                 padding='15px 10px'
                             >
                                 <div>
                                     <h6>
                                         <strong>Name:</strong> {singlePerson.candidateName}
                                     </h6>
                                     <h6>
                                         <strong>Party Name:</strong> {singlePerson.partyName}
                                     </h6>
                                     <h6>
                                         <strong>Votes Gained:</strong> {singlePerson.votesGained}
                                     </h6>
                                 </div>
                                 <CustomImage
                                     src={singlePerson.candidateImage}
                                     width={120}
                                     height={120}
                                     borderRadius='12px'
                                 />
                             </StyledCard>
                         </Col>
                        ))}
                    </CandidatesContainer>
                </Col>
                <Link style={{textDecoration: 'none'}} to={constRoute.startPollingPage}>
                    <CustomButton
                        color='#fff'
                        backgroundColor='#1f5a32'
                        title='Start Voting Process'
                    />
                </Link>
            </Row>
        </CommonContentWrapper>
    )
}
const CandidatesContainer = styled(Row)`
max-height: 520px;
overflow: hidden;
overflow-y: scroll;
`;
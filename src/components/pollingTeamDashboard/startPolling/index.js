import styled from 'styled-components'
import { CommonContentWrapper } from '../../../commonComponents/CommonContentWrapper';
import { Col, Row, Skeleton } from 'antd';
import { StyledCard } from '../../../commonComponents/commonCard';
import { CustomImage } from '../../../commonComponents/CustomImage';
import ImranKhan from '../../../assets/images/Imran_Khan.jpg';
import { CommonModel } from '../../../commonComponents/commonModel';
import { useEffect, useState } from 'react';
import { notification } from '../../../utils/notifications'
import NawazSharif from '../../../assets/images/Nawaz_Sharif.jpg'
import MaulanaFazlUrRehman from '../../../assets/images/Maulana_Fazl_Ur_Rehman.jpg'
import BilawalBhutto from '../../../assets/images/Bilawal_Bhutto.jpg'
import CustomButton from '../../../commonComponents/commonButton';
import { useNavigate } from 'react-router-dom';
import { CommonScanner } from '../../../commonComponents/commonScanner';

export const StartPollingPage = () => {
    const [showCandidateModal, setShowCandidateModal] = useState(false);
    const [selectPerson, setSelectPerson] = useState(true);
    const navigation = useNavigate();
    const [selectedCandidate, setSelectedCandidate] = useState({
        candidateName: '',
        partyName: '',
        votesGained: null,
        candidateImage: null
    });
    const [loader, setLoader] = useState(false);



    const redirectBack = () => {
        setTimeout(() => {
            navigation(-1);
        }, 1000);
    }
    const submitVoteHandler = () => {
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
            setShowCandidateModal(!showCandidateModal);
            notification.success(`Vote casted to ${selectedCandidate.candidateName} successfully`);
            redirectBack();
        }, 2000)
    };
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
            candidateName: 'Maulana Fazl Ur Rehman',
            partyName: 'JUI(F)',
            votesGained: 3746,
            candidateImage: MaulanaFazlUrRehman
        },
        {
            candidateName: 'Bilawal Bhutto',
            partyName: 'PPP',
            votesGained: 3146,
            candidateImage: BilawalBhutto
        }
    ]
    useEffect(() => {
        setTimeout(() => {
            setSelectPerson(false);
        }, 5000);
    }, [])


    return (
        <CommonContentWrapper>
            {!selectPerson ?
                <Col span={24}>
                    <Row>
                        <Col span={24}>
                            <h3 className='text-center'>Your area candidates</h3>
                        </Col>
                    </Row>
                    <Row gutter={[12, 12]} className='my-2'>
                        {votingCandidates?.map(singlePerson => (
                            <Col lg={8}>
                                <StyledCard
                                    cardHoverShadow='0px 0px 15px 0px rgba(0, 0, 0, 0.3)'
                                    isClickAble={true}
                                    dFlex='block'
                                    width='100%'
                                    alignBodyText='start'
                                    bodyDisplay='flex'
                                    alignBodyItems='center'
                                    justifyBodyContent='space-between'
                                    onClick={() => {
                                        setSelectedCandidate(singlePerson);
                                        setShowCandidateModal(true)
                                    }}
                                >
                                    <div>
                                        <h6>
                                            <strong>Name</strong> {singlePerson.candidateName}
                                        </h6>
                                        <h6>
                                            <strong>Party Name</strong> {singlePerson.partyName}
                                        </h6>
                                        <h6>
                                            <strong>Votes Gained</strong> {singlePerson.votesGained}
                                        </h6>
                                    </div>
                                    <CustomImage
                                        src={singlePerson.candidateImage}
                                        preview={false}
                                        width={120}
                                        height={120}
                                        borderRadius='12px'
                                    />
                                </StyledCard>
                            </Col>
                        ))}
                    </Row>
                </Col> :
                <CommonModel
                    open={true}
                    children={<CommonScanner />}
                    displayOkButton={false}
                    displayCancelButton={false}
                />}
            <CommonModel
                open={showCandidateModal}
                children={
                    <SelectCandidateWrapper>
                        <Skeleton loading={loader}>
                            <Row className='image-row'>
                                <Col span={24} className='d-flex justify-content-center align-items-center'>
                                    <CustomImage
                                        src={selectedCandidate.candidateImage}
                                        width={120}
                                        height={120}
                                        borderRadius='12px'
                                    />
                                </Col>
                            </Row>
                            <Row className='info-row'>
                                <Col span={24}>
                                    <div className='d-flex justify-content-center gap-1'>
                                        <div className='label'>Name:</div>
                                        <div className='item'>{selectedCandidate.candidateName}</div>
                                    </div>
                                    <div className='d-flex justify-content-center gap-1'>
                                        <div className='label'>Party Name:</div>
                                        <div className='item'>{selectedCandidate.partyName}</div>
                                    </div>
                                </Col>
                            </Row>
                        </Skeleton>
                        <Row>
                            <Col span={24} className='d-flex justify-content-between'>
                                <CustomButton
                                    className='w-25'
                                    title='Cancel'
                                    htmlType='button'
                                    onClick={() => setShowCandidateModal(false)}
                                    backgroundColor='#1f5a32'
                                    color='#ffffff'
                                />
                                <CustomButton
                                    className='w-25'
                                    title='Confirm'
                                    htmlType='button'
                                    onClick={submitVoteHandler}
                                    backgroundColor='#1f5a32'
                                    color='#ffffff'
                                />
                            </Col>
                        </Row>
                    </SelectCandidateWrapper>}
                displayOkButton={false}
                displayCancelButton={false}
                onCancel={() => setShowCandidateModal(false)}
            />
        </CommonContentWrapper>
    )
}

const SelectCandidateWrapper = styled.div`
.info-row {
    padding-top: 20px;
    .ant-col {
        div {
            .label {
                font-size: 16px;
                font-weight: 600;
                font-family: 'Poppins' !important;
            }
            .item {
                font-size: 16px;
                font-weight: 400;
                font-family: 'Poppins' !important;
            }

        }
    }
}
`;

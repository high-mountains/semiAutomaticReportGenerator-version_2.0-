import React from 'react';
import PageWrapper from '../../../components/Pdf/PageWrapper';
import PageHeader from '../../../components/Pdf/PageHeader';
import PageNumber from '../../../components/Pdf/PageNumber';

const First = () => {
    return (
        <PageWrapper>
            <PageHeader
                subtitle={"Glossary"}
                mainTitle={"用語集"}
                subTitleStyle={{
                    marginBottom:"5rem",
                    fontSize: "14rem"
                }}
                mainTitleStyle={{
                    fontSize:"32rem",
                    marginTop: "5rem",
                    marginBottom: "0rem"
                }}
            />
            <p className='font'>
            グルタミン酸・・・
            </p>
            <PageNumber>
                159
            </PageNumber>
        </PageWrapper>
    );
};

export default First;
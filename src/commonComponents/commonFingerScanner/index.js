import React from "react";

export const CommonFingerScanner = () => {
    return (
        <>
            <FingerprintScannerWrapper>
                <Fingerprint>
                    <FingerprintIcon/>
                </Fingerprint>
                <Message>Scanning your fingerprint...</Message>
            </FingerprintScannerWrapper>
        </>
    )
}

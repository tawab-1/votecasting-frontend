import styled from 'styled-components';

export const CommonScanner = () => {
    return (
        <FingerScanner>
            <div class="scan">
                <div class="fingerprint"></div>
                <h3>Scanning...</h3>
            </div>
        </FingerScanner>)
}

const FingerScanner = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    background: whitesmoke;

.scan {
    position:relative;
    display:flex;
    flex-direction:column;
    align-items:center;
}

.scan .fingerprint {
    position:relative;
    width:150px;
    height:120px;
    background:url(https://www.pngall.com/wp-content/uploads/2016/06/Fingerprint-Free-Download-PNG.png);
    background-repeat: no-repeat;
    background-size:150px;
    &::before {
        content: '';
        position:absolute;
        top:0;
        left:0;
        width:150px;
        height:150px;
        background:url(https://www.pngall.com/wp-content/uploads/2016/06/Fingerprint-Free-Download-PNG.png);
        filter: invert(100%) sepia(60%) saturate(3000%) hue-rotate(85deg) brightness(95%) contrast(80%);
        background-size:150px;
        animation:animate 4s ease-in-out infinite;
    }

    &::after {
        content:'';
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:8px;
        background: #49af6a;
        border-radius:8px;
        filter: drop-shadow(0 0 20px #49af6a) drop-shadow(0 0 60px #49af6a);
        animation:moveLine 4s ease-in-out infinite;
    }

@keyframes animate {
    0%, 100% {
        height:0%;
    }
    
    50% {
        height:100%;
    }
}
@keyframes moveLine {
    0%, 100% {
        top:0%;
    }
    
    50% {
        top:100%;
    }
}
}

.scan h3 {
    text-transform:uppercase;
    font-size:2em;
    letter-spacing:2px;
    margin-top:20px;
    color: #49af6a;   
    filter:drop-shadow(0 0 20px #49af6a) drop-shadow(0 0 60px #49af6a);
    animation:animate_text 0.5s steps(1) infinite;
    @keyframes animate_text {
        0%, 100% {
            opacity:0;
        }
        
        50% {
            opacity:1;
        }
    }
}

`;
import styled from 'styled-components'


const FooterSection = styled.div`
background: #000;
color: #fff;
font-size: 23px; 
height: 60px;
display: flex;
justify-content: center;
align-items: center;
`;


const Footer = () => {
    return (
        
        <FooterSection>
            <p>Modelo criado com Next JS - React - Styled Componets </p>
        </FooterSection>    
        )
}

export default Footer

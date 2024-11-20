import styled from 'styled-components';


export const CardContainer = styled.div`
    height: 100vh;
    max-width: 100%;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;        
    border-radius: 25px;
`;

export const CardWrapper = styled.div`
    width: 375px;
    height: 667px;     
    overflow: hidden;
    background-color: ${({ bgColor }) => bgColor || '#fff'};
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

export const ImgSection = styled.section`
    height: 60%;

`;

export const CardImage = styled.img`
    padding: 30px;
    width: 100%;
    height: 100%;
    object-fit: fill;
    box-sizing: border-box;
`;

export const Content = styled.div`
    height: 41%;
    background-color: #fff;
    padding: 20px;       
    font-size: 15px;
`;


export const TitleSection = styled.div`
    text-align: start;
    padding: 0 10px 0 10px;
`;

export const Title = styled.h2`
    margin: 0;
`;

export const TextSection = styled.div`
    text-align: start;
    padding: 10px;
    margin-bottom: 25px;
`;

export const ButtonSection = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ButtonLeft = styled.div`
    display: flex;
    justify-content: flex-start;

`;

export const ButtonRigth = styled.div`
    display: flex;
    justify-content: flex-end;

`;

export const NextButton = styled.button`
    margin: 16px;    
    background-color: black;
    color: white;
    padding: 15px;
    border-radius: 35px;
    border: solid 1px black;
`;

// para el media la web de Mariam, inspeccionar en esa web, encajarlo en el tamaño que quiero y pegarlo en el @media de cada elemento

/*@media (max-width: 400px) { CardContainer { width: 100%; /* Ajusta el ancho al tamaño de la ventana gráfica height: auto; Permite que la altura se ajuste automáticamente */
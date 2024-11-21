import styled from 'styled-components';

export const IndicatorContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1px;
    align-items: center;
    margin: 16px;
`

export const Bola = styled.section`
    width: ${props => (props.$active ? '20px' : '10px')};
    height: 10px;
    border-radius: 5px;
    background-color: ${props => (props.$active ? 'black' : 'grey')}; 
`


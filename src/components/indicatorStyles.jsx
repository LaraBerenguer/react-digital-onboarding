import styled from 'styled-components';

export const IndicatorContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2px;
    align-items: center;
    margin: 16px;
`;

export const Bola = styled.button`
    width: ${props => (props.$active ? '20px' : '10px')};
    height: 10px;
    border-radius: 5px;
    border: solid 1px transparent;
    background-color: ${props => (props.$active ? 'black' : 'grey')}; 
    &:hover {
        cursor: pointer;
    }
`;


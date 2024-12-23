import styled from 'styled-components';

export const IndicatorContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2px;
    align-items: center;
    margin: 16px;
`;

export const Bola = styled.button`
    width: 10px;
    height: 10px;
    border-radius: 5px;
    border: solid 1px transparent;
    background-color: #808080; 
    &:hover {
        cursor: pointer;
    }
`;


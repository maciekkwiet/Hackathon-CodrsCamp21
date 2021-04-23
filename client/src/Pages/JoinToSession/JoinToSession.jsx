import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 5% 40% 10% 40% 5%;
    grid-template-rows: 20% 80% ;
`;

export const Header = styled.div`
    grid-column-start: 2;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 1;
    justify-self: center;
    padding: 40px;
`;

export const Left = styled.div`
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 2;
    justify-self: center;
    -webkit-transform:scale(1.4);
    transform:scale(1.4);
    margin-top: 60px;
`;

export const Right = styled.div`
    grid-column-start: 4;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 2;
    justify-self: center;
    -webkit-transform:scale(1.4);
    transform:scale(1.4);
    margin-top: 60px;
`;



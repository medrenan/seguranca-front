import styled from "styled-components"

export const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    background: #2c302d;
`;

export const Card = styled.div`
    width: 60%;
    height: 80%;
    max-height: 300px;
    padding: auto;
    text-align: center;
    background: #242625;
    border-radius: 10px;
    box-shadow: 25px 25px 50px #1b1c1b, -25px -25px 50px #2d302f;
`;

export const CardContainer = styled.div`
    display: grid;
    width:100%;
    height:100%;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
    color: white;
`;

export const CardContent = styled.div`
    width: 90%;
    height: 95%;
    background: #191a19;
    margin: 10px auto;
    border-radius: 5px;
    padding: 20px;
    cursor: pointer;
    box-shadow:  16px 16px 44px #0a0a0a, 
             -16px -16px 44px #282a28;
    transition: 0.3s all ease-in-out;
    &:hover{
      margin-top:-10px;
    }
`;

export const CardHeader = styled.h3`
    text-transform: uppercase;
    font-size: 20px;
    margin: 40px auto;
`;

export const CardButton = styled.button`
    padding: 10px;
    border-radius: 50px;
    background: #1f75c4;
    color: white;
    font-weight: bold;
    cursor: pointer;
    border: none;
    margin: 50px auto;
`;

export const CardInfo = styled.p`
`;
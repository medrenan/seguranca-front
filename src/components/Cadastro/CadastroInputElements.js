import styled from "styled-components";

export const InputContainer = styled.div`
    display: grid;
    place-items: center;
    min-height: 100vh;
    color: white;
`;

export const StyledInput = styled.input`
    width: 100%;
    outline: none;
    padding: 8px 16px;
    border: 1px solid #e0e6e8;
    border-radius: 4px;
    font-size: lrem;
    color: #888888;
    transitionL box-shadow 0.2s;
    &::placeholder {
        color: #dedede;
    }
    &:focus {
    box-shadow: 0 0 0 2px rgb(169, 172, 255, 0.5);
`;

export const StyledInputGroup = styled.div`
    margin-bottom: 24px;
    text-align: left;
    label {
        display: inline-block;
        margin-bottom: 0.5rem;
        color: #888888;
    }
`;

export const StyledEntryCard = styled.div`
    width: 100%;
    max-width: 450px;
    border-radius: Spx;
    padding: 50px;
    margin-bottom: 40px;
    background-color: #ffffff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px © rgba(0, 0, 0, 0.06);
    text-align: center;
    h2 {
        font-weight: 500;
        margin-bottom: 50px;
    }
    span {
        display: block;
        margin-top: 40px;
        color: #888888;
        font-size: 14px;
    }
    a {
        margin-left: 4px;
        color: #2f8bfd;
    }
`;
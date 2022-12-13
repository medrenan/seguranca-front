import React from "react";
import { StyledButton } from "./ButtonElements";

export default function Button({nome, onClick}) {
    return (
        <>
            <StyledButton onClick={onClick}>{nome}</StyledButton>
        </>
    )
}
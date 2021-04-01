import { React, useContext } from "react";
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function Signup(props) {
    const { switchToSignin } = useContext(AccountContext);

    return(
        <BoxContainer>
            <FormContainer>
                <Input type="text" placeholder="Full Name" />
                <Marginer direction="vertical" margin={5} />
                <Input type="email" placeholder="Email" />
                <Marginer direction="vertical" margin={5} />
                <Input type="password" placeholder="Password" />
                <Marginer direction="vertical" margin={5} />
                <Input type="password" placeholder="Confirm password" />
                <Marginer direction="vertical" margin={10} />
                <SubmitButton type="submit">Signup</SubmitButton>
                <Marginer direction="vertical" margin={10} />
                <MutedLink href="#">Already have an accaunt?  
                    <BoldLink onClick={switchToSignin}> Sign in</BoldLink>
                </MutedLink>
            </FormContainer>
        </BoxContainer>
    );
}
import { React, useContext } from "react";
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function Login(props) {
    const { switchToSignup } = useContext(AccountContext);

    return(
        <BoxContainer>
            <FormContainer>
                <Input type="email" placeholder="Email" />
                <Marginer direction="vertical" margin={10} />
                <Input type="password" placeholder="Password" />
                <Marginer direction="vertical" margin={10} />
                <MutedLink href="#">Forget your password</MutedLink>
                <Marginer direction="vertical" margin={10} />
                <SubmitButton type="submit">Sign in</SubmitButton>
                <Marginer direction="vertical" margin={75} />
                <MutedLink href="#">Don't have an accaunt?  
                    <BoldLink onClick={switchToSignup}> Sign up</BoldLink>
                </MutedLink>
            </FormContainer>
        </BoxContainer>
    );
}
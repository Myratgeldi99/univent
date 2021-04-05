import { React, useContext } from "react";
import { BoldLink, BoxContainer, FieldContainer, FieldError, FormContainer, Input, MutedLink, SubmitButton } from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
});

export function Login(props) {
    const { switchToSignup } = useContext(AccountContext);

    const onSubmit = async (values) => {
        alert(JSON.stringify(values))
    }

    const formik = useFormik({ initialValues: { email:"", password:"" },
        validateOnBlur: true,
        onSubmit,
        validationSchema: validationSchema,
    });

    console.log("Error: ", formik.errors);

    return(
        <BoxContainer>
            <FormContainer onSubmit={formik.handleSubmit}>
                <FieldContainer>
                    <Input name="email" type="email" placeholder="Email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    <FieldError>{formik.touched.email && formik.errors.email ? formik.errors.email : ""}</FieldError>
                </FieldContainer>
                <Marginer direction="vertical" margin={10} />
                <FieldContainer>
                    <Input name="password" type="password" placeholder="Password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    <FieldError>{formik.touched.password && formik.errors.password ? formik.errors.password : ""}</FieldError>
                </FieldContainer>
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
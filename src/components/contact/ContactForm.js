import  React, {useState} from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import ErrorMessage from "./ErrorMessage";
import ValidMessage from "./ValidMessage";

const regExPhone = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const schema = yup.object().shape({
    firstName: yup
        .string()
        .min(2, "Firstname must be minimum 2 characters")
        .required("First name is required"),
    lastName: yup
        .string()
        .min(2, "Lastname must be minimum 2 characters")
        .required("Last name is required"),
    telephone: yup
        .string()
        .matches(regExPhone, "Phone number is not valid")
        .required("Telephone number is required"),
	email: yup
		.string()
		.email("Please enter a valid email")
		.required("Email is required")
});

function ContactForm(){
    const [validated, setValidated] = useState(false);
	const { register, handleSubmit, errors} = useForm({
        validationSchema: schema    
    });
    
    

	function onSubmit(data) {
        
        console.log("data", data);
        // SET VALIDATED TO TRUE
        setValidated(true);
        
        
        
	}
    // REMOVE LATER
    console.log(validated);

	return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            {validated.valueOf(true) && <ValidMessage message="Form is sent"></ValidMessage>}
            <Form.Row>
                
                    <Form.Group as={Col} md="6">
                        <Form.Label>FirstName</Form.Label>
                        <Form.Control name="firstName" placeholder="Enter your firstname" ref={register} />
                        {errors.firstName && <ErrorMessage>{errors.firstName.message}</ErrorMessage>}
                    </Form.Group>
                


                    <Form.Group as={Col} md="6">
                        <Form.Label>LastName</Form.Label>
                        <Form.Control name="lastName" placeholder="Enter your lastname" ref={register} />
                        {errors.lastName && <ErrorMessage>{errors.lastName.message}</ErrorMessage>}
                    </Form.Group>
            
                    <Form.Group as={Col} md="12">
                        <Form.Label>Telephone number</Form.Label>
                        <Form.Control name="telephone" placeholder="Enter your telephone number" ref={register} />
                        {errors.telephone && <ErrorMessage>{errors.telephone.message}</ErrorMessage>}
                    </Form.Group>

                    <Form.Group as={Col} md="12">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" placeholder="Enter your email" ref={register} />
                        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                    </Form.Group>
                    <Button className="btn btn-warning" type="submit">Submit</Button>
            </Form.Row>
            
        </Form>
	);
}

export default ContactForm;
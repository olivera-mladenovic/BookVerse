import React from "react";
import { Field, Form, Formik } from "formik";
import { Button, Header, Segment } from "semantic-ui-react";
import { useStore } from "../../app/stores";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

export default observer(function LoginScreen() {
    const { accountStore } = useStore();
    const navigate =useNavigate();
    return (
        <Formik initialValues={{email: '', password: ''}} onSubmit={async (values) => {
            await accountStore.login(values);
            navigate('/events')
        }}>
           {({ handleSubmit }) => (
                <Segment textAlign="center" style={{width: '30%', marginTop: '20%', marginLeft: '30%'}}>
                    <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                    <Header as='h2' content='Login to BookVerse' color="brown" textAlign="center" />
                    <div>
                        <Field placeholder="Email" name='email' style={{marginBottom: '1em'}}/>
                    </div>

                    <div>
                        <Field placeholder="Password" name='password' type='password' style={{marginBottom: '1em'}}/>
                    </div>
                    
                    <Button fluid content='Login' type="submit" color="brown" size="big"/>
                    </Form>
                </Segment>
            )}

        </Formik>
    )
})
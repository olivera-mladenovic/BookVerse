import React from "react";

import { Field, Form, Formik } from "formik";
import { Button, Header, Segment } from "semantic-ui-react";
import { useStore } from "../../app/stores";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

export default observer(function RegisterScreen() {
    const { accountStore } = useStore();
    const navigate = useNavigate();
    return (
        <Formik initialValues={{email: '', password: '', username: '', displayName: '', about: ''}} onSubmit={async (values) => {
            await accountStore.register(values);
            navigate('/events')
        }}>
           {({ handleSubmit }) => (
                <Segment textAlign="center" style={{width: '30%', marginTop: '20%', marginLeft: '30%'}}>
                    <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                    <Header as='h2' content='Register to BookVerse' color="brown" textAlign="center" />
                    <div>
                        <Field placeholder="Email" name='email' style={{marginBottom: '1em'}}/>
                    </div>

                    <div>
                        <Field placeholder="Password" name='password' type='password' style={{marginBottom: '1em'}}/>
                    </div>

                    <div>
                        <Field placeholder="Username" name='username' style={{marginBottom: '1em'}}/>
                    </div>

                    <div>
                        <Field placeholder="Display name" name='displayName' style={{marginBottom: '1em'}}/>
                    </div>

                    <div>
                        <Field type='text' placeholder="About" name='about' style={{marginBottom: '1em'}}/>
                    </div>
                    
                    
                    <Button fluid content='Register' type="submit" color="brown" size="big"/>
                    </Form>
                </Segment>
            )}

        </Formik>
    )
})
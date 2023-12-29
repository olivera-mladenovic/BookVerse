import React from "react";
import { Field,  Formik, Form,  useField } from "formik";
import { Button, Header, Segment, Label, Form as SemanticForm } from "semantic-ui-react";
import { useStore } from "../../../app/stores";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import DatePicker, {ReactDatePickerProps} from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default observer(function CreateEventScreen() {
    const { eventStore } = useStore();
    const navigate =useNavigate();
    return (
        <Formik initialValues={{name: '', description: '', date: '', city: '', venue: '', capacity: 0, socialMediaLink: '', type: '', guests: [], id: '',}} onSubmit={async (values) => {
            await eventStore.createEvent(values);
            navigate('/events')
        }}>
           {({ handleSubmit }) => (
                <Segment textAlign="center" style={{width: '30%', marginTop: '20%', marginLeft: '30%'}}>
                    <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                    <Header as='h2' content='Create new book event' color="brown" textAlign="center" />
                    <div>
                        <Field placeholder="Name" name='name' style={{marginBottom: '1em'}}/>
                    </div>

                    <div>
                        <Field placeholder="Description" name='description' style={{marginBottom: '1em'}}/>
                    </div>

                    
                        <CustomDateInput name='date' placeholderText='Date' showTimeSelect timeCaption='time' dateFormat='MMMM d, yyyy h:mm aa'/>
                   

                    <div>
                        <Field placeholder="City" name='city' style={{marginBottom: '1em'}}/>
                    </div>

                    <div>
                        <Field placeholder="Venue" name='venue' style={{marginBottom: '1em'}}/>
                    </div>

                    <div>
                        <Field placeholder="Capacity" name='capacity' style={{marginBottom: '1em'}}/>
                    </div>

                    <div>
                        <Field placeholder="Social media link" name='socialMediaLink' style={{marginBottom: '1em'}}/>
                    </div>

                    <div>
                        <Field placeholder="Type" name='type' style={{marginBottom: '1em'}}/>
                    </div>
                    
                    <Button fluid content='Create' type="submit" color="brown" size="big"/>
                    </Form>
                </Segment>
            )}

        </Formik>
    )
})

function CustomDateInput(props: Partial<ReactDatePickerProps>) {
    const [field, meta, helpers] = useField(props.name!);
    return (
            <SemanticForm.Field error={meta.touched && !!meta.error}>
            <DatePicker
                {...field}
                {...props}
                selected={(field.value && new Date(field.value)) || null}
                onChange={value => helpers.setValue(value)}
            />
            {meta.touched && meta.error ? (
                <Label basic color='red'>{meta.error}</Label>
            ) : null}
        </SemanticForm.Field>     
    )
}
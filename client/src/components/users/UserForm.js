import React, { Component } from 'react'
import { Field, reduxForm, FieldArray } from 'redux-form'
import Multiselect from 'react-widgets/lib/Multiselect'
import 'react-widgets/dist/css/react-widgets.css'

class UserForm extends Component {
    renderInput = (formProps) => {
        const className = `field ${formProps.meta.error && formProps.meta.touched ?
            'error' : ''}`
        return (
            <div className={className}>
                <label>{formProps.label}</label>
                <input {...formProps.input} type={formProps.type} max={formProps.max} autoComplete='off'
                    label={formProps.label} id={formProps.id} placeholder={formProps.placeholder}
                    checked={formProps.input.value} value={formProps.input.value} />
                {formProps.meta.touched &&
                    (formProps.meta.error && <span>{formProps.meta.error}</span>)}
            </div>
        )
    }

    renderMultiselect = ({ input, ...rest }) => {
        return (<Multiselect {...input}
            onBlur={() => input.onBlur()}
            value={input.value || []}
            {...rest} />)
    }

    renderHobbies = ({ fields, meta: { error } }) => {
        return (
            <ul>
                <li>
                    <button onClick={() => fields.push()} className='ui button primary'>Add Hobby</button>
                </li>
                {fields.map((hobby, index) =>
                    <li key={index}>
                        <button
                            title="Remove Hobby"
                            onClick={() => fields.remove(index)}
                            className='ui button negative'>
                            <i class="trash icon"></i>
                        </button>
                        <Field
                            name={hobby}
                            type="text"
                            component={this.renderInput}
                            label={`Hobby #${index + 1}`} />
                    </li>
                )}
                {error && <li className="error">{error}</li>}
            </ul>
        )
    }

    onSubmit = (formValues) => {
        console.log('formValues', formValues)
        this.props.onSubmit(formValues)
    }


    render() {
        const { handleSubmit } = this.props
        const current = new Date().toISOString().split("T")[0]
        const colleges = ['Pune University', 'S.P.College', 'F.C College']
        return (
            <div className='container'>
                <form onSubmit={handleSubmit(this.onSubmit)}
                    className='ui form error'>
                    <div className='row mb-3'>
                        <label className='col-sm-2 col-form-label'>FullName</label>
                        <div className='col-sm-10'>
                            <Field name='fullname' component={this.renderInput}
                                type='text' className='form-control' placeholder='Full Name'
                                validate={[required, minLength3]} />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label className='col-sm-2 col-form-label'>Address</label>
                        <div className='col-sm-10'>
                            <Field name='address' component={this.renderInput}
                                type='text' placeholder='Address'
                                validate={[required, maxLength25]} />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label className='col-sm-2 col-form-label'>BirthDate</label>
                        <div className='col-sm-10'>
                            <Field
                                name='birthdate'
                                type='date'
                                max={current}
                                component={this.renderInput}
                                validate={required}
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label className='col-sm-2 col-form-label'>Select Your Gender</label>
                        <div className='col-sm-1 ui radio'>
                            <div className='form-check'>
                                <label className='form-check-label'>Male</label>
                                <Field name='gender' component='input' type='radio' value='male'
                                    className='ui input' />{' '}
                            </div>
                            <div className='form-check'>
                                <label className='form-check-label'>Female</label>
                                <Field name='gender' component='input' type='radio' value='female'
                                />{' '}
                            </div>
                            <div className='form-check'>
                                <label className='form-check-label'>Other</label>
                                <Field name='gender' component='input' type='radio' value='other'
                                />{' '}
                            </div>
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label className='col-sm-2 col-form-label'>Select Your Hobbies</label>
                        <div className='col-sm-10'>
                            <Field
                                name='hobbies'
                                component={this.renderMultiselect}
                                data={['Travelling', 'Gaming', 'Reading', 'Drawing']} />
                            <FieldArray name='hobbies' component={this.renderHobbies} />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label className='col-sm-2 col-form-label'>Select College</label>
                        <div className='col-sm-10'>
                            <Field name='college' component='select' placeholder='Select College' validate={required}>
                                <option value="">Select a college</option>
                                {colleges.map(collegeOption => (
                                    <option value={collegeOption} key={collegeOption}>
                                        {collegeOption}
                                    </option>
                                ))}
                            </Field>
                        </div>
                    </div>

                    <button type='submit' className='ui button'>Submit</button>
                </form>
            </div>

        )
    }
}


const required = value => (value || typeof value === 'number' ? undefined : 'Required')
const maxLength = max => value => value && value.length > max ? `Must be ${max} characters 
or less`: undefined
const maxLength25 = maxLength(25)
const minLength = min => value => value && value.length < min ? `Must be ${min} characters or 
more`: undefined
const minLength3 = minLength(3)




export default reduxForm({
    form: 'userform'
})(UserForm)



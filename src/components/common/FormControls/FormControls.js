import React from 'react';
import styles from './FormControls.module.css'


const FormContainer = ({input, meta, ...props}) => {

	const hasError = meta.touched && meta.error;
	
	return (
		<div className={hasError ? styles.error : ''}>
			{props.children}
			{hasError && <span>{meta.error}</span>}
		</div>
	)
}


export const Textarea = (props)=> {
	const {input, meta, ...restProps} = props;
	return <FormContainer {...props}><textarea {...input} {...restProps} /></FormContainer>
}

export const Input = (props)=> {
	const {input, meta, ...restProps} = props;
	return <FormContainer {...props}><input {...input} {...restProps} /></FormContainer>
}
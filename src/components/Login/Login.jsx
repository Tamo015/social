import React from 'react';
import {Field,reduxForm}  from 'redux-form';
import {login} from '../../redux/reducers/authReducer';
import {required, MaxLengthMessage} from '../../utils/validators/validators';
import {Input} from '../common/FormControls/FormControls';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import styles from '../common/FormControls/FormControls.module.css';

const maxLengthLogin = MaxLengthMessage(30);
const maxLengthPassword = MaxLengthMessage(15);

const LoginForm = (props) => {

  return (
	<form onSubmit={props.handleSubmit}>
		<div>
			<Field component={Input} validate={[required, maxLengthLogin]} name={'email'} placeholder={'Email'} />
		</div>
		<div>
			<Field type={'password'} validate={[required, maxLengthPassword]} component={Input} name={'password'} placeholder={'password'} />
		</div>
		<div>
			<Field type={'checkbox'} component={Input} name={'rememberMe'}/>
		</div>
		{props.error && 
			<div className={styles.invalideError}>
				{props.error}
			</div>
		}
		<div>
			<button>Login</button>
		</div>
	</form>
  );
}

const LoginReduxForm = reduxForm({form:'authorizationForm'})(LoginForm);

let mapStateToProps = (state)=> {
	return {
		isAuth: state.auth.isAuth
	}
}

const Login = (props) => {
  const onSubmit = (formData)=> {
	 props.login(formData.email, formData.password, formData.rememberMe);
  }
   if(props.isAuth) return <Redirect to={'/profile'} />
  return (
    <div>
		<h2>Login</h2>
		<LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
}

export default connect(mapStateToProps, {login})(Login);

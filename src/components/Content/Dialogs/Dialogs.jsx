import React from 'react';
import classes from './Dialogs.module.css';
import {Field, reduxForm} from 'redux-form';
import {required, MaxLengthMessage} from '../../../utils/validators/validators';
import {Textarea} from '../../common/FormControls/FormControls';

const maxLengthMessage50 = MaxLengthMessage(50);

const DialogsFormRedux = (props)=> {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field autoFocus={true} component={Textarea} validate={[required, maxLengthMessage50]} name={'massageField'} placeholder={'Enter message'} />
			<button>Отправить</button>
		</form>
	)
}


const ReduxFormContainer = reduxForm({form:'dialogsForm'})(DialogsFormRedux);


const Dialogs = (props) => {
  const onSubmit = (formData)=> {
	  props.sendMessage(formData.massageField);
  }
  
  const messages = props.message.map(elem => {
		
		return (
			<div>
				{elem}
				
			(<span>{props.date.getHours() + ':' + props.date.getMinutes()}</span>)
			</div>
			
		)
  });
  
  return (
    <div className={classes.dialogs_block}>
		<div className={classes.dialogs_block_container}>
			<div className={classes.dialogs_block_textBlock}>
				<ReduxFormContainer onSubmit={onSubmit}/>
			</div>
		</div>
		
		<div className={classes.dialogs_block_container}>
			<div>{messages}</div>
		</div>
    </div>
  );
}

export default Dialogs;

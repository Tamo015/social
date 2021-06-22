export const required = (value)=> {
	if(value) return undefined;
	
	return 'Введите сообщение';
}

export const MaxLengthMessage = (maxLength)=>(value)=> {

	if(value.length > maxLength) return `Длина сообщения должна быть меньше ${maxLength} символов`;
	
	return undefined
}
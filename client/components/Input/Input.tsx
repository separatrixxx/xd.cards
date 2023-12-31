import { InputProps } from './Input.props';
import styles from './Input.module.css';
import cn from 'classnames';


export const Input = ({ text, value, error, onChange }: InputProps): JSX.Element => {
	return <input className={cn(styles.input, {
		[styles.error_input]: error,
	})}
		placeholder={text}
		value={value}
		onChange={onChange}
		type="text"
		name="text"
		aria-label="text" />;
};
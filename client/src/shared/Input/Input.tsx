import cn from 'classnames'
import styles from './Input.module.scss'
import {ChangeEvent, InputHTMLAttributes, memo} from "react";
import SearchIcon from '../../assets/icons/search.svg'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string,
    value?: string,
    onChange?: (value: string) => void
}

const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        ...otherProps
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={cn(styles.container, 'relative')}>
            <input
                type={type}
                value={value}
                onChange={event => onChangeHandler(event)}
                className={className}
                {...otherProps}
            />
            <img
                src={SearchIcon}
                alt=""
                className="absolute top-4 right-6 text-2xl"
            />
        </div>
    );
})

export default Input;

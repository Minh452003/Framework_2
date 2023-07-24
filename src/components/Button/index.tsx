import '@/components/Button/Button.module.css'
import React from 'react';
type Props = {
    children?: React.ReactNode,
    icon?: React.ReactNode,
    type?: 'primary' | 'danger' | 'default'
    onHandleClick?: () => void;
}

const Button = ({ icon, type, children, onHandleClick }: Props) => {
    return (

        <button className={`border p-2 rounded border-gray-500
        ${type == 'primary' ? "text-white bg-blue-500 hover:bg-blue-800" : ""}
        ${type == 'danger' ? "text-white bg-red-500 hover:bg-red-800" : ""}
        `} onClick={onHandleClick} type='submit'>
            {icon && icon}
            {children}
        </button>
    )
}

export default Button
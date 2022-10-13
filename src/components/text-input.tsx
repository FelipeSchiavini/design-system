import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { Children, InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement>{

}

export interface TextInputRootProps {
    children: ReactNode
}

const TextInputRoot: React.FC<TextInputRootProps> = ({children}) => {
    return (
        <div className={clsx(
            'flex items-center gap-3 py-4 px-3 h-12 rounded  bg-gray-800 w-full focus-within:ring-2 ring-cyan-300'
        )}>        
            {children}
        </div>

    )
}

TextInputRoot.displayName = 'TextInput.Root'


export interface TextInputIcon {
    asChild?: boolean;
    children: ReactNode
}

const TextInputIcon: React.FC<TextInputIcon> = ({children}) => {
    return(
    <Slot className='w-6 h-6 text-gray-400'>
        {children}
    </Slot>
    )
}

TextInputIcon.displayName = 'TextInput.Icon'


const TextInputInput: React.FC<TextInputInputProps> = (props) => {
    return (
            <input {...props} className='bg-transparent flex-1  text-gray-100 text-xs placeholder:text-gray-400 outline-none' />       
    )
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
    Input: TextInputInput,
    Root: TextInputRoot,
    Icon: TextInputIcon
}
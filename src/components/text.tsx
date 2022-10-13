import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react';

export interface TextProps {
    children: ReactNode;
    size?: 'sm' | 'md' | "lg";
    asChild?: boolean; 
}


export const Text = ({size = 'md', children, asChild}: TextProps) => {
    const Comp = asChild ? Slot : 'span'

    return <Comp className={clsx('text-gray-100 font-sans', 
        {
            'text-xs': size === 'sm',
            'text-small': size === 'md',
            'text-medium': size === 'lg'
        }
    )}>{children}</Comp>
}


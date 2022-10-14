import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react';

export interface TextProps {
    children: ReactNode;
    size?: 'sm' | 'md' | "lg";
    asChild?: boolean;
    className?: string;
}


export const Text = ({size = 'md', children, asChild, className}: TextProps) => {
    const Comp = asChild ? Slot : 'span'

    return <Comp className={clsx('text-gray-100 font-sans', 
        {
            'text-xs': size === 'sm',
            'text-small': size === 'md',
            'text-medium': size === 'lg'
        },
        className
    )}>{children}</Comp>
}


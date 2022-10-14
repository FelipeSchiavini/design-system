import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react';

export interface HeadingProps {
    children: ReactNode;
    size?: 'sm' | 'md' | "lg";
    asChild?: boolean;
    className?: string;
}


export const Heading = ({size = 'md', children, asChild, className}: HeadingProps) => {
    const Comp = asChild ? Slot : 'span'

    return <h2 className={clsx('text-gray-100 font-bold font-sans', 
        {
            'text-lg': size === 'sm',
            'text-xl': size === 'md',
            'text-2xl': size === 'lg'
        },
        className
    )}>{children}</h2>
}


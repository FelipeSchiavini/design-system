import { Heading, HeadingProps } from './heading'
import { Meta, StoryObj} from '@storybook/react'

export default {
    title: 'Componentes/Heading',
    component: Heading,
    args:{
        children: 'Lorem ipsum.',
        size: 'md'
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control:{
                type: 'inline-radio'
            }
        }
    }
} as Meta<HeadingProps>;

export const Default: StoryObj = {}

export const Small: StoryObj<HeadingProps> = {
    args: {
        size: 'sm'
    }
}

export const Medium: StoryObj<HeadingProps> = {
    args: {
        size: 'md'
    }
}

export const Large: StoryObj<HeadingProps> = {
    args: {
        size: 'lg'
    }
}

export const CustomComponents: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <h1>
                Testando Slot Component
            </h1>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
        asChild: {
          table: {
              disable: true,
          }
        }
    }
}
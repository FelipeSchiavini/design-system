import { Text, TextProps } from './text'
import { Meta, StoryObj} from '@storybook/react'

export default {
    title: 'Componentes/Text',
    component: Text,
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
} as Meta<TextProps>;

export const Default: StoryObj = {}

export const Small: StoryObj<TextProps> = {
    args: {
        size: 'sm'
    }
}

export const Medium: StoryObj<TextProps> = {
    args: {
        size: 'md'
    }
}

export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg'
    }
}

export const CustomComponents: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <p>
                Testando Slot Component
            </p>
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
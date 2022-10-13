import { Button, ButtonProps } from './button'
import { Meta, StoryObj} from '@storybook/react'

export default {
    title: 'Componentes/Button',
    component: Button,
    args:{
        children: 'Create account',
    },
    argTypes: {
    }
} as Meta<ButtonProps>;

export const Default: StoryObj = {}

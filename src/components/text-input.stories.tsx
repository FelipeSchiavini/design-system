import { TextInput, TextInputInputProps, TextInputRootProps } from './text-input'
import { Meta, StoryObj} from '@storybook/react'
import { Envelope } from 'phosphor-react'

export default {
    title: 'Componentes/TextInput',
    component: TextInput.Root,
    args: {
        children:[
                <TextInput.Icon>
                    <Envelope/>
                </TextInput.Icon>,
                <TextInput.Input placeholder='Type your e-mail adress'/>
        ]
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
    }

} as Meta<TextInputRootProps>;

export const Default: StoryObj = {}

export const WithoutIcon: StoryObj = {
    args: {
        children: <TextInput.Input placeholder='Type your e-mail adress'/>
    },
}
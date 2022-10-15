import { Meta, StoryObj } from '@storybook/react';
import { SignIn } from './sign-in';
import { expect } from '@storybook/jest'
import {within, userEvent, waitFor} from '@storybook/testing-library'
import { rest } from 'msw'

export default {
    title: 'Pages/SignIn',
    component: SignIn,
    args:{
    },
    argTypes: {
    },
    parameters: {
      msw: {
        handlers: [
          rest.post('/sessions', (req, res, ctx) => {
              return res(ctx.json({
                message: "login realizado"
              }))
          })
        ]
      }
    }
} as Meta;

export const Default: StoryObj = {
  play:  async ({ canvasElement }) =>{
    const canvas = within(canvasElement)
    userEvent.type(canvas.getByPlaceholderText('Digite seu email'), 'felipe@stabel.com.br')
    userEvent.type(canvas.getByPlaceholderText('*********'), 'password123')
    userEvent.click(canvas.getByRole('button'))

    await waitFor(() => {
      expect(canvas.getByText('Login Realizado com Sucesso')).toBeInTheDocument()
    })
  }

}

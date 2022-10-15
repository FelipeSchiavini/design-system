import { Checkbox } from '../components/checkbox'
import { Envelope, Lock } from 'phosphor-react'
import { Button } from '../components/button'
import { Heading } from '../components/heading'
import { Logo } from '../components/svg/logo'
import { TextInput } from '../components/text-input'
import { Text } from '../components/text'
import { FormEvent, useState } from 'react'
import axios from 'axios'

export const SignIn  = () => { 

  const [isUserSignedIn, setIsUserSignedIn ] = useState<boolean>(false)

  const handleSignIn = (event: FormEvent) => {
    event.preventDefault()

    axios.post('/sessions', {
      email: 'felipe@stabel.com.br',
      password: '12345678'
    })

    setIsUserSignedIn(true)
  }

  return (
    <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100' >
      <header className="flex flex-col items-center">
      <Logo/>
      <Heading size='lg' className='mt-4'>
        Welcome to Ballet of Nena
      </Heading>
      <Text size='lg' className="text-gray-400 mt-1">Faça login e comece a usar!</Text>
      </header>
      <form onSubmit={handleSignIn} className='flex flex-col items-stretch w-full max-w-[400px] mt-10 gap-4'>
        {isUserSignedIn && <Text> Login Realizado com Sucesso</Text>}
        <label htmlFor='email' className='flex flex-col gap-3'>
          <Text className='font-semibold'>Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope/>
            </TextInput.Icon>
            <TextInput.Input type='email' id='email' placeholder='Digite seu email'/>
          </TextInput.Root>
        </label>

        <label htmlFor='password' className='flex flex-col gap-3'>
          <Text className='font-semibold'>Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock/>
            </TextInput.Icon>
            <TextInput.Input type='password' id='email' placeholder='*********'/>
          </TextInput.Root>
        </label>

        <label htmlFor='remember' className='flex items-center gap-2'>
          <Checkbox id='remember'/>
          <Text size='sm' className='text-gray-200'>Lembrar de mim por 30 dias</Text>
        </label>
        <Button type="submit" className='mt-4'>Entrar na Plataforma</Button>
      </form>
      <footer className='flex flex-col items-center gap-4 mt-8'>
        <Text asChild size='sm'>
          <a className='text-gray-400 underline hover:text-gray-200 cursor-pointer'>Esqueceu sua senha</a>
        </Text>

        <Text asChild size='sm'>
          <a className='text-gray-400 underline hover:text-gray-200 cursor-pointer'>Não possui conta? Crie uma agora!</a>
        </Text>

      </footer>
    </div>
  )
}


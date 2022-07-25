import React from 'react';
import { useLocation } from 'react-router-dom';
import { LoginCard } from '../components/LoginCard';
import { LocationState } from '../interfaces/GitHub';

function Login() {

  const previously = useLocation().state as LocationState

  const prevPath = null || previously?.prevPath
  
  return (
    <main className='ml-20 flex flex-col justify-center items-center p-4 max-w-full'>
      {
        !!prevPath ? 
          <p className='text-lg'>Para acceder a <b>{prevPath}</b> debes estar logueado</p> 
        : 
          null
      }
      <LoginCard />
    </main>
  );
}

export { Login }
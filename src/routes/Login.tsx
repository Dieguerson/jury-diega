import React, { useContext, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { GitContext } from '../context/gitContext';
import { Context } from '../interfaces/GitHub';

function Login() {

  const [searchParams] = useSearchParams()
  const code = searchParams.get('code')

  useEffect(() => {
    if(code){
      fetch('http://localhost:5000/authenticate', {method: 'POST', body: JSON.stringify({code})})
        .then(res => res.json()).then(res => console.log(res))
    }
  },[code])


  return (
    <main className='ml-20 flex flex-wrap justify-center p-4 max-w-full'>
      <a href={`https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GH_ID}&scope=user`}>ASHFALÑSDHASÑKHDAS</a>
    </main>
  );
}

export { Login }
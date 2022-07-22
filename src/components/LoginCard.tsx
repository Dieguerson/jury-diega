import React, { useEffect } from 'react'
import { Icon } from '@iconify/react'
import { useSearchParams } from 'react-router-dom'

function LoginCard(){

  const [searchParams] = useSearchParams()
  const code = searchParams.get('code')

  useEffect(() => {
    if(code){
      fetch('http://localhost:5000/authenticate', {method: 'POST', body: JSON.stringify({code})})
        .then(res => res.json()).then(res => console.log(res))
    }
  },[code])
  
  return (
    <>
      <article 
        className='
          bg-white
          m-4
          rounded-md
          px-5
          pb-2
          pt-4
          border
          border-gray-100
          shadow-md
          grid
          grid-rows-2
          items-center
          justify-items-center
          h-fit
        '
      >
        <p className='font-bold text-2xl row-start-1 self-center justify-self-center flex items-center mb-4'>
          <Icon icon="icon-park-outline:gavel" className='w-10 h-10 mr-2'/>
          Jury-Project
        </p>
        <a 
          href={`https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GH_ID}&scope=user`}
          rel="noreferrer"
          className="bg-[#333] rounded-md flex text-[#f5f5f5] w-fit items-center self-start justify-center px-2 py-1 font-bold row-start-2"
        >
          LogIn with
          <Icon icon="ion:logo-github" className='ml-2 w-5 h-5' />
        </a>
      </article>
    </>
  )
}

export { LoginCard }
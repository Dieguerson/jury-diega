import React, { useContext } from 'react'
import { Icon } from '@iconify/react'
import { GitContext } from '../context/gitContext'
import { Context } from '../interfaces/GitHub'
import { Link, useLocation } from 'react-router-dom'

function LoginCard(){
  const location = useLocation().pathname

  const { getCode, logStatus, logOut } = useContext(GitContext) as Context
  
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
        {
          location === '/login' ?
            <button 
              className="bg-[#333] rounded-md flex text-[#f5f5f5] w-fit items-center self-start justify-center px-2 py-1 font-bold row-start-2"
              onClick={!logStatus ? getCode : logOut}
            >
              {!logStatus && <>LogIn with <Icon icon="ion:logo-github" className='ml-2 w-5 h-5' /></>}
              {logStatus && <>LogOut</>}
            </button>
          :
            <Link to="login" 
              className="bg-[#333] rounded-md flex text-[#f5f5f5] w-fit items-center self-start justify-center px-2 py-1 font-bold row-start-2"
            >
              Login
            </Link>
        }
        
      </article>
    </>
  )
}

export { LoginCard }
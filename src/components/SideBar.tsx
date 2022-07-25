import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ProjectsIcon } from './ProjectsIcon'
import { Icon } from '@iconify/react'
import { GitContext } from '../context/gitContext'
import { Context } from '../interfaces/GitHub'

function SideBar() {
  const [text, setText] = useState<String>('hidden')
  const [padding, setPadding] = useState<String>('pr-6')
  const { logStatus } = useContext(GitContext) as Context

  const fakeHover = (eventType: string) => {
    if (eventType === 'mouseenter') {
      setText('inline')
      setPadding('pr-8')
    } else {
      setText('hidden')
      setPadding('pr-6')
    }
  }

  return (
    <>
      <nav className="flex flex-col justify-between fixed inset-0 bg-[#4a50bc] w-fit" onMouseEnter={(e) => fakeHover(e.type)} onMouseLeave={(e) => {fakeHover(e.type)}}>
        <ul className={`p-4 pt-8 ${padding}`}>
          <li className='mb-2'>
            <NavLink 
              to={!!logStatus ? "projects" : "login"}
              state = {!!logStatus ? null : {prevPath: 'projects'}}
              className={({isActive}) => `flex flex-nowrap items-center w-full gap-2 ${isActive && !!logStatus ? 'text-[#00d8ff]' : 'text-[#42b883]'}`}>
              <ProjectsIcon />
              <p className={`${text} text-xl font-semibold`}>Projects</p>
            </NavLink>
          </li>
          <li className='mb-2'>
            <NavLink to="login" className={({isActive}) => `flex flex-nowrap items-center w-full gap-2 ${isActive ? 'text-[#00d8ff]' : 'text-[#42b883]'}`}>
              <Icon icon="ion:enter" className="w-6 h-6 translate-x-[10%] mr-2" />
              <p className={`${text} text-xl font-semibold`}>Login</p>
            </NavLink>
          </li>
        </ul>
        <NavLink to="/" className={({isActive}) => `flex flex-nowrap items-center w-full gap-2 ${isActive ? 'text-[#00d8ff]' : 'text-[#42b883]'} p-4 pb-8 ${padding}`}>
          <Icon icon="ion:home" className="w-6 h-6 translate-x-[10%] mr-1" />
          <p className={`${text} text-xl font-semibold`}>Home</p>
        </NavLink>
      </nav>
    </>
  )
}

export { SideBar }
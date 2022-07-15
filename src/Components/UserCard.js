import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { GitContext } from '../Context/gitContext'

function UserCard(){
  const { userData } = useContext(GitContext)
  
  return (
    <>
      <article className='bg-white m-4 rounded-md px-5 py-2 border border-gray-100 shadow-md flex justify-center items-center'>
        <img src={userData.avatar} alt={userData.name} className='w-28 h-28 rounded-full mr-8 text-[#F0DB4F]' />
        <section className='flex flex-col text-[#262b40]'>
          <p className='font-bold text-2xl self-center'>{userData.alias}</p>
          <p className='font-thin mb-2 text-sm self-center italic'>{userData.name}</p>
          <p className='font-semibold text-base'>Public: {userData.public}</p>
          <p className='font-semibold text-base mb-2'>Owned Private: {userData.private}</p>
          <a href={userData.url} className="bg-[#333] rounded-md flex text-[#f5f5f5] w-fit items-center justify-center px-2 py-1 font-bold self-center mb-2"><Icon icon="ion:logo-github" className='mr-2 w-5 h-5' /> GitHub</a>
          <Link to='/projects' className="bg-[#4a50bc] rounded-md flex text-[#f5f5f5] w-fit items-center justify-center px-2 py-1 font-bold self-center">Projects</Link>
        </section>
      </article>
    </>
  )
}

export { UserCard }
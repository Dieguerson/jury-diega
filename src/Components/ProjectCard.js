import { Icon } from '@iconify/react'

function ProjectCard(props){

  return (
    <>
      <article className='bg-white m-4 rounded-md p-5 border border-gray-100 shadow-md flex justify-center items-center'>
        <Icon icon="ion:logo-javascript" className='w-8 h-8 mr-5 text-[#F0DB4F]'/>
        <section className='flex flex-col text-[#262b40]'>
          <p className='font-bold mb-2 text-2xl'>{props.name}</p>
          <p className='font-semibold text-lg'>Main Branch: {props.main}</p>
          <p className='text-sm font-normal text-[#4a5073]'>Latest Update: {props.update}</p>
        </section>
      </article>
    </>
  )
}

export { ProjectCard }
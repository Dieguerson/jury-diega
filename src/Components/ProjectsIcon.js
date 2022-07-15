import { Icon } from "@iconify/react"

function ProjectsIcon() {
  return (
    <>
      <article className="relative grid grid-cols-1 grid-rows-1 items-center justify-center w-8 h-8 px-1">
        <Icon icon="ion:logo-react" className="col-start-1 row-start-1 w-6 h-6 translate-x-[10%] text-[#00d8ff]" />
        <Icon icon="ion:logo-vue" className="col-start-1 row-start-1 w-6 h-6 -translate-x-[10%] text-[#42b883]" />
      </article>
    </>
  )
}

export { ProjectsIcon }
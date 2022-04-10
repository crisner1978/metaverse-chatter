import { HiCubeTransparent } from 'react-icons/hi'

export default function Spinner() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <HiCubeTransparent className="h-44 w-44 text-blue-500 animate-spin" />
    </div>
  )
}

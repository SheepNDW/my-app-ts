import { useState } from 'react'

export default function App() {
  const [isShow, setisShow] = useState<boolean>(true)
  return (
    <div>
      <Navbar cb={() => setisShow(!isShow)} />
      {isShow && <Sidebar />}
    </div>
  )
}

interface IProps {
  title?: string
  cb: () => void
}

const Navbar = (props: IProps) => {
  return (
    <div>
      navbar - <button onClick={() => props.cb()}>click</button>
    </div>
  )
}

const Sidebar = () => {
  return <div>sidebar</div>
}

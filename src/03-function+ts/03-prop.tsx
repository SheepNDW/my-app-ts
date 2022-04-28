import React from 'react'

export default function App() {
  return (
    <div>
      App
      <Child name="aaa" />
    </div>
  )
}

interface IProps {
  name: string
}

// function Child(props: IProps) {
//   return <div>Child - {props.name}</div>
// }

const Child: React.FC<IProps> = (props) => {
  return <div>Child - {props.name}</div>
}

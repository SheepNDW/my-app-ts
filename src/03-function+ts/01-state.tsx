import React, { useState } from 'react'

export default function App() {
  const [name, setName] = useState<string>('sheep')
  return (
    <div>
      App - {name.substring(0, 1).toUpperCase() + name.substring(1)}
      <button onClick={() => setName('hitsuji')}>click</button>
    </div>
  )
}

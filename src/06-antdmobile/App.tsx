import React, { useEffect, useState } from 'react'
import store from './redux/store'
import IndexRouter from './router/Index'

export default function App() {
  const [isShow, setIsShow] = useState(store.getState().isShow)

  useEffect(() => {
    store.subscribe(() => {
      // console.log(store.getState())
      setIsShow(store.getState().isShow)
    })
  }, [])

  return (
    <>
      <IndexRouter></IndexRouter>

      {isShow && (
        <ul>
          <li>電影</li>
          <li>影院</li>
          <li>我的</li>
        </ul>
      )}
    </>
  )
}

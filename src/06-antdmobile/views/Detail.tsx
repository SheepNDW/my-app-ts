import React, { useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import store from '../redux/store'

interface IParam {
  id: string
}
export default function Detail(props: RouteComponentProps<IParam>) {
  useEffect(() => {
    // console.log((props.match.params as any).id)
    console.log(props.match.params.id)

    store.dispatch({
      type: 'hide'
    })

    return () => {
      store.dispatch({
        type: 'show'
      })
    }
  }, [props.match])

  return <div>Detail</div>
}

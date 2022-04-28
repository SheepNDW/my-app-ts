import React, { useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'

interface IParam {
  id: string
}
export default function Detail(props: RouteComponentProps<IParam>) {
  useEffect(() => {
    // console.log((props.match.params as any).id)
    console.log(props.match.params.id)
  }, [props.match])

  return <div>Detail</div>
}

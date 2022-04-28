import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import axios from 'axios'

interface IItem {
  filmId: number
  name: string
}
export default function Film(props: RouteComponentProps) {
  const [list, setList] = useState([])

  useEffect(() => {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=5420934',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then((res) => {
      console.log(res.data.data.films)
      setList(res.data.data.films)
    })
  }, [])

  return (
    <>
      <ul>
        {list.map((item: IItem) => (
          <li
            key={item.filmId}
            onClick={() => {
              // console.log(props.history)
              props.history.push(`/detail/${item.filmId}`)
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </>
  )
}

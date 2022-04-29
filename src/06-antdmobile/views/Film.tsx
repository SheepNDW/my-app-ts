import React, { useEffect, useState, useRef } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import axios from 'axios'

import { Button, Swiper } from 'antd-mobile'
import { SwiperRef } from 'antd-mobile/es/components/swiper'

interface IItem {
  filmId: number
  name: string
}
export default function Film(props: RouteComponentProps) {
  const [list, setList] = useState([])
  const [loopList, setLoopList] = useState([])
  const swiperRef = useRef<SwiperRef>(null)

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

    axios({
      url: 'https://capi.showtimes.com.tw/1/assets/ids/1077740,1077653,1076337,1079094,1078654,1020406,1074264,1027867,1015637,1079109,1073839,1015632'
    }).then((res) => {
      console.log(res.data.payload.assets)
      setLoopList(res.data.payload.assets)
    })
  }, [])

  return (
    <>
      <Swiper loop autoplay ref={swiperRef}>
        {loopList.map((item: any) => (
          <Swiper.Item key={item.id}>
            <img src={item.url} alt={item.name} style={{ width: '100%' }} />
          </Swiper.Item>
        ))}
      </Swiper>
      <Button color="warning" onClick={() => swiperRef.current?.swipePrev()}>
        上一個
      </Button>
      <Button color="success" onClick={() => swiperRef.current?.swipeNext()}>
        下一個
      </Button>
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

'use client'

import { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { increment, decrement, selectCount } from '../redux/features/counter/counterSlice'
import { Button } from '../components/ui/button'

export default function HomePage () {
  // const count = useAppSelector(selectCount)
  // const dispatch = useAppDispatch()
  //
  // <Button onClick={() => dispatch(increment())}>+</Button>
  // { count }
  // <Button onClick={() => dispatch(decrement())}>-</Button>
  return (
    <div>
    </div>
  )
}

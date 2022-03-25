import React, { useState } from 'react'

export const useChangeIncrement = () => {
  // track count, offer count, increment, decrement functions
  const [count, setCount] = useState(0);
  
  const incrementCount = () => {
    setCount(count + 1);
  }

  const decrementCount = () => {
    setCount(count - 1);
  }
  
  return {
    count,
    incrementCount,
    decrementCount
  }
}

import React from 'react'

type Props = {
  label: string
  onClick: () => void
}
export const ChangeCountButton = ({ label, onClick }: Props) => {
  return (
    <div>
      <button onClick={onClick}>
        {label}
      </button>
    </div>
  )
}

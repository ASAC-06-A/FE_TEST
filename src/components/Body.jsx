import { useState } from 'react'

function Body() {
  const [date, setDate] = useState('')
  const handelOnChange = (e) => {
    console.log('변경된 값', e.target.value)
    setData(e.target.value)
  }

  return (
    <div>
      <input type='date' value={date} onChange={handelOnChange} />
    </div>
  )
}
export default Body

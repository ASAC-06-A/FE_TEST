import { useState } from 'react'

function Body() {
  const [text, setText] = useState('')
  const handleOnChange = (e) => {
    console.log('변경된 값: ', e.target.value)
    setText(e.target.value)
  }
  return (
    <div>
      <textarea value={text} onChange={handleOnChange}></textarea>
    </div>
  )
}
export default Body

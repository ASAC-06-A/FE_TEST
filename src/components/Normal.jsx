import { useState } from 'react'

function Normal() {
  // input의 값을 저장하기 위한 State
  const [value, setValue] = useState('')

  // input의 값을 State에 업데이트 하는 함수
  const changeInputHandler = (event) => {
    setValue(event.target.value)
  }

  return (
    <form>
      <input value={value} onChange={changeInputHandler} />
      <button>Login</button>
    </form>
  )
}
export default Normal

import { useForm } from 'react-hook-form'

function App() {
  const { register, watch } = useForm()

  // watch로 해당 input 필드를 구독하여 값의 변화를 감지할 수 있다.
  console.log(watch('id'))

  return (
    <form>
      <input {...register('id')} />
      <button>Login</button>
    </form>
  )
}
export default App

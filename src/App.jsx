import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { form } from '@/components/ui/form'

import './App.css'
import Header from '@/components/Header.jsx'
import Body from '@/components/Body.jsx'
import Footer from '@/components/Footer.jsx'

function App() {
  const name = '천룡인'
  const location = '숲속마을'

  return (
    <div className='App'>
      <Header />
      <Body name={name} location={location} />
      <Input />
      <form />
      <Footer />
    </div>
  )
}
export default App

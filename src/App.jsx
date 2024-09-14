import { Button } from '@/components/ui/button'
import './App.css'
import Header from '@/components/Header.jsx'
import Body from '@/components/Body.jsx'
import Footer from '@/components/Footer.jsx'

function App() {
  const name = 'Bonobono'
  return (
    <div className='App'>
      <Header />
      <Body name={name} />
      <button />
      <Footer />
    </div>
  )
}

export default App

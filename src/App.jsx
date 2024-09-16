import '@/App.css'
import Header from '@/components/Header'
import Body from '@/components/Body'
import Footer from '@/components/Footer'

function ChildComp() {
  return <div>child component</div>
}

function App() {
  const BodyProps = {
    name: '천룡인',
    location: '숲속마을',
    // favorList: ['파스타', '빵', '떡볶이'],
  }

  return (
    <div className='App'>
      <Header />
      <Body>
        <ChildComp />
      </Body>
      <Footer />
    </div>
  )
}
export default App

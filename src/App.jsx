import 'App.css'

const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink',
  },
}

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img className='avatar' src='https://i.imgur.com/7vQD0fPs.jpg' alt='Gregorio Y. Zara' />

      <ul
        style={{
          backgroundColor: 'black',
          color: 'yellow',
        }}
      >
        <li>Imporove the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fulled engine</li>
      </ul>
    </div>
  )
}

// const today = new Date()

// function formatDate(date) {
//   return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date)
// }

// export default function Avatar() {
//   const avatar = 'https://i.imgur.com/7vQD0fPs.jpg'
//   const description = 'Gregorio Y. Zara'

//   return <img className='avatar' src={avatar} alt={description} />
// }

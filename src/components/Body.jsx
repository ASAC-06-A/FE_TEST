// import '@/components/Body.css'
import PropTypes from 'prop-types'

function Body(props) {
  console.log(props)
  return <div className='body'>{props.name}</div>
}

// props 타입 검증 설정
Body.propTypes = {
  name: PropTypes.string.isRequired, // name은 반드시 문자열이어야 함
}

export default Body

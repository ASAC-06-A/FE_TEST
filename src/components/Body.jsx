// import '@/components/Body.css'
// import { PlayCircleIcon } from 'lucide-react'
import PropTypes from 'prop-types'

function Body(props) {
  console.log(props)
  return <div className='body'>{props.name}는 숲속마을에 거주합니다.</div>
}

// props 타입 검증 설정
Body.propTypes = {
  name: PropTypes.string.isRequired, // name은 반드시 문자열이어야 함
}

export default Body

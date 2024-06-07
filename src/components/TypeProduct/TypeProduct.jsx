import React from 'react'
import { useNavigate } from 'react-router-dom'
// import { WrapperType } from './styled'

const TypeProduct = ({ name }) => {
  const navigate = useNavigate()
  const handleNavigatetype = (type) => {
    navigate(`/product/${type.normalize('NFD').replace(/[\u0300-\u036f]/g, '')?.replace(/ /g, '_')}`, {state: type})
  }
  return (
    // <div style={{ padding: '0 10px', cursor: 'pointer'}} onClick={() => handleNavigatetype(name)}>{name}</div>
    <div style={{ padding: '10px', cursor: 'pointer', height: '100%',minWidth: '50px',textAlign:'center',transition: 'background-color 0.3s, color 0.3s', backgroundColor: 'initial', color: 'initial'}} 
    onClick={() => handleNavigatetype(name)} 
    onMouseEnter={(e) => {
      e.target.style.backgroundColor = 'rgb(253, 194, 21)';
      e.target.style.color = '#ffffff'; // Màu chữ khi hover
    }} 
    onMouseLeave={(e) => {
      e.target.style.backgroundColor = 'initial';
      e.target.style.color = 'initial'; // Màu chữ khi không hover
    }} 
    >{name}</div>
  )
}

export default TypeProduct
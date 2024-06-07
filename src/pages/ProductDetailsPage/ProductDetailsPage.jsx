import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProductDetailsComponent from '../../components/ProductDetailsComponent/ProductDetailsComponent'
import FooterComponent from '../../components/FooterComponent/FooterComponent'

const ProductDetailsPage = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  return (
    <div style={{width: '100%',background: '#efefef', height: '450px'}}>
      <div style={{ width: '1270px', height: '100%', margin: '0 auto', paddingTop: '20px'}} >
        {/* <h5><span style={{cursor: 'pointer', fontWeight: 'bold'}} onClick={() => {navigate('/')}}>Trang chủ</span> - Chi tiết sản phẩm</h5> */}
        <ProductDetailsComponent idProduct={id} />
      </div>
      <FooterComponent />

    </div>
  )
}

export default ProductDetailsPage
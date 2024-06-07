import React, { Fragment } from 'react'
import NavBarComponent from '../../components/NavbarComponent/NavBarComponent'
import CardComponent from '../../components/CardComponent/CardComponent'
import { Col, Pagination, Row } from 'antd'
import { WrapperButtonMore, WrapperNavbar, WrapperProducts, WrapperTypeProduct } from './style'
import { useLocation } from 'react-router-dom'
import * as ProductService from '../../services/ProductService'
import { useEffect } from 'react'
import { useState } from 'react'
import Loading from '../../components/LoadingComponent/Loading'
import { useSelector } from 'react-redux'
import { useDebounce } from '../../hooks/useDebounce'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import FooterComponent from '../../components/FooterComponent/FooterComponent'


const TypeProductPage = () => {
    const searchProduct = useSelector((state) => state.product?.search)
    const searchDebounce = useDebounce(searchProduct, 500)

    const { state}  = useLocation()
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    const [typeProducts, setTypeProducts] = useState([])
    const [limit, setLimit] = useState(6) // Số lượng sản phẩm được hiển thị ban đầu
    const [hasMore, setHasMore] = useState(true); // Biến để kiểm tra xem còn sản phẩm nào không

    // const [panigate, setPanigate] = useState({
    //     page: 0,
    //     limit: 10,
    //     total: 1,
    // })
    // const fetchProductType = async (type, page, limit) => {
    //     setLoading(true)
    //     const res = await ProductService.getProductType(type, page, limit)
    //     if(res?.status == 'OK') {
    //         setLoading(false)
    //         setProducts(res?.data)
    //         setPanigate({...panigate, total: res?.totalPage})
    //     }else {
    //         setLoading(false)
    //     }
    // }

    const fetchProductType = async (type, limit) => {
        setLoading(true)
        const res = await ProductService.getProductType(type, 0, limit) // Luôn truy vấn từ trang 1
        if (res?.status === 'OK') {
            setLoading(false)
            setProducts(res?.data)
            setHasMore(res?.data?.length === limit);
        } else {
            setLoading(false)
        }
    }

    const fetchAllTypeProduct = async () => {
        const res = await ProductService.getAllTypeProduct()
        if(res?.status === 'OK') {
            setTypeProducts(res?.data)
        }
    }

    useEffect(() => {
        fetchAllTypeProduct()
    }, [])

    // useEffect(() => {
    //     if(state){
    //         fetchProductType(state, panigate.page, panigate.limit)
    //     }
    // }, [state,panigate.page, panigate.limit])

    useEffect(() => {
         if (state) {
             fetchProductType(state, limit) // Gọi hàm fetchProductType khi state hoặc limit thay đổi
         }
     }, [state, limit])


    // const onChange = (current, pageSize) => {
    //     setPanigate({...panigate, page: current - 1, limit: pageSize})    
    // }
    const onLoadMoreClick = () => {
        // Tăng limit để hiển thị thêm sản phẩm
        setLimit(prevLimit => prevLimit + 6)
    }
    return (
        <Loading isLoading={loading}>
            <div style={{ width: '1270px', margin: '0 auto' }}>
            <WrapperTypeProduct>
            {typeProducts.map((item) => {
            return (
                <TypeProduct name={item} key={item} />
            )
            })}
            </WrapperTypeProduct>
            </div>
            <div style={{ width: '100%', background: '#efefef', height: '100%', padding: '15px 0' }}>
                <div style={{ width: '1270px', margin: '0 auto', height: '100%' }}>
                    <Row style={{ flexWrap: 'nowrap', paddingTop: '10px',height: 'calc(100% - 20px)' }}>
                        {/* <WrapperNavbar span={4} >
                            <NavBarComponent />
                        </WrapperNavbar> */}
                        <Col span={24} style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                            <WrapperProducts >
                                {products?.filter((pro) => {
                                    if(searchDebounce === '') {
                                        return pro
                                    }else if(pro?.name?.toLowerCase()?.includes(searchDebounce?.toLowerCase())) {
                                        return pro
                                    }
                                })?.map((product) => {
                                    return (
                                        <CardComponent
                                            key={product._id}
                                            countInStock={product.countInStock}
                                            description={product.description}
                                            image={product.image}
                                            name={product.name}
                                            price={product.price}
                                            rating={product.rating}
                                            type={product.type}
                                            selled={product.selled}
                                            discount={product.discount}
                                            id={product._id}
                                        />
                                    )
                                })}
                            </WrapperProducts>
                            {/* <Pagination defaultCurrent={panigate.page + 1} total={panigate?.total} onChange={onChange} style={{ textAlign: 'center', marginTop: '10px' }} /> */}
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                                <WrapperButtonMore
                                    textButton="Xem thêm"
                                    type="outline"
                                    styleButton={{
                                        border: '1px solid rgb(11, 116, 229)', color: '#rgb(11, 116, 229)',
                                        width: '240px', height: '38px', borderRadius: '4px'
                                    }}
                                    disabled={!hasMore}
                                    onClick={onLoadMoreClick}
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <FooterComponent />
        </Loading>
    )
}

export default TypeProductPage
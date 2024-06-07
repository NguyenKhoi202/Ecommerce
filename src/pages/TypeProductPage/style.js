import { Col } from "antd"
import styled from "styled-components"
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent"

export const WrapperProducts = styled.div`
    display: flex;
    gap: 12px;
    margin-top: 20px;
    flex-wrap: wrap;
`

export const WrapperNavbar = styled(Col)`
    background: #fff; 
    margin-right: 10px;
    padding: 10px;
    border-radius: 4px;
    height: fit-content;
    margin-top: 20px;
    width: 200px;
`

export const WrapperTypeProduct = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    justify-content: flex-start;
    height: 44px;
`

export const WrapperButtonMore = styled(ButtonComponent)`
    &:hover {
        color: #fff;
        background: rgb(13, 92, 182);
        span {
            color: #fff;
        }
    }
    width: 100%;
    text-align: center;
    // cursor: ${(props) => props.disabled ? 'not-allowed' : 'pointers'};
    pointer-events: ${(props) => props.disabled ? 'none' : 'auto'};
`
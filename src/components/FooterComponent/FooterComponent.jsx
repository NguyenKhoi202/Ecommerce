import React from 'react';
import { Col, Row } from 'antd';
import { WrapperFooter } from './style';

function FooterComponent() {
  return (
    <footer style={{ padding: '15px 120px', position: 'relative' }}>
    <Row>
      <Col span={8}>
            <WrapperFooter>Tích điểm Quà tặng VIP</WrapperFooter>
            <WrapperFooter>DV vệ sinh máy lạnh</WrapperFooter>
            <WrapperFooter>Lịch sử mua hàng</WrapperFooter>
            <WrapperFooter>Tìm hiểu về mua trả góp</WrapperFooter>
            <WrapperFooter>Xem thêm</WrapperFooter>
      </Col>
      <Col span={8}>
            <WrapperFooter>Tuyển dụng</WrapperFooter>
            <WrapperFooter>Gửi góp ý, khiếu nại</WrapperFooter>
            <WrapperFooter>Tìm siêu thị</WrapperFooter>
      </Col>
      <Col span={8}>
            <WrapperFooter style={{ fontWeight: 'bold' }}>Tổng đài hỗ trợ</WrapperFooter>
            <WrapperFooter>Gọi mua: 1900 232 461 (7:30 - 22:00)</WrapperFooter>
            <WrapperFooter>Khiếu nại: 1800.1063 (8:00 - 21:30)</WrapperFooter>
            <WrapperFooter>Bảo hành: 1900 232 465 (8:00 - 21:00)</WrapperFooter>
      </Col>
    </Row>
      {/* Các cột khác */}
    </footer>
  );
}

export default FooterComponent;
import React from 'react';
import { Layout, Typography } from 'antd';

const { Header, Content } = Layout;
const { Title } = Typography;

export const MainLayoutComponent: React.FC = ({ children }: any) => {

  return (
    <Layout style={{ height: "100vh" }}>
      <Header className="header-layout">
        <div className="header-title-content">
          <Title level={4} className="header-title"> Generador de Calendario</Title>
        </div>
      </Header>
      <Content className="site-layout">
        <div className="site-layout-background">
          {children}
        </div>
      </Content>
    </Layout>
  )

}

export default MainLayoutComponent
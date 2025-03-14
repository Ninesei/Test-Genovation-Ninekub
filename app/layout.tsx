"use client";

import React, { useState } from "react";
import { Layout, theme } from "antd";
import Footer from "@/component/Footer";
import HeaderPage from "@/component/Header";
import SiderPage from "@/component/Sider";

const { Sider, Header, Content } = Layout;


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <html>
      <body>
    <Layout style={{ minHeight: "100vh" }}>
      {/* เมนูซ้าย*/}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
      >
         {/* เมนูด้านในของด้านซ้าย*/}
        <SiderPage
          collapsed={collapsed}
          toggleCollapse={() => setCollapsed(!collapsed)}
        />
      </Sider>
      <Layout>
        <Header style={{ background: colorBgContainer }}>
          <HeaderPage
            collapsed={collapsed}
            onToggle={() => setCollapsed(!collapsed)}
          />
        </Header>

         {/* เนื้อหา*/}
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>


        {/* <Footer /> */}
      </Layout> 
      </Layout>
      </body>
    </html>
  );
}

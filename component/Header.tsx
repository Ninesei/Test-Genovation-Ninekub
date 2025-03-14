import React from "react";
import { Layout, Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const { Header } = Layout;

interface HeaderBarProps {
  collapsed: boolean;   
  onToggle: () => void; 
}

const HeaderPage: React.FC<HeaderBarProps> = ({ collapsed, onToggle }) => {
  return (
    <Header style={{ padding: 0, background: "#fff" }}>
  <Button
  type="text"
  icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
  onClick={onToggle}
  style={{
    fontSize: "16px",
    width: 64,
    height: 64,
    marginLeft: -40, 
  }}
/>

    </Header>
  );
};

export default HeaderPage;

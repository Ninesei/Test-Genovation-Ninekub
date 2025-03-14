import React from "react";
import { Layout, Menu, MenuProps } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";

const { Sider } = Layout;

interface SiderMenuProps {
  collapsed: boolean;
  toggleCollapse: () => void; // layout
}

const SiderPage = ({ collapsed, toggleCollapse ,} : SiderMenuProps ) => { 
  const router = useRouter();  

  const items: MenuProps["items"] = [
    {
      key: "sub1",
      icon: <UserOutlined />,
      label: "Doctor",
      children: [
        { key: "1-1", label: "Doctor Dashboard 1", onClick: () => router.push("/")},
        { key: "1-2", label: "Doctor Dashboard 2", onClick: () => router.push("/doctor")},
      ],
    },
    {
      key: "sub2",
      icon: <VideoCameraOutlined />,
      label: "nav 2",
      children: [
        { key: "2-1", label: "sub nav 1 " },
        { key: "2-2", label: "sub nav 2" },
      ],
    },
    {
      key: "sub3",
      icon: <UploadOutlined />,
      label: "nav 3",
      children: [
        { key: "3-1", label: "sub nav 1" },
        { key: "3-2", label: "sub nav 2" },
      ],
    },
  ];

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={toggleCollapse} trigger={null}>

      <div
        style={{ height: 32, margin: 16, background: "rgba(255, 255, 255, 0.2)" }} // หารูปมาใส่
      />

      <Menu
        theme="dark"
        mode="inline" // แนวตั้ง
        defaultSelectedKeys={["1-1"]}
        items={items}
      />

      
      {/* <button onClick={toggleCollapse}>Toggle Sider</button> // เทสปุ่ม */}
    </Sider>
  );
};

export default SiderPage;


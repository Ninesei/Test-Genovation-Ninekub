"use client";

import React, { ReactNode } from "react";
import { Layout } from "antd";

const { Content } = Layout;

interface ContentProps {
  children: ReactNode;
}

const ContentPage: React.FC<ContentProps> = ({ children }) => {
  return (
    <Content
      style={{
        margin: "24px 16px", // ห่างขอบข้างนอก
        padding: 24, // ห่างขอบใน
        minHeight: "calc(100vh - 64px)",
        background: "white",
        borderRadius: "8px",
      }}
    >
      {children}
    </Content>
  );
};

export default ContentPage;


"use client";

import { Table, Button, Avatar, Tag, Input, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import type { ColumnsType, ColumnType } from "antd/es/table";
import type { FilterDropdownProps } from "antd/es/table/interface";
import { doctorList } from "@/component/datadetail";
import type { InputRef } from "antd";

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  hospital: string;
  experience: string;
  rating: number;
  reviews: number;
  image: string;
  status: string;
  description: string;
  availableSlots: { time: string; available: boolean }[];
}

type DataIndex = keyof Doctor; // filter

const DoctorList = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState<DataIndex | "">("");
  const searchInput = useRef<InputRef | null>(null);

  const handleSearch = (
    selectedKeys: string[],
    confirm: FilterDropdownProps["confirm"],
    dataIndex: DataIndex
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (
    dataIndex: DataIndex
  ): ColumnType<Doctor> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleSearch(selectedKeys as string[], confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() =>
              handleSearch(selectedKeys as string[], confirm, dataIndex)
            }
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
  });

  const columns: ColumnsType<Doctor> = [
    {
      title: "Profile",
      dataIndex: "image",
      key: "image",
      render: (text: string) => <Avatar size={40} src={text} />,
    },
    {
      title: "Doctor Name",
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Specialty",
      dataIndex: "specialty",
      key: "specialty",
      ...getColumnSearchProps("specialty"),
    },
    {
      title: "Hospital",
      dataIndex: "hospital",
      key: "hospital",
      ...getColumnSearchProps("hospital"),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      filters: [
        { text: "Available", value: "Available" },
        { text: "Not Available", value: "Not Available" },
      ],
      onFilter: (value, record) => record.status === value,
      render: (status: "Available" | "Not Available") => (
        <Tag color={status === "Available" ? "green" : "red"}>{status}</Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (List, record) => (
        <Button type="primary" onClick={() => router.push(`/doctor/${record.id}`)}>
          View
        </Button>
      ),
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h2>Welcome to Doctor List</h2>
      <Table<Doctor> dataSource={doctorList} columns={columns} rowKey="id" />
    </div>
  );
};

export default DoctorList;

import React, { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import type { InputRef, TableColumnsType, TableColumnType } from "antd";
import { Button, Input, Space, Table } from "antd";
import type { FilterDropdownProps } from "antd/es/table/interface";
import { Divider, Flex, Tag } from "antd";
import ModalDetail from "./ModalDetail";

interface DataType {
  key: string;
  name: string;
  status: string;
  email: string;
  phone: string;
}

type DataIndex = keyof DataType;

const data: DataType[] = [
  {
    key: "1",
    name: "นาย พัทธดนย์ ศรีมงคลชัย",
    status: "available",
    email : "patthadon.sri@gmail.com",
    phone: "0920092836",
  },
  {
    key: "2",
    name: "นางสาว ใบไม้ ปลิวแปบ",
    status: "not available",
    email : "bi@gmail.com",
    phone: "0920092836",
  },
  {
    key: "3",
    name: "นาย ล่องลอย กลอยใจ",
    status: "available",
    email : "lo@gmail.com",
    phone: "0920092836",
  },
  {
    key: "4",
    name: "นายสาว นินจา หายตัว",
    status: "available",
    email : "nin@gmail.com",
    phone: "0920092836",
  },
];

const TablePage = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef<InputRef>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState<DataType | null>(null);


  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleOpen = (record: DataType) => {
    console.log("Selected Record: ", record); // ✅ ตรวจสอบค่าที่ส่งไป
    setSelectedData(record);
    setIsModalOpen(true);
  };

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
  ): TableColumnType<DataType> => ({
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
          {/* <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button> */}
          {/* <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button> */}
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
    filterDropdownProps: {
      onOpenChange(open) {
        if (open) {
          setTimeout(() => searchInput.current?.select(), 100);
        }
      },
    },
    // render: (text) =>
    //   searchedColumn === dataIndex ? (
    //     <Highlighter
    //       highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
    //       searchWords={[searchText]}
    //       autoEscape
    //       textToHighlight={text ? text.toString() : ''}
    //     />
    //   ) : (
    //     text
    //   ),
  });

  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "30%",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: "20%",
      filters: [
        { text: 'available', value: 'available' },
        { text: 'not available', value: 'not available' },
      ],
      onFilter: (value : any, record : DataType) => record.status.indexOf(value) === 0,
      render: (text, record) => {
        return <Tag color={text === "available" ? "green" : "red"}>{text}</Tag>;
      },

    },
    {
        title: "Action",
        dataIndex: "action",
        key: "action",
        render: (_, record: DataType) => (
          <Button type="primary" onClick={() => handleOpen(record)}>
            View
          </Button>
        ),
      },
    ];
  return (
    <div>
      <Table<DataType> columns={columns} dataSource={data} />
      <ModalDetail isModalOpen = {isModalOpen} handleCancel={handleCancel} selectedData={selectedData}/>
    </div>
  );
};
export default TablePage;

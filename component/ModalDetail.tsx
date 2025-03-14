import React from "react";
import { Modal } from "antd";

interface DataType {
  key: string;
  name: string;
  status: string;
  email: string;
  phone: string;
}

interface ModalDetailProps {
  isModalOpen: boolean;
  handleCancel: () => void;
  selectedData: DataType | null;
}

const ModalDetail: React.FC<ModalDetailProps> = ({ isModalOpen, handleCancel, selectedData }) => {
//   console.log("Data received in Modal:", selectedData); 

  return (
    <Modal 
      title="ใส่รายละเอียดของพยาบาลแต่ละคน(ตามที่เลือกดู)" 
      open={isModalOpen} 
      onCancel={handleCancel} 
      footer={null}
    >
      {selectedData ? (
        <>
          <p><b>📸 รูป:</b> (ใส่รูป)</p>
          <p><b>ชื่อ:</b> {selectedData.name }</p>
          <p><b>เบอร์โทร:</b> {selectedData.phone }</p>
          <p><b>Email:</b> {selectedData.email }</p>
          <p><b>Status:</b> {selectedData.status }</p>
        </>
      ) : (
        <p>ไม่พบข้อมูล</p>
      )}
    </Modal>
  );
};

export default ModalDetail;

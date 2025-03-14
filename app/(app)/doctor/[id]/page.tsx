"use client";

import { useParams, useRouter } from "next/navigation";
import { Card, Avatar, List, Button, Rate, message } from "antd";
import { UserOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { doctorList } from "@/component/datadetail";
import { useState } from "react";

const DoctorDetails = () => {
  const { id } = useParams();
  const router = useRouter();
  const doctor = doctorList.find((doc) => doc.id === String(id));

  if (!doctor) return
  <p>Doctor not found</p>;

  // บันทึกข้อมูลลง log ก่อน
  const handleBooking = (time: string) => {
    console.log(`Booking confirmed for Doctor: ${doctor.name}, Time: ${time}`);
    message.success(`Booked appointment at ${time}`);
  };

  return (
    <Card style={{ width: "100%", maxWidth: 600, margin: "auto", padding: 20 }}>
      <div className="py-3">
        <Button
          type="default"
          icon={<ArrowLeftOutlined />}
          onClick={() => router.push("/doctor")}
          style={{
            position: "absolute",
            top: 16,
            left: 16,
            border: "1px solid #d9d9d9",
            borderRadius: 8,
            padding: "6px 12px",
            background: "#fff",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
          }}
        >
          Back
        </Button>
      </div>
      <Avatar
        size={80}
        src={doctor.image}
        icon={<UserOutlined />}
        style={{ marginTop: 40 }}
      />
      <h2>{doctor.name}</h2>
      <p>
        <strong>Description:</strong> {doctor.description}
      </p>
      <p>
        <strong>Specialty:</strong> {doctor.specialty}
      </p>
      <p>
        <strong>Hospital:</strong> {doctor.hospital}
      </p>
      <p>
        <strong>Experience:</strong> {doctor.experience}
      </p>
      <Rate disabled allowHalf value={doctor.rating} /> ({doctor.reviews}{" "}
      reviews)
      <h3>Available Time Slots</h3>
      <List
        dataSource={doctor.availableSlots}
        renderItem={(slot) => (
          <List.Item>
            <Button
              type={slot.available ? "primary" : "default"}
              disabled={!slot.available}
              onClick={() => handleBooking(slot.time)}
            >
              {slot.time}
            </Button>
          </List.Item>
        )}
      />
    </Card>
  );
};

export default DoctorDetails;

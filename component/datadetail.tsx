export const doctorList = [
    {
      id: "1",
      name: "Dr. พัทธดนย์ ศรีมงคลชัย",
      specialty: "Cardiology",
      hospital: "Bangkok Hospital",
      experience: "15 years",
      rating: 4.8,
      reviews: 120,
      image: "/",
      status: "Available",
      description:
        "แพทย์เฉพาะทางโรคหัวใจ มีประสบการณ์กว่า 15 ปี เชี่ยวชาญด้านการรักษาโรคหัวใจและหลอดเลือด",
      availableSlots: [
        { time: "09:00 AM", available: true },
        { time: "10:00 AM", available: false },
        { time: "11:00 AM", available: true },
        { time: "02:00 PM", available: false },
      ],
    },
    {
      id: "2",
      name: "Dr. ใบไม้ ปลิวแปบ",
      specialty: "Neurology",
      hospital: "Phuket Hospital",
      experience: "10 years",
      rating: 4.5,
      reviews: 98,
      image: "/",
      status: "Not Available",
      description:
        "ผู้เชี่ยวชาญด้านประสาทวิทยา ดูแลผู้ป่วยโรคลมชัก ไมเกรน และพาร์กินสัน",
      availableSlots: [
        { time: "08:00 AM", available: false },
        { time: "09:30 AM", available: false },
        { time: "11:00 AM", available: false },
        { time: "01:00 PM", available: false },
      ],
    },
    {
      id: "3",
      name: "Dr. ล่องลอย กลอยใจ",
      specialty: "Dermatology",
      hospital: "Samitivej Hospital",
      experience: "8 years",
      rating: 4.7,
      reviews: 85,
      image: "/",
      status: "Not Available",
      description: "แพทย์ผิวหนัง มีความเชี่ยวชาญด้านโรคผิวหนัง การรักษาสิว และเลเซอร์ผิวพรรณ",
      availableSlots: [
        { time: "10:00 AM", available: false },
        { time: "11:30 AM", available: false },
        { time: "03:00 PM", available: false },
        { time: "05:00 PM", available: false },
      ],
    },
    {
      id: "4",
      name: "Dr. นินจา หายตัว",
      specialty: "Pediatrics",
      hospital: "Siriraj Hospital",
      experience: "12 years",
      rating: 4.9,
      reviews: 140,
      image: "/",
      status: "Available",
      description: "กุมารแพทย์ ดูแลสุขภาพเด็กและพัฒนาการ มีประสบการณ์กว่า 12 ปี",
      availableSlots: [
        { time: "09:00 AM", available: true },
        { time: "10:30 AM", available: false },
        { time: "02:00 PM", available: true },
        { time: "04:00 PM", available: true },
      ],
    },
    {
      id: "5",
      name: "Dr. นก บินได้",
      specialty: "Oncology",
      hospital: "Bumrungrad Hospital",
      experience: "15 years",
      rating: 4.6,
      reviews: 110,
      image: "/",
      status: "Available",
      description: "แพทย์มะเร็งวิทยา เชี่ยวชาญการรักษาเคมีบำบัดและการรักษามะเร็งเฉพาะทาง",
      availableSlots: [
        { time: "08:00 AM", available: true },
        { time: "11:00 AM", available: false },
        { time: "01:00 PM", available: true },
        { time: "03:30 PM", available: true },
      ],
    },
    {
      id: "6",
      name: "Dr. แอนดี้ เที่ยวไหน",
      specialty: "Orthopedics",
      hospital: "Chulalongkorn Hospital",
      experience: "9 years",
      rating: 4.4,
      reviews: 75,
      image: "/",
      status: "Available",
      description: "ศัลยแพทย์กระดูกและข้อ ผู้เชี่ยวชาญด้านการผ่าตัดข้อเข่า ข้อสะโพก และอุบัติเหตุทางกระดูก",
      availableSlots: [
        { time: "07:30 AM", available: true },
        { time: "10:00 AM", available: false },
        { time: "02:00 PM", available: true },
        { time: "05:00 PM", available: false },
      ],
    },
    {
      id: "7",
      name: "Dr. วันนี้ วันไหน",
      specialty: "Endocrinology",
      hospital: "Ramathibodi Hospital",
      experience: "11 years",
      rating: 4.8,
      reviews: 100,
      image: "/",
      status: "Not Available",
      description: "แพทย์ต่อมไร้ท่อ ดูแลผู้ป่วยโรคเบาหวาน ไทรอยด์ และโรคฮอร์โมนต่างๆ",
      availableSlots: [
        { time: "09:00 AM", available: false },
        { time: "10:30 AM", available: false },
        { time: "01:00 PM", available: false },
        { time: "04:00 PM", available: false },
      ],
    },
    {
      id: "8",
      name: "Dr. หิวข้าว ซื้อไหน",
      specialty: "Gynecology",
      hospital: "BNH Hospital",
      experience: "13 years",
      rating: 4.7,
      reviews: 90,
      image: "/",
      status: "Available",
      description:
        "สูตินรีแพทย์ เชี่ยวชาญการดูแลสุขภาพสตรี การตั้งครรภ์ และภาวะมีบุตรยาก",
      availableSlots: [
        { time: "08:30 AM", available: true },
        { time: "10:00 AM", available: false },
        { time: "12:00 PM", available: true },
        { time: "03:00 PM", available: true },
      ],
    },
    {
      id: "9",
      name: "Dr. ท้องผูก ต้องกินยา",
      specialty: "Psychiatry",
      hospital: "Bangkok Mental Health Center",
      experience: "7 years",
      rating: 4.5,
      reviews: 80,
      image: "/",
      status: "Available",
      description:
        "จิตแพทย์ ดูแลปัญหาสุขภาพจิต ภาวะซึมเศร้า วิตกกังวล และพฤติกรรมบำบัด",
      availableSlots: [
        { time: "09:00 AM", available: true },
        { time: "11:00 AM", available: true },
        { time: "01:30 PM", available: false },
        { time: "04:00 PM", available: true },
      ],
    },
    {
      id: "10",
      name: "Dr. นอนแล้ว ยามดึก",
      specialty: "Nephrology",
      hospital: "Vichaiyut Hospital",
      experience: "10 years",
      rating: 4.6,
      reviews: 95,
      image: "/",
      status: "Available",
      description: "ผู้เชี่ยวชาญโรคไต ดูแลผู้ป่วยฟอกไต ภาวะไตวาย และโรคไตเรื้อรัง",
      availableSlots: [
        { time: "08:00 AM", available: true },
        { time: "09:30 AM", available: false },
        { time: "01:00 PM", available: true },
        { time: "03:30 PM", available: false },
      ],
    },
  ];

"use client"
import Image from "next/image";
import box from "../assents/box.png";
import pic2 from "../assents/Background.png";
import { useState } from "react";

//font-[family-name:var(--font-geist-sans)
export default function Home() {
  const [open, setOpen] = useState(0);
  const opened = () => {
    setOpen(open+1);
  }
  if (open == 0) {
  return (
    <div className="flex bg-[#fae8bc] h-screen w-auto justify-center ]">

      <div className="flex flex-col m-auto">
      <div onClick={opened}>
        <button className="animate-wiggle">
        <Image src={box} alt="box" width={250} />
        </button>
      </div>
      <div className="flex justify-center mt-10 text-2xl">
        <h1 className="p-4">กดที่กล่องเพื่อเปิด!!</h1>
        </div>
      
      </div>
    </div>
  );
}  if (open == 1){
  return (
    <div onClick={opened} className="flex bg-[#fae8bc] h-screen w-auto justify-center">
      <div className="flex flex-col m-auto animate-fade-in-up">
      <div className="flex justify-center mt-10 text-2xl">
        <h1 className="p-4">อ๊ะ</h1>
        </div>
      </div>
    </div>
  );
}

if (open == 2){
  return (
    <div onClick={opened} className="flex bg-[#fae8bc] h-screen w-auto justify-center">
      <div className="flex flex-col m-auto animate-fade-in-up">
      <div className="flex justify-center mt-10 text-2xl">
        <h1 className="p-4">กล่องเปล่</h1>
        </div>
      </div>
    </div>
  );
}

if (open == 3){
  return (
    <div onClick={opened} className="flex bg-[#fae8bc] h-screen w-auto justify-center ">
      <div className="flex flex-col m-auto animate-fade-in-up">
      <div className="flex justify-center mt-10 text-2xl">
        <h1 className="p-4">ล้อเล่นนนนนน</h1>
        </div>
      </div>
    </div>
  );
}

if (open == 4){
  return (
    <div className="flex bg-[#fae8bc] h-screen w-auto justify-center ">
      <div className="flex flex-col m-auto animate-fade-in-up">
      <div className="flex justify-center flex-col m-10 text-start gap-4">
        <h1 className="text-2xl ">สุขสันต์วันเกิดนะคั๊บ<br></br>พิอายยยยย❤️</h1>
        <Image  src={pic2} alt="box" width={250} />
        <p className="mt-5">อายุครบ 20 แล้ววว ขอให้ปีนี้มีความสุขมากๆ และขอให้มีรอยยิ้มที่น่ารักแบบนี้ตลอดไป สุขภาพแข็งแรง รักที่สุดเลยยยยยยยยย❤️🍰♡ ༘*.ﾟ🧸🎀</p>
        </div>
      </div>
    </div>
  );
}
}

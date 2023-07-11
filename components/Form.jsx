"use client";
import emailjs from "@emailjs/browser";
import React, { useState, useRef } from "react";

const FormHolder = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

    const service_id = `${process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID}`;
    const template_id = `${process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID}`
    const user_id = `${process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY}`

  const form = useRef();

  const handleSendEmail = async (e) => {
    e.preventDefault();

    try {
      setSending(true);
      await emailjs.sendForm(service_id, template_id, form.current, user_id);
      alert("Your mesage has been successfully sent.");
    } catch (error) {
      console.log(error);
    }
    setName("");
    setEmail("");
    setMessage("");
    setSending(false);
  };

  return (
    <div className="w-[100%] h-[35rem]">
      <div className="flex items-center justify-center">
        <form
          ref={form}
          onSubmit={handleSendEmail}
          className="flex flex-col w-[82%] justify-center"
        >
          <input
            className="block w-[100%] rounded-md h-[3rem] bg-gray-200 border-2 my-[1rem] placeholder:p-[1em]"
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            placeholder={"name"}
            value={name}
            required
          />

          <input
            className="block w-[100%] rounded-md h-[3rem] bg-gray-200 border-2 my-[1rem] placeholder:p-[1em]"
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder={"email"}
            value={email}
            
            required
          />
          {console.log(email)}

          <textarea
            className="block w-[100%] rounded-md h-[9rem] bg-gray-200 border-2 my-[1rem] resize-none placeholder:p-[1em]"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            placeholder={"Write your message..."}
            value={message}
            required
          />
          <div
            className="bg-orange-900 text-slate-100 px-[12px] py-[8px] rounded max-w-[9rem]"
          >
            <input
              type="submit"
              value={sending ? "Sending..." : "Send Message"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormHolder;

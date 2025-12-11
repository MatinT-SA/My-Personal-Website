"use client";

import ContactCard from "./ContactCard";

export default function ContactInfo({ contactInfo }) {
  return (
    <div className="flex justify-center flex-wrap gap-y-12 gap-x-12">
      {contactInfo.map((item, index) => (
        <ContactCard key={index} {...item} />
      ))}
    </div>
  );
}

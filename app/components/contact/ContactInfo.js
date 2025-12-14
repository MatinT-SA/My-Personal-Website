import ContactCard from "./ContactCard";

export default function ContactInfo({ contactInfo }) {
  return (
    <div className="flex justify-center flex-wrap lg:gap-y-12 gap-x-12">
      {contactInfo.map((item, index) => (
        <div
          key={index}
          className="w-full lg:w-[calc(33.333%-32px)] lg:max-w-xs flex justify-center"
        >
          <ContactCard {...item} />
        </div>
      ))}
    </div>
  );
}

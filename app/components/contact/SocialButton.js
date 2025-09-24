import { motion } from "framer-motion";

export default function SocialButton({
  icon: Icon,
  name,
  color,
  href,
  isEven,
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener"
      className="relative flex justify-center items-center h-[60px] w-[60px] mx-5 overflow-hidden bg-yellow-primary rounded-full shadow-md cursor-pointer transition-all duration-300 ease-out group"
      initial={{ opacity: 0, y: isEven ? 20 : -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.4 }}
      whileHover={{ width: "200px" }}
      aria-label={name}
    >
      <div
        className="flex justify-center items-center h-[60px] w-[60px] rounded-full transition-all duration-300 ease-out group-hover:text-white"
        style={{
          transition: "all 0.3s ease-out",
          boxSizing: "border-box",
          backgroundColor: color,
        }}
      >
        <Icon className="text-4xl" />
      </div>
      <span
        className="text-xl font-medium ml-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:ml-5"
        style={{ color: color }}
      >
        {name}
      </span>
    </motion.a>
  );
}

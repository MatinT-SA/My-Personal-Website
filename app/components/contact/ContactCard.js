import { motion } from "framer-motion";

export default function ContactCard({ icon: Icon, title, value, href }) {
  const isLink = href && href !== "#";

  return (
    <motion.div
      className="relative flex flex-1 max-w-[500px] lg:max-w-[300px] h-[140px] bg-purple-primary justify-center items-center cursor-pointer m-5 rounded-md text-white overflow-hidden group"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute text-3xl text-blue-light transition-all duration-400 group-hover:scale-[4] group-hover:opacity-0">
        <Icon />
      </div>

      <div className="card-content absolute inset-0 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-400 group-hover:delay-500">
        <h3 className="text-md text-blue-light font-bold mb-2 translate-y-[-25px] group-hover:translate-y-0 transition-transform duration-300 group-hover:delay-500">
          {title}
        </h3>

        <span className="text-yellow-primary text-sm font-medium translate-y-2.5 group-hover:translate-y-0 transition-transform duration-300 group-hover:delay-500">
          {value}
        </span>
      </div>

      {isLink && (
        <a
          href={href}
          className="absolute inset-0"
          target="_blank"
          rel="noopener"
        >
          <span className="sr-only">{title}</span>
        </a>
      )}
    </motion.div>
  );
}

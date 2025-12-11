import { motion } from "framer-motion";
import { FormInput } from "./FormInput.js";

/**
 * Renders a group of form fields within an animated container.
 * Groups are used to organize related form fields with consistent spacing and animation.
 *
 * @param {Object} props
 * @param {Array} props.fields - Array of field configuration objects
 * @param {string} props.gridClass - Tailwind grid classes for layout
 * @param {number} props.delay - Animation delay in seconds
 * @param {Object} props.formData - Current form data values
 * @param {Function} props.onInputChange - Change handler function
 * @param {string} props.dir - Text direction ("ltr" or "rtl")
 * @returns {JSX.Element}
 */
export function CommentFields({
  fields,
  gridClass,
  delay,
  formData,
  onInputChange,
  dir,
}) {
  const fadeInVariant = {
    offscreen: { opacity: 0, y: 30 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { type: "easeIn", duration: 0.7, delay },
    },
  };

  return (
    <motion.div
      variants={fadeInVariant}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      className={`grid ${gridClass}`}
    >
      {fields.map((field) => (
        <FormInput
          key={field.id}
          id={field.id}
          label={field.label}
          name={field.name}
          type={field.type}
          isTextarea={field.isTextarea}
          value={formData[field.name] || ""}
          onChange={onInputChange}
          customValidationMessage={field.customValidationMessage}
          inputMode={field.inputMode}
          pattern={field.pattern}
          title={field.title}
          required={field.required}
          dir={dir}
        />
      ))}
    </motion.div>
  );
}

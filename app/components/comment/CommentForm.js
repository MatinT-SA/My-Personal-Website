import { useMemo } from "react";
import { CommentFields } from "./CommentFields.js";
import { LiquidButton } from "./LiquidButton.js";
import { getCommentFormFields } from "./commentFormConfig.js";

/**
 * Presentational wrapper for the comment form.
 * Renders all field groups and submit button in the proper sequence.
 *
 * @param {Object} props
 * @param {Object} props.formData - Current form values
 * @param {Function} props.onInputChange - Change handler
 * @param {Function} props.onSubmit - Form submission handler
 * @param {boolean} props.isSubmitting - Submission state
 * @param {Function} props.t - Translation function
 * @param {string} props.dir - Text direction
 * @returns {JSX.Element}
 */
export function CommentForm({
  formData,
  onInputChange,
  onSubmit,
  isSubmitting,
  t,
  dir,
}) {
  const fieldGroups = useMemo(() => getCommentFormFields(t), [t]);

  return (
    <form
      dir={dir}
      autoComplete="off"
      onSubmit={onSubmit}
      className="max-w-6xl mx-auto p-4"
    >
      {fieldGroups.map((group) => (
        <CommentFields
          key={group.groupId}
          fields={group.fields}
          gridClass={group.gridClass}
          delay={group.delay}
          formData={formData}
          onInputChange={onInputChange}
          dir={dir}
        />
      ))}

      <div className="flex justify-center">
        <LiquidButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? t("isSubmitting") : t("submit_button")}
        </LiquidButton>
      </div>
    </form>
  );
}

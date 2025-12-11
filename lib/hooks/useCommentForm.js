import { useState, useCallback } from "react";
import toast from "react-hot-toast";

/**
 * Custom hook for managing comment form state and submission logic.
 * Handles form validation, API submission, error handling, and success notifications.
 *
 * @param {Object} config - Configuration object
 * @param {Function} config.t - Translation function from useTranslations hook
 * @returns {Object} Form state and handlers
 *   @returns {Object} formData - Current form values (name, familyname, email, phonenumber, CommentMessage)
 *   @returns {Function} handleInputChange - Input change handler
 *   @returns {Function} handleSubmit - Form submission handler
 *   @returns {boolean} isSubmitting - Current submission state
 */
export function useCommentForm({ t }) {
  const [formData, setFormData] = useState({
    name: "",
    familyname: "",
    email: "",
    phonenumber: "",
    CommentMessage: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const resetForm = useCallback(() => {
    setFormData({
      name: "",
      familyname: "",
      email: "",
      phonenumber: "",
      CommentMessage: "",
    });
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      const form = e.target;

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      e.preventDefault();
      setIsSubmitting(true);

      try {
        const response = await fetch("/api/message", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          toast.success(t("success_message"), {
            duration: 3000,
            position: "bottom-right",
          });
          resetForm();
        } else {
          const errorData = await response.json();
          const errorMessage = errorData.message || t("error_message");
          toast.error(errorMessage, {
            duration: 3000,
            position: "bottom-right",
          });
          console.error("API response error:", errorData);
        }
      } catch (error) {
        toast.error(t("error_message2"), {
          duration: 4000,
          position: "bottom-right",
        });
        console.error("Fetch failed:", error);
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, t, resetForm]
  );

  return {
    formData,
    handleInputChange,
    handleSubmit,
    isSubmitting,
  };
}

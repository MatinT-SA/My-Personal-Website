/**
 * Form field configuration for the comment form.
 * Each field definition includes id, name, label key, type, and validation rules.
 *
 * @param {Function} t - Translation function from useTranslations hook
 * @returns {Array} Array of field configuration objects
 */
export function getCommentFormFields(t) {
  return [
    {
      groupId: "nameGroup",
      fields: [
        {
          id: "name",
          name: "name",
          label: t("name"),
          type: "text",
          isTextarea: false,
        },
        {
          id: "familyname",
          name: "familyname",
          label: t("lastname"),
          type: "text",
          isTextarea: false,
        },
      ],
      gridClass: "grid-cols-1 md:grid-cols-2 gap-x-6",
      delay: 0.2,
    },
    {
      groupId: "contactGroup",
      fields: [
        {
          id: "CommentEmail",
          name: "email",
          label: t("email"),
          type: "email",
          required: true,
          customValidationMessage: t("valid_email_message"),
          isTextarea: false,
        },
        {
          id: "phonenumber",
          name: "phonenumber",
          label: t("phonenumber"),
          type: "tel",
          inputMode: "numeric",
          pattern: "^(?:\\+?\\d{10,15}|0\\d{9,14}|\\d{10,14})$",
          title: t("valid_phone_message"),
          customValidationMessage: t("valid_phone_message"),
          isTextarea: false,
        },
      ],
      gridClass: "grid-cols-1 md:grid-cols-2 gap-x-8",
      delay: 0.3,
    },
    {
      groupId: "messageGroup",
      fields: [
        {
          id: "CommentMessage",
          name: "CommentMessage",
          label: t("message"),
          type: "text",
          required: true,
          customValidationMessage: "لطفا متن پیام را وارد کنید",
          isTextarea: true,
        },
      ],
      gridClass: "grid-cols-1",
      delay: 0.4,
    },
  ];
}

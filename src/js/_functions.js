import { validateForms } from "./functions/validate-forms";

const afterForm = () => {
  console.log("Произошла отправка");
};

validateForms(".form", afterForm);

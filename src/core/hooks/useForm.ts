import { ChangeEvent, FormEvent, FormEventHandler, useState } from "react";

/**
 *
 * @param callback Callback function
 */
export const useForm = (callback?: Function) => {
  const [values, setValues] = useState({});
  /**
   * Form submit handler
   *
   * Executes the `callback` passed to the useForm hook
   */
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (callback) {
      callback();
    }
  };
  /**
   * A function to update a field value when the input changes
   */
  const inputChangeHandler = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>
  ) => {
    e.persist();

    const { value, type, name } = e.target;

    if (type === "file") {
      setValues((prev) => ({
        ...prev,
        //@ts-ignore
        [name]: [e.target.files!],
      }));
      //@ts-ignore
      numOfImages = e.target.files.length
    }


    setValues((prev) => ({ ...prev, [name]: value }));
  };

  /**
   * Callback to reset the form.
   */
  const resetForm = () => setValues({})

  return {
    values,
    handleSubmit,
    resetForm,
    inputChangeHandler,
  };
};

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
    if(callback) {
      callback();
    }
  };

  /**
   * A function to update a field value when the input changes
   */
  const inputChangeHandler = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    event.persist();
    if (event.target.type === "file") {
      setValues((prev) => ({
        ...prev,
        //@ts-ignore
        [event.target.name]: event.target.files!,
      }));
      
    } else {
      setValues((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
      }));
    }
    if (callback) {
        callback();
      }
  };

  return {
    values,
    handleSubmit,
    inputChangeHandler,
  };
};

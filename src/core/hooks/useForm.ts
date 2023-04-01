import { ChangeEvent, ChangeEventHandler, FormEvent, useState } from "react";

/**
 * useForm hook for forms
 * @param callback Executed in response to the form submit event. This function should be your implementation of what you do with the form data.

 */
export const useForm = (callback?:Function) => {
  const [values, setValues] = useState({});
  const [history, setHistory] = useState<string[]>([]);

  const handleHistoryChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    // Add history if not exist
    if (e.target.checked) {
      setHistory((prev) => {
        if (prev.indexOf(e.target.value) < 0) {
          return [...prev, e.target.value];
        }
        return prev;
      });
    } else {
      setHistory((prev) => {
        prev.splice(prev.indexOf(e.target.value), 1);
        return prev;
      });
    }
  };

  /**
   * Callback fired when the form is submitted.
   * @param event Form submit event.
   */
  const formSubmitHandler = (
    event: FormEvent<HTMLFormElement>,
  ) => {
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
        [name]: Array().concat(e.target.files),
      }));
    }

    setValues((prev) => ({ ...prev, [name]: value }));
    if (e.target.name === "age") {
      setValues((prev) => ({
        ...prev,
        age: Number(parseInt(value)),
      }));
    }

    setValues((prev) => ({
      ...prev,
      history,
    }));
  };

  /**
   * Callback to reset the form.
   */
  const resetForm = () => setValues({});

  return {
    values,
    formSubmitHandler,
    resetForm,
    inputChangeHandler,
    handleHistoryChange,
  };
};

import { ChangeEventHandler, useState } from "react";

export const useHistory = () => {
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

    return {
        history,
        handleHistoryChange
    }
};

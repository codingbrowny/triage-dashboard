import axios from "axios";
import { ChangeEvent, useState } from "react";

export const useCaseImageUpload = () => {
  const [base64List, setBase64List] = useState<any[]>([]);
// Reset the list
  const resetList = () => setBase64List([]);
  //
  const convertToBase64 = (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const { files } = e.target;
      if (files?.length) {
        Array.from(files).forEach(async (blob) => {
          const base64Promise = await new Promise((resolve, reject) => {
            //Instantiate a new File reader
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = reject;
          });

          const { name } = blob;
          setBase64List((prev) => [...prev, { name, base64: base64Promise }]);
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const uploadImages = async () => {
    try {
      const promise = base64List.map((item) => {
        const { name, base64 } = item;
        return axios.post("https://case-consult-dev.bashiru1.com/upload", {
          fileName: name,
          base64,
        });
      });

      const responses = await Promise.all(promise);
      const imageUrls: any[] = [];
      responses.forEach((response) => {
        imageUrls.push(response.data.url);
      });
      return imageUrls;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    convertToBase64,
    uploadImages,
    base64List,
    resetList
  };
};

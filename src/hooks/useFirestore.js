import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useFirstore = (collection) => {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    projectFirestore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        let documents = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDocs(documents);
      });
  }, [collection]);
  return { docs };
};

export default useFirstore;

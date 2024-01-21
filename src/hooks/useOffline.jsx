import { useEffect, useState } from "react";

const useOffline = () => {
  const [isOffline, setIsOffline] = useState(false);
  useEffect(() => {
    window.addEventListener("offline", () => setIsOffline(true));
    window.addEventListener("online", () => setIsOffline(false));

    return () => {
      window.removeEventListener("offline", () => setIsOffline(false));
      window.removeEventListener("online", () => setIsOffline(false));
    };
  }, []);

  return { isOffline };
};

export default useOffline;

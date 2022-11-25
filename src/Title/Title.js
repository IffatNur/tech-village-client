import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Tech-Village-${title}`;
  }, [title]);
};
export default useTitle;

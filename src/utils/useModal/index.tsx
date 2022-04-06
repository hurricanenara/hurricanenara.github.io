import React from "react";

export default function useModal(initialIsVisible: boolean) {
  const [isModalOpen, setIsModalOpen] = React.useState(initialIsVisible);
  const ref = React.useRef(null);

  //   @ts-ignore
  const handleClickOutside = (event) => {
    //   @ts-ignore
    if (ref.current && !ref.current.contains(event.target)) {
      setIsModalOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return { ref, isModalOpen, setIsModalOpen };
}

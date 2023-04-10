import React, { useEffect, useState } from "react";
import { BsArrowUpShort } from "react-icons/bs";

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="fixed bottom-10 right-10">
      <button
        type="button"
        onClick={scrollToTop}
        className={classNames(
          isVisible ? "opacity-100" : "opacity-0",
          "inline-flex items-center p-3 rounded-full shadow-lg shadow-green-600/40 bg-white transition-opacity hover:bg-primary-300 focus:outline-none"
        )}
      >
        <BsArrowUpShort className="h-6 w-6 text-green-500" aria-hidden="true" />
      </button>
    </div>
  );
}

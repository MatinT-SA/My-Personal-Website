import { useState } from "react";

export default function useAnimatedMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const openMenu = () => {
    setIsVisible(true);
    setTimeout(() => setIsOpen(true), 10);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  return { isOpen, isVisible, openMenu, closeMenu };
}

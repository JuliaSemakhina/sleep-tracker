import React, { useState } from 'react';

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  const toggle = () => setIsShowing(!isShowing);
  const close = () => setIsShowing(false);
  const open = () => setIsShowing(true);

  return { setIsShowing, isShowing, toggle, open, close };
};

export default useModal;

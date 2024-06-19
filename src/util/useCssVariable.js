import { useEffect } from 'react';

// 設定css變數
const useCssVariable = (variable, value) => {
  useEffect(() => {
    document.documentElement.style.setProperty(variable, value);
  }, [variable, value]);
};

export default useCssVariable;

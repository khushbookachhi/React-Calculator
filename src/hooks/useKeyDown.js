import { useEffect } from 'react';
// function for handling keydown event
const useKeydown = (callback) => {
  useEffect(() => {
    const handleKeydown = (event) => {
      callback(event);
    };
//calling keydown event 
    document.addEventListener('keydown', handleKeydown);

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [callback]);
};

export default useKeydown;

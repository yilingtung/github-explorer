import { useEffect, MutableRefObject, useRef } from 'react';

type HandleClickOutsideFunc = (this: Document, ev: MouseEvent) => void;

type RefType =
  | MutableRefObject<HTMLElement | null>
  | MutableRefObject<HTMLElement | null>[];

const useOnClickOutside = (
  relativeRef: RefType,
  callback: (e: MouseEvent) => void,
  disabled = false
) => {
  const registerRef = useRef(false);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    const handleClickOutside: HandleClickOutsideFunc = (ev) => {
      if (Array.isArray(relativeRef)) {
        for (let index = 0; index < relativeRef.length; index += 1) {
          const ref = relativeRef[index] as MutableRefObject<HTMLElement>;
          if (!ref.current || ref.current.contains(ev.target as Node)) {
            return;
          }
        }
      } else if (
        !relativeRef.current ||
        relativeRef.current.contains(ev.target as Node)
      ) {
        return;
      }

      callback(ev);
    };

    /**
     * Bind the event listener
     */
    if (!disabled) {
      document.addEventListener('mousedown', handleClickOutside);
      registerRef.current = true;
    }

    return () => {
      /**
       * Unbind the event listener on clean up
       */
      if (registerRef.current) {
        document.removeEventListener('mousedown', handleClickOutside);
        registerRef.current = false;
      }
    };
  }, [relativeRef, disabled, callback]);
};

export default useOnClickOutside;

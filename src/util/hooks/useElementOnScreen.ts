import { RefObject, useEffect, useRef, useState } from 'react';

const useElementOnScreen = <T extends Element>(
  options?: IntersectionObserverInit
): [RefObject<T>, boolean] => {
  const targetRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  const observeCallback: IntersectionObserverCallback = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const { current: target } = targetRef;
    if (!target) return undefined;

    if (!('IntersectionObserver' in window)) return undefined;

    const observer = new IntersectionObserver(observeCallback, options);
    observer.observe(target);

    return () => observer.unobserve(target);
  }, [targetRef, options]);

  return [targetRef, isVisible];
};

export default useElementOnScreen;

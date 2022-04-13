import {useState, useLayoutEffect} from 'react';

export default function useWindowPosition(id) {
    const [animation, setAnimation ] = useState(false);

    useLayoutEffect(() => {
       function updatePosition() {
           const offetsetHeight = window.document.getElementById(id).offsetHeight;
           if(window.pageYOffset > offetsetHeight * 0.7) {
               setAnimation(true)
           }
       }
       window.addEventListener('scroll', updatePosition);
       updatePosition();
       return () => window.removeEventListener('scroll', updatePosition);
    }, [id]);
    return animation;
}
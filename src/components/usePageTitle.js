import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const titles = {
    '/': "Spyde - Portfolio",
    '/projects': "Spyde - Projects",
    '/contact': "Spyde - Contact",
    '/gallery': "Spyde - Gallery"
};

function usePageTitle(){
    const location = useLocation();
    const title = titles[location.pathname] || 'Spyde';

    useEffect (() => {
        document.title = title;
    }, [location, title]);
}

export default usePageTitle;
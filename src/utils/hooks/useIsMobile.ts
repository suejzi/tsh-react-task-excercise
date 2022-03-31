import {useEffect, useState} from 'react';

const getIsMobile = () => window.innerWidth <= 768;

export default function useIsMobile() {
	const [isMobile, setIsMobile] = useState<boolean>(getIsMobile());

	useEffect(() => {
		const onResize = () => {
			setIsMobile(getIsMobile());
		}

		window.addEventListener("resize", onResize);

		return () => {
			window.removeEventListener("resize", onResize);
		}
	}, []);

	return isMobile;
}
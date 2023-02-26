import { useState, useEffect } from 'react';

export default function useDeviceCheck() {
    const [deviceDetail, setDeviceDetail] = useState({});

    useEffect(() => {
        if (
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                window.navigator.userAgent
            )
        ) {
            setDeviceDetail({
                isMobile: true,
            });
        } else {
            setDeviceDetail({
                isMobile: false,
            });
        }
    }, []);

    return deviceDetail;
}

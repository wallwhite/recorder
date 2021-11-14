import React from 'react';
import { SvgIcon } from 'app/features/Icons/components';

const CameraSettingIcon: React.FC = () => (
    <SvgIcon width="24" height="24" viewBox="0 0 24 24">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.6 4C2.64522 4 1.72955 4.37928 1.05442 5.05442C0.379285 5.72955 0 6.64522 0 7.6V17.2C0 18.1548 0.379285 19.0705 1.05442 19.7456C1.72955 20.4207 2.64522 20.8 3.6 20.8H14.4C15.3548 20.8 16.2705 20.4207 16.9456 19.7456C17.6207 19.0705 18 18.1548 18 17.2V15.2968L20.928 18.2248C22.0608 19.3588 24 18.5548 24 16.9516V7.8484C24 6.2452 22.0608 5.4412 20.928 6.5764L18 9.502V7.6C18 6.64522 17.6207 5.72955 16.9456 5.05442C16.2705 4.37928 15.3548 4 14.4 4H3.6Z"
            fill="currentColor"
        />
    </SvgIcon>
);

export default CameraSettingIcon;

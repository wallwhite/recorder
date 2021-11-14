import React from 'react';
import { SvgIcon } from 'app/features/Icons/components';

const StopIcon: React.FC = () => (
    <SvgIcon width="24" height="24" viewBox="0 0 24 24">
        <path
            d="M7 5H17C17.5304 5 18.0391 5.21071 18.4142 5.58579C18.7893 5.96086 19 6.46957 19 7V17C19 17.5304 18.7893 18.0391 18.4142 18.4142C18.0391 18.7893 17.5304 19 17 19H7C6.46957 19 5.96086 18.7893 5.58579 18.4142C5.21071 18.0391 5 17.5304 5 17V7C5 6.46957 5.21071 5.96086 5.58579 5.58579C5.96086 5.21071 6.46957 5 7 5V5Z"
            fill="currentColor"
        />
    </SvgIcon>
);

export default StopIcon;

import styled from 'styled-components';
import { Panel } from 'rsuite';

export const RecorderWrapperPanel = styled(Panel)`
    padding: 0;
    overflow: hidden;
    position: relative;
    > .rs-panel-body {
        padding: 0;
        display: flex;
        flex-direction: column;
        height: fit-content;
    }
`;

export const RecordingVideoPreview = styled.video`
    width: 100%;
    height: auto;
    opacity: 0;
    transition: opacity 0.5s;
    &.active {
        opacity: 1;
    }
`;

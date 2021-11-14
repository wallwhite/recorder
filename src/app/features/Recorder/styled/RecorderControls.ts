import styled, { createGlobalStyle } from 'styled-components';

import { IconButton } from 'rsuite';

export const RecorderControlsWrapper = styled.div`
    position: relative;
    background: rgb(0, 0, 0);
    height: 80px;
    width: 100%;
`;

export const RecorderControlsTimer = styled.div`
    font-size: 20px;
    display: flex;
`;

export const PreviewControlsWrapper = styled(RecorderControlsWrapper)`
    justify-content: start;
`;

export const RecorderTimeDivider = styled.span`
    margin: 0 10px; ;
`;

export const RecorderButton = styled(IconButton)`
    width: 50px;
    height: 50px;
    margin: 0 10px;
`;

export const RecordingPreviewProgressBarWrapper = styled.div`
    position: absolute;
    top: -10px;
    left: 0;
    width: 100%;
    & > .rs-progress {
        padding: 0;
    }
    .rs-progress-line-outer,
    .rs-progress-line-inner {
        border-radius: 0;
    }
    .rs-progress-line-bg {
        transition: none;
    }
`;

type RecordingControlsWrapperProps = {
    justify: 'center' | 'flex-start' | 'flex-end';
};

export const RecordingControlsWrapper = styled.div<RecordingControlsWrapperProps>`
    background: #000;
    position: relative;
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: ${(props: RecordingControlsWrapperProps): string => props.justify};
`;

export const RecordingControlsStyles = createGlobalStyle`
.recording-controls-enter {
  opacity: 0;
}
.recording-controls-enter-active{
  opacity: 1;
  transition: all 0.3s;
} 
.recording-controls-enter-done {
  opacity: 1;
}
.recording-controls-exit {
  opacity: 1;
}
.recording-controls-exit-active {
  opacity: 0;
  transition: all 0.3s;
}
`;

export const RecorderTimerStyles = createGlobalStyle`
.recording-timer {
  opacity: 0;
  visibility: hidden;
  position: absolute;
}
.recording-timer-enter {
  opacity: 0;
  visibility: visible;
  transform: translateX(0);
}
.recording-timer-enter-active {
  opacity: 1;
  transform: translateX(80px);
  transition: all 0.3s;
}
.recording-timer-enter-done {
  opacity: 1;
  visibility: visible;
  transform: translateX(80px);
}
.recording-timer-exit {
  opacity: 1;
  transform: translateX(80px);
}
.recording-timer-exit-active {
  opacity: 0;
  transform: translateX(0);
  transition: all 0.3s;
}
`;

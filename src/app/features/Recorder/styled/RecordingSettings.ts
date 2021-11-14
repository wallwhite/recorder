import { Modal, FlexboxGrid, SelectPicker } from 'rsuite';
import styled from 'styled-components';

export const RecordingSettingsWrapper = styled.div`
    z-index: 2;
    position: absolute;
    display: flex;
    justify-content: flex-end;
    top: 0;
    left: 0;
    padding: 16px 20px;
    height: 80px;
    width: 100%;
    background: rgb(0, 0, 0);
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.8) -50%, rgba(255, 255, 255, 0) 100%);
`;

export const RecordingSettingModal = styled(Modal)`
    top: 50%;
    & > div {
        transform: translateY(-50%);
    }
`;

export const RecordingSettingGroup = styled(FlexboxGrid)`
    flex-direction: column;
`;

export const RecordingSettingRow = styled(FlexboxGrid.Item)`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
`;

export const RecordingSettingSelect = styled(SelectPicker)`
    width: 100%;
`;

export const RecordingSettingIconWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px;
`;

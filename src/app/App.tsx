import React from 'react';
import { CustomProvider, Container, Content, FlexboxGrid } from 'rsuite';
import styled from 'styled-components';
import { Recorder } from 'app/features/Recorder/components';
import { RecorderContextProvider } from 'app/features/Recorder/context';
import 'rsuite/dist/rsuite.min.css';

const StyledFlexboxGrid = styled(FlexboxGrid)`
    height: 100vh;
`;

const App: React.FC = () => (
    <CustomProvider theme="dark">
        <Container>
            <Content>
                <StyledFlexboxGrid justify="center" align="middle">
                    <FlexboxGrid.Item colspan={12}>
                        <RecorderContextProvider>
                            <Recorder />
                        </RecorderContextProvider>
                    </FlexboxGrid.Item>
                </StyledFlexboxGrid>
            </Content>
        </Container>
    </CustomProvider>
);

export default App;

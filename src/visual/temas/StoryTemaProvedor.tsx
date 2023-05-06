import { ThemeProvider } from "@mui/material";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import tema from "./temas";
const StoryTemaProvedor = (funcaoStory: any) => (
    <ThemeProvider theme={tema}>
        <EmotionThemeProvider theme={tema}>{funcaoStory()}</EmotionThemeProvider>
    </ThemeProvider>
);
export default StoryTemaProvedor;

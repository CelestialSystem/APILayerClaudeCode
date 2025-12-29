import "@mui/material/styles";

type ColorRange = Record<50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900, string>;

declare module "@mui/material/styles" {
    interface Palette {
        blue: ColorRange;
        navy: ColorRange;
        neutral: ColorRange;
        red: ColorRange;
        green: ColorRange;
        orange: ColorRange;
        bg: {
            main: string;
        };
    }
    interface PaletteOptions {
        blue?: ColorRange;
        navy?: ColorRange;
        neutral?: ColorRange;
        red?: ColorRange;
        green?: ColorRange;
        orange?: ColorRange;
        bg?: {
            main: string;
        };
    }

}
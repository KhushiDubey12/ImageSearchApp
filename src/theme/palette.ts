import { alpha, PaletteColorOptions, PaletteOptions } from '@mui/material';

const GREY = {
    0: '#FFFFFF',
    100: '#F9FAFB',
    200: '#F4F6F8',
    300: '#DFE3E8',
    400: '#C4CDD5',
    500: '#919EAB',
    600: '#637381',
    700: '#454F5B',
    800: '#212B36',
    900: '#161C24',
    500_8: alpha('#919EAB', 0.08),
    500_12: alpha('#919EAB', 0.12),
    500_16: alpha('#919EAB', 0.16),
    500_24: alpha('#919EAB', 0.24),
    500_32: alpha('#919EAB', 0.32),
    500_48: alpha('#919EAB', 0.48),
    500_56: alpha('#919EAB', 0.56),
    500_80: alpha('#919EAB', 0.8)
};

const PRIMARY: PaletteColorOptions = {
    light: '#5BE584',
    main: '#F33879',
    dark: '#007B55',
    contrastText: '#fff'
};

const SECONDARY: PaletteColorOptions = {
    light: '#84A9FF',
    main: '#FFFFFF',
    dark: '#1939B7',
    contrastText: '#fff'
};

const INFO: PaletteColorOptions = {
    light: '#74CAFF',
    main: '#979797',
    dark: '#0C53B7',
    contrastText: '#fff'
};

const SUCCESS: PaletteColorOptions = {
    light: '#AAF27F',
    main: '#00D57F',
    dark: '#229A16',
    contrastText: GREY[800]
};
const WARNING: PaletteColorOptions = {
    light: '#FFE16A',
    main: '#FFC107',
    dark: '#B78103',
    contrastText: GREY[800]
};
const ERROR: PaletteColorOptions = {
    light: '#FFA48D',
    main: '#FF4842',
    dark: '#B72136',
    contrastText: '#fff'
};

export const palette: PaletteOptions = {
    common: { black: '#000', white: '#fff' },
    primary: { ...PRIMARY },
    secondary: { ...SECONDARY },
    info: { ...INFO },
    success: { ...SUCCESS },
    warning: { ...WARNING },
    error: { ...ERROR },
    grey: GREY,
    divider: GREY[500_24],
    text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
    background: { paper: '#fff', default: '#fff' },
    action: {
        active: GREY[600],
        hover: GREY[500_8],
        selected: GREY[500_16],
        disabled: GREY[500_80],
        disabledBackground: GREY[500_24],
        focus: GREY[500_24],
        hoverOpacity: 0.08,
        disabledOpacity: 0.48
    }
};

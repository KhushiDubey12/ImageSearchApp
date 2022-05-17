import { Components, Theme } from '@mui/material';

export function Button(theme: Theme): Components {
    return {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '12px',
                    backgroundColor: theme.palette.common.black,
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    fontSize: '24px',
                    width: '135px',
                    height: '54px',
                    marginLeft: '19px',
                    fontStyle: 'normal',
                    alignItems: 'center',
                    padding: '14px 70px'
                }
            }
        }
    };
}

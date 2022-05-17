import { Box } from '@mui/material';
import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useTranslation } from 'react-i18next';

export function Favorites(): React.ReactElement {
    const { t } = useTranslation();
    return (
        <Box sx={{ display: 'flex', marginLeft: '1100px', marginBottom: '10px' }}>
            <FavoriteIcon />
            <button
                style={{
                    color: 'white',
                    background: 'none',
                    border: 'none',
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '16px',
                    marginLeft: '5px'
                }}>
                {t('favoritesButtonText')}
            </button>
        </Box>
    );
}

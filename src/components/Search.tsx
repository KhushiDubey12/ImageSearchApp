import { Box } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function Search(): React.ReactElement {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const goToSearch = (): void => {
        navigate('/');
    };
    return (
        <Box sx={{ display: 'flex', marginLeft: '50px', marginBottom: '10px' }}>
            <SearchIcon />
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
                }}
                onClick={goToSearch}>
                {t('searchButtonText')}
            </button>
        </Box>
    );
}

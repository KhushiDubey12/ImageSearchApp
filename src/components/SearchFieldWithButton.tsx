import React, { useState } from 'react';
import {
    Box,
    InputAdornment,
    InputBase,
    Typography,
    styled,
    Button,
    CircularProgress
} from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const SearchFieldBox = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '50px',
    paddingBottom: '8px',
    minWidth: '600px'
});

const SearchFormField = styled(InputBase)(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
    textTransform: 'none',
    padding: '5px 0px 5px 20px',
    maxWidth: '505px',
    width: '100%',
    height: '56px',
    borderRadius: '12px'
}));

export const SearchFieldWithButton = (): React.ReactElement => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isEmpty, setFieldEmpty] = useState(false);
    const [loading, setLoading] = useState(false);
    const { t } = useTranslation();
    const navigate = useNavigate();

    const isSearchFieldEmpty = (): void => {
        if (!searchQuery) {
            setFieldEmpty(true);
            setLoading(false);
        } else {
            setLoading(true);
            navigate(`/searchresults/${searchQuery}`);
        }
    };

    return (
        <Box>
            <SearchFieldBox>
                <SearchFormField
                    autoFocus
                    placeholder={t('emptyStateText')}
                    value={searchQuery}
                    onChange={(event): void => {
                        setSearchQuery(event.target.value);
                        setFieldEmpty(false);
                    }}
                    startAdornment={
                        <InputAdornment position="start">
                            <SearchOutlinedIcon />
                        </InputAdornment>
                    }
                />
                <Button variant="contained" color="secondary" onClick={isSearchFieldEmpty}>
                    {t('searchButtonText')}
                </Button>
            </SearchFieldBox>
            {isEmpty ? (
                <Typography sx={{ marginLeft: '10px' }} variant="body2">
                    {t('emptyStateErrorMessage')}
                </Typography>
            ) : null}
            <Box
                sx={{
                    justifyContent: 'center',
                    marginLeft: '250px',
                    marginTop: '57px'
                }}>
                {loading ? <CircularProgress color="secondary" /> : null}
            </Box>
        </Box>
    );
};

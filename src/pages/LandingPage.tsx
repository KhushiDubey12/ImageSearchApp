import React from 'react';
import { Typography, Box, styled } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { SearchFieldWithButton } from '../components/SearchFieldWithButton';
import LanguageIcon from '../assets/LanguageIcon.png';
import { DropdownTranslation } from '../components/DropdownTranslation';

const BackgroundBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: '100%'
}));

const ContentBox = styled(Box)(({ theme }) => ({
    color: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}));

export function LandingPage(): React.ReactElement {
    const { t } = useTranslation();
    return (
        <BackgroundBox>
            <ContentBox>
                <Box sx={{ display: 'flex' }}>
                    <img
                        style={{ marginTop: '49px', marginLeft: '1236px', marginBottom: '25px' }}
                        src={LanguageIcon}
                    />
                    <DropdownTranslation />
                </Box>
                <Typography
                    style={{
                        marginRight: '60px',
                        fontFamily: 'Pacifico',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '56px',
                        lineHeight: '24px',
                        color: 'common.white',
                        marginTop: '190px'
                    }}>
                    {t('landingPageTitle')}
                </Typography>
                <SearchFieldWithButton />
            </ContentBox>
        </BackgroundBox>
    );
}

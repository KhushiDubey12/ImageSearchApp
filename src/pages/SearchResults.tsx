import { AppBar, Box, CssBaseline, Toolbar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { Favorites } from '../components/Favorites';
import { Search } from '../components/Search';
import axios from 'axios';

export const SearchResults = (): React.ReactElement => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { searchQuery } = useParams();
    const [pictures, setPicture] = useState([]);
    const FlickrCall = (): void => {
        axios
            .get(
                ` https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=5f0191bf96559f5b5130ad4bdb3fdb1b&text=${searchQuery}&per_page=12&page=1&format=json&nojsoncallback=1`
            )
            .then((response) => {
                const picArray = response.data.photos.photo.map(
                    (pic: {
                        farm: string;
                        server: string;
                        id: React.Key | null | undefined;
                        secret: string;
                    }) => {
                        const srcPath =
                            'https://farm' +
                            pic.farm +
                            '.staticflickr.com/' +
                            pic.server +
                            '/' +
                            pic.id +
                            '_' +
                            pic.secret +
                            '.jpg';
                        return (
                            <img
                                key={pic.id}
                                style={{
                                    width: '375px',
                                    marginLeft: '7px',
                                    height: '220px',
                                    float: 'left',
                                    objectFit: 'cover',
                                    marginTop: '7px'
                                }}
                                src={srcPath}></img>
                        );
                    }
                );
                setPicture(picArray);
            });
    };
    useEffect(() => {
        FlickrCall();
    }, []);
    return (
        <div>
            <AppBar
                position="sticky"
                sx={{
                    backgroundColor: 'primary.main',
                    height: '56px',
                    boxShadow: '0px -1px 0px #E3E4EB inset',
                    width: '1536px'
                }}>
                <CssBaseline />
                <Toolbar>
                    <Box sx={{ flexGrow: 1, borderColor: 'divider', display: 'flex' }}>
                        <div
                            style={{
                                fontFamily: 'Roboto',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                fontSize: '16px',
                                whiteSpace: 'nowrap'
                            }}>
                            {t('resultsText')} {searchQuery}
                        </div>
                        <Favorites />
                        <Search />
                    </Box>
                </Toolbar>
            </AppBar>
            {pictures}
        </div>
    );
};

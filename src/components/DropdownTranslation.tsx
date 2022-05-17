import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { Box, Button, Menu, MenuItem, Typography, Divider } from '@mui/material';
import React, { useState } from 'react';
import i18next from 'i18next';

const localisation = [
    {
        title: 'English',
        value: 'en'
    },
    {
        title: 'Français',
        value: 'fr'
    }
];
export const DropdownTranslation = (): React.ReactElement => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const open = Boolean(anchorEl);

    const handleClickListItem = (event: React.MouseEvent<HTMLElement>): void => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (index: number): void => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    const handleClose = (): void => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ marginTop: '33px' }}>
            <Button
                disableTouchRipple={true}
                onClick={handleClickListItem}
                sx={{ backgroundColor: 'primary.main', color: 'white' }}>
                <Typography
                    sx={{
                        color: 'white',
                        paddingRight: '18px',
                        fontFamily: 'Roboto',
                        fontStyle: 'regular',
                        fontWeight: 400
                    }}>
                    {localisation[selectedIndex].title}
                </Typography>
                {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </Button>
            <Menu elevation={2} anchorEl={anchorEl} open={open} onClose={handleClose}>
                {localisation.map((language, index) => (
                    <MenuItem
                        key={language.value}
                        onClick={(event: React.MouseEvent<HTMLLIElement, MouseEvent>): void => {
                            handleMenuItemClick(index);
                            i18next.changeLanguage(localisation[index].value);
                        }}>
                        <Typography
                            color={index === selectedIndex ? 'common.black' : undefined}
                            sx={{
                                width: '90px',
                                fontFamily: 'Roboto',
                                fontStyle: 'regular',
                                fontWeight: 400
                            }}>
                            {language.title}
                        </Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
};

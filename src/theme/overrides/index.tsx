import { merge } from 'lodash';
import { Components, Theme } from '@mui/material';
import { Button } from './Button';

export function ComponentsOverrides(theme: Theme): Components {
    // Material UI component overrides
    // The components theat need to be overriden has to be put in its own file and imported here.
    return merge(Button(theme));
}

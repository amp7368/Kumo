import { PropsJustChildren } from '@appleptr16/elemental';
import { AppBar, Button, Stack, Typography } from '@mui/material';
import { Box } from '@mui/material';

import { RouteInfo } from '../../../../routes/RouteInfo';
import { AllRoutes } from '../../../../routes/routes';

function AppBarLink({ route }: { route: RouteInfo }): JSX.Element {
    const changeRoute = () => window.location.replace(route.props.link);
    return (
        <Button color="secondary" variant="text" onClick={changeRoute}>
            <Typography color="primary.contrastText">
                {route.getName()}
            </Typography>
        </Button>
    );
}
export const TopNavigation = () => {
    const buttons = [AllRoutes.HomeRoute, AllRoutes.DesignRoute].map(
        (route) => <AppBarLink route={route} />
    );
    return (
        <Box display={'inline-block'}>
            <AppBar variant="outlined">
                <Stack direction="row">{buttons}</Stack>
            </AppBar>
        </Box>
    );
};

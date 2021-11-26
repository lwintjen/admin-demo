import { DataGrid } from '@mui/x-data-grid';
import { darken, lighten, makeStyles } from '@mui/material/styles';

const columns = [
    { field: 'id', headerName: 'ID', width: 120 },
    { field: 'firstName', headerName: 'First name', width: 150 },
    { field: 'lastName', headerName: 'Last name', width: 150 },
    {
        field: 'phoneNumber',
        headerName: 'Phone number',
        width: 200,
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 400,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        width: 300,
    },
    {
        field: 'location',
        headerName: 'Location',
        width: 400,
    },
];

const useStyles = makeStyles(
    (theme) => {
        const getBackgroundColor = (color) =>
            theme.palette.mode === 'dark' ? darken(color, 0.6) : lighten(color, 0.6);

        const getHoverBackgroundColor = (color) =>
            theme.palette.mode === 'dark' ? darken(color, 0.5) : lighten(color, 0.5);

        return {
            root: {
                '& .super-app-theme--Open': {
                    backgroundColor: getBackgroundColor(theme.palette.info.main),
                    '&:hover': {
                        backgroundColor: getHoverBackgroundColor(theme.palette.info.main),
                    },
                },
                '& .super-app-theme--Filled': {
                    backgroundColor: getBackgroundColor(theme.palette.success.main),
                    '&:hover': {
                        backgroundColor: getHoverBackgroundColor(theme.palette.success.main),
                    },
                },
                '& .super-app-theme--PartiallyFilled': {
                    backgroundColor: getBackgroundColor(theme.palette.warning.main),
                    '&:hover': {
                        backgroundColor: getHoverBackgroundColor(theme.palette.warning.main),
                    },
                },
                '& .super-app-theme--Rejected': {
                    backgroundColor: getBackgroundColor(theme.palette.error.main),
                    '&:hover': {
                        backgroundColor: getHoverBackgroundColor(theme.palette.error.main),
                    },
                },
            },
        };
    },
);

export default function DataTable(props) {
    const { rows } = props;
    const classes = useStyles();

    return (
        <div style={{ height: '100vh', width: '100%' }} className={classes.root}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={50}
                rowsPerPageOptions={[10]}
                checkboxSelection
            />
        </div>
    );
}

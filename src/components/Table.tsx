import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function DataTable(props: any) {
    const { rows } = props;
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>FirstName</TableCell>
                        <TableCell align="right">LastName</TableCell>
                        <TableCell align="right">Phone number</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Location</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row: any) => (
                        <TableRow
                            key={row[0]}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row[1]}
                            </TableCell>
                            <TableCell align="right">{row[2]}</TableCell>
                            <TableCell align="right">{row[3]}</TableCell>
                            <TableCell align="right">{row[4]}</TableCell>
                            <TableCell align="right">{row[5]}</TableCell>
                            <TableCell align="right">{row[9]}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

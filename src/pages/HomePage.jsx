import { useState, useEffect } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from "@mui/material";
import SignIn from './SignIn';
import DenseAppBar from "../components/AppBar";
import DataTable from "../components/Table";

import { api } from "../api/api";

function CircularIndeterminate() {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <CircularProgress />
        </Box>
    );
}

export default function HomePage() {
    const [user, setUser] = useState();
    const [data, setData] = useState();

    const fetchData = async () => {
        const res = await api.getData(user.id);
        if (res && res.length > 0) {
            const processedData = [];
            res.forEach((r) => {
                processedData.push({
                    'id': r[0],
                    'firstName': r[1],
                    'lastName': r[2],
                    'phoneNumber': r[3],
                    'email': r[4],
                    'fullName': r[5],
                    'location': r[9],
                });
            });
            setData(processedData);
        }
    };
    useEffect(() => {
        if (user) fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    if (!user)
        return <SignIn setUser={setUser} />;

    if (!data)
        return CircularIndeterminate();

    return (
        <>
            <DenseAppBar user={user} setUser={setUser} />
            <DataTable rows={data} />
        </>);
}
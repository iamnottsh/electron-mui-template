import {Badge, Button, Container, Typography} from "@mui/material";
import React, {useState} from "react";

function Site() {
    const [counter, setCounter] = useState(0)

    return (
        <Container component="main">
            <Typography variant="h1">
                Electron + MUI
            </Typography>
            <Badge badgeContent={counter} color="secondary">
                <Button
                    variant="contained"
                    onClick={() => {
                        setCounter(counter + 1)
                    }}
                >
                    点我
                </Button>
            </Badge>
        </Container>
    )
}

export default Site

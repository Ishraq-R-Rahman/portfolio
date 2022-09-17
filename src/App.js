import "./App.css";
import { Container, Grid } from "@mui/material";
import { Header, Footer, Profile } from "./components";
import { Projects, Research } from "./pages";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
    return (
        <Container className="top_60">
            <Grid container spacing={7}>
                <Grid item xs={12} sm={12} md={4} lg={3.5}>
                    <Profile />
                </Grid>
                <Grid item xs style={{backgroundColor: "red"}}>
                    <Header />
                    <Router>
                        <Routes>
                            <Route path="/portfolio" element={<Research />} />
                            <Route
                                path="/portfolio/projects"
                                element={<Projects />}
                            />
                        </Routes>
                    </Router>
                    <Footer />
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;

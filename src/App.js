import "./App.css";
import { Container, Grid } from "@mui/material";
import { Header, Footer, Profile } from "./components";
import { Projects, Research, Histroy, About, Contact } from "./pages";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <Container className="top_60">
            <Grid container spacing={7}>
                <Grid item xs={12} sm={12} md={4} lg={3.5}>
                    <Profile />
                </Grid>
                <Grid item xs>
                    <Router>
                        <Header />
                        <div className="main-content container_shadow">
                            <Routes>
                                <Route path="/portfolio" element={<About />} />
                                <Route
                                    path="/portfolio/history"
                                    element={<Histroy />}
                                />
                                <Route
                                    path="/portfolio/research"
                                    element={<Research />}
                                />
                                <Route
                                    path="/portfolio/projects"
                                    element={<Projects />}
                                />
                                <Route
                                    path="/portfolio/contact"
                                    element={<Contact />}
                                />
                            </Routes>
                        </div>
                    </Router>
                    <Footer />
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;

import React from "react";
import "./About.css";
import { Grid, Typography } from "@mui/material";
import portfolioData from "../../utils/portfolioData";

const About = () => {
    return (
        <>
            <Grid container className="section pb-45">
                <Grid item className="section_title mb-30">
                    <span></span>
                    <h6 className="section_title_text">About Me</h6>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body2" className="aboutme_text">
                        {portfolioData.about}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container className="section">
                <Grid item className="section_title mb-30">
                    <span></span>
                    <h6 className="section_title_text">Research Interests</h6>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body2" className="aboutme_text">
                        {portfolioData.interest}
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
};

export default About;

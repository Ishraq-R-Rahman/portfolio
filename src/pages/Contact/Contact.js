import { Grid, TextField, Typography } from "@mui/material";
import CustomButton from "../../components/Button/CustomButton";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import portfolioData from "../../utils/portfolioData";
import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <Grid container className="section pb-45" spacing={6}>
            <Grid item xs={12} lg={7}>
                <Grid item className="section_title mb-30">
                    <span></span>
                    <h6 className="section_title_text">Contact Form</h6>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="standard"
                                fullWidth
                                name="name"
                                label="Name"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="standard"
                                fullWidth
                                name="email"
                                label="E-mail"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="standard"
                                fullWidth
                                name="message"
                                label="Message"
                                multiline
                                rows={4}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <CustomButton
                                text="Submit"
                                icon={<DoneAllIcon />}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} lg={5}>
                <Grid item className="section_title mb-30">
                    <span></span>
                    <h6 className="section_title_text">Contact Informations</h6>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <Typography
                                variant="body2"
                                className="contactInfo_item"
                            >
                                <span>Address: </span> {portfolioData.address}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                variant="body2"
                                className="contactInfo_item"
                            >
                                <span>Email: </span> {portfolioData.email}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                variant="body2"
                                className="contactInfo_item"
                            >
                                <span>Phone: </span> {portfolioData.contact}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                variant="body2"
                                className="contactInfo_item"
                            >
                                <span>Github: </span>{" "}
                                {portfolioData.socials["Github"].link}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid
                                container
                                spacing={2}
                                className="contactInfo_socialsContainer"
                            >
                                {Object.keys(portfolioData.socials).map(
                                    (key) => (
                                        <Grid
                                            item
                                            key={key}
                                            className="contactInfo_social"
                                        >
                                            <a
                                                href={
                                                    portfolioData.socials[key]
                                                        .link
                                                }
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                {
                                                    portfolioData.socials[key]
                                                        .icon
                                                }
                                            </a>
                                        </Grid>
                                    )
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Contact;

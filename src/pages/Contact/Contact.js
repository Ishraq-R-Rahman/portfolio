import { Grid, TextField, Typography } from "@mui/material";
import CustomButton from "../../components/Button/CustomButton";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import portfolioData from "../../utils/portfolioData";
import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <Grid container className="section pb-45" spacing={6}>
            <Grid item xs={12} lg={7}>
                <Grid item className="section_title mb-30">
                    <span></span>
                    <h6 className="section_title_text">Contact Informations</h6>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography
                                variant="body2"
                                className="contactInfo_item"
                            >
                                <span>Address: </span> {portfolioData.address}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography
                                variant="body2"
                                className="contactInfo_item"
                            >
                                <span>Email: </span> {portfolioData.email}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography
                                variant="body2"
                                className="contactInfo_item"
                            >
                                <span>Phone: </span> {portfolioData.contact}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
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
            <Grid item xs={12} lg={5}>
                <Grid item className="section_title mb-30">
                    <span></span>
                    <h6 className="section_title_text">Reference</h6>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography
                                variant="h5"
                            >
                                <span>{portfolioData.reference.name}</span>
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography
                                variant="body2"
                                className="contactInfo_item"
                            >
                                {portfolioData.reference.title}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography
                                variant="body2"
                                className="contactInfo_item"
                            >
                                {portfolioData.reference.email}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                variant="body2"
                                className="contactInfo_item"
                            >
                                <a
                                    href="https://sites.google.com/site/mahmudanaznin"
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                        textDecoration: "none",
                                        color: "black",
                                    }}
                                >
                                    <CustomButton
                                        text={"Visit Profile"}
                                        icon={<ArrowOutwardOutlinedIcon />}
                                    />
                                </a>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Contact;

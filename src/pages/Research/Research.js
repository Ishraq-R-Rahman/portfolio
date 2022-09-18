import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    Grow,
    Tab,
    Tabs,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import portfolioData from "../../utils/portfolioData";
import CustomButton from "../../components/Button/CustomButton";
import "./Research.css";

const Research = () => {
    const [tabValue, setTabValue] = useState("All");
    const [openDialog, setOpenDialog] = useState(false);
    const [projectDialog, setProjectDialog] = useState(null);

    return (
        <Grid
            container
            spacing={1}
            className="section"
            style={{ paddingBottom: 45 }}
        >
            <Grid
                item
                className="section_title"
                style={{
                    marginBottom: 20,
                }}
            >
                <span></span>
                <h6 className="section_title_text">Research Experience</h6>
            </Grid>
            <Grid item xs={12}>
                <Tabs
                    value={tabValue}
                    indicatorColor="white"
                    className="custom_tabs"
                    onChange={(event, newValue) => setTabValue(newValue)}
                >
                    <Tab
                        label="All"
                        value="All"
                        className={
                            tabValue === "All"
                                ? "customTabs_item active"
                                : "customTabs_item"
                        }
                    />
                    {[
                        ...new Set(
                            portfolioData.research.map((item) => item.tag)
                        ),
                    ].map((tag, idx) => (
                        <Tab
                            key={idx}
                            label={tag}
                            value={tag}
                            className={
                                tabValue === tag
                                    ? "customTabs_item active"
                                    : "customTabs_item"
                            }
                        />
                    ))}
                </Tabs>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={3}>
                    {portfolioData.research.map(
                        (item, idx) =>
                            (tabValue === item.tag || tabValue === "All") && (
                                <Grid item key={idx} xs={12} sm={6} md={4}>
                                    <Grow in timeout={1000}>
                                        <Card
                                            className="customCard"
                                            onClick={() => {
                                                setProjectDialog(item);
                                                setOpenDialog(true);
                                            }}
                                        >
                                            <CardActionArea>
                                                <CardMedia
                                                    className="customCard_image"
                                                    image={item.image}
                                                    title={item.title}
                                                />
                                                <CardContent>
                                                    <Typography
                                                        variant="body2"
                                                        className="customCard_title"
                                                    >
                                                        {item.title}
                                                    </Typography>
                                                    <Typography
                                                        variant="caption"
                                                        className="customCard_caption"
                                                    >
                                                        {item.caption}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grow>
                                </Grid>
                            )
                    )}
                </Grid>
            </Grid>
            <Dialog
                className="researchDialog"
                open={openDialog}
                onClose={() => setOpenDialog(false)}
            >
                <DialogTitle onClose={() => setOpenDialog(false)}>
                    <Typography
                        variant="h4"
                        style={{
                            fontWeight: 600,
                        }}
                    >
                        {projectDialog?.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        style={{
                            fontWeight: 300,
                            paddingTop: 10,
                            paddingLeft: 4,
                            fontStyle: "italic",
                        }}
                    >
                        <span>Supervisor: </span>
                        <a
                            href={projectDialog?.supervisor.link}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                                color: "gray",
                            }}
                        >
                            {projectDialog?.supervisor.name}
                        </a>
                    </Typography>
                </DialogTitle>
                <img
                    src={projectDialog?.image}
                    alt=""
                    className="researchDialog_image"
                />
                <DialogContent>
                    <Typography className="researchDialog_description">
                        {projectDialog?.description}
                    </Typography>
                </DialogContent>
                <DialogActions className="researchDialog_actions">
                    {projectDialog?.link?.link && (
                        <a
                            href={projectDialog?.link?.paper}
                            target="_blank"
                            rel="noreferrer"
                            className="researchDialog_icon"
                            style={{
                                textDecoration: "none",
                                color: "black",
                            }}
                        >
                            <CustomButton
                                text="Read the Paper"
                                icon={projectDialog?.link?.icon}
                            />
                        </a>
                    )}
                </DialogActions>
            </Dialog>
        </Grid>
    );
};

export default Research;

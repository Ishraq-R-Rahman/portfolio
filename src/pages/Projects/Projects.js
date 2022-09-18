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
import { TimelineDot } from "@mui/lab";

const Projects = () => {
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
                <h6 className="section_title_text">Projects Experience</h6>
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
                            portfolioData.projects.map((item) => item.tag)
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
                    {portfolioData.projects.map(
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
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            textAlign: "center",
                        }}
                    >
                        {projectDialog?.icons.map((icon, idx) => (
                            <Typography
                                variant="body2"
                                style={{
                                    fontWeight: 300,
                                    color: "gray",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    paddingRight: 10,
                                }}
                            >
                                {idx !== 0 && (
                                    <TimelineDot
                                        variant="outlined"
                                        style={{
                                            borderColor: "#f39530",
                                            padding: "2px",
                                            marginRight: "5px",
                                            width: 5,
                                        }}
                                    ></TimelineDot>
                                )}
                                <div>{icon}</div>
                            </Typography>
                        ))}
                    </div>
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
                    {projectDialog?.link?.paper && (
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
                                text="Find the Project"
                                icon={projectDialog?.link?.icon}
                            />
                        </a>
                    )}
                </DialogActions>
            </Dialog>
        </Grid>
    );
};

export default Projects;

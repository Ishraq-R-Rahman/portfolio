import React from "react";

import { Grid, Paper, Typography } from "@mui/material";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import SchoolIcon from "@mui/icons-material/School";
import Timeline, {
    CustomTimelineSeparator,
} from "../../components/Timeline/CustomTimeline";
import portfolioData from "../../utils/portfolioData";
import { TimelineContent, TimelineItem, TimelineDot } from "@mui/lab";
import "./History.css";

const Histroy = () => {
    return (
        <>
            <Grid container className="section pb-45">
                <Grid item className="section_title mb-30">
                    <span></span>
                    <h6 className="section_title_text">My Journey</h6>
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item sm={12} md={6}>
                            <Timeline
                                title="Education History"
                                icon={<SchoolIcon />}
                            >
                                {portfolioData.education.map((school, idx) => (
                                    <TimelineItem
                                        style={{
                                            paddingBottom: "5px",
                                            height: "max-content",
                                        }}
                                        key={idx}
                                    >
                                        <CustomTimelineSeparator />
                                        <TimelineContent>
                                            <Typography
                                                style={{
                                                    fontSize: "16px",
                                                    fontWeight: 600,
                                                }}
                                            >
                                                {school.title}
                                            </Typography>
                                            <Typography
                                                variant="caption"
                                                style={{
                                                    color: "darkslategrey",
                                                }}
                                            >
                                                {school.date}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                style={{
                                                    color: "gray",
                                                    fontSize: "small",
                                                    marginTop: "6px",
                                                }}
                                            >
                                                {school.description}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                style={{
                                                    color: "gray",
                                                    fontSize: "small",
                                                    fontStyle: "italic",
                                                }}
                                            >
                                                {school.subDescription}
                                            </Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </Timeline>
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <Timeline
                                title="Work Experience"
                                icon={<WorkHistoryIcon />}
                            >
                                {portfolioData.work.map((school, idx) => (
                                    <TimelineItem
                                        style={{
                                            paddingBottom: "5px",
                                            height: "max-content",
                                        }}
                                        key={idx}
                                    >
                                        <CustomTimelineSeparator />
                                        <TimelineContent>
                                            <Typography
                                                style={{
                                                    fontSize: "16px",
                                                    fontWeight: 600,
                                                }}
                                            >
                                                {school.company}
                                            </Typography>
                                            <Typography
                                                variant="caption"
                                                style={{
                                                    color: "darkslategrey",
                                                }}
                                            >
                                                {school.title}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                style={{
                                                    color: "gray",
                                                    fontSize: "small",
                                                    marginTop: "6px",
                                                }}
                                            >
                                                {school.description}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                style={{
                                                    color: "gray",
                                                    fontSize: "small",
                                                    fontStyle: "italic",
                                                }}
                                            >
                                                {school.date}
                                            </Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </Timeline>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                container
                className="section graybg"
                style={{
                    borderBottomLeftRadius: 6,
                    borderBottomRightRadius: 6,
                }}
            >
                <Grid item className="section_title mb-30">
                    <span></span>
                    <h6
                        className="section_title_text"
                        style={{ paddingTop: 20 }}
                    >
                        Skills
                    </h6>
                </Grid>
                <Grid
                    container
                    spacing={3}
                    justify="space-around"
                    className="section"
                    style={{
                        marginLeft: 0,
                        width: "100%",
                        paddingBottom: "20px",
                    }}
                >
                    {portfolioData.skills.map((skill, idx) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            key={idx}
                            style={{
                                paddingLeft: 12,
                                paddingRight: 12,
                            }}
                        >
                            <Paper elevation={0} className="skill">
                                <Typography
                                    variant="body2"
                                    className="skill_title"
                                >
                                    {skill.title}
                                </Typography>
                                {skill.description.map((d, i) => (
                                    <Typography
                                        variant="body2"
                                        className="skill_description"
                                        key={i}
                                    >
                                        <TimelineDot
                                            variant="outlined"
                                            className="timeline_dot"
                                        ></TimelineDot>
                                        {d}
                                    </Typography>
                                ))}
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </>
    );
};

export default Histroy;

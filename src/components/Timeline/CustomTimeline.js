import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography } from "@mui/material";

import "./CustomTimeline.css";

export const CustomTimelineSeparator = (props) => (
    <TimelineSeparator className="separator_padding">
        <TimelineDot variant="outlined" className="timeline_dot" />
        {!props.hide && <TimelineConnector />}
    </TimelineSeparator>
);

const CustomTimeline = (props) => {
    return (
        <Timeline className="timeline">
            {/* Timeline header */}
            <TimelineItem className="timeline_firstItem">
                <TimelineSeparator>
                    <TimelineDot className="timeline_dot_header">
                        {props.icon}
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography
                        variant="h6"
                        className="timeline_header"
                    >
                        {props.title}
                    </Typography>
                </TimelineContent>
            </TimelineItem>

            {props.children}
        </Timeline>
    );
};

export default CustomTimeline;

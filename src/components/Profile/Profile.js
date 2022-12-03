import { Typography } from "@mui/material";
import React from "react";
import Timeline, { CustomTimelineSeparator } from "../Timeline/CustomTimeline";
import CustomButton from "../Button/CustomButton";

import classes from "./Profile.module.css";
import portfolioData from "../../utils/portfolioData";

import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";

import Person4OutlinedIcon from "@mui/icons-material/Person4Outlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

const CustomTimelineItem = (props) => (
    <TimelineItem>
        <CustomTimelineSeparator hide={props.hide} />
        <TimelineContent className={`${classes.timeline_content}`}>
            <Typography className={`${classes.timelineItem_text}`}>
                <span style={{ color: "black" }}>{props.title}:</span>{" "}
                {props.text}
            </Typography>
        </TimelineContent>
    </TimelineItem>
);

const Profile = () => {
    return (
        <div className={`${classes.profile} container_shadow`}>
            <div className={`${classes.profile_name}`}>
                <Typography className={`${classes.name}`}>
                    {portfolioData.name}
                </Typography>
                <Typography className={`${classes.title}`}>
                    {portfolioData.title}
                </Typography>
            </div>
            <figure className={`${classes.profile_image}`}>
                <img src={require("../../assets/images/photo.jpg")} alt="" />
            </figure>
            <div
                className={`${classes.profile_information}`}
                style={{
                    marginTop: "-60px",
                }}
            >
                <Timeline icon={<Person4OutlinedIcon />}>
                    <CustomTimelineItem
                        title="Name"
                        text={portfolioData.name}
                    />
                    <CustomTimelineItem
                        title="Email"
                        text={portfolioData.email}
                    />
                    <CustomTimelineItem
                        title="Contact"
                        text={portfolioData.contact}
                        hide
                    />
                </Timeline>
                <div
                    className={`${classes.button_container}`}
                    style={{ display: "flex" }}
                >
                    <a
                        href="https://drive.google.com/file/d/1TdzmEKam690tkcAL5fQWCn9CcqoKbTEi/view?usp=share_link"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            textDecoration: "none",
                            color: "inherit",
                        }}
                    >
                        <CustomButton
                            text={"Download CV"}
                            icon={<FileDownloadOutlinedIcon />}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Profile;

import React from "react";
import {
    Button,
    Form,
    FormControl,
    Nav,
    NavDropdown,
    Navbar,
} from "react-bootstrap";
// import { HomeRounded, SchoolRounded, WorkRounded } from "@material-ui/icons";
import CottageSharpIcon from '@mui/icons-material/CottageSharp';
    import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink } from "react-router-dom";
import withRouter from "../../utils/withRouter";

import portfolioData from "../../utils/portfolioData";
import CustomButton from "../Button/CustomButton";
import "./Header.css";

const Header = (props) => {
    const pathName = props.router?.location?.pathname;
    
    return (
        <Navbar expand="lg" sticky="top" className="header">
            <Nav.Link as={NavLink} to="/portfolio">
                <Navbar.Brand className="header_home">
                    <CottageSharpIcon />
                </Navbar.Brand>
            </Nav.Link>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="header_left">
                    <Nav.Link
                        as={NavLink}
                        to="/portfolio/history"
                        className={
                            pathName === "/portfolio/history"
                                ? "header_link_active"
                                : "header_link"
                        }
                    >
                        History
                    </Nav.Link>
                    <Nav.Link
                        as={NavLink}
                        to="/portfolio/research"
                        className={
                            pathName === "/portfolio/research"
                                ? "header_link_active"
                                : "header_link"
                        }
                    >
                        Research
                    </Nav.Link>
                    <Nav.Link
                        as={NavLink}
                        to="/portfolio/projects"
                        className={
                            pathName === "/portfolio/projects"
                                ? "header_link_active"
                                : "header_link"
                        }
                    >
                        Projects
                    </Nav.Link>
                    <Nav.Link
                        as={NavLink}
                        to="/portfolio/contact"
                        className={
                            pathName === "/portfolio/contact"
                                ? "header_link_active"
                                : "header_link"
                        }
                    >
                        Contact
                    </Nav.Link>
                </Nav>

                <div className="header_right">
                    {Object.keys(portfolioData.socials).map((key) => (
                        <a
                            href={portfolioData.socials[key].link}
                            target="_blank"
                            rel="noreferrer"
                            key={key}
                        >
                            {portfolioData.socials[key].icon}
                        </a>
                    ))}
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default withRouter(Header);

import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Grid,
  Link,
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { useTheme } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { RxCross1 } from "react-icons/rx";
import Logo from "./logo.jpg";
import "./navbar.css";

// Custom styled Accordion components
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderBottom: `1px solid `,
  borderColor: "lightgrey",
  fontWeight: "1",
}));

const AccordionSummary = styled((props) => <MuiAccordionSummary {...props} />)(({ theme }) => ({
  backgroundColor: "transparent",
  color: "black",
  fontWeight: "1",
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({}));

function Navbar() {
  const theme = useTheme();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleAccordionClick = (event) => {
    event.stopPropagation();
  };

  const drawerContent = (
    <Box
      sx={{ width: "100%", paddingLeft: "5%", paddingRight: "5%" }} //width ka masla
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      marginTop={15}
    >
      <Grid container spacing={2}>
        {/* Left Section */}
        <Grid
          item
          xs={12}
          md={5}
          padding={15}
          order={{ xs: 2, md: 1 }}
          marginLeft={5}
          borderRight={1}
          borderColor={"lightgray"}
          sx={{
            "& .MuiTypography-h6": {
              marginBottom: "0.5rem",
              fontWeight: "2",
              borderBottom: "1px solid lightgrey",
            },
            "& .MuiTypography-root": {
              display: "block", // ensures the Typography component beha    padding: 0.3em 0;
              color: "#777676",
              padding: "0.3em 0",
              fontWeight: "1",
            },
            "& a": {
              textDecoration: "none", // removes the underline from links
              color: "inherit", // the link color will be the same as the text color
              display: "block", // makes each link take up its own line
              marginBottom: "0.35rem", // adds some space below each link
            },
            "& .MuiTypography-gutterTop": {
              marginTop: "2rem", // adds space above the "Follow Us" section
            },
            // Additional styles can be added here as needed
          }}
        >
          <Typography variant="h6">CONTACT</Typography>
          <Typography variant="subtitle1">Libertat 15 - 08012 Barcelona, Spain</Typography>
          <Typography variant="subtitle1">+34 934 155 685</Typography>
          <Link href="mailto:luv@luv.studio">luv@luv.studio</Link>
          <Typography variant="h6" gutterTop>
            Follow Us
          </Typography>
          {/* Links can be replaced with icons */}
          <Link href="#" variant="body2">
            Instagram
          </Link>
          <Link href="#" variant="body2">
            Facebook
          </Link>
          <Link href="#" variant="body2">
            LinkedIn
          </Link>
        </Grid>

        {/* Right Section */}
        <Grid
          item
          xs={12}
          md={5}
          order={{ xs: 1, md: 2 }}
          sx={{
            "& a": {
              textDecoration: "none", // removes the underline from links
              color: "grey", // the link color will be the same as the text color
              display: "block", // makes each link take up its own line
              marginBottom: "0.35rem", // adds some space below each link
            },
          }}
        >
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            onClick={handleAccordionClick}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>ABOUT</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Link href="#" variant="body2" className="drawer-link">
                Instagram
              </Link>
              <Link href="#" variant="body2" className="drawer-link">
                Facebook
              </Link>
              <Link href="#" variant="body2" className="drawer-link">
                LinkedIn
              </Link>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            onClick={handleAccordionClick}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>SERVICES</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Link href="#" variant="body2" className="drawer-link">
                Instagram
              </Link>
              <Link href="#" variant="body2" className="drawer-link">
                Facebook
              </Link>
              <Link href="#" variant="body2" className="drawer-link">
                LinkedIn
              </Link>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
            onClick={handleAccordionClick}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>PORTFOLIO</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Link href="#" variant="body2" className="drawer-link">
                Instagram
              </Link>
              <Link href="#" variant="body2" className="drawer-link">
                Facebook
              </Link>
              <Link href="#" variant="body2" className="drawer-link">
                LinkedIn
              </Link>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
            onClick={handleAccordionClick}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5bh-content"
              id="panel5bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>CONTACT US</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Link href="#" variant="body2" className="drawer-link">
                Instagram
              </Link>
              <Link href="#" variant="body2" className="drawer-link">
                Facebook
              </Link>
              <Link href="#" variant="body2" className="drawer-link">
                LinkedIn
              </Link>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
            onClick={handleAccordionClick}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel6bh-content"
              id="panel6bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>SUSTAIN</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <Link href="#" variant="body2" className="drawer-link">
                  Instagram
                </Link>
                <Link href="#" variant="body2" className="drawer-link">
                  Facebook
                </Link>
                <Link href="#" variant="body2" className="drawer-link">
                  LinkedIn
                </Link>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <img src={Logo} alt="logo" className="logo" />
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(!drawerOpen)}
          >
            {drawerOpen ? <RxCross1 /> : <MenuIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          "& .MuiDrawer-paper": {
            width: "100%", // Full width on smaller screens
            lg: {
              width: "50%", // Half width on medium and larger screens
            },
            md: {
              width: "75%",
            },
          },
        }}
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}

export default Navbar;

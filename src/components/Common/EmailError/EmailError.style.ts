import { makeStyles } from "@mui/styles";
import { type Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(180deg, #EEF1F4 0%, #D4E4F7 100%)",
    position: "relative",
    overflow: "hidden",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "24px",
    width: "566px",
    maxWidth: "90%",
    zIndex: 1,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: "0 20px",
      gap: "20px",
    },
  },
  iconWrapper: {
    width: "168px",
    height: "168px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      width: "140px",
      height: "140px",
    },
  },
  outerCircle: {
    position: "absolute",
    width: "168px",
    height: "168px",
    borderRadius: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    [theme.breakpoints.down("sm")]: {
      width: "140px",
      height: "140px",
    },
  },
  middleCircle: {
    position: "absolute",
    width: "126px",
    height: "126px",
    borderRadius: "50%",
    backgroundColor: "rgba(245, 247, 251, 0.8)",
    [theme.breakpoints.down("sm")]: {
      width: "105px",
      height: "105px",
    },
  },
  innerCircle: {
    position: "absolute",
    width: "84px",
    height: "84px",
    borderRadius: "50%",
    backgroundColor: theme.palette.common.white,
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      width: "70px",
      height: "70px",
    },
  },
  errorIconCircle: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    border: `2px solid ${theme.palette.red[500]}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      width: "40px",
      height: "40px",
    },
  },
  errorIcon: {
    color: theme.palette.red[500],
    fontSize: "24px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "12px",
    textAlign: "center",
  },
  title: {
    color: theme.palette.navy[500],
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
    },
  },
  description: {
    color: theme.palette.navy[500],
    maxWidth: "365px",
    lineHeight: "18px",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      fontSize: "13px",
    },
  },
  sendButton: {
    width: "230px",
    height: "40px",
    backgroundColor: theme.palette.blue[500],
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    "&:hover": {
      backgroundColor: theme.palette.blue[600],
    },
    "&:focus": {
      outline: `2px solid ${theme.palette.blue[300]}`,
      outlineOffset: "2px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      maxWidth: "230px",
    },
  },
  sendButtonText: {
    color: theme.palette.common.white,
  },
  backgroundEllipse: {
    position: "absolute",
    bottom: "-200px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "1200px",
    height: "600px",
    borderRadius: "50%",
    background: "radial-gradient(ellipse at center, rgba(0, 82, 204, 0.15) 0%, transparent 70%)",
    pointerEvents: "none",
    [theme.breakpoints.down("sm")]: {
      width: "800px",
      height: "400px",
      bottom: "-150px",
    },
  },
}));

export default useStyles;

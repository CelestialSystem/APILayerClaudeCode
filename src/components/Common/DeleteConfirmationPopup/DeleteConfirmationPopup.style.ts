import { makeStyles } from "@mui/styles";
import { type Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
  backdrop: {
    "& .MuiBackdrop-root": {
      background: "rgba(0, 0, 0, 0.2)",
    },
  },
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "572px",
    backgroundColor: theme.palette.common.white,
    borderRadius: "8px",
    padding: "24px",
    outline: "none",
  },
  content: {
    marginBottom: "24px",
  },
  title: {
    color: theme.palette.navy[500],
    marginBottom: "8px !important",
  },
  description: {
    color: theme.palette.navy[500],
  },
  buttonContainer: {
    display: "flex",
    gap: "16px",
  },
  cancelButton: {
    "&.MuiButton-root": {
      height: "40px",
      minWidth: "118px",
      borderRadius: "4px",
      textTransform: "none",
      fontFamily: "OpenSauceOne-Medium",
      fontSize: "14px",
      backgroundColor: theme.palette.common.white,
      color: theme.palette.blue[500],
      border: `1px solid ${theme.palette.blue[500]}`,
      "&:hover": {
        backgroundColor: theme.palette.blue[50],
      },
    },
  },
  deleteButton: {
    "&.MuiButton-root": {
      height: "40px",
      minWidth: "118px",
      borderRadius: "4px",
      textTransform: "none",
      fontFamily: "OpenSauceOne-Medium",
      fontSize: "14px",
      backgroundColor: theme.palette.common.white,
      color: theme.palette.red[500],
      border: `1px solid ${theme.palette.red[500]}`,
      "&:hover": {
        backgroundColor: theme.palette.red[50],
      },
    },
  },
}));

export default useStyles;

import { Box, Typography, Button, Modal } from "@mui/material";
import useStyles from "./DeleteConfirmationPopup.style";

interface DeleteConfirmationPopupProps {
  open: boolean;
  title?: string;
  description?: string;
  onCancel: () => void;
  onDelete: () => void;
}

function DeleteConfirmationPopup({
  open,
  title = "Delete Address?",
  description = "This action will permanently delete the address from our system.",
  onCancel,
  onDelete,
}: DeleteConfirmationPopupProps) {
  const classes = useStyles();

  return (
    <Modal open={open} onClose={onCancel} className={classes.backdrop}>
      <Box className={classes.modal}>
        <Box className={classes.content}>
          <Typography variant="h2" className={classes.title}>{title}</Typography>
          <Typography variant="h5" className={classes.description}>{description}</Typography>
        </Box>
        <Box className={classes.buttonContainer}>
        <Button
            disableRipple
            className={classes.deleteButton}
            onClick={onDelete}
          >
            Delete
          </Button>
          <Button
            disableRipple
            className={classes.cancelButton}
            onClick={onCancel}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default DeleteConfirmationPopup;

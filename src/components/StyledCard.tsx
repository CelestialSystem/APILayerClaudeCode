import { makeStyles } from '@mui/styles'
import type { Theme } from '@mui/material'

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    backgroundColor: theme.palette.navy[400],
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[2],
    maxWidth: 400,
    border: '1px solid',
    [theme.breakpoints.up('md')]: {
      fontSize: '30px'
    },
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: 600,
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(1),
  },
  content: {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary,
  },
}))

interface StyledCardProps {
  title: string
  content: string
}

export function StyledCard({ title, content }: StyledCardProps) {
  const classes = useStyles()

  return (
    <div className={classes.card}>
      <h1>Demo</h1>
      <div className={classes.title}>{title}</div>
      <div className={classes.content}>{content}</div>
    </div>
  )
}

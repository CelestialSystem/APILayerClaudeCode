import { Button } from '@mui/material'

interface SampleButtonProps {
  label: string
  onClick?: () => void
}

export function SampleButton({ label, onClick }: SampleButtonProps) {
  return (
    <Button variant="contained" onClick={onClick}>
      {label}
    </Button>
  )
}

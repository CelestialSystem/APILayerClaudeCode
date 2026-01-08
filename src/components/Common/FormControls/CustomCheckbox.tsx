import Checkbox, { type CheckboxProps } from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';

type CustomCheckboxProps = Omit<CheckboxProps, 'color' | 'icon' | 'checkedIcon'>;

const IconWrapper = styled('span')({
  width: 16,
  height: 16,
  borderRadius: 2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const Checkmark = ({ color }: { color: string }) => (
  <svg width="10" height="10" viewBox="0 0 12 10" fill="none">
    <path
      d="M1.5 5.5L4.5 8.5L10.5 1.5"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const UncheckedIcon = styled(IconWrapper)(({ theme }) => ({
  border: `1px solid ${theme.palette.navy[200]}`,
  backgroundColor: 'transparent',
}));


const CheckedIcon = styled(IconWrapper)(({ theme }) => ({
  backgroundColor: theme.palette.blue[500],
}));

const DisabledUncheckedIcon = styled(IconWrapper)(({ theme }) => ({
  border: `1px solid ${theme.palette.neutral[400]}`,
  backgroundColor: theme.palette.neutral[300],
}));

const DisabledCheckedIcon = styled(IconWrapper)(({ theme }) => ({
  border: `1px solid ${theme.palette.neutral[400]}`,
  backgroundColor: theme.palette.neutral[300],
}));

const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
  padding: theme.spacing(1),
  '&.MuiCheckbox-root': {
    padding:'0px'
  },
  '&:hover:not(.Mui-disabled) .unchecked': {
    borderColor: theme.palette.blue[500],
  },

  '&.Mui-focusVisible .unchecked.icon-wrapper': {
    background: theme.palette.blue[50]
  },
  '&.Mui-focusVisible .icon-wrapper': {
    outline: `1px solid ${theme.palette.navy[500]}`,
    outlineOffset: 2,
    borderRadius: 2,
  },

  '&:hover': {
    backgroundColor: 'transparent',
  },
}));

export default function CustomCheckbox({
  disabled,
  ...props
}: CustomCheckboxProps) {
  const icon = disabled ? (
    <DisabledUncheckedIcon className="icon-wrapper" />
  ) : (
    <UncheckedIcon className="icon-wrapper unchecked" />
  );

  const checkedIcon = disabled ? (
    <DisabledCheckedIcon className="icon-wrapper">
      <Checkmark color="#b2b3b6" />
    </DisabledCheckedIcon>
  ) : (
    <CheckedIcon className="icon-wrapper">
      <Checkmark color="#fff" />
    </CheckedIcon>
  );

  return (
    <StyledCheckbox
      icon={icon}
      checkedIcon={checkedIcon}
      disabled={disabled}
      {...props}
    />
  );
}

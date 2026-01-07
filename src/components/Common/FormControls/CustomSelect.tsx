import { styled } from '@mui/material/styles';
import { Select, MenuItem, type SelectProps, } from '@mui/material';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';


const StyledSelect = styled(Select)(() => ({
    '&.MuiInputBase-root.Mui-focused': {
        borderColor: '#0052CC'
    },
    '& .MuiSelect-select': {
        height: '40px',
        '& .customSelectPlaceholder': {
            color: '#6E7786',
        },
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '8px',
        fontSize: '14px',
        color: '#27344a',
    },
    '& .MuiSelect-icon': {
        color: '#1C1B1F',
        height: '16px',
        width: '16px',
        top: 'auto'
    },
}));


const StyledMenuItem = styled(MenuItem)(() => ({
    padding: '0 8px',
    lineHeight: '120%',
    height: '40px',
    fontSize: '14px',
    color: '#27344A',
    borderRadius: '2px',
    '&.Mui-selected': {
        backgroundColor: '#E6EEFA !important',
    },
    '&.Mui-selected:hover': {
        backgroundColor: '#E6EEFA !important',
    },

    '&:hover': {
        backgroundColor: '#F9FAFB !important',
    },
    '&.Mui-focusVisible': {
        backgroundColor: 'transparent',
    },
}));


interface SelectOption {
    label: string;
    value: string | number;
}

type CustomSelectProps = SelectProps & {
    options: SelectOption[];
    placeholder?: string;
};

const CustomSelect: React.FC<CustomSelectProps> = ({
    options,
    placeholder,
    displayEmpty = true,
    renderValue,
    ...props
}) => {
    return (
        <StyledSelect
            displayEmpty={displayEmpty}
            renderValue={(selected) => {
                if (!selected && placeholder) {
                    return (
                        <span className='customSelectPlaceholder'>
                            {placeholder}
                        </span>
                    );
                }

                if (renderValue) {
                    return renderValue(selected);
                }

                const option = options.find(
                    (opt) => opt.value === selected
                );

                return option?.label ?? '';
            }}
            IconComponent={KeyboardArrowDownRoundedIcon}
            MenuProps={{
                PaperProps: {
                    sx: {
                        border: '1px solid #E4EBEF',
                        borderRadius: '4px',
                        '--Paper-shadow': '0px 1px 1px rgba(0, 0, 0, 0.16) !important',
                    },
                },
                MenuListProps: {
                    sx: {
                        padding: '8px',
                    },
                },
            }}
            {...props}
        >
            {options.map((option) => (
                <StyledMenuItem
                    key={option.value}
                    value={option.value}
                >
                    {option.label}
                </StyledMenuItem>
            ))}
        </StyledSelect>
    );
};

export default CustomSelect;

import React, { ChangeEvent } from "react";
import { useSearchParams } from 'react-router-dom';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import StyledDialog from "./components/Dialog/";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSortOrder = searchParams.get('sortBy') || 'alphabetical';

  const handleSortChange = (event: ChangeEvent<HTMLInputElement>) => {
    const sortOrder = event.target.value;

    if (sortOrder) {
      searchParams.set('sortBy', sortOrder);
    } else {
      searchParams.delete('sortBy');
    }
    setSearchParams(searchParams);
    onClose();
  };

  return (
    <StyledDialog open={isOpen} onClose={onClose}
    >
      <DialogTitle
        sx={{
          textAlign: "center",
          fontSize: "20px",
          lineHeight: "24px",
          fontWeight: "600",
          color: "#050510",
        }}
      >
        Сортировка
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: "#c3c3c6",
            backgroundColor: "#f7f7f8",
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <FormControl component="fieldset" sx={{
        padding: '0 16px',

      }}>
        <RadioGroup
          name="sort"
          value={currentSortOrder}
          onChange={handleSortChange}
        >
          <FormControlLabel
            value="alphabetical"
            control={<Radio />}
            label="По алфавиту"
          />
          <FormControlLabel
            value="birthday"
            control={<Radio />}
            label="По дню рождения"
          />
        </RadioGroup>
      </FormControl>
    </StyledDialog>
  );
};

export default Modal;

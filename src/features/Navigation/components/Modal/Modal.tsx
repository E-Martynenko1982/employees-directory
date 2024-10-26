import React, { ChangeEvent } from "react";
import { useSearchParams } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import "./index.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSortOrder = searchParams.get('sortBy') || 'alphabetical';

  const handleSortChange = (event: ChangeEvent<HTMLInputElement>) => {
    const sortOrder = event.target.value;

    searchParams.set('sortBy', sortOrder);
    setSearchParams(searchParams);
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>
        Сортировка
        <IconButton
          aria-label="close"
          onClick={onClose}
          style={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <FormControl component="fieldset" style={{ padding: '0 24px 24px' }}>
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
    </Dialog>
  );
};

export default Modal;

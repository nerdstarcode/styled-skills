import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ClassNameValue } from 'tailwind-merge';
import { IfComponent } from '@/components/atoms/IfComponent';
export interface IBaseDialog {
  classNameButton?: ClassNameValue
  className?: ClassNameValue
  children: React.ReactNode
  buttonText?: React.ReactNode
  handleSubmit?: Function
  handleCancel?: Function
  ButtonSubmit?: React.ReactNode
  ButtonCancel?: React.ReactNode
}
export default function BaseDialog({
  ButtonSubmit,
  ButtonCancel,
  handleSubmit,
  handleCancel,
  classNameButton,
  className,
  children,
  buttonText
}: IBaseDialog) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div className={classNameButton as string} onClick={handleClickOpen}>
        {buttonText}
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className={className as string}
        PaperProps={{
          style: {
            backgroundColor: '#00000050',
            padding: '1rem',
            backdropFilter: 'blur(5px)',
            color: 'white',
          },
        }}
      >
        <DialogContent>
          {children}
        </DialogContent>
        <DialogActions>
          <IfComponent show={ButtonCancel !== undefined}>
            <Button onClick={() => {
              handleCancel?.()
              handleClose()
            }}>
              {ButtonCancel}
            </Button>
          </IfComponent>
          <IfComponent show={ButtonSubmit !== undefined}>
            <Button onClick={() => {
              try {
                handleSubmit?.()
                handleClose()
              } catch (e) { }
            }} autoFocus>
              {ButtonSubmit}
            </Button>
          </IfComponent>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
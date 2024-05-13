import React from 'react'
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export default function ButtonApp() {


    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });
      

return (
<div>
<Stack spacing={2} direction="row">
<Button variant="text">Text</Button>
<Button variant="contained" size="small">Contained</Button>
<Button variant="outlined">Outlined</Button>
<Button disabled>Disabled</Button>
<Button href="https://www.google.com" size="large">Link</Button>
<Button variant="outlined" href="#outlined-buttons">
Link
</Button>


<Button variant="outlined" startIcon={<DeleteIcon />}>
Delete
</Button>


<Button variant="outlined" endIcon={<SendIcon />}>
  Send
</Button>


<IconButton aria-label="fingerprint" color="success" size="large">
        <Fingerprint />
</IconButton>



<Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      Upload file
      <VisuallyHiddenInput type="file" />
    </Button>


</Stack>
</div>
)
}

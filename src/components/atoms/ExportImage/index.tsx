"use client";
import { Download } from '@mui/icons-material';
import download from 'downloadjs';
import * as htmlToImage from 'html-to-image';
import { useState } from 'react';
import { IfComponent } from '../IfComponent';
import { CircularProgress } from '@mui/material';
export function ExportImage() {
  const [loading, setLoading] = useState(false)
  if (loading) return <CircularProgress size={20}/>
  return (
    <button className='text-brand-primary border border-brand-primary px-2 py-1 rounded-full' onClick={() => {
      setLoading(true)
      var node = document.getElementById('to-image');
      htmlToImage.toPng(node as any)
        .then(function (dataUrl) {
          download(dataUrl, 'my-node.png');
          setLoading(false)
        })
        .catch(function (error) {
          console.error('oops, something went wrong!', error);
        });
    }}>
      <Download fontSize='small' />
      Export
    </button>
  );
}

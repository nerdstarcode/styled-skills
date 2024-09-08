import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ImageSearch } from '@mui/icons-material';

const ProfileImage = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null); // Estado para a imagem carregada
  if (typeof window !== "undefined") {
    useEffect(() => {
      const localStorageImage = localStorage?.getItem('imagePerfil')
      if (localStorageImage) {
        if (!imageSrc) {
          setImageSrc(localStorageImage)
          return
        }
        if (localStorageImage !== imageSrc) {
          localStorage.setItem('imagePerfil', imageSrc)
          setImageSrc(imageSrc)
          return
        }
      } else {
        localStorage.setItem('imagePerfil', imageSrc ?? '')
        setImageSrc(imageSrc)
        return
      }
    }, [imageSrc])
  }
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        setImageSrc(event.target?.result as string); // Salva a URL da imagem no estado
      };
      reader.readAsDataURL(file);
    }
  };

  // Função para simular clique no input
  const handleClick = () => {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className="group relative w-20 md:w-40 h-20 md:h-40 border rounded-full overflow-hidden cursor-pointer"
        onClick={handleClick} // Aciona o input ao clicar na imagem
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
          />
        ) : (
          <div className="w-full h-full border border-gray-300 flex items-center justify-center">
            <ImageSearch fontSize='large' />
          </div>
        )}

        {/* Texto que aparece ao passar o mouse */}
        <span className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
          Upload a Photo
        </span>

        {/* Input invisível */}
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden" // Esconde o input
        />
      </div>
    </div>
  );
};

export default ProfileImage;

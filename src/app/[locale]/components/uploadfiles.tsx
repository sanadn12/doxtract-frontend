"use client";

import { ChangeEvent, FC, useState } from "react";
import Button from '../components/Button'; // Ensure you have a Button component

interface UploadFileProps {
  onFileChange: (file: File | null) => void;
}

const UploadFile: FC<UploadFileProps> = ({ onFileChange }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (file && (file.type === "image/jpeg" || file.type === "application/pdf")) {
      setSelectedFile(file);
      onFileChange(file); // Pass the selected file back to the parent
    } else {
      alert("Please select a JPG or PDF file.");
      onFileChange(null); // Pass null if no valid file
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedFile) {
      console.log('Uploading file:', selectedFile);
    
    }
  };

  return (
    <div className="upload-file">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="file"
          accept=".jpg, .jpeg, .pdf"
          onChange={handleFileChange}
          className="mb-4"
        />
        {selectedFile && (
          <p className="mb-4 text-lg">Selected file: {selectedFile.name}</p>
        )}
        <Button
          type="submit"
          disabled={!selectedFile}
          variant="primary"
          size="large"
          rounded
          className="mt-4"
        >
          Upload
        </Button>
      </form>
    </div>
  );
};

export default UploadFile;

// "use client";

// import { useState } from 'react';
// import Button from '../components/Button'; 

// const UploadFile: React.FC = () => {
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0] || null;
//     if (file && (file.type === 'image/jpeg' || file.type === 'application/pdf')) {
//       setSelectedFile(file);
//     } else {
//       alert('Please select a JPG or PDF file.');
//     }
//   };

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (selectedFile) {
//       console.log('Uploading file:', selectedFile);

      
//     }
//   };

//   return (
//     <div className="upload-file">
//       <form onSubmit={handleSubmit} className="flex flex-col items-center">
//         <input
//           type="file"
//           accept=".jpg, .jpeg, .pdf"
//           onChange={handleFileChange}
//           className="mb-4"
//         />
//         {selectedFile && (
//           <p className="mb-4 text-lg">Selected file: {selectedFile.name}</p>
//         )}
//         <Button
//           type="submit"
//           disabled={!selectedFile}
//           variant="primary"
//           size="large"
//           rounded
//           className="mt-4"
//         >
//           Upload
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default UploadFile;


// import { useState } from 'react';

// interface UploadFileProps {
//   onUpload: (file: File) => void;
// }

// const UploadFile: React.FC<UploadFileProps> = ({ onUpload }) => {
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0] || null;
//     if (file && (file.type === 'image/jpeg' || file.type === 'application/pdf')) {
//       setSelectedFile(file);
//     } else {
//       alert('Please select a JPG or PDF file.');
//     }
//   };

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (selectedFile) {
//       onUpload(selectedFile);
//     }
//   };

//   return (
//     <div className="upload-file">
//       <form onSubmit={handleSubmit}>
//         <input
//           type="file"
//           accept=".jpg, .jpeg, .pdf"
//           onChange={handleFileChange}
//         />
//         {selectedFile && (
//           <p>Selected file: {selectedFile.name}</p>
//         )}
//         <button type="submit" disabled={!selectedFile}>
//           Upload
//         </button>
//       </form>
//     </div>
//   );
// };

// export default UploadFile;

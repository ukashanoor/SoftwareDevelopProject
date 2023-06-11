import React from 'react';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';

const FileViewer = ({ filePath }) => {
  return (
    <div style={{ margin: '15px' }}>
      {filePath && (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FolderOpenIcon style={{ marginRight: '5px' }} />
          {filePath.endsWith('.ppt') || filePath.endsWith('.pptx') ? (
            <a href={`http://localhost:3001/assets/${filePath}`} target="_blank" rel="noopener noreferrer">
              {filePath}
            </a>
          ) : (
            <p>Unsupported file format</p>
          )}
        </div>
      )}
    </div>
  );
};

export default FileViewer;

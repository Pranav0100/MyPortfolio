import React, { useState } from 'react';

const ResumeDownload = () => {
  const [showResume, setShowResume] = useState(true);

  const handleDownload = async () => {
    try {
      const response = await fetch(process.env.PUBLIC_URL + '/My_resume_updated.pdf');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'My_resume_updated.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      alert('Failed to download resume.');
    }
  };

  const handleClose = () => {
    setShowResume(false);
  };

  if (!showResume) return null;

  return (
    <div style={{ textAlign: 'center', margin: '40px 0' }}>
      <button className="download-btn" onClick={handleDownload} style={{ marginTop: '20px', padding: '12px 30px', fontSize: '1rem', borderRadius: '6px', background: '#667eea', color: '#fff', border: 'none', cursor: 'pointer', marginRight: '10px' }}>
        Download Resume
      </button>
      <button onClick={handleClose} style={{ marginTop: '20px', padding: '12px 30px', fontSize: '1rem', borderRadius: '6px', background: '#e53e3e', color: '#fff', border: 'none', cursor: 'pointer' }}>
        Close Resume
      </button>
      <br />
      <iframe
        src={process.env.PUBLIC_URL + '/My_resume_updated.pdf'}
        title="Resume Preview"
        width="80%"
        height="600px"
        style={{ border: '1px solid #ccc', borderRadius: '8px', marginTop: '30px' }}
        allow="autoplay"
      />
    </div>
  );
};

export default ResumeDownload;

import React from 'react';
import Webcam from 'react-webcam';

export default function WebcamCapture(){
  const webcamRef = React.useRef(null);

  return (
    <div>
      <Webcam
        audio={false}
        ref={webcamRef}
        mirrored={true}
      />
    </div>
  );
};
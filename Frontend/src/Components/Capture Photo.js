import React from "react";
import logo from "../Photos/Blackimage.jpeg";
import logo1 from "../Photos/Redsymbol.jpeg";
import { Link } from "react-router-dom";
import "../App.css"
import { useState,useRef,useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export default function Capture() {
    const [cameraStream, setCameraStream] = useState(null);
    const [capturedImage, setCapturedImage] = useState(null);
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const navigate = useNavigate();
    // const history = useHistory();
  
    useEffect(() => {
      const startCamera = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true });
          setCameraStream(stream);
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        } catch (err) {
          console.error('Error accessing camera:', err);
        }
      };
  
      startCamera();
  
      return () => {
        if (cameraStream) {
          cameraStream.getTracks().forEach(track => {
            track.stop();
          });
        }
      };
    }, []);
  
    const captureImage = () => {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      if (video && canvas) {
        const context = canvas.getContext('2d');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageDataURL = canvas.toDataURL('image/png');
        setCapturedImage(imageDataURL);
      }
    };
  
    const retakePhoto = () => {
      setCapturedImage(null);
      startCamera(); // Restart the camera
    };
  
    const continueWithPhoto = () => {
      // You can implement what you want to do with the captured photo here, for example, navigate to another page
      // Here, we're just logging the image data URL
      navigate('/hospital')
      if (cameraStream) {
      cameraStream.getTracks().forEach(track => {
        track.stop();
      });
    }
      console.log(capturedImage);
    };
  
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        setCameraStream(stream);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error('Error accessing camera:', err);
      }
    };
  
  return (
    <div>
      <div className="row">
        <div style={{height:"1024px",width:"541px"}} className="col-md">
<img src={logo} className="img-fluid" alt="" />
        </div>
        <div className="col-md">
        <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo1} style={{height:"98px",width:"98px",top:"73px",left:"631px"}} alt="Logo" />
      </div>
      <div className="navbar-links" style={{width:"230px" , height: "45px" ,top: "100px" ,left: "335px"
}}>
        <Link style={{textDecoration:"none",color:"black"}} to="/signup">Sign up </Link>
        <Link   style={{textDecoration:"none",color:"black"}} to="/login"> Login</Link>
      </div>
    </nav>
    <div>
      <div className="container" style={{ backgroundColor: "grey", borderRadius: "10px", height: "450px", width: "514px", overflow: "hidden", position: "relative" }}>
        {capturedImage ? (
          <img src={capturedImage} alt="Captured" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        ) : (
          <video ref={videoRef} autoPlay playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        )}
        {!capturedImage && <button onClick={captureImage} style={{ position: "absolute", bottom: "20px", left: "50%", transform: "translateX(-50%)", zIndex: 1 }}>Capture Photo</button>}
      </div>
      {capturedImage && (
        <div>
          <button onClick={retakePhoto}>Retake Photo</button>
          <button onClick={continueWithPhoto}>Continue</button>
        </div>
      )}
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
</div>
</div> 
</div> 

      
  );
}

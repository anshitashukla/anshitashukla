import { useEffect, useState } from "react";
import pacman from "../assets/images/pacman.svg";

function Preloader() {
  return (
    <>
      <style>
        {`
          .loader {
            position: fixed;
            z-index: 1000;
            width: 100%;
            height: 100vh;
            top: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
          }

          .loader-visible {
            opacity: 1;
            transition: all 0.3s ease-in;
          }

          .loader-content {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            pointer-events: none;
            user-select: none;
          }

          .loader-content-info {
            transition: all 0.2s ease-out;
          }

          .spinner {
            max-width: 120px;
            aspect-ratio: 1/1;
            transition: all 0.4s ease-out;
          }

          .title-wrapper {
            display: flex;
          }

          .title-wrapper h5 {
            margin: 0;
          }

          .logo {
            aspect-ratio: 1/1;
            width: 48px;
          }
            .text1{
            color: #000;
            text-align: left;

            }
            .text2{
            color: #2978b5;
            font-weight: 500;
            }

          @media (max-width: 991px) {
            .logo {
              width: 40px;
            }
          }

          @media (max-width: 767px) {
            .logo {
              width: 32px;
            }
          }
        `}
      </style>
      <div className="loader loader-visible">
        <div className="loader-content text-white">
          <img src={pacman} className="spinner" alt="loader" />
          <div className="loader-content-info">
            <div className="title-wrapper">
              <h5 className="text1">Anshita Shukla</h5>
            </div>
            <p className="opacity-50 text2 text-center">Software Engineer</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Preloader;

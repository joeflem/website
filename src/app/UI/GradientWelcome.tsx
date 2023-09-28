"use client";
import styled from "styled-components";

export const GradientWelcome = styled.h1`
  margin: 40px 0 30px 0;
  padding: 20px 30px;
  display: inline-block;
  border-radius: 10px;
  background-image: linear-gradient(
    125deg,
    #e642ed,
    #7f32d4,
    #2327ea,
    #5bb0d3,
    #4ce0a0
  );
  background-size: 400%;
  animation: bganimation 15s infinite;
  color: #fff;
  position: relative;
  figure {
    position: absolute;
    width: 60px;
    height: 60px;
    left: -25px;
    top: -20px;
    margin: 0;
    border-radius: 50%;
    overflow: hidden;
    &:before {
      width: 105%;
      height: 105%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(30deg);
      content: "";
      z-index: 1;
      background-image: linear-gradient(
        125deg,
        #e642ed,
        #7f32d4,
        #2327ea,
        #5bb0d3,
        #4ce0a0
      );
      background-size: 400%;
      animation: bganimation 15s infinite;
    }
  }
  img {
    border-radius: 50%;
    z-index: 1;
    width: 55px;
    height: 55px;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
  }
  @keyframes bganimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

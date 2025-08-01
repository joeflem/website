"use client";
import Image from "next/image";
import styled from "styled-components";

interface UnstyledProfilePicProps {
  className?: string;
}

const UnstyledProfilePic = ({ className }: UnstyledProfilePicProps) => (
  <figure className={className}>
    <Image
      alt="Joe Fleming"
      src="https://avatars.githubusercontent.com/u/45002285?v=4"
      width="32"
      height="32"
    />
  </figure>
);

const ProfilePic = styled(UnstyledProfilePic)`
  width: 48px;
  height: 48px;
  margin: 0 10px 0 0;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  transition: transform 0.15s ease-in-out;
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
  img {
    border-radius: 50%;
    z-index: 1;
    width: 42px;
    height: 42px;
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

export default ProfilePic;

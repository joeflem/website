import Image from "next/image";
import { useContext } from "react";
import styled, { useTheme } from "styled-components";
import { BaseContext } from "@/context/BaseContext";
import Dark from "public/icons/dark.svg";
import Light from "public/icons/light.svg";

interface UnstyledModeSwitcherProps {
  className?: string;
}

const UnstyledModeSwitcher = ({ className }: UnstyledModeSwitcherProps) => {
  const theme = useTheme();
  const { toggleTheme } = useContext(BaseContext);
  return (
    <div className={className}>
      <button onClick={() => toggleTheme()}>
        <Image
          alt={`${theme.name} Mode`}
          src={theme.name === "dark" ? Light : Dark}
          width="22"
          height="22"
        />
      </button>
    </div>
  );
};

const ModeSwitcher = styled(UnstyledModeSwitcher)`
  button {
    background: none;
    border: none;
    cursor: pointer;
    opacity: 0.75;
    transition: 0.25s ease;
    position: relative;
    transform: scale(1);
    &:hover {
      opacity: 1;
      transform: scale(1.1);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`;

export default ModeSwitcher;

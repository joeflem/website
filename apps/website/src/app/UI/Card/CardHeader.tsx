import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import styled from "styled-components";

interface UnstyledCardHeaderProps {
  className?: string;
  logo: string | StaticImport;
  title: string;
  subTitle: string;
}

const UnstyledCardHeader = ({
  className,
  logo,
  title,
  subTitle,
}: UnstyledCardHeaderProps) => {
  return (
    <div className={className}>
      <Image src={logo} alt={title} width={40} height={40} />
      <div>
        <h3>{title}</h3>
        <p>{subTitle}</p>
      </div>
    </div>
  );
};

const CardHeader = styled(UnstyledCardHeader)`
  padding: 20px 20px 10px 20px;
  display: flex;
  align-items: center;
  h3 {
    font-weight: 600;
    margin: 0;
  }
  p {
    margin: 0;
    opacity: 0.5;
  }
  img {
    border-radius: 50%;
    margin-right: 10px;
    border: 3px solid ${(props) => props.theme.border};
  }
`;

export default CardHeader;

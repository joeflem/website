import styled from "styled-components";

interface UnstyledCardFooterProps {
  className?: string;
  text: string;
}

const UnstyledCardFooter = ({ className, text }: UnstyledCardFooterProps) => {
  return (
    <div className={className}>
      <p>{text}</p>
    </div>
  );
};

const CardFooter = styled(UnstyledCardFooter)`
  padding: 10px 20px;
  opacity: 0.5;
  p {
    margin: 0;
  }
`;

export default CardFooter;

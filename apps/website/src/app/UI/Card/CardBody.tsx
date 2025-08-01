import styled from "styled-components";

interface UnstyledCardBodyProps {
  className?: string;
  text: string;
}

const UnstyledCardBody = ({ className, text }: UnstyledCardBodyProps) => {
  return (
    <div className={className}>
      <p>{text}</p>
    </div>
  );
};

const CardBody = styled(UnstyledCardBody)`
  padding: 5px 20px;
  p {
    font-size: 14px;
    margin: 0;
  }
`;

export default CardBody;

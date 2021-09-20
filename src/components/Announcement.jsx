import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center; // vertical alignment
  justify-content: center; // horizontal alignment
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>
      Super deal ! Free shipping on Orders above 500 bucks !
    </Container>
  );
};

export default Announcement;

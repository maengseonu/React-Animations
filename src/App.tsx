import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  hover: { scale: 1.2, rotate: 90 },
  click: { scale: 0.8, rotate: -90, borderRadius: "100%" },
  drag: { backgroundColor: "rgb(46,204,113)", transition: { duration: 1 } },
};

function App() {
  return (
    <Wrapper>
      <Box
        drag
        variants={boxVariants}
        whileHover="hover"
        whileDrag="drag"
        whileTap="click"
      />
    </Wrapper>
  );
}

export default App;

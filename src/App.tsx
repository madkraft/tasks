import { Box, ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { Task } from "./components/Task";

const App = () => {
  return (
    <ChakraProvider>
      <Box maxW={"900px"} margin="100px auto">
        {[1, 2, 3].map((task) => (
          <Task />
        ))}
      </Box>
    </ChakraProvider>
  );
};
export default App;

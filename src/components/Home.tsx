import { Box } from "@mui/material";
import { electronicsHome, booksHome } from "../assests/categoryHome";
import HomeCategoryMainCard from "./home/HomeCategoryMainCard";

const Home = () => {
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <HomeCategoryMainCard
          title="Best of Electronics"
          items={electronicsHome}
        />
        <HomeCategoryMainCard title="Best of Books" items={booksHome} />
      </Box>
    </div>
  );
};

export default Home;

import { Box, Card, Stack, Typography } from "@mui/material";
import HomeCategoryCard, { HomeCategoryCardProp } from "./HomeCategoryCard";

type HomeCategoryMainCardProp = {
  title: string;
  items: HomeCategoryCardProp[];
};

const HomeCategoryMainCard = ({ title, items }: HomeCategoryMainCardProp) => {
  return (
    <Box>
      <Card sx={{ margin: "1rem", height: "330px" }}>
        <Typography variant="h6" fontWeight={500} m={2} ml={6}>
          {title}
        </Typography>
        <Stack direction="row" justifyContent="space-evenly">
          {items.map((item) => {
            return (
              <HomeCategoryCard
                image={item.image}
                name={item.name}
                startPrice={item.startPrice}
              />
            );
          })}
        </Stack>
      </Card>
    </Box>
  );
};

export default HomeCategoryMainCard;

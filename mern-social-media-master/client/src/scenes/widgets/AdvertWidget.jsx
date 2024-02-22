import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          alerts
        </Typography>
        <Typography color={medium}>Create alert</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/war.webp"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>2 airstrikes done in dierelbalah</Typography>
        <Typography color={medium}>7/10/2023</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! help now in direlbalah 2 airstrikes done !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;

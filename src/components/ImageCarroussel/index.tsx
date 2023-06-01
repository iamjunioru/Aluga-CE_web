import { useState } from "react";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SwipeableViews from "react-swipeable-views";
import { AiOutlineLeft, AiOutlineRight, AiFillStar } from "react-icons/ai";
import { ImageCarouselWrapper } from "./styled";
import { useNavigate } from "react-router-dom";

interface HouseCardProps {
  house: {
    id: string;
    inscription_number: string;
    type: string;
    description: string;
    rent_price: string;
    cep: string;
    neighborhood: string;
    street_name: string;
    street_number: string;
    total_occupancy: number;
    total_bedrooms: number;
    total_bathrooms: number;
    has_wifi: boolean;
    has_tv: boolean;
    has_air_conditioning: boolean;
    has_washing_machine: boolean;
    has_kitchen: boolean;
    has_suite: boolean;
    has_parking_space: boolean;
    has_pool: boolean;
    has_beach_view: boolean;
    rating: number;
    user_Id: string;
    images: Array<{
      id: string;
      url: string;
    }>;
    createdAt: string;
    updatedAt: string;
  };
  navigatorPath: string;
}

const CarouselCard = ({ house, navigatorPath }: HouseCardProps) => {
  const [activeStep, setActiveStep] = useState(0);

  const maxSteps = house.images.length;
  const navigate = useNavigate();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };
  return (
    <ImageCarouselWrapper>
      <Box className="carouselCard">
        {house.images.length && (
          <SwipeableViews
            axis={"x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
          >
            {house.images.map((image) => {
              return (
                <div key={image.id}>
                  <Box
                    component="img"
                    sx={{
                      height: 275,
                      display: "block",
                      overflow: "hidden",
                      width: "100%",
                      borderRadius: 3,
                    }}
                    onClick={() => {
                      navigate(navigatorPath);
                    }}
                    src={image.url}
                    alt={image.url}
                  ></Box>
                </div>
              );
            })}
          </SwipeableViews>
        )}

        <Box
          sx={{
            position: "absolute",
            bottom: 100,
            width: "100%",
          }}
        >
          <MobileStepper
            sx={{ backgroundColor: "rgba(35,35,35,0.2)" }}
            steps={maxSteps}
            position="static"
            variant="dots"
            activeStep={activeStep}
            nextButton={
              <Button
                id="next-button"
                size="small"
                sx={{
                  color: "#000",
                  backgroundColor: "#fff",
                  opacity: 1,
                  borderRadius: 10,
                  p: 1,
                  minWidth: "auto",
                }}
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                <AiOutlineRight />
              </Button>
            }
            backButton={
              <Button
                id="back-button"
                size="small"
                sx={{
                  color: "#000",
                  backgroundColor: "#fff",
                  opacity: 1,
                  borderRadius: 10,
                  p: 1,
                  minWidth: "auto",
                }}
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                <AiOutlineLeft />
              </Button>
            }
          />
        </Box>

        <Box
          className="house-card_info"
          onClick={() => {
            navigate(navigatorPath);
          }}
        >
          <Box className="house-card_info-text">
            <Typography component="h3">
              {" "}
              <strong>
                {house.neighborhood}, {house.street_name}
              </strong>
            </Typography>
            <Typography component="h4">{house.type}</Typography>
            <Typography component="h5">
              {" "}
              <strong>{house.rent_price}</strong>
            </Typography>
          </Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div className="house-rating">
                <Typography component="h5"> {house.rating}</Typography>
                <AiFillStar
                  size={24}
                  fill={house.rating >= 1 ? "var(--star-rating)" : "#C0C0C0"}
                />
              </div>
            </Box>
          </Box>
        </Box>
      </Box>
    </ImageCarouselWrapper>
  );
};

export default CarouselCard;

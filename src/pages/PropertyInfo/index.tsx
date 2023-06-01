import { useState } from "react";
// import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import {
  PropertyInfoWrapper,
  PropertyInfoContent,
  PropertyInfoHeader,
  PropertyInfoImages,
  PropertyInfoOwnerContact,
  PropertyInfoDescriptionDetails,
} from "./styled";
import CommentSection from "../../components/CommentsSection";
import { Box, Button, MobileStepper } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const images = [
  {
    id: "4503-ad0c-4403854decb1",
    url: "https://images.unsplash.com/photo-1574110745453-0f417d9b5023?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
  },
  {
    id: "4503-ad0c-4403854de434",
    url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=60",
  },
  {
    id: "4503-ad0c-4403854d3451",
    url: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80",
  },
  {
    id: "1234-ad0c-4403854decb1",
    url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=60",
  },
];

function PropertyInfo() {
  const [activeStep, setActiveStep] = useState(0);

  const maxSteps = images.length;
  // const params = useParams();

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
    <PropertyInfoWrapper>
      <Header />
      <PropertyInfoContent>
        <div className="property-info">
          <PropertyInfoHeader>
            <div className="property-info__texts">
              <h1>
                Property InfoProperty InfoProperty InfoProperty InfoProperty
                InfoProperty InfoProperty InfoProperty InfoProperty InfoProperty
                Info
              </h1>
              <h3>rua tal, pais tal</h3>
            </div>
            <div className="property-info__type">
              <h3>Property Type</h3>
            </div>
          </PropertyInfoHeader>
          <PropertyInfoImages>
            <Box className="carouselCard">
              {images.length && (
                <SwipeableViews
                  axis={"x"}
                  index={activeStep}
                  onChangeIndex={handleStepChange}
                >
                  {images.map((image) => {
                    return (
                      <div className="image-swipper" key={image.id}>
                        <Box
                          component="img"
                          sx={{
                            height: "100%",
                            maxHeight: "100%",
                            objectFit: "cover",
                            display: "block",
                            overflow: "hidden",
                            width: "100%",
                            borderRadius: 3,
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
                  bottom: 0,
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
            </Box>
          </PropertyInfoImages>
          <PropertyInfoDescriptionDetails>
            <div className="property-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
              amet eligendi dolor magnam, sequi vero, tempora voluptatibus
              voluptatem libero delectus, corrupti quaerat! Ab, quia iure sunt
              porro magnam ipsa atque. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Amet minima alias facilis officiis repellat,
              laborum odio quam ad velit omnis maiores qui enim laudantium illum
              debitis molestiae iusto excepturi adipisci! Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Illo quibusdam, recusandae,
              perferendis ratione iusto similique libero voluptates et, voluptas
              obcaecati deleniti itaque pariatur laborum fuga officia expedita
              harum beatae voluptatibus.
            </div>
          </PropertyInfoDescriptionDetails>
        </div>
        <PropertyInfoOwnerContact>
          Informações do proprietário
        </PropertyInfoOwnerContact>
      </PropertyInfoContent>
      <CommentSection />
    </PropertyInfoWrapper>
  );
}

export default PropertyInfo;

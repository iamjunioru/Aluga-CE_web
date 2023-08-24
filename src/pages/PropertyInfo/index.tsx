import { useEffect, useState, useCallback, useContext } from "react";
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
import { PropertyService } from "../../services/PropertyServices";
import { Property } from "../../models/Property";
import { useParams } from "react-router-dom";
import { User } from "../../models/User";
import { UserService } from "../../services/UserService";
import Loader from "../../components/Loader";
import { AuthContext } from "../../contexts/authContext";
import { ImagesServices } from "../../services/ImageServices";

function PropertyInfo() {
  const userContext = useContext(AuthContext);
  const [property, setProperty] = useState({} as Property);
  const [userInfo, setUserInfo] = useState({} as User);
  const [showPropertyInfo, setShowPropertyInfo] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [activeStep, setActiveStep] = useState(0);

  const params = useParams();

  const id = params.id as string;

  useEffect(() => {
    setLoading(true);
    if (id) {
      PropertyService.getProperty(id).then((response) => {
        ImagesServices.getImages(id).then((res) => {
          setProperty(
            {
              ...response.data,
              images: res.data,
            }
          );
        })
        setLoading(false);
      }).catch((error) => {
        console.log(error);
      })
    }
  }, [id]);

  useEffect(() => {
    if (Object.keys(property).length > 0 && userContext.user?.id) {
      setLoading(true);
      UserService.getSpecificUser(property.user_Id).then((response) => {
        setUserInfo(response.data);
        setShowPropertyInfo(true);
        setLoading(false);
      }).catch((error) => {
        console.log(error.response.data.errors.default);
        setShowPropertyInfo(false);
        setLoading(false);
      })
    }
  }, [property, userContext.user?.id]);

  const maxSteps = property.images?.length || 0;

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
      {
        isLoading ? (
          <Loader />
        ) : (
          <>
            <PropertyInfoContent>
              <div className="property-info">
                <PropertyInfoHeader>
                  <div className="property-info__texts">
                    <h1>
                      {property.description}
                    </h1>
                    <h3>
                      {property.street_name}, {property.neighborhood}
                    </h3>
                  </div>
                  <div className="property-info__type">
                    <h3>
                      {property.type}
                    </h3>
                  </div>
                </PropertyInfoHeader>
                <PropertyInfoImages>
                  <Box className="carouselCard">
                    {property && (
                      <SwipeableViews
                        axis={"x"}
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                      >
                        {property?.images && property?.images.length > 0 && property?.images.map((image) => {
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
                                src={image.path}
                                alt={image.path}
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
                    {property.description}
                  </div>
                </PropertyInfoDescriptionDetails>
              </div>
              <PropertyInfoOwnerContact>
                {showPropertyInfo ? (
                  <div className="property-info__owner">
                    <div className="property-info__owner__name">
                      <h3>{userInfo.name}</h3>
                    </div>
                    <div className="property-info__owner__contact">
                      <h3>Contact</h3>
                    </div>
                  </div>
                ) : (
                  <div className="property-info__owner">
                    Para mostrar as informações do proprietário, faça login.
                  </div>
                )}
              </PropertyInfoOwnerContact>
            </PropertyInfoContent>
            {
              Object.keys(property).length > 0 && (
                <CommentSection propertyId={property?.id}/>
              )
            }
          </>
        )
      }
    </PropertyInfoWrapper>
  );
}

export default PropertyInfo;

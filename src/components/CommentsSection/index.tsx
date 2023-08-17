import { AiFillStar } from "react-icons/ai";
import { CommentsSectionWrapper, CommentsSectionContent } from "./styled";
import Avatar from "@mui/material/Avatar";
import { AuthContext } from "../../contexts/authContext";
import { useContext, useEffect, useState } from "react";
import { Review } from "../../models/Reviews";
import Loader from "../Loader";
import { ReviewsServices } from "../../services/ReviewsServices";

function CommentSection({ propertyId }: { propertyId: string }) {
  const userContext = useContext(AuthContext);
  const [reviews, setReviews] = useState({} as Review[]);
  const [totalReviews, setTotalReviews] = useState(0);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    ReviewsServices.getReviews(propertyId).then((response) => {
      setReviews(response.data);
      setTotalReviews(response.total);
      setLoading(false);
    }).catch((error) => {
      console.log(error);
      setLoading(false);
    })
  }, [propertyId]);

  const calculateRating = (allReviews: Review[]) => {
    if (!Array.isArray(allReviews)) return 0; // Verifique se é um array
    if (allReviews.length === 0) return 0; // Se o array estiver vazio, retorne 0
    let sum = 0;
    allReviews.forEach((review) => {
      sum += review.rating;
    });
    return (sum / allReviews.length).toFixed(1);
  };
  

  const formatDate = (date: string) => {
    // 12/12/2002
    const dateSplitted = date.split("T");
    const dateSplitted2 = dateSplitted[0].split("-");
    return `${dateSplitted2[2]}/${dateSplitted2[1]}/${dateSplitted2[0]}`;
  };

  return (
    <CommentsSectionWrapper>
    {isLoading ? (
      <Loader />
    ) : (
      <>
      <div className="comment-header">
        <h3>
          <AiFillStar
            style={{ color: "var(--star-rating)", marginRight: "5px" }}
          />
         {calculateRating(
            reviews
          ) } - {
            totalReviews
          } avaliações
        </h3>
      </div>
      <CommentsSectionContent>
      {
       Object.keys(reviews).length > 0 && reviews.map((review) => (
          <div className="comment-card">
            <div className="comment-card__header">
              <div className="comment-card__header-user">
                <Avatar
                  sx={{ width: 50, height: 50 }}
                  style={{
                    height: "50px",
                    width: "50px",
                  }}
                >
                  {review.user_name ? (
                    review.user_name[0].toUpperCase()
                  ) : (
                    <Avatar sx={{ width: 50, height: 50 }} />
                  )}
                </Avatar>
                <div className="comment-card__header-user-info">
                  <h3>{review.user_name}</h3>
                  <span>
                    {formatDate(review.createdAt)}
                  </span>
                </div>
              </div>
              <div className="comment-card__header-user-rating">
                <AiFillStar
                  style={{ color: "var(--star-rating)", marginRight: "5px" }}
                />{" "}
                {review.rating}
              </div>
            </div>
            <div className="comment-card__body">
              <p>
                {review.comment}
              </p>
            </div>
          </div>
        ))
      }
      </CommentsSectionContent>
          </>
        )}
    </CommentsSectionWrapper>
  );
}

export default CommentSection;

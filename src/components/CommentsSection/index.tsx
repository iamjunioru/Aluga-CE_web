import { AiFillStar } from "react-icons/ai";
import { CommentsSectionWrapper, CommentsSectionContent } from "./styled";
import Avatar from "@mui/material/Avatar";
import { AuthContext } from "../../contexts/authContext";
import { useContext } from "react";

function CommentSection() {
  const userContext = useContext(AuthContext);
  return (
    <CommentsSectionWrapper>
      <div className="comment-header">
        <h3>
          <AiFillStar
            style={{ color: "var(--star-rating)", marginRight: "5px" }}
          />
          4.5 - 3 reviews
        </h3>
      </div>
      <CommentsSectionContent>
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
                {userContext.user?.name ? (
                  userContext.user?.name[0].toUpperCase()
                ) : (
                  <Avatar sx={{ width: 50, height: 50 }} />
                )}
              </Avatar>
              <div className="comment-card__header-user-info">
                <h3>John Doe</h3>
                <span>julho de 2022</span>
              </div>
            </div>
            <div className="comment-card__header-user-rating">
              <AiFillStar
                style={{ color: "var(--star-rating)", marginRight: "5px" }}
              />{" "}
              4.5
            </div>
          </div>
          <div className="comment-card__body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quibusdam, voluptates, quia voluptate quod
              exercitationem quos voluptatibus quas quibusdam, voluptates, quia
              voluptate quod exercitationem quos voluptatibus quas
            </p>
          </div>
        </div>
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
                {userContext.user?.name ? (
                  userContext.user?.name[0].toUpperCase()
                ) : (
                  <Avatar sx={{ width: 50, height: 50 }} />
                )}
              </Avatar>
              <div className="comment-card__header-user-info">
                <h3>John Doe</h3>
                <span>julho de 2022</span>
              </div>
            </div>
            <div className="comment-card__header-user-rating">
              <AiFillStar
                style={{ color: "var(--star-rating)", marginRight: "5px" }}
              />{" "}
              4.5
            </div>
          </div>
          <div className="comment-card__body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quibusdam, voluptates, quia voluptate quod
              exercitationem quos voluptatibus quas quibusdam, voluptates, quia
              voluptate quod exercitationem quos voluptatibus quas
            </p>
          </div>
        </div>
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
                {userContext.user?.name ? (
                  userContext.user?.name[0].toUpperCase()
                ) : (
                  <Avatar sx={{ width: 50, height: 50 }} />
                )}
              </Avatar>
              <div className="comment-card__header-user-info">
                <h3>John Doe</h3>
                <span>julho de 2022</span>
              </div>
            </div>
            <div className="comment-card__header-user-rating">
              <AiFillStar
                style={{ color: "var(--star-rating)", marginRight: "5px" }}
              />{" "}
              4.5
            </div>
          </div>
          <div className="comment-card__body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quibusdam, voluptates, quia voluptate quod
              exercitationem quos voluptatibus quas quibusdam, voluptates, quia
              voluptate quod exercitationem quos voluptatibus quas
            </p>
          </div>
        </div>
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
                {userContext.user?.name ? (
                  userContext.user?.name[0].toUpperCase()
                ) : (
                  <Avatar sx={{ width: 50, height: 50 }} />
                )}
              </Avatar>
              <div className="comment-card__header-user-info">
                <h3>John Doe</h3>
                <span>julho de 2022</span>
              </div>
            </div>
            <div className="comment-card__header-user-rating">
              <AiFillStar
                style={{ color: "var(--star-rating)", marginRight: "5px" }}
              />{" "}
              4.5
            </div>
          </div>
          <div className="comment-card__body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quibusdam, voluptates, quia voluptate quod
              exercitationem quos voluptatibus quas quibusdam, voluptates, quia
              voluptate quod exercitationem quos voluptatibus quas
            </p>
          </div>
        </div>
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
                {userContext.user?.name ? (
                  userContext.user?.name[0].toUpperCase()
                ) : (
                  <Avatar sx={{ width: 50, height: 50 }} />
                )}
              </Avatar>
              <div className="comment-card__header-user-info">
                <h3>John Doe</h3>
                <span>julho de 2022</span>
              </div>
            </div>
            <div className="comment-card__header-user-rating">
              <AiFillStar
                style={{ color: "var(--star-rating)", marginRight: "5px" }}
              />{" "}
              4.5
            </div>
          </div>
          <div className="comment-card__body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quibusdam, voluptates, quia voluptate quod
              exercitationem quos voluptatibus quas quibusdam, voluptates, quia
              voluptate quod exercitationem quos voluptatibus quas
            </p>
          </div>
        </div>
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
                {userContext.user?.name ? (
                  userContext.user?.name[0].toUpperCase()
                ) : (
                  <Avatar sx={{ width: 50, height: 50 }} />
                )}
              </Avatar>
              <div className="comment-card__header-user-info">
                <h3>John Doe</h3>
                <span>julho de 2022</span>
              </div>
            </div>
            <div className="comment-card__header-user-rating">
              <AiFillStar
                style={{ color: "var(--star-rating)", marginRight: "5px" }}
              />{" "}
              4.5
            </div>
          </div>
          <div className="comment-card__body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quibusdam, voluptates, quia voluptate quod
              exercitationem quos voluptatibus quas quibusdam, voluptates, quia
              voluptate quod exercitationem quos voluptatibus quas
            </p>
          </div>
        </div>
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
                {userContext.user?.name ? (
                  userContext.user?.name[0].toUpperCase()
                ) : (
                  <Avatar sx={{ width: 50, height: 50 }} />
                )}
              </Avatar>
              <div className="comment-card__header-user-info">
                <h3>John Doe</h3>
                <span>julho de 2022</span>
              </div>
            </div>
            <div className="comment-card__header-user-rating">
              <AiFillStar
                style={{ color: "var(--star-rating)", marginRight: "5px" }}
              />{" "}
              4.5
            </div>
          </div>
          <div className="comment-card__body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quibusdam, voluptates, quia voluptate quod
              exercitationem quos voluptatibus quas quibusdam, voluptates, quia
              voluptate quod exercitationem quos voluptatibus quas
            </p>
          </div>
        </div>
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
                {userContext.user?.name ? (
                  userContext.user?.name[0].toUpperCase()
                ) : (
                  <Avatar sx={{ width: 50, height: 50 }} />
                )}
              </Avatar>
              <div className="comment-card__header-user-info">
                <h3>John Doe</h3>
                <span>julho de 2022</span>
              </div>
            </div>
            <div className="comment-card__header-user-rating">
              <AiFillStar
                style={{ color: "var(--star-rating)", marginRight: "5px" }}
              />{" "}
              4.5
            </div>
          </div>
          <div className="comment-card__body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quibusdam, voluptates, quia voluptate quod
              exercitationem quos voluptatibus quas quibusdam, voluptates, quia
              voluptate quod exercitationem quos voluptatibus quas
            </p>
          </div>
        </div>
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
                {userContext.user?.name ? (
                  userContext.user?.name[0].toUpperCase()
                ) : (
                  <Avatar sx={{ width: 50, height: 50 }} />
                )}
              </Avatar>
              <div className="comment-card__header-user-info">
                <h3>John Doe</h3>
                <span>julho de 2022</span>
              </div>
            </div>
            <div className="comment-card__header-user-rating">
              <AiFillStar
                style={{ color: "var(--star-rating)", marginRight: "5px" }}
              />{" "}
              4.5
            </div>
          </div>
          <div className="comment-card__body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quibusdam, voluptates, quia voluptate quod
              exercitationem quos voluptatibus quas quibusdam, voluptates, quia
              voluptate quod exercitationem quos voluptatibus quas
            </p>
          </div>
        </div>
      </CommentsSectionContent>
    </CommentsSectionWrapper>
  );
}

export default CommentSection;

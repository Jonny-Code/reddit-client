import React from "react";
import { Link, useParams } from "react-router-dom";
import { ReactComponent as OnlineAccount } from "./svg/online-account.svg";
import { ReactComponent as AddImage } from "./svg/add-image.svg";
import { ReactComponent as LinkPost } from "./svg/link-post.svg";
import "./CreatePost.css";

export const CreatePost: React.FC = () => {
  let { subName } = useParams();

  return (
    <>
      <div className="d-flex nav-container-news">
        <div className="d-flex align-items-center w-100">
          <OnlineAccount />
          <div className="create-post-container">
            <Link
              style={{
                textDecoration: "none",
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
              to={`/r/${subName}/submit`}
            >
              <form action="submit">
                <input
                  autoComplete="off"
                  type="text"
                  name="post"
                  placeholder="Create Post"
                />
              </form>
            </Link>
          </div>
          <AddImage
            style={{
              margin: "0 10px",
            }}
          />
          <LinkPost
            style={{
              margin: "0 10px",
            }}
          />
        </div>
      </div>
    </>
  );
};

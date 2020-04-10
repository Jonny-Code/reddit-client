import React from "react";
import { ReactComponent as Arrow } from "./svg/arrow.svg";
import { CommentType } from "../../contexts/CommentType";

export const Reply: React.FC<CommentType> = ({
  body,
  points,
  postedAt,
  postedBy,
  _id,
}) => {
  return (
    <>
      <div
        key={_id}
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          margin: "auto 0",
          padding: "0 0 20px 0",
          background: "#1a1a1b",
        }}
      >
        <div
          style={{
            margin: "0 10px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span
            className="pointer d-flex justify-content-center"
            style={{
              height: "18px",
              width: "28px",
              margin: "2px 0",
            }}
          >
            <Arrow />
          </span>

          <span
            className="pointer d-flex justify-content-center"
            style={{
              height: "18px",
              width: "28px",
              margin: "2px 0",
            }}
          >
            <Arrow style={{ transform: "rotate(180deg)" }} />
          </span>

          <div
            style={{
              margin: "6px 0 0 0",
              padding: "0 0 3px 0",
            }}
            className="vertical-line hover-vertical-line pointer"
          ></div>
        </div>
        <div
          style={{
            width: "100%",
          }}
        >
          <h5
            style={{
              display: "inline",
              color: "rgb(215, 218, 220)",
              margin: "4px 0 0 0",
              fontSize: "13px",
              fontWeight: 400,
            }}
            className="hover-underline pointer"
          >
            {postedBy}
          </h5>
          <h5
            style={{
              display: "inline",
              color: "#818384",
              margin: "4px 0 0 4px",
              fontSize: "13px",
              fontWeight: 300,
            }}
          >
            {points} points · {postedAt}
          </h5>
          <h5
            style={{
              color: "rgb(215, 218, 220)",
              margin: "2px 0",
              lineHeight: "1.4",
            }}
            className="fs-15 font-weight-lighter"
          >
            {body}
          </h5>
        </div>
      </div>
    </>
  );
};

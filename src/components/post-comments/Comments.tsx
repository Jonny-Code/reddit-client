import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { FetchGetComments } from "../../util/Fetch";
import { CommentsContext } from "../../contexts/CommentsContext";
import { ReactComponent as Arrow } from "./svg/arrow.svg";

function Comment({ c }: any) {
  let x = 100;
  if (c.replies.length > 0) {
    x *= 0.75;
  }

  const nestedComments = (c.replies || []).map((c: any) => {
    return (
      <Comment
        style={{
          display: "flex",
          height: `${x}%`,
          width: "100%",
          margin: "0",
          padding: "14px 0 4px 0",
          background: "#1a1a1b",
        }}
        key={c._id}
        c={c}
      />
    );
  });

  return (
    <div
      key={c._id}
      style={{
        display: "flex",
        height: `${x}%`,
        width: "100%",
        margin: "0",
        padding: "18px 0 0 0",
        background: "#1a1a1b",
      }}
    >
      <div
        style={{
          margin: "0 2px 0 10px",
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
          height: "100%",
          padding: "0 0 2px 0",
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
          {c.postedBy}
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
          {c.points} points · {c.postedAt}
        </h5>
        <h5
          style={{
            color: "rgb(215, 218, 220)",
            margin: "2px 0",
            lineHeight: "1.4",
          }}
          className="fs-15 font-weight-lighter"
        >
          {c.body}
        </h5>
        {nestedComments}
      </div>
    </div>
  );
}

export const Comments: React.FC = () => {
  const { comments, commentsDispatch } = useContext(CommentsContext);
  const { postId } = useParams();

  useEffect(() => {
    FetchGetComments(commentsDispatch, postId);
  }, []);

  useEffect(() => {
    console.log(comments);
  }, [comments]);

  return (
    <>
      {comments.map((com) => (
        <Comment key={com._id} c={com} />
      ))}
    </>
  );
};

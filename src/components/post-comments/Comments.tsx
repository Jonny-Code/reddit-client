import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { FetchGetComments } from "../../util/Fetch";
import { CommentsContext } from "../../contexts/CommentsContext";
import { ReactComponent as Arrow } from "./svg/arrow.svg";

function Comment({ c }: any) {
  const { comments, commentsDispatch } = useContext(CommentsContext);

  const nestedComments = (c.replies || []).map((c: any) => {
    return (
      <Comment
        style={{
          display: "flex",
          width: "100%",
          margin: "0",
          padding: "14px 0 0 0",
          background: "#1a1a1b",
        }}
        key={c._id}
        c={c}
      />
    );
  });

  return (
    <>
      {!c.hideComment ? (
        <div
          key={c._id}
          style={{
            display: "flex",
            width: "100%",
            margin: "0",
            padding: "18px 0 0 0",
            background: "#1a1a1b",
          }}
        >
          <div
            style={{
              flex: 1,
              margin: "0 0 0 2px",
              height: "auto",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              className="pointer d-flex justify-content-center"
              style={{
                height: "18px",
                width: "22px",
                margin: "2px 0",
              }}
            >
              <Arrow />
            </span>

            <span
              className="pointer d-flex justify-content-center"
              style={{
                height: "18px",
                width: "22px",
                margin: "2px 0",
              }}
            >
              <Arrow style={{ transform: "rotate(180deg)" }} />
            </span>

            <div
              onClick={() => {
                console.log(c);
                commentsDispatch({ type: "hide", c: c });
              }}
              className="vertical-line hover-vertical-line pointer"
              style={{
                height: "100%",
                margin: "6px 0 0 0",
                padding: "0 0 3px 0",
              }}
            ></div>
          </div>

          <div
            style={{
              flex: 32,
              width: "100%",
              height: "100%",
              padding: "0 0 0 4px",
            }}
          >
            <h5
              className="hover-underline pointer"
              style={{
                display: "inline",
                color: "rgb(215, 218, 220)",
                margin: "4px 0 0 0",
                fontSize: "13px",
                fontWeight: 400,
              }}
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
      ) : (
        <div
          key={c._id}
          style={{
            display: "flex",
            width: "100%",
            margin: "0",
            padding: "19px 0 0 6px",
            background: "#1a1a1b",
          }}
        >
          <div
            onClick={() => {
              console.log(c);
              commentsDispatch({ type: "hide", c: c });
            }}
            style={{
              display: "flex",
              cursor: "pointer",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              margin: "3px 1px 0 0",
              padding: "2px 2px 3px 2px",
              width: "10px",
              height: "10px",
              background: "#4fbcff",
              color: "black",
              fontSize: "12px",
              fontWeight: "bolder",
              borderRadius: "50%",
            }}
          >
            ＋
          </div>
          <h5
            className="hover-underline pointer"
            style={{
              display: "inline",
              color: "rgba(215, 218, 220)",
              opacity: ".6",
              margin: "2px 0 0 7px",
              fontSize: "13px",
              fontWeight: 400,
            }}
          >
            {c.postedBy}
          </h5>
          <h5
            style={{
              display: "inline",
              color: "#818384",
              opacity: ".6",
              margin: "2px 0 0 4px",
              fontSize: "13px",
              fontWeight: 300,
            }}
          >
            {c.points} points · {c.postedAt}
          </h5>
        </div>
      )}
    </>
  );
}

export const Comments: React.FC = () => {
  const { comments, commentsDispatch } = useContext(CommentsContext);
  const { postId } = useParams();

  useEffect(() => {
    FetchGetComments(commentsDispatch, postId);
  }, []);

  // useEffect(() => {
  //   console.log(comments);
  // }, [comments]);

  return (
    <>
      {comments.map((com) => (
        <Comment key={com._id} c={com} />
      ))}
    </>
  );
};

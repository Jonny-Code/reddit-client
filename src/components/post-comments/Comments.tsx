import React, { useEffect, useContext, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import moment from "moment";
import { FetchGetComments, FetchPostComment } from "../../util/Fetch";
import { CommentsContext } from "../../contexts/CommentsContext";
import { ReactComponent as Arrow } from "./svg/arrow.svg";
import { ReactComponent as CommentSvg } from "./svg/comment.svg";
import "./Comments.css";

function Comment({ c }: any) {
  const { commentsDispatch } = useContext(CommentsContext);
  const [form, setForm] = useState({ comment: "" });
  const [showReply, setShowReply] = useState(false);
  let { postId } = useParams();
  let history = useHistory();

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

  const handleReply = () => {
    setShowReply(!showReply);
  };

  const handleSend = (x: any) => {
    let c = {
      post: postId,
      points: 0,
      postedBy: localStorage.userName,
      postedAt: moment(),
      body: form.comment,
      isReply: true,
      repliesTo: [...x.repliesTo, x._id],
      hideComment: false,
      replies: [],
    };
    FetchPostComment(commentsDispatch, c, postId!);
    history.go(0);
  };

  const handleChange = (e: any) => {
    setForm({
      ...form,
      comment: e.target.value,
    });
  };

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
              {c.points} points · {moment(c.postedAt).fromNow()}
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
            {localStorage.userToken ? (
              <div className="d-flex">
                <button
                  onClick={handleReply}
                  className="btn-comments-post-comments focus-outline-none d-flex align-items-center"
                >
                  <CommentSvg className="mr-1" />
                  Reply
                </button>
                <button className="btn-share-post-comments focus-outline-none">
                  Give Award
                </button>
                <button className="btn-share-post-comments focus-outline-none">
                  Share
                </button>
                <button className="btn-report-post-comments focus-outline-none">
                  Report
                </button>
                <button className="btn-save-post-comments focus-outline-none">
                  Save
                </button>
              </div>
            ) : null}
            {showReply ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "24px 12px 20px 12px",
                  maxWidth: "648px",
                  width: "100%",
                }}
              >
                <form
                  style={{
                    width: "100%",
                    display: "flex",
                    border: "1px solid #444449",
                    borderRadius: "3px",
                  }}
                  action="submit"
                >
                  <textarea
                    onChange={handleChange}
                    className="submit-comment-body"
                    style={{
                      background: "#1a1a1b",
                      color: "#d7dadc",
                      padding: "10px 0 10px 10px",
                      fontSize: "14px",
                      width: "100%",
                    }}
                    placeholder="What are your thoughts?"
                    name="body"
                    id=""
                    cols={20}
                    rows={8}
                  ></textarea>
                </form>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    background: "#29292c",
                    color: "#d7dadc",
                    padding: "4px 0",
                    borderLeft: "1px solid #444449",
                    borderRight: "1px solid #444449",
                    borderBottom: "1px solid #444449",
                    borderRadius: "3px",
                    width: "100%",
                  }}
                >
                  <button
                    onClick={() => {
                      handleSend(c);
                    }}
                    style={{
                      cursor: form.comment.length ? "pointer" : "not-allowed",
                      background: "#d7dadc",
                      color: form.comment.length ? "black" : "grey",
                      padding: "4px 14px",
                      margin: "0 8px 0 0",
                      border: "1px solid #d7dadc",
                      borderRadius: "3px",
                      fontFamily: "monospace",
                      fontWeight: 600,
                    }}
                  >
                    COMMENT
                  </button>
                </div>
              </div>
            ) : null}
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
    comments.length
      ? console.log("no length")
      : FetchGetComments(commentsDispatch, postId);

    return () => {
      commentsDispatch({ type: "removeAll" });
    };
  }, []);

  return (
    <>
      {comments.map((com) => (
        <Comment key={com._id} c={com} />
      ))}
    </>
  );
};

import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ReactComponent as Arrow } from "./svg/arrow.svg";
import { FetchGetComments, FetchPostComment } from "../../util/Fetch";
import { CommentsContext } from "../../contexts/CommentsContext";
import { CommentType } from "../../contexts/CommentType";
import { Comment } from "./Comment";

export const Comments: React.FC = () => {
  const { comments, commentsDispatch } = useContext(CommentsContext);
  const { postId } = useParams();

  useEffect(() => {
    FetchGetComments(commentsDispatch, postId);
  }, []);

  // useEffect(() => {
  //   FetchPostComment(
  //     commentsDispatch,
  //     {
  //       body: "this is the body of the 2nd comment",
  //       isReply: false,
  //       points: 12,
  //       postedAt: "8 min ago",
  //       postedBy: "user9",
  //       replies: [],
  //     } as Comment,
  //     postId!
  //   );
  //   return () => {};
  // }, []);

  useEffect(() => {
    console.log(comments);
  }, [comments]);

  return (
    <>
      {comments.map(
        ({
          body,
          isReply,
          points,
          postedAt,
          postedBy,
          replies,
          _id,
        }: CommentType) => (
          <Comment
            key={_id}
            body={body}
            isReply={isReply}
            points={points}
            postedAt={postedAt}
            postedBy={postedBy}
            replies={replies}
            _id={_id}
          />
          // <div
          //   key={i._id}
          //   style={{
          //     display: "flex",
          //     height: "100%",
          //     width: "100%",
          //     margin: "auto 0",
          //     padding: "0 0 20px 0",
          //     background: "#1a1a1b",
          //   }}
          // >
          //   <div
          //     style={{
          //       margin: "0 10px",
          //       height: "100%",
          //       display: "flex",
          //       flexDirection: "column",
          //     }}
          //   >
          //     <span
          //       className="pointer d-flex justify-content-center"
          //       style={{
          //         height: "18px",
          //         width: "28px",
          //         margin: "2px 0",
          //       }}
          //     >
          //       <Arrow />
          //     </span>

          //     <span
          //       className="pointer d-flex justify-content-center"
          //       style={{
          //         height: "18px",
          //         width: "28px",
          //         margin: "2px 0",
          //       }}
          //     >
          //       <Arrow style={{ transform: "rotate(180deg)" }} />
          //     </span>

          //     <div
          //       style={{
          //         margin: "6px 0 0 0",
          //         padding: "0 0 3px 0",
          //       }}
          //       className="vertical-line hover-vertical-line pointer"
          //     ></div>
          //   </div>
          //   <div
          //     style={{
          //       width: "100%",
          //     }}
          //   >
          //     <h5
          //       style={{
          //         display: "inline",
          //         color: "rgb(215, 218, 220)",
          //         margin: "4px 0 0 0",
          //         fontSize: "13px",
          //         fontWeight: 400,
          //       }}
          //       className="hover-underline pointer"
          //     >
          //       {i.postedBy}
          //     </h5>
          //     <h5
          //       style={{
          //         display: "inline",
          //         color: "#818384",
          //         margin: "4px 0 0 4px",
          //         fontSize: "13px",
          //         fontWeight: 300,
          //       }}
          //     >
          //       {i.points} points · {i.postedAt}
          //     </h5>
          //     <h5
          //       style={{
          //         color: "rgb(215, 218, 220)",
          //         margin: "2px 0",
          //         lineHeight: "1.4",
          //       }}
          //       className="fs-15 font-weight-lighter"
          //     >
          //       {i.body}
          //     </h5>
          //   </div>
          // </div>
        )
      )}
    </>
  );
};

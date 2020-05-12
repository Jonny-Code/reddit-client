import React, { useContext } from "react";
import { SubredditContext } from "../../contexts/SubredditContext";
import { rulesList } from "./RulesList";
import { ReactComponent as OpenSvg } from "./svg/open.svg";
import "./Rules.css";

export const Rules: React.FC = () => {
  const { subreddit } = useContext(SubredditContext);

  return (
    <div className="rules-container">
      <h4 className="title-rules">{`r/${subreddit.name} Rules`}</h4>
      {rulesList.map((i, x) => (
        <div key={x}>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <h4 className="text-lighter fs-15 font-weight-lighter m-0 pt-2 pb-2">
              {`${x + 1}. ${i.title}`}
            </h4>
            <div
              style={{
                display: "flex",
                height: "100%",
                alignItems: "end",
                padding: "8px 0 0 0",
              }}
            >
              <OpenSvg
                style={{
                  cursor: "pointer",
                  width: "14px",
                }}
              />
            </div>
          </div>
          <hr className="mt-1 mb-1" />
        </div>
      ))}
    </div>
  );
};

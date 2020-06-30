const local = "http://localhost:5000";
const heroku = "https://shmreddit.herokuapp.com";
const URL = process.env.NODE_ENV === "development" ? local : heroku;

export const FetchGetPosts = async (postsDispatch: any) => {
  try {
    const res = await fetch(`${URL}/posts`);
    const r = await res.json();
    if (r.status === "error") {
      postsDispatch({ type: "spread", posts: [] });
    } else {
      postsDispatch({ type: "spread", posts: r.data.posts });
    }
  } catch (err) {
    console.error(err);
  }
};

export const FetchGetSubreddit = async (
  subredditDispatch: any,
  postsDispatch: any,
  subredditName: any
) => {
  try {
    const res = await fetch(`${URL}/subreddits/` + subredditName);
    const r = await res.json();
    if (r.status === "success") {
      subredditDispatch({ type: "spread", subreddit: r.data.subreddit });
      postsDispatch({ type: "spread", posts: r.data.posts });
    } else {
      postsDispatch({ type: "spread", subreddit: [] });
    }
  } catch (err) {
    console.error(err);
  }
};

export const FetchGetUser = async (userDispatch: any) => {
  try {
    const res = await fetch(`${URL}/users`);
    const r = await res.json();
    if (r.status === "error") {
      userDispatch({ type: "spread", user: [] });
    } else {
      userDispatch({ type: "spread", user: r.data.user });
    }
  } catch (err) {
    console.error(err);
  }
};

export const FetchGetComments = async (commentsDispatch: any, postId: any) => {
  const res = await fetch(`${URL}/comments/` + postId);
  const r = await res.json();
  if (r.status === "error") {
    commentsDispatch({ type: "spread", comments: [] });
  } else {
    commentsDispatch({ type: "spread", comments: r.data.comments });
  }
};

export const FetchPost = async (postsDispatch: any, data: any) => {
  const res = await fetch(`${URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const r = await res.json();
  if (r.status === "success") {
    postsDispatch({ type: "add", posts: r.data });
  }
};

export const FetchPostUpvote = async (postsDispatch: any, post: any) => {
  const res = await fetch(`${URL}/users/upvote`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ postId: post._id, userId: localStorage.userId }),
  });
  const r = await res.json();
  if (r.status === "success") {
    let temp = post;
    temp.upvoted = true;
    temp.votes += 1;
    postsDispatch({ type: "update", posts: temp });
    if (!localStorage.upvoted.length) {
      localStorage.upvoted = post._id;
    } else {
      let x = [localStorage.upvoted, post._id];
      localStorage.upvoted = x;
    }
  }
};

export const FetchPostDownvote = async (postsDispatch: any, post: any) => {
  const res = await fetch(`${URL}/users/downvote`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ postId: post._id, userId: localStorage.userId }),
  });
  const r = await res.json();
  if (r.status === "success") {
    let temp = post;
    temp.downvoted = true;
    temp.votes -= 1;
    postsDispatch({ type: "update", posts: temp });
    if (!localStorage.downvoted.length) {
      localStorage.downvoted = post._id;
    } else {
      let x = [localStorage.downvoted, post._id];
      localStorage.downvoted = x;
    }
  }
};

export const FetchPostComment = async (
  commentsDispatch: any,
  data: any,
  postId: string
) => {
  const res = await fetch(`${URL}/comments/` + postId, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const r = await res.json();
  commentsDispatch({ type: "add", comments: r.data });
};

export const FetchPostSubreddit = async (subredditDispatch: any, data: any) => {
  const res = await fetch(`${URL}/subreddits/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const r = await res.json();
  // subredditDispatch({ type: "add", subreddit: r.data });
};

export const FetchAuth = async (data: any, history: any) => {
  if (!data.email.length || !data.password.length) return;
  try {
    const res = await fetch(`${URL}/users/authenticate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const r = await res.json();
    const { _id, name, email, upvoted, downvoted } = r.data.user;
    localStorage.clear();
    localStorage.setItem("userId", _id);
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userToken", r.data.token);
    localStorage.setItem("upvoted", upvoted);
    localStorage.setItem("downvoted", downvoted);
    history.go(0);
  } catch (err) {
    console.error(err);
  }
};

export const FetchRegister = async (data: any) => {
  const res = await fetch(`${URL}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const r = await res.json();
};

export const FetchPut = async (postsDispatch: any, data: any) => {
  const res = await fetch(`${URL}/posts`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const r = await res.json();
  r.status === "success"
    ? postsDispatch({ type: "update", posts: r.data })
    : console.error(r.error);
};

export const FetchDelete = async (postsDispatch: any, id: string) => {
  const res = await fetch(`${URL}/posts/${id}`, {
    method: "DELETE",
  });
  const r = await res.json();
  r.status === "success"
    ? postsDispatch({ type: "remove", _id: id })
    : console.error(r.error);
};

export const FetchDeleteUpvote = async (postsDispatch: any, post: any) => {
  const res = await fetch(`${URL}/users/removeUpvote`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ postId: post._id, userId: localStorage.userId }),
  });
  const r = await res.json();
  console.log(r);
  if (r.status === "success") {
    postsDispatch({ type: "update", posts: r.data });
    localStorage.upvoted = localStorage.upvoted
      .split(",")
      .filter((i: any) => i !== post._id);
  } else {
    console.error(r.error);
  }
};

export const FetchDeleteDownvote = async (postsDispatch: any, post: any) => {
  const res = await fetch(`${URL}/users/removeDownvote`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ postId: post._id, userId: localStorage.userId }),
  });
  const r = await res.json();
  if (r.status === "success") {
    postsDispatch({ type: "update", posts: r.data });
    localStorage.downvoted = localStorage.downvoted
      .split(",")
      .filter((i: any) => i !== post._id);
  } else {
    console.error(r.error);
  }
};

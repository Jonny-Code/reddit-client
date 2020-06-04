const local = "http://localhost:5000";
const heroku = "https://shmreddit.herokuapp.com";
const URL = heroku;

export const FetchGetPosts = async (postsDispatch: any) => {
  try {
    const res = await fetch(`${URL}/posts`);
    const r = await res.json();
    console.log(r);
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
    console.log(r);
    if (r.status === "error") {
      postsDispatch({ type: "spread", subreddit: [] });
    } else {
      subredditDispatch({ type: "spread", subreddit: r.data.subreddit });
      postsDispatch({ type: "spread", posts: r.data.posts });
    }
  } catch (err) {
    console.error(err);
  }
};

export const FetchGetComments = async (commentsDispatch: any, postId: any) => {
  const res = await fetch(`${URL}/comments/` + postId);
  const r = await res.json();
  console.log(r);
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
  console.log(r);
  if (r.success) {
    postsDispatch({ type: "add", posts: r.data });
  } else {
    console.error(r.error);
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
  console.log(r);
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
  console.log(r);
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
    console.log(r);
    const { _id, name, email } = r.data.user;
    localStorage.clear();
    localStorage.setItem("userId", _id);
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userToken", r.data.token);
    history.go(0);
    console.log(r, localStorage);
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
  console.log(r);
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
  console.log(r);
  r.success
    ? postsDispatch({ type: "update", posts: r.data })
    : console.error(r.error);
};

export const FetchDelete = async (postsDispatch: any, id: string) => {
  const res = await fetch(`${URL}/posts/${id}`, {
    method: "DELETE",
  });
  const r = await res.json();
  r.success
    ? postsDispatch({ type: "remove", _id: id })
    : console.error(r.error);
};

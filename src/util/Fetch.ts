export const FetchGetPosts = async (postsDispatch: any) => {
  const t = localStorage.getItem("userToken") || "";

  try {
    const res = await fetch("http://localhost:5000/posts", {
      headers: {
        "x-access-token": t
      }
    });
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

export const FetchGetSubreddits = async (
  subredditsDispatch: any,
  postsDispatch: any
) => {
  const t = localStorage.getItem("userToken") || "";
  try {
    const res = await fetch("http://localhost:5000/subreddits", {
      headers: {
        "x-access-token": t
      }
    });
    const r = await res.json();
    console.log(r);
    if (r.status === "error") {
      postsDispatch({ type: "spread", subreddits: [] });
    } else {
      subredditsDispatch({ type: "spread", subreddits: r.data.subreddits });
      postsDispatch({ type: "spread", posts: r.data.posts });
    }
  } catch (err) {
    console.error(err);
  }
};

export const FetchPost = async (postsDispatch: any, data: any) => {
  const res = await fetch("http://localhost:5000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  const r = await res.json();
  console.log(r);
  r.success
    ? postsDispatch({ type: "add", posts: r.data })
    : console.error(r.error);
};

export const FetchAuth = async (data: any) => {
  if (!data.email.length || !data.password.length) return;
  try {
    const res = await fetch("http://localhost:5000/users/authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const r = await res.json();
    console.log(r);
    const { _id, name, email } = r.data.user;
    localStorage.clear();
    localStorage.setItem("userId", _id);
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userToken", r.data.token);
    console.log(r, localStorage);
  } catch (err) {
    console.error(err);
  }
};

export const FetchPut = async (postsDispatch: any, data: any) => {
  const res = await fetch("http://localhost:5000/posts", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  const r = await res.json();
  console.log(r);
  r.success
    ? postsDispatch({ type: "update", posts: r.data })
    : console.error(r.error);
};

export const FetchDelete = async (postsDispatch: any, id: string) => {
  const res = await fetch(`http://localhost:5000/posts/${id}`, {
    method: "DELETE"
  });
  const r = await res.json();
  r.success
    ? postsDispatch({ type: "remove", _id: id })
    : console.error(r.error);
};

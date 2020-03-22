export const FetchGet = async (dispatch: any) => {
  const t = localStorage.getItem("userToken") || "";
  const res = await fetch("http://localhost:5000/posts", {
    headers: {
      "x-access-token": t
    }
  });
  const r = await res.json();
  console.log(r);
  const { posts } = r.data;
  dispatch({ type: "spread", posts: posts });
};

export const FetchPost = async (dispatch: any, data: any) => {
  const res = await fetch("http://localhost:5000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  const r = await res.json();
  console.log(r);
  r.success ? dispatch({ type: "add", posts: r.data }) : console.error(r.error);
};

export const FetchAuth = async (data: any) => {
  const res = await fetch("http://localhost:5000/users/authenticate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  const r = await res.json();
  const { _id, name, email } = r.data.user;
  localStorage.clear();
  localStorage.setItem("userId", _id);
  localStorage.setItem("userName", name);
  localStorage.setItem("userEmail", email);
  localStorage.setItem("userToken", r.data.token);
  console.log(r, localStorage);
};

export const FetchPut = async (dispatch: any, data: any) => {
  console.log(data);
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
    ? dispatch({ type: "update", posts: r.data })
    : console.error(r.error);
};

export const FetchDelete = async (dispatch: any, id: string) => {
  const res = await fetch(`http://localhost:5000/posts/${id}`, {
    method: "DELETE"
  });
  const r = await res.json();
  r.success ? dispatch({ type: "remove", _id: id }) : console.error(r.error);
};

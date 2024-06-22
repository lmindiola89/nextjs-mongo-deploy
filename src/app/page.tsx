// "use client";
// import React, { useEffect } from "react";
import { connectDB } from "@/libs/mongodb";
import User from "@/models/user";

async function loadUsers() {
  await connectDB();
  const users = await User.find();
  return users;
}

async function HomePage() {
  // component client
  // useEffect(() => {
  //   fetch("api/users")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  // component server
  const users = await loadUsers();
  console.log(users);

  return (
    <div>
      <h1>Users</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
}

export default HomePage;

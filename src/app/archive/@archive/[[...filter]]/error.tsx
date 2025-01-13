"use client";
// NOTE: This error component should always be a client component
// because errors can be caused in both server and client side.
import React from "react";

const ErrorPage = ({ error }: { error: Error }) => {
  return (
    <>
      <div id="error">
        <h2>An error occurred</h2>
        <p>{error.message}</p>
      </div>
    </>
  );
};

export default ErrorPage;

import Link from "next/link";
import React from "react";


// Layout under layout
export default function Layout({ children }) {
  return (
    <>
      <Link href="/">Home</Link>
      <div className="left-align">{children}</div>
    </>
  );
}

// if we want to use multiple lay out for different space of the same app
// we need to remove main layout from root and make folder with - suppose we want to use for these two section 
// ("products"), ("dashboard") and there we should define layout
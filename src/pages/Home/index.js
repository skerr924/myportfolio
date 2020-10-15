import React from "react";

function Home() {
  return (
    <div className="row">
      <div className="col 3 m6 s12">
        <img
          src={require("./SarahKerr.jpg")}
          alt="Sarah Kerr"
          className="headshot"
        />
      </div>

      <div className="col 9 m6 s12">
        <h5>Welcome!</h5>
        If you're looking to learn more about me - my experience, past projects,
        and future goals - you've come to the right place.
        <br />
        <br />
        I've been dabbling in code for years now, but just recently decided to
        jump headfirst into it as a primary career path. I'm highly analytical,
        very self-motivated, and love the way every coding project often feels
        like a puzzle with hundreds of correct solutions but only a handful of
        great ones. <br />
        {/* <!--icons for social media links --> */}
        <br />
        <h5>Let's connect</h5>
        <a href="https://www.linkedin.com/in/sarah-kerr-79656ba2/">LinkedIn</a>
        <br />
        <a href="https://github.com/skerr924">GitHub</a>
        <br />
        <a href="sarah.kerr93@gmail.com">Email me</a>
      </div>
    </div>
  );
}

export default Home;

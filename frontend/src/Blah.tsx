import React from "react";
import styles from "./Blah.module.css";

function TopBanner(props: any) {
  return (
    <>
      <div className="row">
        <div className="col-10">
          <img
            src="./JoelHiltonHeadshot.jpg"
            alt="Joel Hilton"
          />
        </div>

        <div className="col align-self-centr text-start">
          <h1 className={styles.h1}>{props.saying}</h1>
        </div>
      </div>
    </>
  );
}

export default TopBanner;

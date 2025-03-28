import React from "react";
import Image from "next/image";
// internal
import author_img from "@assets/img/users/user-11.jpg";
import social_data from "@/data/social-data";

const BlogDetailsAuthor = () => {
  return (
    <div
      className="tp-postbox-details-author d-sm-flex align-items-start"
      data-bg-color="#F4F7F9"
    >
      <div className="tp-postbox-details-author-thumb">
        <a href="#">
          <Image src={author_img} alt="author_img" />
        </a>
      </div>
      <div className="tp-postbox-details-author-content">
        <span>Written by</span>
        <h5 className="tp-postbox-details-author-title">
          <a href="#">Selma Shikongo</a>
        </h5>
        <p>
          By defining and following streamlined processes from farm to table, 
          our team ensures that Namibian small-scale farmers can efficiently deliver fresh, 
          quality produce to both local and international buyers. 
          This approach not only enhances customer satisfaction but also empowers farmers to thrive in competitive markets.
        </p>

        <div className="tp-postbox-details-author-social">
          {social_data.map((s) => (
            <a href={s.link} target="_blank" className="me-1" key={s.id}>
              <i className={s.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsAuthor;

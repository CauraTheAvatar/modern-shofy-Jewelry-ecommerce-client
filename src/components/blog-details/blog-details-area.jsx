import React from 'react';
import Image from 'next/image';
// internal
import BlogSidebar from '../blog/blog-postox/blog-sidebar';
import BlogPostCommentForm from '../forms/blog-post-comment-form';
import BlogDetailsAuthor from './blog-details-author';
import BlogDetailsComments from './blog-details-comments';
import PostboxDetailsNav from './postbox-details-nav';
import PostboxDetailsTop from './postbox-details-top';
import shape_line from '@assets/img/blog/details/shape/line.png';
import shape_line_2 from '@assets/img/blog/details/shape/quote.png';
import blog_details_big_img from '@assets/img/blog/details/blog-big-1.jpg';
import blog_details_sm_img from '@assets/img/blog/details/blog-details-sm-1.jpg';
import social_data from '@/data/social-data';
import comment_data from '@/data/blog-comment-data';

const BlogDetailsArea = ({blog}) => {
  return (
    <section className="tp-postbox-details-area pb-120 pt-95">
      <div className="container">
        <div className="row">
          <div className="col-xl-9">
            {/* PostboxDetailsTop */}
            <PostboxDetailsTop blog={blog} />
            {/* PostboxDetailsTop */}
          </div>
          <div className="col-xl-12">
            <div className="tp-postbox-details-thumb">
              <Image src={blog_details_big_img} alt="blog-big-img" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-9 col-lg-8">
            <div className="tp-postbox-details-main-wrapper">
              <div className="tp-postbox-details-content">
                <p className="tp-dropcap">At our core, we believe in empowering Namibian small-scale farmers by connecting them to both local and international buyers. Our team—Moses, Conceicao, Gareth, and Theodore—works tirelessly to bring you the freshest produce, natural oils, and eco-friendly products straight from the source. Every purchase supports sustainable farming and strengthens our agricultural communities.</p>

                <p>From nutrient-rich compost to locally produced marula oil, we take pride in showcasing the finest farm products. With transparent processes and farmer-first initiatives, we aim to bridge the gap between producers and consumers, ensuring fair trade and superior quality.</p>

                <h4 className="tp-postbox-details-heading">From Farm to Table: The Journey of Namibian Fresh Produce</h4>
                <p>Namibia’s fresh produce journey begins at farms like <strong>!Aimab Superfarm</strong>, where over 90 experts ensure cattle health and milk quality. Raw materials are carefully transported to Windhoek’s Avis Plant for processing, guaranteeing quality at every step. For small-scale horticulture farmers, initiatives like WFP’s virtual marketplace now connect over 100 producers to reliable buyers, reducing post-harvest losses and fostering economic growth.</p>

                <div className="tp-postbox-details-desc-thumb text-center">
                  <Image src={blog_details_sm_img} alt="Aerial view of Namibia Dairies’!Aimab Superfarm" />
                  <span className="tp-postbox-details-desc-thumb-caption">Aerial view of Namibia Dairies’!Aimab Superfarm in Mariental</span>
                </div>
                <p>“Our platform simplifies the process—whether you're sourcing organic grains, traditional indigenous foods, or fresh vegetables, we deliver authentic Namibian agricultural products straight to your doorstep. By partnering with local farmers, we ensure that every purchase supports their livelihoods and brings you high-quality, sustainable products.” </p>

                <div className="tp-postbox-details-quote">
                  <blockquote>
                    <div className="tp-postbox-details-quote-shape">
                      <Image className="tp-postbox-details-quote-shape-1" src={shape_line} alt="shape" />
                      <Image className="tp-postbox-details-quote-shape-2" src={shape_line_2} alt="shape" />
                    </div>
                    <p>"Every seed planted today is a step toward a healthier, more sustainable tomorrow."</p>
                    <cite>The Team at Namibia Farmers Connect</cite>
                  </blockquote>
                </div>

                <h4 className="tp-postbox-details-heading">What Sets Us Apart?</h4>
                <p>We go beyond just selling farm products—our platform provides educational resources and insights straight from the farmers themselves. Learn about sustainable agriculture, the benefits of indigenous superfoods, and how your choices impact local communities.</p>

                <div className="tp-postbox-details-list">
                  <ul>
                    <li>Access fresh, locally sourced produce directly from Namibian farms.</li>
                    <li>Support small-scale farmers and sustainable agricultural practices.</li>
                    <li>Discover unique products like marula oil and organic compost.</li>
                  </ul>
                </div>
                <p>With every purchase, you become a part of the movement to sustain local farms and deliver natural, quality products worldwide. Join us on the journey from farm to table — one harvest at a time.</p>

                <div className="tp-postbox-details-share-wrapper">
                  <div className="row">
                    <div className="col-xl-8 col-lg-6">
                      <div className="tp-postbox-details-tags tagcloud">
                        <span>Tags:</span>
                        <a href="#">Lifesttyle</a>
                        <a href="#">Awesome</a>
                        <a href="#">Winter</a>
                        <a href="#">Sunglasses</a>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6">
                      <div className="tp-postbox-details-share text-md-end">
                        <span>Share:</span>
                        {social_data.map((s) => (
                          <a href={s.link} className="me-1" target="_blank" key={s.id}>
                            <i className={s.icon}></i>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* PostboxDetailsNav */}
                <PostboxDetailsNav />
                {/* PostboxDetailsNav */}

                {/* author details start */}
                <BlogDetailsAuthor />
                {/* author details end */}

                <div className="tp-postbox-details-comment-wrapper">
                  <h3 className="tp-postbox-details-comment-title">Comments ({comment_data.length})</h3>
                  {/* BlogDetailsComments */}
                  <BlogDetailsComments />
                  {/* BlogDetailsComments */}
                </div>

                <div className="tp-postbox-details-form">
                  <h3 className="tp-postbox-details-form-title">Leave a Reply</h3>
                  <p>Your email address will not be published. Required fields are marked *</p>

                  {/* form start */}
                  <BlogPostCommentForm />
                  {/* form end */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4">
            {/* sidebar start */}
            <BlogSidebar />
            {/* sidebar end */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsArea;
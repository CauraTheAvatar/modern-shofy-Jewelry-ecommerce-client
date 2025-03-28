import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// internal
import about_img from '@assets/img/about/Eye-catching-resized.jpg';
import about_thumb from '@assets/img/about/Germany-Namibia-resized.jpg';
import { ArrowRightLong } from '@/svg';

const JewelryAbout = () => {
  return (
    <>
      <section className="tp-about-area pt-125 pb-180">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className="tp-about-thumb-wrapper p-relative mr-35">
                <div className="tp-about-thumb m-img">
                  <Image src={about_img} alt="about_img" />
                </div>
                <div className="tp-about-thumb-2">
                  <Image src={about_thumb} alt="about_thumb" />
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="tp-about-wrapper pl-80 pt-75 pr-60">
                <div className="tp-section-title-wrapper-4 mb-50">
                  <span className="tp-section-title-pre-4">Namibian Harvest</span>
                  <h3 className="tp-section-title-4 fz-50">Discover Our Premium Farm-Fresh Selections</h3>
                </div>
                <div className="tp-about-content pl-120">
                  <p>
                  Experience the essence of Namibia with our carefully curated range of products. Savor the rich flavors of our <strong> Oilseeds & Edible Oils</strong>, relish the wholesome goodness of our <strong> Grains</strong>, explore the heritage of our <strong> Indigenous Foods</strong>, and enjoy the crisp, natural taste of our <strong> Fresh Produce</strong>.  Each product reflects the dedication and sustainable practices of local farmers, bringing you authentic quality in every bite.
                  </p>

                  <div className="tp-about-btn">
                    <Link href="/contact" className="tp-btn">
                      Contact Us{" "}<ArrowRightLong />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JewelryAbout;
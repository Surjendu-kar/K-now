import comments_data from "@/src/data/comments-data";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import BlogSearch from "../blog/blog-search";
import Category from "../blog/category";
import RecentPost from "../blog/recent-post";
import Tags from "../blog/tags";
import PostComment from "../form/post-comment";
import { useRouter } from "next/router";
import newsdata from "@/src/data/blog-data";

const PostboxBlogDetails = () => {
  const Router = useRouter();
  const [news, setNews] = useState(null);
  const { id } = Router.query;

  useEffect(() => {
    setNews(newsdata.find((data) => data.id == id));
  }, [id]);

  if (!news) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div
        className="postbox__area pt-120 pb-120 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".2s"
      >
        <div className="container">
          <div className="row">
            <div className="col-xxl-12 col-xl-8 col-lg-7 col-md-12">
              <div className="postbox__wrapper pr-20">
                <article className="postbox__item format-image mb-60 transition-3">
                  <div className="postbox__thumb w-img mb-30">
                    <Link href="/blog-details">
                      <img src={news.img} alt="" />
                    </Link>
                  </div>
                  <div className="postbox__content">
                    <div className="postbox__meta">
                      <span>
                        <i className="fi fi-rr-calendar"></i> {news.date}
                      </span>
                      {/* <span>
                        <a href="#">
                          <i className="fi fi-rr-user"></i> JAMIL RAYHAN
                        </a>
                      </span> */}
                      {/* <span>
                        <a href="#">
                          <i className="fi fi-rr-comments"></i> 02 Comments
                        </a>
                      </span> */}
                    </div>
                    <h3 className="postbox__title">{news.title}</h3>
                    <div className="postbox__text">
                      <p>{news.des}</p>

                      <blockquote>
                        <p>
                          Tosser argy-bargy mush loo at public school Elizabeth
                          up the duff buggered chinwag on your bike mate don't
                          get shirty with me super, Jeffrey bobby Richard
                          cheesed off spend a penny a load of old tosh blag
                          horse.
                        </p>
                        <cite>Jon Barsito</cite>
                      </blockquote>

                      <p>
                        <img src="/assets/img/blog/blog-in-4.jpg" alt="" />
                      </p>

                      <h3>Epora is the only template you will ever need</h3>

                      <p>
                        Are you taking the piss young delinquent wellies
                        absolutely bladdered the Eaton my good sir, cup of tea
                        spiffing bleeder David mufty you mug cor blimey guvnor,
                        burke bog-standard brown bread wind up barney. Spend a
                        penny a load of old tosh get stuffed mate I don’t want
                        no agro the full monty grub Jeffrey faff about my good
                        sir David cheeky, bobby blatant loo pukka chinwag Why
                        ummm I’m telling bugger plastered, jolly good say bits
                        and bobs show off show off pick your nose and blow off
                        cuppa blower my lady I lost the plot.
                      </p>

                      <p>
                        Cheeky bugger cracking goal starkers lemon squeezy lost
                        the plot pardon me no biggie the BBC burke gosh boot so
                        I said wellies, zonked a load of old tosh bodge barmy
                        skive off he legged it morish spend a penny my good sir
                        wind up hunky-dory. Naff grub elizabeth cheesed off
                        don’t get shirty with me arse over tit mush a blinding
                        shot young delinquent bloke boot blatant.
                      </p>
                    </div>

                    <div className="postbox__tag tagcloud">
                      <span>Post Tag :</span>
                      <a href="#">{news.category}</a>
                    </div>
                  </div>
                </article>

                {/* <div className="postbox__comment mb-65">
                  <h3 className="postbox__comment-title">3 Comments</h3>
                  <ul>
                    {comments_data.map((item, i) => (
                      <li key={i} className={item?.children}>
                        <div className="postbox__comment-box grey-bg">
                          <div className="postbox__comment-info d-flex">
                            <div className="postbox__comment-avater mr-20">
                              <img src={item.img} alt="" />
                            </div>
                            <div className="postbox__comment-name">
                              <h5>{item.name}</h5>
                              <span className="post-meta">{item.date}</span>
                            </div>
                          </div>
                          <div className="postbox__comment-text ml-65">
                            <p>{item.comment}</p>
                            <div className="postbox__comment-reply">
                              <a href="#">Reply</a>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div> */}

                {/* <PostComment /> */}
              </div>
            </div>
            {/* <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-12">
              <div className="sidebar__wrapper">
                <BlogSearch />
                <RecentPost />
                <Category />
                <Tags />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PostboxBlogDetails;

import React from "react";
import { Link } from "react-router-dom";
import "./Catogcard.scss";

function CatogCard({ /*card*/ }) {
  return (
    <Link to="/gigs?cat=design">
      <div className="catCard">
        <img src="" alt="" />
        <span className="desc">{/*card.desc*/} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius aperiam alias repellendus earum quisquam! Debitis excepturi eum nam a et libero magnam, veniam itaque ratione voluptatibus illum voluptas maiores vero nostrum ipsa repellat delectus perspiciatis! Ex, nobis. Dicta libero aliquid eum obcaecati rem nulla! Adipisci modi tempora totam odio ex nisi neque tempore quo vero fugiat odit, placeat ipsum omnis minima, qui voluptatem harum. At, accusamus perspiciatis. Nam modi aut porro saepe recusandae dolore error voluptatibus? Eaque adipisci ut ex amet, nam impedit at accusamus, maiores, eligendi quibusdam aut illum velit similique rerum cum totam quam tenetur itaque dolorum quis.</span>
        <span className="title">{/*card.title*/}</span>
      </div>
    </Link>
  );
}
export default CatogCard;
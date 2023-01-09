import React from "react";
import ItemCount from "../ItemCount";
import "./styles.scss";

const ItemDetail = ({ detail }) => {
    console.log(detail.title);
    return (
        <div className="detail-container">
            <img className="detail-img" src={detail.image} alt="detail" />
            <aside className="detail-aside">
                <h4>{detail.title}</h4>
                <ItemCount stock={20} initial={1} />
            </aside>
        </div>
    );
};

export default ItemDetail;

import "./style.scss";

const Promotion = (item) => {
    return (
        <div className="promotion">
            <img src={item.item} alt="" />
        </div>
    )
}

export default Promotion

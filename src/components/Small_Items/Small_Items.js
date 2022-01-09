import SmallItem from '../Small_Item/Small_Item.js'
import "./style.scss";

const items = [{
    "id": 4,
    "stars": 1.0,
    "text": "risus. Duis a mi fringilla mi lacinia",
    "photo": 4,
    "name": "gravida sit",
    "current": 92,
    "original": 20
},
{
    "id": 5,
    "stars": 1.0,
    "text": "ornare, elit elit fermentum risus, at fringilla",
    "photo": 5,
    "name": "Phasellus",
    "current": 90,
    "original": 45
},
{
    "id": 6,
    "stars": 1.0,
    "text": "vitae erat vel",
    "photo": 6,
    "name": "euismod",
    "current": 59,
    "original": 29
},
{
    "id": 7,
    "stars": 2.0,
    "text": "lectus pede et risus. Quisque libero",
    "photo": 7,
    "name": "Donec porttitor",
    "current": 74,
    "original": 32
},
{
    "id": 8,
    "stars": 0.0,
    "text": "velit justo nec ante.",
    "photo": 8,
    "name": "placerat, augue. Sed molestie. Sed",
    "current": 19,
    "original": 76
},
{
    "id": 9,
    "stars": 3.0,
    "text": "at, nisi. Cum sociis natoque",
    "photo": 9,
    "name": "nibh. Quisque nonummy",
    "current": 63,
    "original": 41
},
{
    "id": 10,
    "stars": 5.0,
    "text": "Aenean eget metus. In nec orci. Donec nibh. Quisque",
    "photo": 10,
    "name": "Curabitur",
    "current": 69,
    "original": 94
},
{
    "id": 11,
    "stars": 2.0,
    "text": "et magnis dis parturient montes, nascetur ridiculus mus. Aenean eget",
    "photo": 11,
    "name": "Sed auctor odio a",
    "current": 35,
    "original": 84
},
{
    "id": 12,
    "stars": 4.0,
    "text": "ipsum. Suspendisse sagittis.",
    "photo": 12,
    "name": "Nulla",
    "current": 71,
    "original": 22
},
{
    "id": 13,
    "stars": 4.0,
    "text": "enim non nisi. Aenean eget",
    "photo": 13,
    "name": "amet",
    "current": 8,
    "original": 78
},
{
    "id": 14,
    "stars": 3.0,
    "text": "molestie tellus. Aenean egestas hendrerit neque. In ornare",
    "photo": 14,
    "name": "aliquet libero. Integer",
    "current": 94,
    "original": 100
},
{
    "id": 15,
    "stars": 1.0,
    "text": "Donec nibh. Quisque nonummy ipsum non arcu. Vivamus sit amet",
    "photo": 15,
    "name": "felis ullamcorper viverra. Maecenas iaculis",
    "current": 33,
    "original": 83
}];

const SmallItems = () => {
    return (
        <div className="small-items">
            {items.map((item) => (
                <SmallItem key={item.id} item={item}></SmallItem>
            ))}
        </div>
    )
}

export default SmallItems

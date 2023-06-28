import { CollectionConfig } from "payload/types";


const Events: CollectionConfig = {
    slug: 'events',
    fields: [
        {
            name: "eventName",
            type: "text"
        },
        {
            name: "eventDate",
            type: "date",
        },
        {
            name: "eventHour",
            type: "text"
        },
        {
            name: "eventAdress",
            type: "text"
        },
        {
            name: "eventPrice",
            type: "text"
        }
    ]
}

export default Events
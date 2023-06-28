import { CollectionConfig } from "payload/types";


const Events: CollectionConfig = {
    slug: 'events',
    fields: [
        {
            name: "eventName",
            type: "text"
        },
        {
            name: "date",
            type: "date",
        }
    ]
}

export default Events
type TopSliderData = {
    id: number,
    header: string,
    text: string
}[]


const topSliderData: TopSliderData = [   // Array which contains diffrent topslides
    {
        id: 1,
        header: "Free shipping from 90 euros",
        text: "Only in Belgium"
    },
    {
        id: 2,
        header: "From 140 Euros, choose your gift",
        text: "Avialable now"
    },
    {
        id: 3,
        header: "Summer sale is now",
        text: "Discount on more items"
    }

]

export default topSliderData

//TopSlider is fully scalable, just edit, add or remove objects in topSliderData array. For proper work, at least 3 objects(slides) needed!
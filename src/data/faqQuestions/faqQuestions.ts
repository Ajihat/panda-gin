import { FaqQuestions } from "./faqQuestions.types";

export const faqQuestions: FaqQuestions = {
    orders: [
        {
            id: 1,
            question: "Will I get a confirmation for my order?",
            answer: "Yes, after each order, you’ll receive an order confirmation by e-mail.",
        },
        {
            id: 2,
            question: "Can I place 2 orders on the same day?",
            answer: "Yes, that’s possible. Nevertheless, this separate order will be treated as such. We can’t combine 2 distinct orders in one and only box.",
        },
        {
            id: 3,
            question:
                "I placed an order, but I haven’t received a confirmation by e-mail.",
            answer: "Once your order is placed, you will receive a confirmation e-mail in the following minutes. If it looks like you don’t, please check your spam folder first. If the confirmation e-mail is not in there, please contact us via e-mail at : info@panda-gin.com",
        },
        {
            id: 4,
            question:
                "I noticed a mistake in the order that I placed, what should I do ?",
            answer: "Don’t worry and contact our Panda client service as soon as possible by sending us an e-mail with the details of your order : the name mentioned on your order, and the needed information to adjust it. We’ll do our best to take your modifications into account, but if your order already has been shipped, we won’t be able to apply the modifications.",
        },
        {
            id: 5,
            question: "I’ve changed my mind, can I cancel my order ?",
            answer: "Please contact our Panda client service by sending us an e-mail within 30 minutes after your order by sending us an e-mail to : info@panda-gin.com. During office hours, we’ll do our best to accommodate, but if your order already has been shipped, it won’t be possible to cancel it. Nevertheless, you can check our return policy. ",
        },
        {
            id: 6,
            question:
                "I can see a 'promo code' button in the check-out phase, what does this mean ?",
            answer: "Here, you can submit the promo code that you received.",
        },
        {
            id: 7,
            question: "Can I place an order and avoid VAT as a business ?",
            answer: "Panda Gin is a private buyers’ website, thus it is not possible to place an order without paying for VAT. For all professional enquiries, please contact us using the following e-mail address: info@panda-gin.com",
        },
        {
            id: 8,
            question: "Do you offer discounts if I order large quantities ?",
            answer: "Yes, if your order reaches 140€, we’ll offer you the possibility to choose 3 goodies at the check-out, on top of the shipping costs which will also be deducted. If you order a pack of 6 bottles, you’ll get a 10% discount. ",
        },
        {
            id: 9,
            question: "Do prices include VAT ?",
            answer: "Prices indicated on our website include VAT, but not shipping costs. ",
        },
        {
            id: 10,
            question: "Why can I only order a limited amount of products ?",
            answer: "This can happen for several reasons. If our stock is low, the item will be limited so that more people can still order it.  Besides, some articles are initially limited due to their scarcity and in order to satisfy the greater amount of customers.  ",
        },
    ],
    payments: [
        {
            id: 1,
            question: "What are the payment options?",
            answer: "Panda Gin accepts the following payment methods: American Express, Maestro, Mastercard, Visa, Bancontact, GiroPay, Paypal.",
        },
        {
            id: 2,
            question: "What’s Panda Gin’s bank details?",
            answer: "Panda Gin’s bank details are the following: IBAN BE02 7320 4319 3040; BIC : CREGBEBB",
        },
        {
            id: 3,
            question: "Will I also receive an invoice ?",
            answer: "Yes, when ordering you will receive your invoice by e-mail. If you have any problem, please contact us by email.",
        },
    ],
    delivery: [
        {
            id: 1,
            question: "Where does Panda Gin ship to?",
            answer: "Panda Gin ships to the following countries: Netherlands, Belgium, Germany, Austria, Denmark, France, Greece, Italy, Finland, Norway, Poland, Portugal, Spain, Sweden.",
        },
        {
            id: 2,
            question: "Which service delivers Panda Gin ?",
            answer: "BPost Pro delivers all Panda Gin orders. Nevertheless, your order can be transferred to your local post services should you ask to be delivered outside of Belgium.  ",
        },
        {
            id: 3,
            question: "When will my order be delivered ?",
            answer: "Delivery takes between 3 to 7 working days for shipments in Belgium. Delivery outside of Belgium takes 7 to 14 working days.",
        },
        {
            id: 4,
            question: "What happens if I’m not home for the delivery ?",
            answer: "If you’re not home at the time of delivery, the postman will drop it at the closest parcel point. ",
        },
        {
            id: 5,
            question:
                "Can I avoid delivery by collecting my parcel in Panda Gin’s warehouse ?",
            answer: "Unfortunately, it’s not possible to collect your parcel directly at the warehouse. Nevertheless, for Belgium, you can select the BPost Parcel Point collection, and you’ll be able to select your favorite pick-up location. ",
        },
        {
            id: 6,
            question: "How much does shipping costs ?",
            answer: "For Belgium, delivery costs 6,11€. If we are unable to deliver to your address, please contact us by e-mail and we will endeavor to find an alternative reseller for the product you’re looking for.",
        },
        {
            id: 7,
            question:
                "I’m ordering a gift for someone, will the receiver see the price of my order ?",
            answer: "If you’re ordering for someone else, don’t worry. We do not include an invoice to our parcels, that way the receiver won’t see the price of your gift. If you don’t mind the receiver seeing the price, and you want them to be able to track the order, you can submit their own e-mail address in the shipment details of your order.  ",
        },
    ],
    complaint: [
        {
            id: 1,
            question: "How can I contact Panda Gin ?",
            answer: "If you have questions or you wish to file a complaint regarding your Panda Gin order, please send us an e-mail at info@panda-gin.com with your order number. ",
        },
        {
            id: 2,
            question:
                "What should I do if my parcel is damaged during shipment ?",
            answer: "If you witness damages when receiving your parcel, please refuse it and BPost will send it back to Panda Gin. When the parcel is brought back to us, we will contact you to arrange another shipment or a credit for your order. ",
        },
        {
            id: 3,
            question:
                "What should I do if the inside of my parcel is damaged when opening it?",
            answer: "Please contact us by e-mail at info@panda-gin.com  with the name on your order and a picture of the damaged product that you noticed. We will analyze your request and get back to you as soon as possible. ",
        },
    ],
    return: [
        {
            id: 1,
            question: "Can I return my order ?",
            answer: "As a costumer, you have the right of withdrawal and can send your parcel back to Panda Gin, either a part of it or the entire order. You have a 14-day window after the day of delivery. ",
        },
        {
            id: 2,
            question: "How should I send my order back ?",
            answer: "If you still have the original box your parcel was wrapped in, please put the products back in, with a copy of the delivery sheet, and send it back to our address : Yespirits Company SRL, 31 Drève de la meute, 1410 Waterloo, Belgique.",
        },
        {
            id: 3,
            question:
                "I don’t have the original Panda Gin parcel anymore, can I still send my product back?",
            answer: "You can still return the products, but they have to be intact. Furthermore, Panda Gin bottles have to arrive sealed, as you had received them.",
        },
        {
            id: 4,
            question: "What is Panda Gin’s return policy ?",
            answer: "We will reimburse you the total value of any bought article, as long as the conditions hereunder are met. PLEASE NOTE : unfortunately, we don’t give refund for shipping costs, whether for your order or the return, unless the article is faulty. ",
        },
        {
            id: 5,
            question:
                "How long does it take for me to be reimbursed after I’ve sent the articles back ?",
            answer: "The refund of the total amount of your order (excluding shipping costs) will be done as soon as possible, at last 14 days after your return has been received. We’re waiting to proceed on the refund to have the merchandise back or to get a proof from you that you have sent the products back, whichever comes first. We will reimburse you using the same payment method as the one you used for your initial order.",
        },
    ],
    warranty: [
        {
            id: 1,
            question: "Is there a warranty on the products ?",
            answer: "Each Panda Gin product is subject to the legal warranty. This means a product is, or should be what the consumer expects of it. Should you feel that the products you received are not up to your expectations, please contact us at info@panda-gin.com, we will answer within 48 hours (working days).",
        },
    ],
    fake: [
        {
            id: 1,
            question: "Warning of false promotions.",
            answer: "We want to warn you that some fakes actions or promotions are circulating on social media and via e-mail. These actions are not Panda Gin’s doing. It is a scam whose goal is to collect the most personal data possible. We commit ourselves in not participating nor sharing those actions. Do not communicate any personal or sensitive data such as bank details and don’t open attachments should you not be sure they have been sent by Panda Gin.",
        },
        {
            id: 2,
            question:
                "What are the indicators of a fraudulent message or e-mail ?",
            answer: "The message invites you to participate to a lottery draw or directly announces you that you have won a prize at a draw, for example a 500€ voucher. Beware of e-mails which contain messages such as « Your account has been blocked” or 'An unauthorized connection attempt has occurred'. Most of the time, it’s scam.",
        },
        {
            id: 3,
            question: "What are the official digital channels of Panda Gin ?",
            answer: "Web sites Panda Gin : https://www.panda-gin.com/",
        },
    ],
    about: [
        {
            id: 1,
            question: "Why Panda Gin ?",
            answer: "Excellent question! The Panda is personified in everything we do. The picture represents a panda, the animal, as a reference to the country of origin of the litchi, which is the key ingredient in our gin. We also use black & white for its graphic sobriety but also to refer to the panda again. The name “Panda” came as an evidence.",
        },
        {
            id: 2,
            question: "What is Gin and where does it come from ? ",
            answer: "The history of gin is the history of juniper. It is the botany that turns a distilled spirit into gin. As a matter of fact, you cannot name an alcohol “gin” without using juniper berries. Since its creation as a medicinal product in the Netherlands and Belgium during the 16th century, gin became very appreciated worldwide.",
        },
        {
            id: 3,
            question: "Is Panda Gin gluten-free ?",
            answer: "Although all of our gins are distilled from wheat alcohol, the distillation process removes all allergens from our distilled gins. However, we always recommend that you check with your practitioner as allergies vary from case to case. ",
        },
        {
            id: 4,
            question: "What are your opening hours ?",
            answer: "Opening hours of our offices are 9AM to 6PM from Monday to Friday, during which we’re available by phone or e-mail. We’re closed on weekends.",
        },
        {
            id: 5,
            question: "Is Panda Gin’s packaging recyclable ? ",
            answer: "Parcels from online orders are packaged in recyclable cardboards and our gift boxes are also recyclable. We are always looking for more environmentally friendly alternatives, do not hesitate to visit our “sustainability” tab to learn more about our commitments. ",
        },
    ],
};

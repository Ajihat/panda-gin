import { FC, useEffect } from 'react'
//components
import Header from '../components/Header'
import FaqCategory from '../components/FaqCategory'
import Submenu from '../components/Submenu'
//data
import { faqQuestions } from '../data/faqQuestions'

const Faq: FC = () => {

    useEffect(() => {
        document.title = "FAQ | Panda Gin"
    }, [])


    return (
        <div className="faq">
            <Header
                smallTitle="A question?"
                bigTitle="Frequently Asked Questions"
            />
            <Submenu />
            <div className="faq__inner">
                <FaqCategory
                    title="Orders"
                    id="faq-orders"
                    data={faqQuestions.orders}
                />
                <FaqCategory
                    title="Payments"
                    id="faq-payments"
                    data={faqQuestions.payments}
                />
                <FaqCategory
                    title="Delivery"
                    id="faq-delivery"
                    data={faqQuestions.delivery}
                />
                <FaqCategory
                    title="Complaint"
                    id="faq-complaint"
                    data={faqQuestions.complaint}
                />
                <FaqCategory
                    title="Return Policy"
                    id="faq-return"
                    data={faqQuestions.return}
                />
                <FaqCategory
                    title="Warranty"
                    id="faq-warranty"
                    data={faqQuestions.warranty}
                />
                <FaqCategory
                    title="Fake Promotion"
                    id="faq-fake"
                    data={faqQuestions.fake}
                />
                <FaqCategory
                    title="About"
                    id="faq-about"
                    data={faqQuestions.about}
                />
            </div>
        </div>
    )
}

export default Faq
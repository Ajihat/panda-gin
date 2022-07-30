import { FC } from 'react'
//interfaces
import { SingleQuestion } from '../interfaces/interfaces'
//components
import FaqElement from './FaqElement'

interface FaqCategoryProps {
    title: string,
    data: SingleQuestion[],
    id: string
}

const FaqCategory: FC<FaqCategoryProps> = ({ title, data, id }) => {

    return (
        <section className="faqcategory" id={id}>
            <h3 className="faqcategory__header">{title}</h3>
            <div className="faqcategory__inner">
                {data.map(item => <FaqElement key={item.id} question={item.question} answer={item.answer} />)}
            </div>
        </section>
    )
}

export default FaqCategory
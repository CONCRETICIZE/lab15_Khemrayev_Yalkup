import { CONTENT_TYPE } from '../../../constants';
import './MainArticle.css';

const MainArticle = ({ type }) => {
    return (
        <main>
            {type === CONTENT_TYPE.NEWS && (
                <span>
                    <h1>Новости</h1>
                    <p>Новости университета</p>
                </span>
            )} 
            {type === CONTENT_TYPE.ABOUT && (
                <span>
                    <h1>«Южный федеральный университет»</h1>
                </span>
            )} 
            {type === CONTENT_TYPE.CONTACTS && (
                <span>
                    <h2>Контакты</h2>
                    <p>Мой номер телефона: 8-918-777-77-77</p>
                </span>
            )} 
        </main>
    );
};

export default MainArticle;
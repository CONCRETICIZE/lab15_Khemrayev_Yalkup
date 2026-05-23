import './Footer.css';

const Footer = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <footer className='footer'>
            <p className='footer__info'>
                Дата создания: 18 марта 2026 года
            </p>
            <p className='footer__info'>
                Автор: Хемраев Ялкап
            </p>
        </footer>
    );
};

export default Footer;

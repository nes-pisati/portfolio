import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import bandieraIT from '../assets/italiano.png';
import bandieraEN from '../assets/inglese.svg';

export default function Intro() {
    const { i18n } = useTranslation();
    const navigate = useNavigate();

    const handleLanguageSelect = async (lang: string) => {
        await i18n.changeLanguage(lang);
        navigate('/home');
    };

    return (
        <section className="h-screen flex flex-col justify-center items-center gap-10">
            <div>
                <p>Lang</p>
            </div>
            <div className='flex gap-10'>
                <button onClick={() => handleLanguageSelect('it')} className='w-30 h-20 rounded-lg overflow-hidden'>
                    <img src={bandieraIT} alt="Italiano" className='w-full h-full object-cover' />
                </button>
                <button onClick={() => handleLanguageSelect('en')} className='w-30 h-20 rounded-lg overflow-hidden'>
                    <img src={bandieraEN} alt="English" className='w-full h-full object-cover' />
                </button>
            </div>
        </section>
    );
}
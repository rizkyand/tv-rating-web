import s from './style.module.css'

export const LogoHead =  ({img, title, subtitle}) => {
    return (
        <>
            <div className={s.container}>
                <img src={img} className={s.img} alt="Logo"/>
                <div className={s.title}>
                    {title}
                </div>
            </div>
            <div className={s.subtitle}>
                {subtitle}
            </div>
        </>
    );
}
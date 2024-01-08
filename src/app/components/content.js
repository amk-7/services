'use client'
import { useEffect, useState } from "react";

export default function Content() {
    const [ services, setServices ] = useState([]);
    const [ orderNowUrl, setOrderNowUrl ] = useState("https://api.whatsapp.com/send?phone=+22893137551");

    const startCaroussel = (e) => {
        const slider_current_image_tag = document.getElementById('slider_current_image');
        const imagePaths = ["/assets/sliders/1.png", "/assets/sliders/2.png", "/assets/sliders/3.png", "/assets/sliders/4.png", "/assets/sliders/5.png", "/assets/sliders/6.png"];
        let currentIndex = 0;
    
        const changeImage = () => {
            // Animation de sortie
            slider_current_image_tag.classList.remove("opacity-100");
            slider_current_image_tag.classList.add("opacity-0");
    
            setTimeout(() => {
                slider_current_image_tag.src = imagePaths[currentIndex];
                
                // Animation d'entrée
                slider_current_image_tag.classList.remove("opacity-0");
                slider_current_image_tag.classList.add("opacity-100");
                
                currentIndex = (currentIndex + 1) % imagePaths.length;
                setTimeout(changeImage, 10000);
            }, 500);
        };
    
        changeImage();
    }

    useEffect(() => {
        const init_services = () => {
            setServices([
                {
                    'name' : 'Atchèkè + poisson + alloco',
                    'url': '/assets/services/atcheke.png',
                    'description' : '',
                    'price' : '2500'
                },
                {
                    'name' : 'Riz',
                    'url': '/assets/services/riz.png',
                    'description' : '',
                    'price' : '1500/2000'
                },
                {
                    'name' : 'Spago',
                    'url': '/assets/services/spago.png',
                    'description' : '',
                    'price' : '1000'
                },
                {
                    'name' : 'Couscous',
                    'url': '/assets/services/couscous.png',
                    'description' : '',
                    'price' : '1200'
                }
            ])
        };
        
        init_services();
        startCaroussel();
    }, []);

    return (
        <main className="flex flex-col items-center">
            <section className="h-section home" id='home'>
                <div className="flex">
                    <img src="" id="slider_current_image" className="h-32 transition-opacity duration-500 ease-in-out opacity-0"/>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-6xl">Nas Délice</span>
                    <span className="text-3xl md:text-5xl text-center" >Commander des aliments prêts de chez vous</span>
                    <a href="/assets/services/poster.png">
                        <button className="mt-5 bg-black px-6 py-2 rounded-full">menu</button>
                    </a>
                </div>
            </section>
            <section className='flex flex-col items-center w-full py-12 space-y-12' id='services'>
                <h1 className="font-sans text-6xl">Nos Services</h1>
                <div className="">
                    <div className="grid gap-3 grid-cols-1 md:grid-cols-2  xl:grid-cols-3">
                    {services.map((service, index) => {
                            return (
                                <div key={index} className="transition duration-300 ease-in-out hover:scale-110 bg-white border rounded-xl w-[312px] md:w-[412px] flex flex-col items-center p-3 space-y-3">
                                    <img className="h-[200px] w-[200px] rounded-full" src={service.url} />
                                    <div className="flex flex-col items-center text-center space-y-3">
                                        <h3 className="text-4xl"> { service.name } </h3>
                                        <p>
                                            { service.description }
                                        </p>
                                        <span className="text-2xl"> { service.price } FCFA</span>
                                        <a href={orderNowUrl}>
                                            <button className="btn rounded-full animate-pulse">Commander maintenant (+228 93137551)</button>
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <section className='flex flex-col items-center w-full bg-gray-100 py-12 space-y-12' id='team'>
                <h1 className="text-6xl">Notre équipe</h1>
                <div className="max-w-2xl">
                    <div className="border border-gray-300 flex flex-col md:flex-row items-center space-x-3 md:p-3 m-3 md:m-0 h-96">
                        <div className="w-1/3">
                            <img className="" src="/assets/users/profile.jpg" alt="" />
                        </div>
                        <div className="w-2/3 flex flex-col items-center text-center space-y-3">
                            <h3 className="font-sans text-3xl">Nas</h3>
                            <div className="text-left">
                                <div className="space-x-3">
                                    <span className="text-2xl">Rôle : </span>
                                    <span>Chef Cuisinier</span>
                                </div>
                                <div className="space-x-3">
                                    <span className="text-2xl">Spécialités : </span>
                                    <span>Cuisine Africaine</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='hidden flex flex-col items-center w-full bg-gray py-12 space-y-12' id='contact'>
                <h1 className="font-sans text-6xl">Contacter nous</h1>
                <div className="w-2/3 md:w-1/2">
                    <form className="flex flex-col space-y-3 w-full">
                        <input className="border px-5 py-2 w-full" type='email' name='email' />
                        <input className="border px-5 py-2 w-full" type='text' name='sujet' />
                        <textarea className="border" name='message' rows={12}></textarea>
                        <div className="flex flex-col items-center">
                            <button className="btn rounded-full w-1/2">Envoyer</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imageURL = () => {
    const imageURL = [
        {
            imgLink: "https://cdn.gramedia.com/uploads/marketing/Promo_New_Year_Best_Book_Fiesta_Storefront_yzS0eaT__wauto_h336.jpeg",
            href: "/one"
        },
        {
            imgLink: "https://cdn.gramedia.com/uploads/marketing/Special_Offer_Perang_Keadilan_Storefront__wauto_h336.jpg",
            href: "/two"
        },
        {
            imgLink: "https://cdn.gramedia.com/uploads/marketing/Web_Banner_Pulang_Cover_Baru_Storefront__wauto_h336.jpg",
            href: "/three"
        },
        {
            imgLink: "https://cdn.gramedia.com/uploads/marketing/Pre_Order_Hai_Miiko_vol.36_Storefront_DCoIRw0__wauto_h336.jpg",
            href: "/four"
        },
        {
            imgLink: "https://cdn.gramedia.com/uploads/marketing/Gramedia.com_Pre-Order_Seorang_Pria_yang_Melalui_Duka_dengan_Mencuci_Piring_Storefront__wauto_h336.jpg",
            href: "/five"
        }    
    ];
    return (imageURL);
}

const image = (i) => {
    return (
        imageURL()[i]
    );
}

const topRightCarousel = () => {
    return ({
        imgLink: "https://cdn.gramedia.com/uploads/marketing/KembaliBelajarMembaca_Storefront__wauto_h164.jpg",
        href: "/six"
    });
}

const bottomRightCarousel = () => {
    return ({
        imgLink: "https://cdn.gramedia.com/uploads/marketing/PO_Majalah_Bobo_Edisi_Koleksi_Terbatas_50_Tahun_batch_3_Storefront__wauto_h164.jpg",
        href: "/seven"
    });
}

export default function Carousel(){
    
    const [count, setCount] = useState(0);
    // setInterval(() => {
    //     if(count != 2){
    //         setCount(count + 1);
    //     } else {
    //         setCount(0);
    //     }
    // }, 1000);
    const increment = () => {
        if(count !== imageURL().length){
            setCount(count + 1);
        } else {
            setCount(0);
        }
      };
    
      const decrement = () => {
        if(count !== 0){
            setCount(count - 1);
        } else {
            setCount(imageURL().length - 1);
        }
      };

      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <Slider {...settings} />,
        <div className="mt-8">
            <div className="text-right me-2 mb-1 font-semibold text-slate-800">
                <a href="/tes">See All</a>
            </div>
            <div className="grid">
                <div className="grid grid-cols-12 h-96 gap-x-1">
                    <div className="col-span-8 flex items-center overflow-hidden">
                        <div className="absolute flex items-center justify-between mx-4 box-border w-full">
                            <button className="bg-slate-200 h-12 w-12 bg-opacity-50 rounded-full flex items-center justify-center">
                                <FontAwesomeIcon icon={faArrowLeft} size="xl" onClick={decrement}/>
                            </button>
                            <button className="bg-slate-200 h-12 w-12 bg-opacity-50 rounded-full flex items-center justify-center">
                                <FontAwesomeIcon icon={faArrowRight} size="xl" onClick={increment}/>
                            </button>     
                        </div>
                        <a href={image(count).href} className="overflow-hidden">
                            <img className="rounded-lg h-96" src={image(count).imgLink} alt="img"/>
                        </a>
                    </div>
                    <div className="col-span-4">
                        <div className="grid grid-rows-2 gap-y-2">
                        <a href={topRightCarousel().href}>
                            <img className="rounded-lg overflow-hidden h-[11.75rem]" src={topRightCarousel().imgLink} alt="img"/>
                        </a>
                        <a href={bottomRightCarousel().href}>
                            <img className="rounded-lg overflow-hidden h-[11.75rem]" src={bottomRightCarousel().imgLink} alt="img"/>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
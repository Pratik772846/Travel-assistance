import React from "react";
import Navigation from "../../components/city-page/Navigation";
import SearchBar  from "../../components/city-page/SearchBar";
import Layout from "../../components/city-page/Layout";
import Footer from "../../components/landing-page/Footer";
import Weather from "../../components/city-page/Weather";
import useCityStore from "../../store/search_city";

export default function Citysearched (props) {

    let cityName = useCityStore(state => state.city_name)
    const newcityName = cityName.city.charAt(0).toUpperCase() + cityName.city.slice(1);

    return(
        <>  
        <Layout>
            <div className=" flex flex-col justify-between h-full ">
            <SearchBar />
                <div className=" h-full relative">
                    <div className=" bg-red-600 w-full h-96 overflow-hidden">
                        <img className="h-full w-full object-cover" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/c4/72/f6/jal-mahal-jaipur-tour.jpg?w=1200&h=-1&s=1" />
                    </div>
                    <div className="h-96 w-full absolute bg-black opacity-50 z-10 top-0 flex justify-center items-center">
                        <p className=" text-opacity-100 text-white font-sofia text-8xl">{newcityName}</p>
                    </div>
                    <div className="flex justify-between mx-3 my-3">

                        <div className=" w-9/12 mx-auto p-5 box-border rounded-2xl bg-cyangray">
                            <Navigation />
                            {props.children}
                        </div>
                        <div className=" w-72">
                            <Weather />
                        </div>

                    </div>
                </div>
            <Footer />
            </div>
        </Layout>
        </>
    )
}

 
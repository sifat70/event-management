import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";


const Home = () => {

    useEffect(() =>{
        Aos.init();
    },[])
    const categories = useLoaderData()
    return (
        <div>
            <Navbar></Navbar>
            <div className="w-[95%] mx-auto">
                <div className="carousel w-full h-[90vh] rounded-lg">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/cc2v0vn/pexels-viresh-studio-1444442.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/rdtv8g8/pexels-asad-photo-maldives-1024993.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/wdP8wfV/pexels-asad-photo-maldives-169211.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/sP6vBhF/pexels-asad-photo-maldives-1024978.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>


            {/* about section */}

            <div className="mt-7 w-[90%] mx-auto">
                <h1 className="text-5xl font-bold italic  text-center tracking-wider text-green-400">About us</h1>

                <div className="lg:flex md:flex mt-10">
                    <div className="flex-1" data-aos = 'fade-left'>
                        <img className="rounded-full" src="https://i.ibb.co/v1ghdJx/pexels-chevanon-photography-302902.jpg" alt="" />
                    </div>
                    <div className="flex-1 ml-7 mt-16" data-aos = 'fade-right'>
                        <h1 className="text-3xl font-bold mb-4">Dreaming of the perfect wedding?</h1>
                        <p className="text-lg mb-5">Welcome, my name is proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
                        <button className="btn btn-outline btn-success">Read More</button>
                    </div>
                </div>
            </div>

            {/* services */}

            <div className="w-[90%] mx-auto">
                <section className="mt-7">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold italic text-green-400">Our Services</h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                        {
                            categories.map(category => <div key={category.id} data-aos = 'fade-right'>
                                <div className="card  bg-base-100 shadow-xl">
                                    <figure><img className="h-72 w-full" src={category.image} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{category.name}</h2>
                                        <p>{category.description.slice(0, 100)}</p>
                                        <p className="font-extrabold">Price: {category.price} $</p>
                                        <div className="card-actions justify-center">
                                            <Link to={`/category/${category.id}`}><button className="btn btn-outline btn-success">Show Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </section>
            </div>


            {/* our location */}

            <div className="mt-7 w-[90%] mx-auto">
                <h1 className="text-5xl font-bold italic  text-center text-green-400">Our Location</h1>

                <div>

                </div>
            </div>
            {/* footer section */}
            <div className="mt-10">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;
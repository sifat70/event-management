import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const Home = () => {
    const categories = useLoaderData()
    return (
        <>
            <Navbar></Navbar>
            <div className="carousel w-full h-[90vh]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/rdtv8g8/pexels-asad-photo-maldives-1024993.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/wdP8wfV/pexels-asad-photo-maldives-169211.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/cc2v0vn/pexels-viresh-studio-1444442.jpg" className="w-full" />
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

            {/* services */}

            <div className="w-[90%] mx-auto">
                <section className="mt-7">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Services</h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                        {
                            categories.map(category => <div key={category.id} className="">
                                <div className="card  bg-base-100 shadow-xl">
                                    <figure><img className="h-72 w-full" src={category.image} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{category.name}</h2>
                                        <p>{category.description.slice(0, 100)}</p>
                                        <p className="font-extrabold">Price: {category.price} $</p>
                                        <div className="card-actions justify-center">
                                            <Link><button className="btn btn-outline btn-success">Show Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </section>
            </div>
        </>
    );
};

export default Home;
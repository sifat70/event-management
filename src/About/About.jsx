import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";


const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-7 w-[90%] mx-auto">
                <h1 className="text-5xl font-bold italic  text-center tracking-wider text-green-400">About us</h1>

                <div className="lg:flex md:flex mt-10">
                    <div className="flex-1" data-aos='fade-left'>
                        <img className="rounded-full" src="https://i.ibb.co/v1ghdJx/pexels-chevanon-photography-302902.jpg" alt="" />
                    </div>
                    <div className="flex-1 ml-7 mt-16" data-aos='fade-right'>
                        <h1 className="text-3xl font-bold mb-4">Dreaming of the perfect wedding?</h1>
                        <p className="text-lg mb-5">If you dream about a wedding, it can symbolise a period of great happiness, especially in your love life, according to Millers Guild. If you've always wanted to enjoy your dream wedding and marry the love of your life, this dream will certainly be a welcome one</p>
                        <button className="btn btn-outline btn-success">Read More</button>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default About;
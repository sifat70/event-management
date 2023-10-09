import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";


const CategoryDetails = () => {
    const categories = useLoaderData();
    const { id } = useParams();
    const category = categories.find(category => category.id === id);
    console.log(category);
    return (
        <div>
            <Navbar></Navbar>
            <div className="w-[90%] mt-10 mx-auto">
                <div className="card card-side bg-base-100 shadow-xl lg:grid lg:grid-cols-1 flex flex-wrap">
                    
                        <figure><img className="h-96 lg:w-[500px]" src={category.image} alt="Movie" /></figure>
                    
                    <div className="card-body mt-7">
                        <h2 className="card-title">{category.name}</h2>
                        <p>{category.description}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline btn-success">confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryDetails;
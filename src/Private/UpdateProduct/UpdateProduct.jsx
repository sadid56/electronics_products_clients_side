import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {

    const product = useLoaderData()
    const {_id, image, name, brandName, categorieName, price, rating} = product;
    console.log(product);



    const handleUpdateProducts = e => {
        e.preventDefault()
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const categorieName = form.categorieName.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const updateProduct = { image, name, brandName, categorieName, price, rating}
        console.log(updateProduct); 
        fetch(`http://localhost:5000/products/${_id}`,{
            method:'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.matchedCount === 1){
              Swal.fire({
                title: 'Update successfull',
                // text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'ok'
              })
            }
        })
    }
    return ( 
        <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Update Product</h1>
          </div>
          <div className="card flex-shrink-0 w-full  shadow-2xl border rounded-md">
            <form onSubmit={handleUpdateProducts} className="card-body">
              <div className="flex gap-5 items-start">
                <div className="flex-1">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Image</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Image URL"
                      className="input input-bordered"
                      required
                      name="image"
                      defaultValue={image}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Product Name"
                      className="input input-bordered"
                      required
                      name="name"
                      defaultValue={name}
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Brand Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Brand Name"
                      className="input input-bordered"
                      required
                      name="brandName"
                      defaultValue={brandName}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Categorie</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Categorie Name"
                      className="input input-bordered"
                      required
                      name="categorieName"
                      defaultValue={categorieName}
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center w-full gap-5">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Price"
                    className="input input-bordered"
                    required
                    name="price"
                    defaultValue={price}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Rating</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Rating"
                    className="input input-bordered"
                    required
                    name="rating"
                    defaultValue={rating}
                  />
                </div>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
     );
}
 
export default UpdateProduct;
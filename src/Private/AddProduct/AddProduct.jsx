import Swal from "sweetalert2";

const AddProduct = () => {
    const handleAddProduct = e => {
        e.preventDefault()
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const categorieName = form.categorieName.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const addProduct = { image, name, brandName, categorieName, price, rating, description}
        console.log(addProduct); 
        fetch('https://assignment10-server-side-a53vmkns1-sadids-projects.vercel.app/products',{
            method:'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged === true){
              Swal.fire({
                title: 'Product add success',
                text: 'You have added this product',
                icon: 'success',
                confirmButtonText: 'ok'
              })
            }
        })
    }
  return (
    <div>
      <div className=" min-h-screen ">
        <div className=" flex-col">
          <div className="text-center ">
            <h1 className="text-3xl md:text-5xl font-bold">Add Product</h1>
          </div>
          <div className="card flex-shrink-0 w-full  shadow-2xl ">
            <form onSubmit={handleAddProduct} className="card-body">
              <div className="flex flex-col md:flex-row gap-5 md:items-start">
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
                    />
                  </div>
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
                  />
                </div>
                </div>
              </div>
              {/* <div className="flex items-center w-full gap-5">
                
               
              </div> */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter a Short description"
                  className="input input-bordered"
                  required
                  name="description"
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Add Product</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

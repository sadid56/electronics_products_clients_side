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
        fetch('http://localhost:5000/products',{
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
                alert('add suces')
            }
        })
    }
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Add Product</h1>
          </div>
          <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
            <form onSubmit={handleAddProduct} className="card-body">
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

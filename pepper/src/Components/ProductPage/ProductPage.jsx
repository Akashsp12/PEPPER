


import ProductList from './ProductList'



const ProductPage = () => {

  

  return (
    <>


      <div className="container bg-white productList ">
        <div className="row">
          <div className="col-md-3">
            <div>
              <input type="text" className="form-control" />

              <select name="" id="">
                <option value="">non veg</option>
                <option value="">veg</option>
                <option value="">both</option>

              </select>
            </div>
          </div>
          <div className="col-md-9  ">

            <div className="col-md-12">
              <ProductList />
              
            </div>

          </div>
        </div>


      </div>



    </>
  )

}
export default ProductPage
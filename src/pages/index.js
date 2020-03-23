import React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby';

import Layout from "../components/Layout/Layout";
import SEO from "../components/Seo";
import Img from 'gatsby-image';

const IndexPage = () => {


  const data = useStaticQuery(graphql`
  query {
    book1: file(relativePath: { eq: "property_1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    wtnLogo: file(relativePath: { eq: "wtn.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }



  }
`)


return(
  <Layout>
    <SEO title="Home" />


    
    <div className="site-block-wrap">
    <div className="owl-carousel with-dots">
      <div className="site-blocks-cover overlay overlay-2 bg-home"  data-aos="fade" id="home-section">


        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-12 mt-lg-5 text-center">
              <h1 className="text-shadow">Search &amp; Find All COVID-19 Details  Here</h1>
              <Link to=""  className="btn btn-primary px-5 py-3">Get Started</Link>
              
            </div>
          </div>
        </div>
  
        
      </div>  
{/*   
      <div className="site-blocks-cover overlay overlay-2" style="background-image: url(images/hero_2.jpg);" data-aos="fade" id="home-section">
  
  
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 mt-lg-5 text-center">
              <h1 className="text-shadow">Find Your Perfect Property For Your Home</h1>
              <p className="mb-5 text-shadow">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque quam doloribus reprehenderit dolore adipisci rerum?</p>
              <p><Link to=""  className="btn btn-primary px-5 py-3">Get Started</Link></p>
              
            </div>
          </div>
        </div>
  
        
      </div>   */}
    </div>   
    
  </div>      

  
  <section className="site-section bg-white" id="about-section">
      <div className="container">
        
        <div className="row large-gutters">
          <div className="col-lg-6 mb-5">

              <div className="owl-carousel slide-one-item with-dots">
                  {/* <div><img src="images/img_1.jpg" alt="Image" className="img-fluid"></div> */}
                  {/* <div><img src="images/img_2.jpg" alt="Image" className="img-fluid"></div> */}
                  {/* <div><img src="images/img_3.jpg" alt="Image" className="img-fluid"></div> */}
                </div>

          </div>
          <div className="col-lg-6 ml-auto">
            
            <h2 className="section-title text-capitalize mb-3">Watin be Corona Sef?</h2>
                <p>ALorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id rutrum turpis, blandit vestibulum nulla. Vivamus a est vel mauris dignissim porttitor. Vestibulum nisl lorem, bibendum eget risus at, iaculis blandit diam. Curabitur sagittis tincidunt hendrerit. Mauris convallis accumsan mauris, vel vestibulum erat. Phasellus viverra dui eu nisl accumsan suscipit. Donec ligula nisl, malesuada ut dapibus ut, commodo a nulla

</p>

            

                <p><Link to="" className="btn btn-primary mr-2 mb-2">Learn More</Link></p>
            
          </div>
        </div>
      </div>
    </section>


<section class="site-section bg-light" id="services-section">
      <div class="container">
        <div class="row mb-5">
          <div class="col-12 text-center">
            <h2 class="section-title mb-3">Watin you need to know about corona virus (COVID-19)</h2>
          </div>
        </div>
        <div class="row align-items-stretch">
          <div class="col-md-6 col-lg-4 mb-4 mb-lg-4 aos-init aos-animate" data-aos="fade-up">
            <div class="unit-4 d-flex">
              <div class="unit-4-icon mr-4"><span class="text-primary flaticon-house"></span></div>
              <div>
                <h3>Find Property</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                <p><a href="#">Learn More</a></p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4 mb-lg-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <div class="unit-4 d-flex">
              <div class="unit-4-icon mr-4"><span class="text-primary flaticon-coin"></span></div>
              <div>
                <h3>Buy Property</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                <p><a href="#">Learn More</a></p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4 mb-lg-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
            <div class="unit-4 d-flex">
              <div class="unit-4-icon mr-4"><span class="text-primary flaticon-home"></span></div>
              <div>
                <h3>Beautiful Home</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                <p><a href="#">Learn More</a></p>
              </div>
            </div>
          </div>


          <div class="col-md-6 col-lg-4 mb-4 mb-lg-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
            <div class="unit-4 d-flex">
              <div class="unit-4-icon mr-4"><span class="text-primary flaticon-flat"></span></div>
              <div>
                <h3>Buildings &amp; Lands</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                <p><a href="#">Learn More</a></p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4 mb-lg-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
            <div class="unit-4 d-flex">
              <div class="unit-4-icon mr-4"><span class="text-primary flaticon-location"></span></div>
              <div>
                <h3>Property Locator</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                <p><a href="#">Learn More</a></p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4 mb-lg-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
            <div class="unit-4 d-flex">
              <div class="unit-4-icon mr-4"><span class="text-primary flaticon-mobile-phone"></span></div>
              <div>
                <h3>Mobile Apps</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                <p><a href="#">Learn More</a></p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

 

    <section class="site-section" id="news-section">
      <div class="container">
        <div class="row mb-5">
          <div class="col-12 ">
            <h2 class="section-title text-center text-captalize mb-3">How you go fit take protect yourself from corona </h2>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 col-lg-4 mb-4 mb-lg-4">
            <Link to="">
            <div class="h-entry">
            <div>
                <h4 className="p-2">
                  Helpful Tips
                </h4>
              </div>
          <ul>
            <li className="cor__step"> Step one</li>
          </ul>
              <div class="meta mb-4">
              </div>
              
            </div> 
            </Link>
          </div>

         

          <div class="col-md-6 col-lg-4 mb-4 mb-lg-4">
            <Link to>
            <div class="h-entry">
              <div>
                <h4>
            Report any suspected case
                </h4>
              </div>
              
              <p class="font-size-regular"><Link to class="text-dark">Article
Communicating with the public during health crises: experts' experiences and opinions during health crises: experts' experiences and opinions</Link></p>
                              <div class="meta  text-center mt-4"> 
                              <button className="btn btn-primary">

                                Report case

                              </button>
              </div>
              
            </div>
            </Link>
          </div>

          <div class="col-md-6 col-lg-4 mb-4 mb-lg-4">
            <Link to>
            <div class="h-entry">
              <div>
                <h4>
          GO the nearest test center if you dey suspect anything
                </h4>
              </div>
              
              <p class="font-size-regular"><Link to class="text-dark">Article
Communicating with the public during health crises: experts' experiences and opinions during health crises: experts' experiences and opinions</Link></p>
<div class="meta  text-center mt-4"> 
                              <button className="btn btn-primary">

                              Search for centers

                              </button>
              </div>  
              
            </div>
            </Link>
          </div>
       



          
        </div>
      </div>
    </section>

    <div class="row">
		<div class="col-md-4">
		</div>
			<div class="col-md-4">
				<center>

 					<form>
						<div class="form-group">
							<label class="control-label">State of Origin</label>
						   <select name="state" id="state" class="form-control">
							  <option value="" selected="selected" >- Select -</option>
							  <option value='Abia'>Abia</option>
							  <option value='Adamawa'>Adamawa</option>
							  <option value='AkwaIbom'>AkwaIbom</option>
							  <option value='Anambra'>Anambra</option>
							  <option value='Bauchi'>Bauchi</option>
							  <option value='Bayelsa'>Bayelsa</option>
							  <option value='Benue'>Benue</option>
							  <option value='Borno'>Borno</option>
							  <option value='Cross River'>Cross River</option>
							  <option value='Delta'>Delta</option>
							  <option value='Ebonyi'>Ebonyi</option>
							  <option value='Edo'>Edo</option>
							  <option value='Ekiti'>Ekiti</option>
							  <option value='Enugu'>Enugu</option>
							  <option value='FCT'>FCT</option>
							  <option value='Gombe'>Gombe</option>
							  <option value='Imo'>Imo</option>
							  <option value='Jigawa'>Jigawa</option>
							  <option value='Kaduna'>Kaduna</option>
							  <option value='Kano'>Kano</option>
							  <option value='Katsina'>Katsina</option>
							  <option value='Kebbi'>Kebbi</option>
							  <option value='Kogi'>Kogi</option>
							  <option value='Kwara'>Kwara</option>
							  <option value='Lagos'>Lagos</option>
							  <option value='Nasarawa'>Nasarawa</option>
							  <option value='Niger'>Niger</option>
							  <option value='Ogun'>Ogun</option>
							  <option value='Ondo'>Ondo</option>
							  <option value='Osun'>Osun</option>
							  <option value='Oyo'>Oyo</option>
							  <option value='Plateau'>Plateau</option>
							  <option value='Rivers'>Rivers</option>
							  <option value='Sokoto'>Sokoto</option>
							  <option value='Taraba'>Taraba</option>
							  <option value='Yobe'>Yobe</option>
							  <option value='Zamfara'>Zamafara</option>
							</select>
						</div>
						  
						<div class="form-group">
							  <label class="control-label">LGA of Origin</label>
							  <select name="lga" id="lga" class="form-control" required>
							  </select>
						</div>
				    </form>
			    </center>
			</div>
		<div class="col-md-4">
		</div>
		</div>




    


  </Layout>
  
)


  
}

export default IndexPage

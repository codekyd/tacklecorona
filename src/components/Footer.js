import React from "react"
import Moment from "react-moment"
const Footer = () => (
  <>
    <a href="#top" className="gototop">
      <span className="icon-angle-double-up"></span>
    </a>

    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="row">
              <div class="col-md-5">
                <h2 class="footer-heading mb-4">About Us</h2>
                <p>
                  Tackle Corona is a social impact program powered by{" "}
                  <a href="https://warriinnovationhub.com">waffiihub</a> in
                  taking responsibility to fight against COVID-19 pandemic in
                  Nigeria.
                </p>
              </div>
              <div class="col-md-3 col-xs-6">
                <h2 class="footer-heading mb-4">More Tori</h2>
                <ul class="list-unstyled">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Helpful Tips</a>
                  </li>
                  <li>
                    <a href="#">Test Centers</a>
                  </li>
                  <li>
                    <a href="#">Donate</a>
                  </li>
                </ul>
              </div>
              <div class="col-md-3 col-xs-6">
                <h2 class="footer-heading mb-4">Helpful Links</h2>
                <ul class="list-unstyled">
                  <li>
                    <a href="https://www.who.int/">World Health Organisation</a>
                  </li>
                  <li>
                    <a href="http://covid19.ncdc.gov.ng/">NCDC COVID-19</a>
                  </li>
                  <li>
                    <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports">
                      Situation Report
                    </a>
                  </li>
                  <li>
                    <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters">
                      Myth busters
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="mb-4">
              <h2 class="footer-heading mb-4">Subscribe To Our Newsletter</h2>
              <form action="#" method="post" class="footer-subscribe">
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control border-secondary text-white bg-transparent"
                    placeholder="Enter Email"
                    aria-label="Enter Email"
                    aria-describedby="button-addon2"
                  />
                  <div class="input-group-append">
                    <button
                      class="btn btn-primary text-black"
                      type="button"
                      id="button-addon2"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div class="">
              <h2 class="footer-heading mb-4">Follow Us</h2>
              <a href="#" class="pl-0 pr-3">
                <span class="icon-facebook"></span>
              </a>
              <a href="#" class="pl-3 pr-3">
                <span class="icon-twitter"></span>
              </a>
              <a href="#" class="pl-3 pr-3">
                <span class="icon-instagram"></span>
              </a>
              <a href="#" class="pl-3 pr-3">
                <span class="icon-linkedin"></span>
              </a>
            </div>
          </div>
        </div>
        <div class="row pt-5 mt-5 text-center">
          <div class="col-md-12">
            <div class="border-top pt-5">
              <p class="copyright">
                Copyright ©<Moment format="YYYY" /> All rights reserved |
                TackleCorona
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <a href="#top" class="gototop active">
      <span class="icon-angle-double-up"></span>
    </a>
  </>
)

export default Footer

export default function Contact() {
  return (
    <>
      <div className="container">
        <div className="card mt-4">
          <div className="card-header mx-0 px-0">
            <h1 className="h4 text-center">Contact</h1>
          </div>
          <div className="card-body">
            <form>
              <div className="form row my-2">
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    placeholder="First name"
                  />
                </div>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div className="form row my-2">
                <div className="col-sm-12 ">
                  <input type="email" className="form-control" name="email" placeholder="E Mail" />
                </div>
              </div>
              <div className="form row my-2">
                <div className="col-sm-12 ">
                  <input type="text" className="form-control" name="title" placeholder="Title" />
                </div>
              </div>
              <div className="form row my-2">
                <div className="col-sm-12 ">
                  <textarea
                    rows={5}
                    cols={50}
                    className="form-control"
                    name="message"
                    placeholder="Message"
                  />
                </div>
              </div>
              <div className="form row my-2">
                <div className="col-sm-12 ">
                  <button className="btn btn-outline-success" type="submit">
                    Send
                  </button>
                </div>
              </div>
            </form>
            <div className="row my-2">
              <div className="col-sm-6">
                <div class="map-responsive">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97485.85005996618!2d29.0322895!3d40.221678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca1582d8d45695%3A0x61a00555fc973392!2sBursa!5e0!3m2!1str!2str!4v1692188234386!5m2!1str!2str"
                    width={600}
                    height={450}
                    frameborder={0}
                    style={{ border: 0 }}
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <div className="col-sm-6 d-flex align-items-center">
                <div className="info-wrap bg-muted text-muted w-100 p-lg-5 p-4">
                  <h3 className="mb-4 mt-md-4">Contact us</h3>
                  <div className="dbox w-100 d-flex align-items-start">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-map-marker"></span>
                    </div>
                    <div className="text pl-3">
                      <p>
                        <span>Address:</span>Zafer Mh. Ankara Yolu Cd. C Blok No:1 PK:16080
                        Osmangazi / BURSA
                      </p>
                    </div>
                  </div>
                  <div className="dbox w-100 d-flex align-items-stretch">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-phone"></span>
                    </div>
                    <div className="text pl-3">
                      <p>
                        <span>Phone:</span> <span>444 16 00</span>
                      </p>
                    </div>
                  </div>
                  <div className="dbox w-100 d-flex align-items-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-paper-plane"></span>
                    </div>
                    <div className="text pl-3">
                      <p>
                        <span>Email:</span>{" "}
                        <a href="mailto:beyazmasa@bursa.bel.tr">beyazmasa@bursa.bel.tr</a>
                      </p>
                    </div>
                  </div>
                  <div className="dbox w-100 d-flex align-items-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-globe"></span>
                    </div>
                    <div className="text pl-3">
                      <p>
                        <span>Website</span> <a href="#">www.bursa.bel.tr</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

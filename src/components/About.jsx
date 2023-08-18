import { Button} from "react-bootstrap";
export default function About() {
  return (
    <>
      <div class="row my-4  p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <div class="col-lg-7 my-2 p-3 p-lg-5 pt-lg-3">
          <h1 class="display-4 fw-bold lh-1 text-center">About Us</h1>
          <p class="lead">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, doloribus quo
            delectus deleniti recusandae perspiciatis illo ratione sint eveniet distinctio, cum a
            consequuntur? Consequuntur eius ea officiis consequatur. Dolor perspiciatis eveniet
            debitis! Voluptatum vero labore aperiam expedita nostrum ullam voluptates, recusandae
            saepe ducimus quam nulla a esse ipsa quia enim at et? Culpa neque inventore earum
            consequuntur. Aspernatur dolorem ipsum excepturi maxime rerum esse, dolorum quasi dicta
            itaque ratione molestias explicabo vitae provident aliquid, repellat ipsam voluptatibus
            asperiores doloribus ipsa. Sequi maxime, officia odit nesciunt numquam dolor beatae, quo
            nihil dolorum earum ex quod consectetur saepe cupiditate? Eaque, omnis nemo.
          </p>
          <div class="d-grid gap-2 d-flex justify-content-center mb-4 mb-lg-3">
            <a href="/" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold">
              Home
            </a>
            <a href="/services" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold">
              Products
            </a>
          </div>
        </div>
        <div class="col-lg-4 mx-1 mb-5  offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img class="rounded-lg-3" src="/img/Rectangle 6.png" alt="" width="720" />
        </div>
      </div>
    </>
  );
}

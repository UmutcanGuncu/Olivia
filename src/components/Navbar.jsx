import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-xxl bg-body-tertiary primary-color">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="139"
              height="24"
              viewBox="0 0 139 24"
              fill="none"
            >
              <path
                d="M139 12C139 18.629 134.077 24 128 24C126.865 24 125.773 23.8113 124.744 23.4629C125.192 22.6645 125.862 21.3581 126.11 20.3177C126.244 19.7565 126.794 17.4629 126.794 17.4629C127.153 18.2081 128.2 18.8419 129.313 18.8419C132.631 18.8419 135.021 15.5129 135.021 11.3758C135.021 7.4129 132.054 4.44677 128.24 4.44677C123.494 4.44677 120.97 7.92097 120.97 11.7097C120.97 13.471 121.83 15.6629 123.201 16.3597C123.409 16.4661 123.52 16.4177 123.569 16.2C123.604 16.0355 123.791 15.2177 123.875 14.8403C123.902 14.7194 123.888 14.6129 123.8 14.4968C123.352 13.8919 122.988 12.7887 122.988 11.7581C122.988 9.11129 124.824 6.55161 127.956 6.55161C130.657 6.55161 132.551 8.55968 132.551 11.4339C132.551 14.6806 131.047 16.9306 129.091 16.9306C128.013 16.9306 127.202 15.9581 127.463 14.7629C127.774 13.3355 128.373 11.7968 128.373 10.7661C128.373 9.84677 127.92 9.07742 126.98 9.07742C125.875 9.07742 124.988 10.321 124.988 11.9903C124.988 13.0548 125.317 13.771 125.317 13.771C125.317 13.771 124.23 18.7935 124.03 19.7323C123.808 20.7677 123.897 22.229 123.99 23.1774C119.901 21.4306 117 17.0855 117 12C117 5.37097 121.923 0 128 0C134.077 0 139 5.37097 139 12Z"
                fill="black"
                fillOpacity="0.6"
              />
              <path
                d="M89.0025 5.8467C85.881 5.8467 83.3632 8.594 83.3632 12C83.3632 15.406 85.881 18.1533 89.0025 18.1533C92.1239 18.1533 94.6417 15.406 94.6417 12C94.6417 8.594 92.1239 5.8467 89.0025 5.8467ZM89.0025 16.0004C86.9853 16.0004 85.3362 14.2064 85.3362 12C85.3362 9.7936 86.9804 7.99955 89.0025 7.99955C91.0245 7.99955 92.6687 9.7936 92.6687 12C92.6687 14.2064 91.0196 16.0004 89.0025 16.0004ZM96.1877 5.595C96.1877 6.39295 95.5988 7.03024 94.8724 7.03024C94.1411 7.03024 93.5571 6.38759 93.5571 5.595C93.5571 4.80241 94.146 4.15977 94.8724 4.15977C95.5988 4.15977 96.1877 4.80241 96.1877 5.595ZM99.9227 7.05166C99.8393 5.12909 99.4368 3.42608 98.146 2.02298C96.8601 0.619882 95.2994 0.180743 93.5374 0.0843468C91.7215 -0.0281156 86.2785 -0.0281156 84.4626 0.0843468C82.7055 0.175388 81.1448 0.614526 79.854 2.01763C78.5632 3.42073 78.1656 5.12373 78.0773 7.0463C77.9742 9.02778 77.9742 14.9669 78.0773 16.9483C78.1607 18.8709 78.5632 20.5739 79.854 21.977C81.1448 23.3801 82.7006 23.8193 84.4626 23.9157C86.2785 24.0281 91.7215 24.0281 93.5374 23.9157C95.2994 23.8246 96.8601 23.3855 98.146 21.977C99.4319 20.5739 99.8344 18.8709 99.9227 16.9483C100.026 14.9669 100.026 9.03314 99.9227 7.05166ZM97.5767 19.0744C97.1939 20.1241 96.4528 20.9327 95.4859 21.3558C94.038 21.9824 90.6025 21.8378 89.0025 21.8378C87.4025 21.8378 83.962 21.977 82.519 21.3558C81.5571 20.9381 80.816 20.1294 80.4282 19.0744C79.854 17.4946 79.9865 13.7458 79.9865 12C79.9865 10.2542 79.8589 6.50006 80.4282 4.92558C80.811 3.87593 81.5521 3.06728 82.519 2.6442C83.9669 2.01763 87.4025 2.16222 89.0025 2.16222C90.6025 2.16222 94.0429 2.02298 95.4859 2.6442C96.4479 3.06192 97.189 3.87058 97.5767 4.92558C98.1509 6.50541 98.0184 10.2542 98.0184 12C98.0184 13.7458 98.1509 17.4999 97.5767 19.0744Z"
                fill="black"
                fillOpacity="0.6"
              />
              <path
                d="M58.7386 5.98123C58.7526 6.24372 58.7526 6.50626 58.7526 6.76875C58.7526 14.775 54.2158 24 45.9239 24C43.3693 24 40.9962 23.0062 39 21.2813C39.363 21.3375 39.7119 21.3563 40.0888 21.3563C42.1967 21.3563 44.1371 20.4 45.6866 18.7688C43.7043 18.7125 42.0431 16.9688 41.4708 14.5687C41.75 14.625 42.0292 14.6625 42.3224 14.6625C42.7272 14.6625 43.132 14.5874 43.5089 14.4563C41.4429 13.8937 39.8934 11.4562 39.8934 8.51249V8.43752C40.4936 8.88752 41.1916 9.16877 41.9314 9.20622C40.717 8.1187 39.9213 6.26247 39.9213 4.16246C39.9213 3.03748 40.1446 2.00623 40.5355 1.10622C42.7551 4.78122 46.0914 7.18118 49.8325 7.44372C49.7627 6.99372 49.7208 6.52502 49.7208 6.05626C49.7208 2.71872 51.731 0 54.2297 0C55.5279 0 56.7005 0.731248 57.5241 1.9125C58.5431 1.65001 59.5203 1.14374 60.3858 0.450003C60.0507 1.85628 59.3388 3.03754 58.4036 3.78748C59.3109 3.6563 60.1904 3.31872 61 2.85002C60.3859 4.04997 59.6181 5.11868 58.7386 5.98123Z"
                fill="black"
                fillOpacity="0.6"
              />
              <path
                d="M20.5583 13.5L21.6991 9.15656H14.5661V6.33797C14.5661 5.14969 15.5625 3.99141 18.7572 3.99141H22V0.293437C22 0.293437 19.0573 0 16.2437 0C10.3694 0 6.52972 2.08031 6.52972 5.84625V9.15656H0V13.5H6.52972V24H14.5661V13.5H20.5583Z"
                fill="black"
                fillOpacity="0.6"
              />
            </svg>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse ps-4 d-flex justify-content-center "
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav d-flex ms-3 ps-4 justify-content-center">
              <NavLink to="/" className="nav-link text-secondary fs-3 ms-5 me-2 px-5">
                Home
              </NavLink>
              <NavLink to="/about" className="nav-link text-secondary fs-3 mx-4 px-4">About</NavLink>
              <h1 className="nav-link head ps-4 pe-5 h1 ">Olivia Grace</h1>
              <NavLink to="/services" className="nav-link text-secondary fs-3 mx-4 px-3 ">
                Services
              </NavLink>
              <NavLink to="/contact" className="nav-link text-secondary fs-3 mx-4 px-4 ">
                Contact
              </NavLink>
              <a className="nav-link disabled fs-3 mx-5 px-4">
                Search{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="24"
                  viewBox="0 0 22 24"
                  fill="none"
                >
                  <path
                    d="M21.7008 20.7495L17.4165 16.0766C17.2231 15.8656 16.961 15.7485 16.686 15.7485H15.9855C17.1716 14.0939 17.8763 12.0129 17.8763 9.74905C17.8763 4.36364 13.8756 0 8.93815 0C4.00068 0 0 4.36364 0 9.74905C0 15.1345 4.00068 19.4981 8.93815 19.4981C11.0137 19.4981 12.9216 18.7294 14.4386 17.4358V18.1998C14.4386 18.4998 14.546 18.7857 14.7394 18.9966L19.0237 23.6696C19.4276 24.1101 20.0808 24.1101 20.4804 23.6696L21.6965 22.3431C22.1004 21.9025 22.1004 21.1901 21.7008 20.7495ZM8.93815 15.7485C5.90004 15.7485 3.43775 13.0675 3.43775 9.74905C3.43775 6.43531 5.89574 3.74963 8.93815 3.74963C11.9763 3.74963 14.4386 6.43062 14.4386 9.74905C14.4386 13.0628 11.9806 15.7485 8.93815 15.7485Z"
                    fill="black"
                    fillOpacity="0.6"
                  />
                </svg>{" "}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

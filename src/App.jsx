import profileimage from "./assets/deveraa.svg";
import "./App.css";

function App() {
  const sedmessage = () => {
    window.open("https://api.whatsapp.com/send?phone=9270139519", "_blank");
  };

  return (
    <>
      <div className="mx-5 min-h-screen grid place-content-center">
        <div className="bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl text-white p-8 text-center h-72 max-w-sm mx-auto">
          <h1 className="text-3xl mb-3">DevEraa</h1>
          <p className="text-lg">
            You can contact us whenever you need help or just curious about
            something.
          </p>
        </div>
        <div className="bg-white py-8 px-10 text-center rounded-md shadow-lg transform -translate-y-20 sm:-translate-y-24 max-w-xs mx-auto">
          <h2 className="font-semibold text-2xl mb-6">Get In Touch</h2>
          <img
            className="w-20 h-20 object-cover rounded-full mx-auto shadow-lg"
            src={profileimage}
            alt="User avatar"
          />
          <p className="capitalize text-xl mt-1">DevEraa</p>
          <span className="flex items-center border rounded-full w-24 pr-2 justify-center mx-auto mt-2 mb-12">
            <div className="bg-green-400 rounded-full w-2.5 h-2.5 block mr-2" />
            Active
          </span>
          <button onClick={() => sedmessage()} className="rounded-md bg-gradient-to-r from-blue-400 to-indigo-500 text-xl text-white pt-3 pb-4 px-8 inline">
            Send a message
          </button>

        </div>
        <div className="container flex flex-col mx-auto bg-white">
          <div className="w-full draggable">
            <div className="container flex flex-col items-center gap-16 mx-auto">
              <div className="grid w-full grid-cols-2 gap-5 md:grid-cols-2 lg:grid-cols-2">
                <div className="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={38}
                      height={38}
                      viewBox="0 0 38 38"
                      fill="none"
                    >
                      <path
                        d="M31.9904 13.965L22.4166 4.40166C21.6057 3.60976 20.5294 3.16817 19.4104 3.16817C18.2914 3.16817 17.2151 3.60976 16.4041 4.40166L6.8304 13.9017C6.40502 14.283 6.0629 14.7524 5.82645 15.279C5.58999 15.8056 5.46454 16.3776 5.45831 16.9575V30.5425C5.47456 31.6946 5.93476 32.793 6.73808 33.5973C7.5414 34.4016 8.62236 34.846 9.74415 34.8333H28.9225C30.0443 34.846 31.1252 34.4016 31.9285 33.5973C32.7319 32.793 33.1921 31.6946 33.2083 30.5425V16.9575C33.2071 16.4009 33.0989 15.85 32.8899 15.3365C32.6809 14.823 32.3752 14.3569 31.9904 13.965ZM18.47 6.68166C18.7058 6.46025 19.0138 6.33747 19.3333 6.33747C19.6528 6.33747 19.9608 6.46025 20.1966 6.68166L28.5833 15.0417L20.1504 23.4017C19.9146 23.6231 19.6066 23.7459 19.2871 23.7459C18.9675 23.7459 18.6596 23.6231 18.4237 23.4017L10.0833 15.0417L18.47 6.68166ZM30.125 30.5425C30.1052 30.8533 29.9688 31.144 29.7445 31.3537C29.5203 31.5633 29.2256 31.6755 28.9225 31.6667H9.74415C9.44102 31.6755 9.14636 31.5633 8.9221 31.3537C8.69785 31.144 8.56147 30.8533 8.54165 30.5425V17.9708L14.7854 24.1458L12.2262 26.6792C11.9391 26.9758 11.7779 27.3771 11.7779 27.7954C11.7779 28.2137 11.9391 28.615 12.2262 28.9117C12.3695 29.066 12.5417 29.1891 12.7324 29.2734C12.9232 29.3578 13.1286 29.4017 13.3362 29.4025C13.7332 29.4009 14.1142 29.2421 14.4 28.9592L17.1287 26.2675C17.8065 26.6928 18.5853 26.9179 19.3796 26.9179C20.1738 26.9179 20.9527 26.6928 21.6304 26.2675L24.3591 28.9592C24.6449 29.2421 25.026 29.4009 25.4229 29.4025C25.6306 29.4017 25.8359 29.3578 26.0267 29.2734C26.2174 29.1891 26.3896 29.066 26.5329 28.9117C26.82 28.615 26.9812 28.2137 26.9812 27.7954C26.9812 27.3771 26.82 26.9758 26.5329 26.6792L23.9583 24.1458L30.125 17.9708V30.5425Z"
                        fill="#581ff8"
                      />
                    </svg>
                  </span>
                  <p className="text-2xl font-extrabold text-dark-grey-900">
                    Email
                  </p>
                  <p className="text-base leading-7 text-dark-grey-600">
                    Contact us
                  </p>
                  <a
                    className="text-lg font-bold text-purple-blue-500"
                    href="mailto:info@deveraa.com"
                  >
                    info@deveraa.com
                  </a>
                </div>
                <div className="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={38}
                      height={38}
                      viewBox="0 0 38 38"
                      fill="none"
                    >
                      <path
                        d="M30.4237 20.5833C30.0846 20.5833 29.73 20.4725 29.3908 20.3933C28.7045 20.2357 28.0297 20.0294 27.3712 19.7758C26.656 19.5086 25.8699 19.5225 25.164 19.8148C24.4582 20.1071 23.8826 20.6572 23.5479 21.3592L23.2087 22.0875C21.7115 21.2154 20.3283 20.1513 19.0925 18.9208C17.8944 17.6516 16.8583 16.231 16.0092 14.6933L16.7183 14.3608C17.4018 14.0171 17.9374 13.4259 18.222 12.701C18.5067 11.9761 18.5202 11.1687 18.26 10.4342C18.0151 9.7518 17.8143 9.05363 17.6587 8.34417C17.5817 7.99584 17.52 7.63167 17.4737 7.28334C17.2865 6.16807 16.7177 5.1581 15.8698 4.4353C15.0219 3.7125 13.9506 3.32439 12.8487 3.34084H8.20832C7.55657 3.33996 6.91201 3.48056 6.31687 3.75343C5.72174 4.02629 5.18948 4.42526 4.75498 4.92417C4.31148 5.43662 3.98125 6.04161 3.78698 6.69756C3.59271 7.35351 3.53901 8.04489 3.62957 8.72417C4.4676 15.3142 7.39927 21.4362 11.97 26.1408C16.5508 30.8351 22.5117 33.846 28.9283 34.7067C29.1284 34.7224 29.3294 34.7224 29.5296 34.7067C30.6664 34.7084 31.7641 34.28 32.6129 33.5033C33.0987 33.0571 33.4871 32.5105 33.7528 31.8992C34.0185 31.288 34.1554 30.626 34.1546 29.9567V25.2067C34.1463 24.1126 33.7705 23.0551 33.0907 22.2127C32.411 21.3704 31.4689 20.7948 30.4237 20.5833ZM31.1791 30.0833C31.1786 30.3043 31.1331 30.5227 31.0455 30.7245C30.9579 30.9263 30.8301 31.107 30.6704 31.255C30.5014 31.4131 30.3004 31.5306 30.0817 31.5991C29.8631 31.6676 29.6323 31.6852 29.4062 31.6508C23.6532 30.8792 18.3066 28.1865 14.19 23.9875C10.0698 19.756 7.4252 14.2458 6.66665 8.31251C6.63316 8.08028 6.65037 7.84332 6.71702 7.61877C6.78368 7.39422 6.89813 7.1877 7.05207 7.01417C7.19794 6.84816 7.3764 6.71577 7.57569 6.62571C7.77499 6.53565 7.99059 6.48997 8.20832 6.49167H12.8333C13.1897 6.48273 13.5381 6.6009 13.8192 6.82607C14.1002 7.05124 14.2967 7.3695 14.375 7.72667C14.375 8.15417 14.5137 8.59751 14.6062 9.025C14.7844 9.85446 15.0214 10.6694 15.3154 11.4633L13.1571 12.5083C12.7861 12.6832 12.4978 13.0021 12.3554 13.395C12.2012 13.7805 12.2012 14.2129 12.3554 14.5983C14.5742 19.4794 18.3945 23.4029 23.1471 25.6817C23.5224 25.84 23.9434 25.84 24.3187 25.6817C24.7013 25.5354 25.0118 25.2393 25.1821 24.8583L26.1533 22.6417C26.9487 22.9395 27.7624 23.1828 28.5891 23.37C28.99 23.465 29.4217 23.5442 29.8379 23.6075C30.1857 23.6879 30.4956 23.8897 30.7148 24.1784C30.934 24.467 31.0491 24.8248 31.0404 25.1908L31.1791 30.0833ZM22.0833 3.16667C21.7287 3.16667 21.3587 3.16667 21.0042 3.16667C20.5953 3.20237 20.217 3.40341 19.9524 3.72558C19.6879 4.04776 19.5588 4.46466 19.5935 4.88459C19.6283 5.30451 19.824 5.69306 20.1377 5.96476C20.4514 6.23645 20.8574 6.36903 21.2662 6.33334H22.0833C24.5366 6.33334 26.8893 7.33423 28.6241 9.11582C30.3588 10.8974 31.3333 13.3138 31.3333 15.8333C31.3333 16.1183 31.3333 16.3875 31.3333 16.6725C31.2991 17.0902 31.4276 17.5048 31.6906 17.8253C31.9536 18.1459 32.3296 18.3463 32.7362 18.3825H32.8596C33.2455 18.3841 33.618 18.237 33.9034 17.9702C34.1889 17.7035 34.3665 17.3364 34.4012 16.9417C34.4012 16.5775 34.4012 16.1975 34.4012 15.8333C34.4012 12.4767 33.104 9.25725 30.7943 6.88225C28.4847 4.50724 25.3516 3.17087 22.0833 3.16667ZM25.1667 15.8333C25.1667 16.2533 25.3291 16.656 25.6182 16.9529C25.9073 17.2499 26.2994 17.4167 26.7083 17.4167C27.1172 17.4167 27.5093 17.2499 27.7984 16.9529C28.0876 16.656 28.25 16.2533 28.25 15.8333C28.25 14.1536 27.6003 12.5427 26.4438 11.355C25.2873 10.1673 23.7188 9.50001 22.0833 9.50001C21.6744 9.50001 21.2823 9.66682 20.9932 9.96375C20.7041 10.2607 20.5417 10.6634 20.5417 11.0833C20.5417 11.5033 20.7041 11.906 20.9932 12.2029C21.2823 12.4999 21.6744 12.6667 22.0833 12.6667C22.9011 12.6667 23.6853 13.0003 24.2636 13.5942C24.8418 14.188 25.1667 14.9935 25.1667 15.8333Z"
                        fill="#581ff8"
                      />
                    </svg>
                  </span>
                  <p className="text-2xl font-extrabold text-dark-grey-900">
                    Phone
                  </p>
                  <p className="text-base leading-7 text-dark-grey-600">
                    Contact Us
                  </p>
                  <a
                    className="text-lg font-bold text-purple-blue-500"
                    href="tel:9270139519"
                  >
                    9270139519
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* second row */}
        <div className="container flex flex-col mx-auto bg-white">
  <div className="w-full draggable">
    <div className="container flex flex-col items-center gap-16 mx-auto">
      <div className="grid w-full grid-cols-2 gap-5 md:grid-cols-2 lg:grid-cols-2">
        {/* Web Section */}
        <div className="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
          <span>
            {/* New Web Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              className="text-[#581ff8]"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.9 15.9 0 0 1 0 20 15.9 15.9 0 0 1 0-20z" />
            </svg>
          </span>
          <p className="text-2xl font-extrabold text-dark-grey-900">Web</p>
          <p className="text-base leading-7 text-dark-grey-600">Visit us</p>
          <a
            className="text-lg font-bold text-purple-blue-500"
            href="https://deveraa.com/"
          >
            www.deveraa.com
          </a>
        </div>

        {/* Message Section */}
        <div className="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
          <span>
            {/* New Message Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
               className="text-[#581ff8]"
            >
              <path d="M21 15a2 2 0 0 1-2 2H6l-4 4V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </span>
          <p className="text-2xl font-extrabold text-dark-grey-900">Message</p>
          <p className="text-base leading-7 text-dark-grey-600">Support</p>
          <a
            className="text-lg font-bold text-purple-blue-500"
            href="https://wa.link/hn3p0c"
            target="_blank"
            rel="noopener noreferrer"
          >
            9270139519
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

      </div>


    </>
  );
}

export default App;

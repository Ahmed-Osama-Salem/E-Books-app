import React from "react";

function Footer() {
  //This is footer section
  return (
    <footer className="bg-whitesmoke footersection sm:text-center">
      <div class="container mx-auto px-8 ">
        <div class="w-full flex flex-col md:flex-row py-6 ">
          <div class=" mb-6 text-black">
            <img src="images/book-logo.png" alt="book" className="w-10 flex" />
            <a
              class="text-pink-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl mr-5"
              href="#"
            >
              E-Books
            </a>
          </div>
          <div class="flex-1">
            <p class="uppercase text-gray-500 md:mb-6">Links</p>
            <ul class="list-reset mb-6">
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  class="no-underline hover:underline text-gray-800 hover:text-pink-500"
                >
                  FAQ
                </a>
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  class="no-underline hover:underline text-gray-800 hover:text-pink-500"
                >
                  Help
                </a>
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  class="no-underline hover:underline text-gray-800 hover:text-pink-500"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div class="flex-1">
            <p class="uppercase text-gray-500 md:mb-6">Legal</p>
            <ul class="list-reset mb-6">
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  class="no-underline hover:underline text-gray-800 hover:text-pink-500"
                >
                  Terms
                </a>
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  class="no-underline hover:underline text-gray-800 hover:text-pink-500"
                >
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <div class="flex-1">
            <p class="uppercase text-gray-500 md:mb-6">Social</p>
            <ul class="list-reset mb-6">
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  class="no-underline hover:underline text-gray-800 hover:text-pink-500"
                >
                  Facebook
                </a>
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  class="no-underline hover:underline text-gray-800 hover:text-pink-500"
                >
                  Linkedin
                </a>
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  class="no-underline hover:underline text-gray-800 hover:text-pink-500"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div class="flex-1">
            <p class="uppercase text-gray-500 md:mb-6">Company</p>
            <ul class="list-reset mb-6">
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  class="no-underline hover:underline text-gray-800 hover:text-pink-500"
                >
                  Official Blog
                </a>
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  class="no-underline hover:underline text-gray-800 hover:text-pink-500"
                >
                  About Us
                </a>
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  class="no-underline hover:underline text-gray-800 hover:text-pink-500"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <a
        href="https://www.freepik.com/free-photos-vectors/background"
        class="text-gray-500"
      >
        CopyRight by @ Ahmed osama
      </a>
    </footer>
  );
}

export default Footer;

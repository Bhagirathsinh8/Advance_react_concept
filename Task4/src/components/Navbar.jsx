import React from "react";
import logo from "../assets/logo123.png";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <nav class="relative bg-gray-800/20 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10 rounded-full">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div class="flex shrink-0 items-center">
                <img
                  src={logo}
                  alt="Your Company"
                  class="h-10 w-24 object-contain "
                />
              </div>
              <div class="hidden sm:ml-6 sm:block">
                <div class="flex space-x-4">
                  <Link
                    to={'/'}
                    aria-current="page"
                    class="rounded-md bg-gray-950/50 px-3 py-2 text-sm font-medium text-white"
                  >
                    Home
                  </Link>
                  <Link
                  to={'/products'}
                    aria-current="page"
                    class="rounded-md bg-gray-950/50 px-3 py-2 text-sm font-medium text-white"
                  >
                    Products
                  </Link>
                  <Link
                    to={'/about'}
                    aria-current="page"
                    class="rounded-md bg-gray-950/50 px-3 py-2 text-sm font-medium text-white"
                  >
                    About US
                  </Link>
                </div>
              </div>
            </div>
         
          </div>
        </div>

        <el-disclosure id="mobile-menu" hidden class="block sm:hidden">
          <div class="space-y-1 px-2 pt-2 pb-3">
            {/* <!-- Current: "bg-gray-950/50 text-white", Default: "text-gray-300 hover:bg-white/5 hover:text-white" --> */}
            <a
              href="#"
              aria-current="page"
              class="block rounded-md bg-gray-950/50 px-3 py-2 text-base font-medium text-white"
            >
              Dashboard
            </a>
         
          </div>
        </el-disclosure>
      </nav>
    </div>
  );
}

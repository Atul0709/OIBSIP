'use client';

import { Footer } from 'flowbite-react';


export default function footer() {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between  md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              alt="SliceSwift"
              href="/"
              name="SliceSwift"
              src="/images/logo.png"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 font-extrabold sm:gap-6">
            <div>
              <Footer.Title title="SliceSwift" />
              <Footer.LinkGroup col>
                <Footer.Link href="/About">
                  About Us
                </Footer.Link>
                <Footer.Link href="#">
                  Help & support
                </Footer.Link>
                <Footer.Link href="#">
                  Contact Us
                </Footer.Link>
                
                
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  Github
                </Footer.Link>
                <Footer.Link href="#">
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href="#">
                  Terms & Conditions
                </Footer.Link>
                <Footer.Link href="#">
                Delivery Policies
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            by="Atul Kumar™"
            href="#"
            year={2023}
          />
          
        </div>
      </div>
    </Footer>
  )
}



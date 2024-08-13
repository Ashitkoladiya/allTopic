import React from "react";

const data = [
  {
    menu: "Home",
  },
  {
    menu: "About",
  },
  {
    menu: "Services",
  },
  {
    menu: "What We US",
    otherMenu: {
      career: "career",
      career: "career",
      career: "career",
    },
  },
  {
    menu: "Contect us",
  },
];
function Header() {
  return (
    <>
      <header>
        {/* <div className="flex justify-around my-5">
          <div>LOGO</div>
          <div>
            <ul className="flex space-x-5">
              {data.map((e,index) => {
                return (
                  <>
                    <li key={index}>
                      <a href="#">{e.menu}</a>
                    </li>
                    {console.log(Object.values(e.otherMenu))}
                  </>
                );
              })}
            </ul>
          </div>
        </div> */}

        
      </header>
    </>
  );
}

export default Header;

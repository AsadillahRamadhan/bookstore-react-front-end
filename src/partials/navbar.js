import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faUser, faCartShopping, faMagnifyingGlass, faReceipt } from "@fortawesome/free-solid-svg-icons";

export default function Navbar(){
    return (
        <>
        <nav className="h-20 drop-shadow-lg bg-white text-slate-800 flex items-center sticky top-0 px-10 justify-between">
            <div className="flex">
                <FontAwesomeIcon icon={faBook} size="2xl"/>
                <h1 className="text-2xl font-bold ms-3">Starbook</h1>
            </div>
            <div>
                <form>
                    <div className="h-12 w-96 bg-slate-200 p-2 flex items-center justify-between px-6 rounded-3xl">
                        <input type="text" className="bg-slate-200 h-12 w-72 rounded-2xl placeholder:text-slate-500 outline-none" placeholder="Search..."/>
                        <button type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} size="xl" className=""/></button>
                    </div>
                </form>
            </div>
            <div>
                <a href=""><FontAwesomeIcon icon={faCartShopping} size="2xl" className="me-10"/></a>
                <a><FontAwesomeIcon icon={faReceipt} size="2xl" className="me-10"/></a>
                <a><FontAwesomeIcon icon={faUser} size="2xl"/></a>
                
            </div>
        </nav>
        </>
    );
}
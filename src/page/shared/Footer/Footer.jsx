import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className="flex flex-col md:flex-row w-full h-[200px] md:h-[300px] lg:h-[350px]  text-white">
                <div className="flex-1 bg-[#1F2937]">
                    <div className="flex flex-col justify-center items-center h-full space-y-2">
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold font-cinzel">Contact us</h1>
                        <p className="text-sm">123 ABS Street, Uni 21, Bangladesh</p>
                        <p className="text-sm">+88 123456789</p>
                        <p className="text-sm">Mon - Fri: 08:00 - 22:00</p>
                        <p className="text-sm">Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>
                <div className="flex-1 bg-[#111827]">
                    <div className="flex flex-col justify-center items-center h-full space-y-2">
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold font-cinzel">Follow us</h1>
                        <p className="text-sm">Join us on social media</p>
                        <div className="flex gap-4 items-center mt-4 *:cursor-pointer">
                            <FaFacebook  size={30}/>
                            <FaTwitter  size={30}/>
                            <FaInstagram  size={30}/>
                            <FaTiktok  size={30}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer footer-center p-4 bg-[#151515] text-white">
                <aside>
                    <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;
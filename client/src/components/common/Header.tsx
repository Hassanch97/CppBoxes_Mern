// NEXT JS LINK AND IMAGE
import Link from "next/link";
import Image from "next/image";

// SOCIAL MEDIA LINK DATA 
import {headerSocial} from "@/constants/headerData";

// ICONS
import envelope_icon from "@/assets/images/icons/mail-envelope.svg";
import logo from "@/assets/images/logo.webp"
import free_shipping from "@/assets/images/icons/free-shipping.svg";
import support_icon from "@/assets/images/icons/support-icon.svg";
import call_phone from "@/assets/images/icons/call-icon.svg";
import search from "@/assets/images/icons/search.svg"

// HEADER LINK
import { HeaderList } from "./HeaderList";

export default function Header(){
    return <>
        <div className="bg--header-bg py-[11px] sm:py-2">
            <div className="container flex flex-col sm:flex-row justify-between items-center gap-2.5 sm:gap-0">
                <ul className="flex items-center justify-center gap-6">
                    {headerSocial.map((item) => {
                       return <li key={item.id}>
                            <Link href={"/"} aria-label={item.link_name}>
                                <Image src={item.img} alt={item.names} width={18} height={18} 
                                    className="filter-(--filter-primary)" 
                                />
                            </Link>
                       </li>
                    })}
                </ul>
                <Link href={"mailto:quotes@cppboxes.com"} aria-label="for email quotes"
                    className="flex items-center justify-center gap-1 text-base lg:text-lg"
                >
                    <Image src={envelope_icon} alt="envelope-icon" width={20} height={20} />
                    <strong className="font-semibold">Email:</strong>
                    quotes@cppboxes.com
                </Link>
            </div>
        </div>
        <div className="bg-light py-2.5">
            <div className="container flex items-center justify-center flex-wrap lg:flex-nowrap gap-5">
                <Link href={"/"} aria-label="site-logo" className="md:max-lg:w-full lg:w-fit md:max-lg:order-1 md:max-lg:mr-[0] mr-auto flex lg:block items-center justify-center">
                    <Image src={logo} alt="site-logo" width={181} height={90} className="w-fit xs:w-[181px] object-contain" />
                </Link>
                <ul className="hidden md:flex items-center justify-center *:flex *:justify-center *:items-center *:gap-6 order-2 lg:order-[0]">
                    <li>
                        <Image src={free_shipping} alt="free-shipping-icon" width={46} height={35} />
                        <span className="block w-[135px] xl:w-[200px]">
                            <strong className="block font-bold uppercase text-phara leading-[1]">Free Shipping</strong>
                            <span className="text--small text-[13px]">On all orders</span>
                        </span>
                    </li>
                    <li className="pl-[25px] border-l border-l--header-br">
                        <Image src={support_icon} alt="telephone-icon" width={41} height={28} />
                        <span className="block max-w-[309px]">
                            <strong className="block font-bold uppercase text-phara leading-[1]">Support 24/7</strong>
                            <span className="text--small text-[13px]">We support online 24 hours a Day</span>
                        </span>
                    </li>
                </ul>
                <div className="flex items-start ml-auto md:max-lg:order-3">
                    <Image src={call_phone} alt="call-phone" width={44} height={30} className="h-[30px] object-contain" />
                    <span className="text-phara">
                        <small className="block text-[13px] text-dark">Call Us Now</small>
                        <Link href={"tel:8883950493"} aria-label="contact-number" className="block text-lg font-bold">888-395-0493</Link>
                        or <Link href={"/"} aria-label="chat-online" className="text-[13px] p-[5px_8px] bg-linear-(--my-gradient) text-light rounded-[5px]">chat online</Link>
                    </span>
                </div>
            </div>
        </div>
        <header className="bg-primary">
            <div className="container flex items-center justify-between py-2.5">
                <HeaderList />
                <form className="w-full max-w-[309px] flex items-center justify-center border border--header-form-br py-1.5 px-3 rounded-[50px]">
                    <input type="text" placeholder="Search" className="w-full text-light placeholder:text-light" />
                    <button type="submit" aria-label="submit" className="flex items-center justify-center">
                        <Image src={search} alt="search-icon" width={16} height={16} />
                    </button>
                </form>
            </div>
        </header>
    </>
}
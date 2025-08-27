import { Links } from "@/constants/headerData";

// IMAGE AND LINK
import Image from "next/image";
import Link from "next/link";

export function HeaderList(){
    return <ul className="flex justify-center items-center gap-5">
        {Links.map((item) => {
            return <li key={item.id}>
                {item.name ?
                    <Link href={"/"} className={`text-light capitalize transition-colors duration-300 ease-in hover:text-dark ${item.name === "Request a Quote" &&  "bg-linear-(--request-gradient) text-primary py-[7px] px-[13px] rounded-[3px] hover:text-primary"} `}>{item.name}</Link>
                    :
                    <Link href={"/"} className="flex items-center justify-center bg-linear-(--request-gradient) p-[8px_9px] rounded-[3px]">
                        <Image src={item.image} alt="cart-icon" width={21} height={20} />
                        <span className="relative -top-1.5 text-xs text-phara pl-1">0</span>
                    </Link>
                }
                {item.nestLi &&
                    <ul className="hidden">
                        {item.nestLi?.map((items) => {
                          return <li key={items.id}>
                            <Link href={"/"}>
                                <Image src={items.img} alt="boxes-icon" width={32} height={32}/>
                                {items.name}
                            </Link>
                            {items.moreLI &&
                                <ul>
                                    {items.moreLI?.map((links) => {
                                        return <li key={links.id}>
                                            <Link href={"/"}>{links.name}</Link>
                                        </li>
                                    })}
                                </ul>
                            }
                          </li>
                        })}
                    </ul>
                }
            </li>
        })}
    </ul>
}
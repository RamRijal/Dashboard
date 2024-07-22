import Link from "next/link";

interface NavLinkProps {
    name: string;
    href: string;
    bottomBorder?: boolean;
}
const NavLink = ({ name, href }: NavLinkProps) => {
    return (
        <>
            <Link href={href}>
                <span className="text-sm m-8 p-8 font-medium">
                    {name}
                </span>
            </Link>
        </>)
}

export default NavLink
import Search from "./Search";
import HeaderOptions from "./HeaderOptions";
import ThemeSwitcher from "./ThemeSwitcher";
function Header() {
    return (
    <div className="header">
        <div className="grid grid-cols-12 gap-x-5">
            <div className="col-span-12">
                <div className="flex items-center justify-end">
                   <Search />
                   <HeaderOptions />
                   <ThemeSwitcher />
                </div>
            </div>
        </div>
    </div>
    )
}
export default Header;
import { useState } from "react";
function ThemeSwitcher(){
    const body = document.body
    let defaultTheme = 'Dark'
    let defaultSwitch = false
    
    if(localStorage.getItem('switch')){
        if (localStorage.getItem('switch') === 'true'){
            defaultSwitch = true;
            body.classList.add('dark')
            defaultTheme = 'Light'
        }else {
            defaultTheme = 'Dark'
            defaultSwitch = false
        }
    }
    const [theme, setTheme] = useState(defaultTheme);
    const [switcher, setSwitcher] = useState(defaultSwitch);
    function ThemeSwitch (e) {
      if (e.target.checked === true){
        setTheme('Light')
        setSwitcher(true)
        body.classList.add('dark')
        localStorage.setItem('theme', 'Dark');
        localStorage.setItem('switch', true);
      }else {
        setTheme('Dark')
        setSwitcher(false)
        body.classList.remove('dark')
        localStorage.setItem('theme', 'Light');
        localStorage.setItem('switch', false);
      }
    }
    return (
        <div className="relative w-24">
            <input type="checkbox" id="theme-toggler" className="switch" checked={switcher} onChange={ThemeSwitch} />
            <label htmlFor="theme-toggler" className="switcher"> <span className="switcher-circle"></span></label>
            <h6 className="switcher-hd">{theme} Mode</h6>
        </div>
    );
}
export default ThemeSwitcher
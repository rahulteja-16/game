import { createGlobalStyle } from 'styled-components'

//inset 0px 5px 6px grey, 0px 8px hsl(40deg 84% 53%), 0px 0px 0px 30px rgb(255 255 255 / 7%), 0px 0px 0px 60px rgb(255 255 255 / 5%), 0px 0px 0px 100px rgb(255 255 255 / 3%)
const GlobalStyles = createGlobalStyle`
    :root {
        --background: radial-gradient(circle, hsl(214, 47%, 23%), hsl(237, 49%, 15%));
        --rock-color: hsl(349, 70%, 56%);
        --paper-color: hsl(230, 89%, 65%);
        --scissors-color: hsl(40, 84%, 53%);
        --lizard-color: hsl(261, 72%, 63%);
        --spock-color: hsl(189, 58%, 57%);

        --rock-color-light: hsl(349, 71%, 52%);
        --paper-color-light: hsl(230, 89%, 62%);
        --scissors-color-light: hsl(39, 89%, 49%);
        --lizard-color-light: hsl(261, 73%, 60%);
        --spock-color-light: hsl(189, 59%, 53%);

        --dark-text: hsl(229, 25%, 31%);
        --score-text: hsl(229, 64%, 46%);
        --header-outline: hsl(217, 16%, 45%);
        --white: #ffffff;

        --font-family: 'Barlow Semi Condensed', sans-serif;
        --font-w500: 500;
        --font-w600: 600;
        --font-w700: 700;

        --border: 3px;
        --border-radius-modal: 8px;
        --spacing: 0.75rem;
        --letter-spacing-s: 1.5px;
        --letter-spacing-m: 2.5px;


        --font-xs: 1rem;
        --font-s: 1.2rem;
        --font-m: 1.5rem;
        --font-l: 3.5rem;
        --font-xl: 4rem;

        --padding-xs: 0.75rem;
        --padding-s: 1rem;
        --padding-m: 1.2rem;
        --padding-l: 1.85rem;
        --padding-xl: 2.5rem;
        --padding-xxl: 5rem;

        --border-radius-s: 5px;
        --border-radius-m: 16px;
    }

    *,*::before,*::after{
        box-sizing: inherit;
    }
    
    body{
        margin: 0;
        padding: 0;
        font-family: var(--font-family);
        color: #fff;
        background: var(--background);
        box-sizing: border-box;
    }
`
export default GlobalStyles

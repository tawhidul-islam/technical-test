import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700;900&display=swap');
    
    :root {
        --main-color: #0a66c2;
        --navbar-color: #fff;
        --footer-color: #FAF9F7;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    };

    body{
        overflow-x: hidden;
        background-color: #F3F2EF;
    }
`;

export default GlobalStyle;

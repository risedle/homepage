import { FunctionComponent } from "react";
import Head from "next/head";

type GoogleFontProps = {};

/**
 * React Component to render Google Font
 *
 */
const GoogleFont: FunctionComponent<GoogleFontProps> = () => {
    return (
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="anonymous"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
                rel="stylesheet"
            />
        </Head>
    );
};

export default GoogleFont;

import type { NextPage } from "next";
import Head from "next/head";

// Import components
import GoogleFont from "../components/GoogleFont";
import Favicon from "../components/Favicon";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Risedle Protocol</title>
                <meta
                    name="description"
                    content="Invest, earn and build on the decentralized crypto leveraged ETFs market protocol"
                />
            </Head>
            <GoogleFont />
            <Favicon />
            <div
                className="container mx-auto px-4 mt-16 flex flex-col"
                style={{ maxWidth: "844px" }}
            >
                <div className="flex flex-row">
                    <div>
                        <svg
                            width="106"
                            height="18"
                            viewBox="0 0 106 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M13.0172 7.39569H13.0172C17.2458 7.96489 19.3601 8.24952 19.4393 8.89755C19.4476 8.96562 19.4476 9.03438 19.4393 9.10245C19.3601 9.75048 17.2458 10.0351 13.0174 10.6043L13.0172 10.6044H13.0172C12.4904 10.6753 12.227 10.7107 12.0389 10.8694C12.0163 10.8884 11.9947 10.9085 11.9743 10.9298C11.8038 11.1073 11.7512 11.3677 11.6462 11.8888L11.3797 13.2113L11.3797 13.2114C10.7363 16.4038 10.4146 18 9.72278 18C9.03095 18 8.70924 16.4038 8.06583 13.2113L8.06582 13.2113L7.79927 11.8888C7.69426 11.3677 7.64175 11.1073 7.47118 10.9298C7.45077 10.9085 7.4292 10.8884 7.40665 10.8694C7.21852 10.7107 6.95514 10.6753 6.42834 10.6044L6.42829 10.6044C2.19969 10.0351 0.0853658 9.75048 0.00625482 9.10245C-0.00208494 9.03438 -0.00208494 8.96562 0.00625483 8.89755C0.0853661 8.24952 2.1997 7.96489 6.42834 7.39569L6.42859 7.39566C6.95523 7.32472 7.21855 7.28925 7.40665 7.13068C7.4292 7.11163 7.45077 7.09145 7.47118 7.07021C7.64175 6.89279 7.69426 6.63225 7.79927 6.11118L8.06582 4.7887L8.06583 4.78864C8.70924 1.59623 9.03095 0 9.72278 0C10.4146 0 10.7363 1.59625 11.3797 4.78875L11.6462 6.11118C11.7512 6.63225 11.8038 6.89279 11.9743 7.07021C11.9947 7.09145 12.0163 7.11163 12.0389 7.13068C12.227 7.28925 12.4903 7.32472 13.0169 7.39566L13.0172 7.39569Z"
                                fill="white"
                            />
                            <path
                                d="M28.1953 17.5093H31.1778V11.48H34.2165L37.4482 17.5093H40.7764L37.2151 10.9816C39.1525 10.2018 40.1735 8.54578 40.1735 6.31094C40.1735 3.16768 38.1476 1.04538 34.3693 1.04538H28.1953V17.5093ZM31.1778 9.00401V3.53747H33.9111C36.1379 3.53747 37.1347 4.55843 37.1347 6.31094C37.1347 8.06344 36.1379 9.00401 33.9271 9.00401H31.1778Z"
                                fill="white"
                            />
                            <path
                                d="M42.7902 17.5093H45.7003V5.16136H42.7902V17.5093ZM44.2533 3.40885C45.1778 3.40885 45.9334 2.70141 45.9334 1.8332C45.9334 0.956946 45.1778 0.249512 44.2533 0.249512C43.3207 0.249512 42.5651 0.956946 42.5651 1.8332C42.5651 2.70141 43.3207 3.40885 44.2533 3.40885Z"
                                fill="white"
                            />
                            <path
                                d="M58.4522 8.4252C58.0502 6.33505 56.3781 5.00058 53.4841 5.00058C50.5096 5.00058 48.4838 6.46368 48.4918 8.74676C48.4838 10.5475 49.5932 11.7373 51.9647 12.2277L54.0709 12.6698C55.2044 12.919 55.735 13.3772 55.735 14.0766C55.735 14.9207 54.8186 15.5558 53.4358 15.5558C52.1014 15.5558 51.2331 14.977 50.9839 13.8676L48.1462 14.1409C48.5079 16.408 50.4132 17.7505 53.4439 17.7505C56.5309 17.7505 58.7094 16.1507 58.7175 13.8113C58.7094 12.0508 57.5759 10.9736 55.2446 10.4671L53.1384 10.0169C51.8843 9.73556 51.3859 9.30145 51.3939 8.58598C51.3859 7.74992 52.3104 7.17111 53.5243 7.17111C54.8668 7.17111 55.5742 7.90266 55.7993 8.7146L58.4522 8.4252Z"
                                fill="white"
                            />
                            <path
                                d="M66.5837 17.7505C69.4616 17.7505 71.4392 16.3436 71.9537 14.1972L69.2365 13.8917C68.8426 14.9368 67.8779 15.4835 66.6239 15.4835C64.7427 15.4835 63.4967 14.2455 63.4726 12.1312H72.0743V11.2389C72.0743 6.90582 69.4697 5.00058 66.4309 5.00058C62.8938 5.00058 60.5866 7.59718 60.5866 11.4077C60.5866 15.2825 62.8616 17.7505 66.5837 17.7505ZM63.4806 10.1697C63.569 8.59402 64.7347 7.26758 66.4711 7.26758C68.1432 7.26758 69.2687 8.48951 69.2848 10.1697H63.4806Z"
                                fill="white"
                            />
                            <path
                                d="M79.1185 17.7264C81.2408 17.7264 82.1975 16.4642 82.6557 15.5639H82.8325V17.5093H85.6944V1.04538H82.7763V7.20327H82.6557C82.2135 6.31094 81.3051 5.00058 79.1266 5.00058C76.2727 5.00058 74.0298 7.23542 74.0298 11.3514C74.0298 15.4191 76.2084 17.7264 79.1185 17.7264ZM79.9305 15.3388C78.0091 15.3388 76.9962 13.6506 76.9962 11.3353C76.9962 9.03617 77.9931 7.38817 79.9305 7.38817C81.8036 7.38817 82.8325 8.9397 82.8325 11.3353C82.8325 13.731 81.7875 15.3388 79.9305 15.3388Z"
                                fill="white"
                            />
                            <path
                                d="M91.7056 1.04538H88.7955V17.5093H91.7056V1.04538Z"
                                fill="white"
                            />
                            <path
                                d="M100.165 17.7505C103.043 17.7505 105.02 16.3436 105.535 14.1972L102.818 13.8917C102.424 14.9368 101.459 15.4835 100.205 15.4835C98.3237 15.4835 97.0777 14.2455 97.0536 12.1312H105.655V11.2389C105.655 6.90582 103.051 5.00058 100.012 5.00058C96.4748 5.00058 94.1676 7.59718 94.1676 11.4077C94.1676 15.2825 96.4426 17.7505 100.165 17.7505ZM97.0616 10.1697C97.15 8.59402 98.3157 7.26758 100.052 7.26758C101.724 7.26758 102.85 8.48951 102.866 10.1697H97.0616Z"
                                fill="white"
                            />
                        </svg>
                    </div>

                    <div className="flex-1 flex flex-row gap gap-x-8 justify-end">
                        <div>
                            <a
                                href="https://github.com/risedle/etfs"
                                className="font-inter font-semibold text-base leading-normal"
                            >
                                Github
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col mt-32">
                    <h1 className="font-inter font-semibold text-4xl leading-normal">
                        Risedle is a permissionless leveraged token market
                        protocol
                    </h1>
                    <p className="font-inter font-normal text-xl leading-normal">
                        Anyone can create leveraged version of any ERC20 token
                        using Risedle. Risedle is also a simple way to get
                        leveraged exposure to a variety of tokens without risk
                        of liquidation and earn high yield by lending a token.
                    </p>
                </div>

                <div className="flex flex-col mt-16">
                    <div className="mb-8">
                        <h2 className="font-semibold text-2xl leading-normal font-inter">
                            Risedle alpha version
                        </h2>
                    </div>
                    <div className="flex flex-col md:flex-row gap-x-8">
                        <div className="w-full mb-8">
                            <a
                                href="https://medium.com/risedle/risedle-protocol-testnet-launch-a-users-guide-9aefefe43448"
                                className="display-inline"
                            >
                                <div className="aspect-w-5 aspect-h-3 rounded-lg overflow-hidden mb-6">
                                    <svg
                                        className="rounded-lg transform hover:scale-125 object-cover transition duration-300 ease-in-out"
                                        width="500"
                                        height="300"
                                        viewBox="0 0 500 300"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            width="500"
                                            height="300"
                                            fill="#72AAFF"
                                        />
                                        <circle
                                            cx="272.576"
                                            cy="150.427"
                                            r="52.4272"
                                            fill="black"
                                        />
                                        <circle
                                            cx="227.427"
                                            cy="150.427"
                                            r="52.4272"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg font-inter leading-normal mb-2">
                                        Risedle testnet is here
                                    </h3>
                                    <p className="font-normal text-base font-inter leading-normal">
                                        A guide to help you get started
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="w-full">
                            <a
                                href="https://demo.risedle.com"
                                className="display-inline"
                            >
                                <div className="aspect-w-5 aspect-h-3 rounded-lg overflow-hidden mb-6">
                                    <svg
                                        className="rounded-lg transform hover:scale-125 object-cover transition duration-300 ease-in-out"
                                        width="500"
                                        height="300"
                                        viewBox="0 0 500 300"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            width="500"
                                            height="300"
                                            fill="#72AAFF"
                                        />
                                        <path
                                            d="M226.923 98L271.89 175.885H181.956L226.923 98Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M301.925 155.692L321.91 190.308H281.939L301.925 155.692Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg font-inter leading-normal mb-2">
                                        Try our demo!
                                    </h3>
                                    <p className="font-normal text-base font-inter leading-normal">
                                        Please give us your feedback!
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col mt-16 mb-64">
                    <div className="mb-8">
                        <h2 className="font-semibold text-2xl leading-normal font-inter">
                            Join community
                        </h2>
                    </div>
                    <div className="flex flex-col md:flex-row gap-x-8">
                        <div className="w-full mb-8">
                            <a
                                href="https://twitter.com/risedle"
                                className="display-inline"
                            >
                                <div className="aspect-w-5 aspect-h-3 rounded-lg overflow-hidden mb-6">
                                    <svg
                                        className="rounded-lg transform hover:scale-125 object-cover transition duration-300 ease-in-out"
                                        width="500"
                                        height="300"
                                        viewBox="0 0 500 300"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            width="500"
                                            height="300"
                                            fill="#72AAFF"
                                        />
                                        <path
                                            d="M325 115.711C320.904 117.528 316.501 118.756 311.881 119.308C316.597 116.481 320.219 112.004 321.925 106.67C317.51 109.288 312.622 111.189 307.419 112.213C303.252 107.773 297.316 105 290.745 105C278.131 105 267.902 115.227 267.902 127.842C267.902 129.632 268.104 131.376 268.494 133.048C249.509 132.095 232.678 123.001 221.411 109.181C219.445 112.554 218.318 116.478 218.318 120.664C218.318 128.59 222.351 135.581 228.48 139.678C224.736 139.559 221.214 138.531 218.134 136.821C218.132 136.916 218.132 137.011 218.132 137.108C218.132 148.175 226.006 157.407 236.455 159.507C234.539 160.029 232.521 160.308 230.437 160.308C228.966 160.308 227.535 160.164 226.14 159.898C229.047 168.973 237.483 175.577 247.479 175.761C239.661 181.888 229.812 185.54 219.109 185.54C217.265 185.54 215.447 185.431 213.66 185.22C223.769 191.702 235.776 195.484 248.676 195.484C290.692 195.484 313.669 160.677 313.669 130.49C313.669 129.5 313.647 128.515 313.603 127.535C318.065 124.315 321.938 120.292 325 115.711H325Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M286.34 115.711C282.244 117.528 277.841 118.756 273.221 119.308C277.937 116.481 281.559 112.004 283.264 106.67C278.85 109.288 273.962 111.189 268.758 112.213C264.592 107.773 258.655 105 252.085 105C239.47 105 229.242 115.227 229.242 127.842C229.242 129.632 229.444 131.376 229.834 133.048C210.849 132.095 194.018 123.001 182.751 109.181C180.785 112.554 179.658 116.478 179.658 120.664C179.658 128.59 183.691 135.581 189.82 139.678C186.076 139.559 182.554 138.531 179.474 136.821C179.471 136.916 179.471 137.011 179.471 137.108C179.471 148.175 187.345 157.407 197.795 159.507C195.879 160.029 193.861 160.308 191.777 160.308C190.305 160.308 188.875 160.164 187.48 159.898C190.387 168.973 198.822 175.577 208.819 175.761C201.001 181.888 191.152 185.54 180.449 185.54C178.605 185.54 176.787 185.431 175 185.22C185.109 191.702 197.116 195.484 210.016 195.484C252.032 195.484 275.009 160.677 275.009 130.49C275.009 129.5 274.986 128.515 274.942 127.535C279.405 124.315 283.277 120.292 286.34 115.711H286.34Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg font-inter leading-normal mb-2">
                                        Twitter @risedle
                                    </h3>
                                    <p className="font-normal text-base font-inter leading-normal">
                                        Follow updates on twitter
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="w-full">
                            <a
                                href="https://discord.gg/YCSCd97SXj"
                                className="display-inline"
                            >
                                <div className="aspect-w-5 aspect-h-3 rounded-lg overflow-hidden mb-6">
                                    <svg
                                        className="rounded-lg transform hover:scale-125 object-cover transition duration-300 ease-in-out"
                                        width="500"
                                        height="300"
                                        viewBox="0 0 500 300"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            width="500"
                                            height="300"
                                            fill="#72AAFF"
                                        />
                                        <path
                                            d="M260.445 111.377C254.012 108.426 247.113 106.251 239.901 105.005C239.769 104.981 239.638 105.041 239.57 105.161C238.683 106.739 237.7 108.798 237.012 110.416C229.254 109.255 221.536 109.255 213.937 110.416C213.249 108.762 212.23 106.739 211.339 105.161C211.271 105.045 211.14 104.985 211.009 105.005C203.8 106.247 196.901 108.422 190.464 111.377C190.408 111.401 190.36 111.442 190.329 111.494C177.243 131.043 173.659 150.111 175.417 168.944C175.425 169.036 175.477 169.124 175.548 169.18C184.182 175.52 192.545 179.369 200.752 181.92C200.883 181.96 201.023 181.912 201.106 181.804C203.048 179.153 204.778 176.357 206.262 173.417C206.35 173.245 206.266 173.041 206.087 172.973C203.342 171.932 200.728 170.662 198.214 169.22C198.015 169.104 197.999 168.819 198.182 168.683C198.711 168.287 199.24 167.874 199.746 167.458C199.837 167.382 199.964 167.366 200.072 167.414C216.59 174.955 234.474 174.955 250.797 167.414C250.905 167.362 251.032 167.378 251.128 167.454C251.633 167.87 252.162 168.287 252.695 168.683C252.878 168.819 252.866 169.104 252.667 169.22C250.153 170.69 247.539 171.932 244.79 172.969C244.611 173.037 244.531 173.245 244.619 173.417C246.135 176.353 247.865 179.149 249.771 181.8C249.851 181.912 249.994 181.96 250.125 181.92C258.373 179.369 266.735 175.52 275.369 169.18C275.444 169.124 275.492 169.04 275.5 168.948C277.605 147.176 271.975 128.263 260.577 111.498C260.549 111.442 260.501 111.401 260.445 111.377ZM208.729 157.477C203.756 157.477 199.658 152.911 199.658 147.304C199.658 141.696 203.676 137.131 208.729 137.131C213.821 137.131 217.88 141.737 217.8 147.304C217.8 152.911 213.782 157.477 208.729 157.477ZM242.268 157.477C237.295 157.477 233.197 152.911 233.197 147.304C233.197 141.696 237.215 137.131 242.268 137.131C247.36 137.131 251.418 141.737 251.339 147.304C251.339 152.911 247.36 157.477 242.268 157.477Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M309.723 125.787C303.38 122.876 296.577 120.732 289.464 119.503C289.334 119.48 289.205 119.539 289.138 119.658C288.263 121.214 287.294 123.244 286.616 124.839C278.965 123.694 271.354 123.694 263.861 124.839C263.182 123.208 262.178 121.214 261.299 119.658C261.232 119.543 261.103 119.484 260.973 119.503C253.864 120.728 247.062 122.872 240.714 125.787C240.659 125.811 240.612 125.85 240.58 125.902C227.677 145.179 224.142 163.983 225.876 182.554C225.884 182.645 225.935 182.732 226.006 182.787C234.519 189.039 242.766 192.835 250.859 195.35C250.989 195.39 251.126 195.342 251.208 195.236C253.123 192.621 254.83 189.865 256.293 186.965C256.379 186.796 256.297 186.594 256.12 186.527C253.413 185.5 250.836 184.248 248.356 182.826C248.16 182.712 248.144 182.431 248.325 182.297C248.847 181.906 249.369 181.499 249.867 181.089C249.957 181.014 250.083 180.998 250.188 181.045C266.478 188.482 284.113 188.482 300.21 181.045C300.316 180.994 300.441 181.01 300.535 181.085C301.034 181.495 301.555 181.906 302.081 182.297C302.261 182.431 302.25 182.712 302.054 182.826C299.574 184.276 296.996 185.5 294.286 186.523C294.109 186.59 294.031 186.796 294.117 186.965C295.612 189.86 297.318 192.617 299.197 195.232C299.276 195.342 299.417 195.39 299.547 195.35C307.679 192.835 315.926 189.039 324.439 182.787C324.514 182.732 324.561 182.649 324.569 182.558C326.644 161.088 321.093 142.438 309.853 125.906C309.825 125.85 309.778 125.811 309.723 125.787ZM258.725 171.246C253.821 171.246 249.78 166.744 249.78 161.215C249.78 155.685 253.743 151.183 258.725 151.183C263.747 151.183 267.749 155.725 267.67 161.215C267.67 166.744 263.708 171.246 258.725 171.246ZM291.798 171.246C286.894 171.246 282.853 166.744 282.853 161.215C282.853 155.685 286.816 151.183 291.798 151.183C296.82 151.183 300.822 155.725 300.743 161.215C300.743 166.744 296.82 171.246 291.798 171.246Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg font-inter leading-normal mb-2">
                                        Say “gm” on discord
                                    </h3>
                                    <p className="font-normal text-base font-inter leading-normal">
                                        Let’s create meme together
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

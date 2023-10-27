import React from "react";

interface Props {
    color: string;
    className: any;
}

export const TypeClock = ({ color = "white", className }: Props): JSX.Element => {
    return (
        <svg
            className={`${className}`}
            fill="none"
            height="28"
            viewBox="0 0 28 28"
            width="28"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_380_1813)">
                <path
                    d="M13.9912 22.7422C18.9746 22.7422 23.0879 18.6289 23.0879 13.6543C23.0879 8.67969 18.9658 4.56641 13.9824 4.56641C9.00781 4.56641 4.90332 8.67969 4.90332 13.6543C4.90332 18.6289 9.0166 22.7422 13.9912 22.7422ZM9.56152 14.7617C9.16602 14.7617 8.8584 14.4541 8.8584 14.0586C8.8584 13.6631 9.16602 13.3555 9.56152 13.3555H13.2881V8.31055C13.2881 7.91504 13.5957 7.60742 13.9824 7.60742C14.3867 7.60742 14.6943 7.91504 14.6943 8.31055V14.0586C14.6943 14.4541 14.3867 14.7617 13.9824 14.7617H9.56152Z"
                    fill={color}
                />
            </g>
            <defs>
                <clipPath id="clip0_380_1813">
                    <rect fill="white" height="28" width="28" />
                </clipPath>
            </defs>
        </svg>
    );
};

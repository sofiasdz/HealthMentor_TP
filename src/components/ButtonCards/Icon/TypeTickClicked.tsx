import React from "react";

interface Props {
    className: any;
}

export const TypeTickClicked = ({ className }: Props): JSX.Element => {
    return (
        <svg
            className={`${className}`}
            fill="none"
            height="40"
            viewBox="0 0 40 40"
            width="40"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect fill="#92CEB0" height="40" rx="10" width="40" />
            <path
                clipRule="evenodd"
                d="M16.1956 29.8993C15.503 29.8993 14.8381 29.5987 14.3474 29.0622L7.76184 21.8553C6.74547 20.7403 6.74547 18.9291 7.76532 17.818C8.78169 16.7031 10.4385 16.7031 11.4584 17.818L16.1956 23.0044L27.9187 10.1887C28.9385 9.07381 30.5884 9.07381 31.6082 10.1887C32.6281 11.3036 32.6281 13.1111 31.6082 14.226L18.0404 29.0622C17.5531 29.5987 16.8883 29.8993 16.1956 29.8993Z"
                fill="white"
                fillRule="evenodd"
            />
        </svg>
    );
};
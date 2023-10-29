/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      space: {
        '5' : '24px',
      }
    },
    colors:{
      primary:{
        300: '#F9EAE1',
        400: '#F6DFD3',
        500: '#F19165',
        700: '#CE8663',
        900: '#B77758',
      },
      secondary:{
        300: '#EBF5EF',
        400: '#D8EAE0',
        500: '#92CEB0',
        600: '#8FB8A0',
        700: '#7FA38F',
      },
      tertiary:{
        300: '#E8F3F5',
        400: '#D1E7EB',
        500: '#A2CED8',
        600: '#9FC1C9',
        700: '#8DACB2',
      },
      grey:{
        0o00: '#FFFFFF',
        100: '#F9F9F9',
        200: '#FAF7F2',
        300: '#D0D2CA',
        400: '#B4B9AB',
        500: '#8E9C8D',
        600: '#688074',
        700: '#436560',

      },
      state:{
        success: '#52B765',
        error: '#E34430',
        warning:'#FCCB5A'
      }
    },
    fontSize:{
      'small' : '12px',
        'medium' : '14px',
        'large' : '16px',
    },
  },
  plugins: [],
}


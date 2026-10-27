import localFont from 'next/font/local';


export const Narrow = localFont({
src: [
    {
    path: './Fonts/arial_narrow_7.ttf',
    weight: '300',
    },

],
    variable: '--font-narrow',
    display: 'swap',
});

export const Agenor = localFont({
src: [
    {
    path: './Fonts/AgenorNeue-Regular.otf',
    weight: '300',
    },

],
    variable: '--font-agenor',
    display: 'swap',
});

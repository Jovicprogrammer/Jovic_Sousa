import localFont from 'next/font/local';


export const Narrow = localFont({
src: [
    {
    path: './fonts/arial_narrow_7.ttf',
    weight: '300',
    },

],
    variable: '--font-narrow',
    display: 'swap',
});

export const Agenor = localFont({
src: [
    {
    path: './fonts/AgenorNeue-Regular.otf',
    weight: '300',
    },

],
    variable: '--font-agenor',
    display: 'swap',
});

import { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import HeaderClient from 'components/Navigation/HeaderClient';
import 'styles/base/index.scss';
import ThemeProviderMui from 'components/Provider/ThemeProviderMui';
import FooterClient from 'components/Navigation/FooterClient';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['500', '600', '700'] });

export const metadata: Metadata = {
    title: 'TechCell - Điện thoại, phụ kiện chính hãng',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body className={montserrat.className}>
                <ThemeProviderMui>
                    <HeaderClient />
                    {children}
                    <FooterClient />
                </ThemeProviderMui>
            </body>
        </html>
    );
}

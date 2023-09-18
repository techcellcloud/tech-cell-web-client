import { ACCESSRORIES, BRANDS, CATEGORY } from './PhoneConstant';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArticleIcon from '@mui/icons-material/Article';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

export const DRAWER_WIDTH: number = 240;

export const NAV_ITEMS = [
    { name: 'Danh mục', menu: CATEGORY, icon: ArticleIcon, isNav: true },
    { name: 'Tra cứu đơn hàng', icon: LocalShippingIcon },
    { name: 'Giỏ hàng', menu: ACCESSRORIES, icon: ShoppingCartIcon },
    { name: 'Đăng Nhập', icon: AccountCircleIcon ,href:'/login'},
];

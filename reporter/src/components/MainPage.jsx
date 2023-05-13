import React, { useState } from "react";
import styles from "./styles/MainPage.module.css";
import axios from "axios";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const MainPage = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [data, setData] = useState({
        form: {
            id: "شناسه‌ی فرم پر شده",
            formId: "شناسه‌ی فرم",
            formattedId: "شناسه‌ی اختصاصی",
            creatorId: "شناسه‌ی کاربر ثبت کننده",
            creatorName: "نام کاربر ثبت کننده",
            createDate: "تاریخ ثبت",
            editorId: "شناسه‌ی ویرایش کننده",
            editorName: "نام ویرایش کننده",
            editDate: "تاریخ ویرایش",
            custCode: "شناسه‌ی مشتری",
            custName: "نام مشتری",
            urlReferrer: "آدرس اینترنتی ثبت فرم",
            browser: "نام مرورگر",
            ip: "آی پی",
            coordinate: "موقعیت جغرافیایی",
            params: [ //آرایه‌ای از پارامترهای فیلدهای فرم
                {
                    fieldId: "شناسه‌ی فیلد",
                    title: "مقدار متنی",
                    value: "مقدار",
                    number: "مقدار عددی",
                    group: "گروه پارامتر"
                }
            ]
        }
    });
    const [auth, setAuth] = React.useState(true);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const MenuItems = (login) => {
        if (login) {
            return (<React.Fragment>
                <MenuItem onClick={handleClose}><p className={styles.menuItems}>ناحیه کاربری</p></MenuItem>
                <MenuItem onClick={handleClose}><p className={styles.menuItems}>تنظیمات</p></MenuItem>
            </React.Fragment>)
        } else {
            return (<React.Fragment>
                <MenuItem onClick={handleClose}><p className={styles.menuItems}>ورود</p></MenuItem>
                <MenuItem onClick={handleClose}><p className={styles.menuItems}>ثبت نام</p></MenuItem>
            </React.Fragment>)
        }
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={()=>alert("Hello")}
                    >
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <span className={styles.navbarTitle}>نرم افزار گزارش گیری</span>
                    </Typography>
                    {auth && (
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                {
                                    auth ? MenuItems(true) : MenuItems(false)
                                }
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default MainPage;
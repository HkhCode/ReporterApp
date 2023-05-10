import React, { useState } from "react";
import styles from "./styles/MainPage.module.css";
import axios from "axios";
const chartRow = (value) => {
    return (<React.Fragment><div><div className={styles.chartRow} style={{ width: value === 5 ? ((value/5)*100)-10 + "%" : (value/5)*100 + "%" }}>
    </div>
        <span className={styles.chartRowValue}>{value}</span></div>
    </React.Fragment>)
}
const MainPage = () => {
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
    React.useEffect(() => {
        // axios.post("")
    }, [])
    return (<React.Fragment>
        <div className={styles.NavBar}>
            میثم شاهسون
        </div>
        <div className={styles.chartContainer}>
            <div className={styles.chartContainerTitle}>
                نتایج پرسشنامه به صورت نمودار
            </div>
            <div className={styles.chart}>
                <div className={styles.chartTitle}>
                    نمودار محک جز به جز فرد 1
                </div>
                <br />
                {chartRow(2)}
                {chartRow(5)}
                {chartRow(3)}
                {chartRow(4)}
                {chartRow(1)}
            </div>
            <div className={styles.chart}>
                <div className={styles.chartTitle}>
                    نمودار محک کلی فرد 1
                </div>
                <br />
                {chartRow(2)}
                {chartRow(5)}
                {chartRow(3)}
                {chartRow(4)}
                {chartRow(1)}
            </div>
            <div className={styles.chart}>
                <div className={styles.chartTitle}>
                    نمودار محک جز به جز فرد 2
                </div>
                <br />
                {chartRow(2)}
                {chartRow(5)}
                {chartRow(3)}
                {chartRow(4)}
                {chartRow(1)}
            </div>
            <div className={styles.chart}>
                <div className={styles.chartTitle}>
                    نمودار محک کلی فرد 2
                </div>
                <br />
                {chartRow(2)}
                {chartRow(5)}
                {chartRow(3)}
                {chartRow(4)}
                {chartRow(1)}
            </div>
        </div>
    </React.Fragment>)
}

export default MainPage;
import { flexbox } from '@mui/system';
import React from 'react';
import './exp1.scss'

const Top = () => (
    <div className="top">
        <div className="left">
            <h2 className="title">
                الجمهورية اليمنية
            </h2>
            <h3>
                وزارة التربية والتعليم
            </h3>
            <p>
                قطاع المناهج والتوجيه
            </p>
            <p>
                الادارة العامة للامتحانات
            </p>
        </div>
        <div className="middle">
            <div className="title">
                بسم الله الرحمن الرحيم
            </div>
            <div className="logo">
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Emblem_of_Yemen.svg/2560px-Emblem_of_Yemen.svg.png' className='logoImage' />
            </div>
        </div>
        <div className="right">
            <p>
                المدرسة : ...
            </p>
            <p>
                المديرية : ....
            </p>
            <p>
                المحافظة : ...
            </p>
            <p>
                الكشف : 1 من 10
            </p>
        </div>
    </div>
)

const Header = () => (
    <div className="header">
        <div className="one index">
            <p>
                م
            </p>
        </div>
        <div className="col name">
            <p>
                اسم الطالب رباعيا مع اللقب
            </p>
        </div>
        <div className="col birth">
            <div className="title">
                محل وتأريخ الميلاد
            </div>
            <div className="info">
                <div>المديرية</div>
                <div>المحافظة</div>
                <div>اليوم</div>
                <div>الشهر</div>
                <div>السنة</div>
            </div>
        </div>

        <div className="one gender">
            <p>
                الجنس
            </p>
        </div>

        <div className="col ninth">
            <div className="title">
                مكان الحصول على الصف الثالث اساسي
            </div>
            <div className="info">
                <div>المديرية</div>
                <div>المحافظة</div>
                <div>رقم الجلوس</div>
                <div>العام</div>

            </div>
        </div>

        <div className="one schoolID">
            <p>
                الرقم المدرسي
            </p>
        </div>
        <div className="col secondary">
            <div className="title">
                مكان وتأريخ الحصول على أول ثانوي
            </div>

            <div className="info">
                <div>المديرية</div>
                <div>المحافظة</div>
                <div>رقم الجلوس</div>
                <div>العام</div>

            </div>
        </div>
        <div className="col secondary">
            <div className="title">
                مكان وتأريخ الحصول على ثاني ثانوي
            </div>
            <div className="info">
                <div>المديرية</div>
                <div>المحافظة</div>
                <div>رقم الجلوس</div>
                <div>العام</div>

            </div>
        </div>

        <div className="col secondary">
            <div className="title">
                بيانات التقدم السابقة
            </div>
            <div className="info">
                <div>رقم الجلوس</div>
                <div>العام</div>
            </div>
        </div>
    </div>
)

const Row = ({ index }) => (
    <div className="row">
        <div className="one index">
            <p>
                {index}
            </p>
        </div>
        <div className="col name">
            <input type="text" />
        </div>
        <div className="col birth">
            <div className="info">
                <div><input type="text" /></div>
                <div><input type="text" /></div>
                <div><input type="text" /></div>
                <div><input type="text" /></div>
                <div><input type="text" /></div>
            </div>
        </div>

        <div className="one gender">
            <p>
                <input type="text" />
            </p>
        </div>

        <div className="col ninth">

            <div className="info">
                <div><input type="text" /></div>
                <div><input type="text" /></div>
                <div><input type="text" /></div>
                <div><input type="text" /></div>

            </div>
        </div>

        <div className="one schoolID">
            <p>
                <input type="text" />
            </p>
        </div>
        <div className="col secondary">


            <div className="info">
                <div><input type="text" /></div>
                <div><input type="text" /></div>
                <div><input type="text" /></div>
                <div><input type="text" /></div>

            </div>
        </div>
        <div className="col secondary">

            <div className="info">
                <div><input type="text" /></div>
                <div><input type="text" /></div>
                <div><input type="text" /> </div>
                <div><input type="text" /></div>

            </div>
        </div>

        <div className="col secondary">
            <div className="info">
                <div><input type="text" /></div>
                <div><input type="text" /></div>
            </div>
        </div>
    </div>
)

const Footer = () => (
    <div className="footer">
        <div className="top">
            <div className="title">
                أقر أنا مدير المدرسة أن بيانات الطلاب المدونة أعلاه صحيحة وأتحمل المسؤولية أمام
                الجهات المعنية في حال عدم صحتها وأنهم منتظمون من بداية العام الدراسي في المدرسة
            </div>
            <div className="bottom">
                <div className='item'>
                    <p>مدير المدرسة</p>
                    <p> الاسم/التوقيع:</p>
                </div>
                <div className='item'>
                    <p>مدير التربية بالمديرية</p>
                    <p> الاسم/التوقيع:</p>
                </div>
                <div className='item'>
                    <p>مدير الامتحانات بالمحافظة</p>
                    <p> الاسم/التوقيع:</p>
                </div>
                <div className='item'>
                    <p>مدير مكتب التربية والتعليم</p>
                    <p> الاسم/التوقيع:</p>
                </div>
            </div>
        </div>

        <div className="bottom">
            <div className="header">
                <p>
                    أعضاء لجنة الفحص
                </p>
                <p>
                    .......................................... الاسم/التوقيع
                </p>
                <p>
                    .......................................... الاسم/التوقيع
                </p>
                <p>
                    .......................................... الاسم/التوقيع
                </p>
                <p>
                    .......................................... الاسم/التوقيع
                </p>
            </div>
            <div style={{
                marginTop: '-15px',
                marginLeft: '120px'
            }}>
                <h2>
                    /يعتمد
                </h2>
            </div>
            <div className="last">
                <h3>
                    رئيس لجنة الفحص
                </h3>
                <h3>
                    مدير الامتحانات
                </h3>
                <h3>
                    مدير عام الامتحانات
                </h3>
            </div>
        </div>
    </div>
)

function Exp1() {
    return (
        <div className='exp1'>
            <Top />
            <div className='titleInfo'>
                <p>
                    البيانات الأساسية للمتقدمين للإمتحانات الثانوية العامة للعام الدراسي  2021-2022
                    القسم (العلمي)                </p>
            </div>
            <div style={{
                width: '100%',
                height: '4px',
                backgroundColor: 'black',
                marginBottom: '2px'
            }}>

            </div>
            <Header />
            {
                [...Array(20)].map((i, item) => (
                    <Row index={item + 1} key={i} />
                ))
            }

            <Footer />
        </div >
    );
}
const a = () => {
    return (<div>
        <div className="school">

        </div>
        <div className="area">

        </div>
        <div className="state">

        </div>
        <div className="year">

        </div>
    </div>)
}
export default Exp1;
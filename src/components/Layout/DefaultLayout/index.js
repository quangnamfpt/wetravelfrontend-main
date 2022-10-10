import Header from "../Header";
import Footer from "../Footer";
import './DefaultLayout.css'

function DefaultLayout({ languageSelected, setLanguageSelected, children }) {

    return (
        <div className="layout">
            <Header setLanguageSelected={setLanguageSelected} languageSelected={languageSelected} />
            <div className="content">
                {children}
            </div>
            <Footer languageSelected={languageSelected}/>
        </div>
    )
}

export default DefaultLayout;
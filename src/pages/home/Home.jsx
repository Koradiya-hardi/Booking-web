import "./Home.css"
import { Navbar } from '../../components/navbar/Navbar'
import { Header } from "../../components/header/Header"
import { Features } from "../../components/features/Features"
import { PropertyList } from "../../components/propertyList/PropertyList"
import { FeatureProperties } from "../../components/featuredproperties/FeatureProperties"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"

export const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
         <Features/>
         <h1 className="homeTitle">Browse by property name</h1>
         <PropertyList/>
         <h1 className="homeTitle">Home Guests Love</h1>
         <FeatureProperties/>
         <MailList/>
         <Footer/>
      </div>
    </div>
  )
}

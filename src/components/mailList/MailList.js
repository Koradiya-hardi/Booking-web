import "./mailList.css"

export const MailList = () => {
  return (
    <div className="mail">
       <h1 className="mailTitle">Save Time, save Money!</h1>
       <span className="mailDesc">Sign up and we will send the best deals to you</span>
       <div className="mailInputContainer">
          <input type="text" placeholder="Your Email" />
          <button>Subscibe</button>
       </div>
    </div>
  )
}

export default MailList
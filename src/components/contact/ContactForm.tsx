const ContactForm = () => {
    return (
        <div className="bg-white p-[48px] col-span-8">
            <h3 className="font-family-secondary font-bold text-[30px] text-black mb-[24px]">Get in touch</h3>
            <p className="text-gray-500 mb-[24px]">
                Your message was sent, thank you!
            </p>
            <form className="contactForm flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                    <label className="font-semibold uppercase text-[12px] text-[#000000]" htmlFor="name">Full Name</label>
                    <input type="text" className="outline-0 py-3" name="name" placeholder="Name" style={{borderBottom: '1px solid rgba(0, 0, 0, 0.1)'}}/>
                </div>
                <div className="flex flex-col gap-1">
                    <label className="font-semibold uppercase text-[12px] text-[#000000]" htmlFor="email">Email Address</label>
                    <input type="email" className="outline-0 py-3" name="email"  placeholder="Email" style={{borderBottom: '1px solid rgba(0, 0, 0, 0.1)'}}/>
                </div>
                </div>
                <div className="flex flex-col gap-1">
                    <label className="font-semibold uppercase text-[12px] text-[#000000]" htmlFor="subject">Subject</label>
                    <input type="text" className="outline-0 py-3" name="subject" placeholder="Subject" style={{borderBottom: '1px solid rgba(0, 0, 0, 0.1)'}}/>
                </div>
                <div className="flex flex-col gap-1">
                    <label className="font-semibold uppercase text-[12px] text-[#000000]" htmlFor="#">Message</label>
                    <textarea name="message" className="outline-0 py-3" cols={30} rows={4} placeholder="Message" style={{borderBottom: '1px solid rgba(0, 0, 0, 0.1)'}}></textarea>
                </div>
                <div className="">
                    <input type="submit" value="Send Message" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
}
export default ContactForm
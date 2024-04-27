import { Link } from 'react-router-dom'
import bg from '../../assets/bg_1.jpg'
const GetStarted = () => {
    return (
        <section className="ftco-intro lg:bg-fixed" style={{ backgroundImage: `url(${bg})`}}>
			<div className="overlay opacity-[.4] bg-[#fd7792]"></div>
			<div className="my-container">
				<div className="flex justify-center items-center">
					<div className="text-center z-[9]">
						<h2 className="text-[60px] text-white font-family-secondary font-bold">Ready to get started</h2>
						<p className="mb-4">It’s safe to book online with us! Get your dream stay in clicks or drop us a line with your questions.</p>
						<div className="mb-0">
							<Link to="#" className="btn btn-primary px-4 py-3 mr-2">Book now</Link>
							<Link to="#" className="btn btn-white px-4 py-3">Contact us</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}
export default GetStarted
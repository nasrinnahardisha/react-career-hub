import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
  const {id,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
    logo,
  } = job;
  return (
    <div className="card card-compact bg-base-100  shadow-xl">
      <figure>
        <img src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div className="card-actions">
          <button className="btn btn-outline btn-primary">
            {remote_or_onsite}
          </button>
          <button className="btn btn-outline btn-primary">{job_type}</button>
        </div>
        <div className="flex mt-4">
          <h2 className="flex mr-4">
            <IoLocationOutline className="text-2xl mr-2"></IoLocationOutline>
            {location}
          </h2>
          <h2 className="flex">
            <AiOutlineDollarCircle className="text-2xl mr-2"></AiOutlineDollarCircle>
            Salary : {salary}
          </h2>
        </div>
        <div className="card-actions">
          <Link to={`/job/${id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;

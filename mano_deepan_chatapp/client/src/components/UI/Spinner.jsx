const Spinner = ({buttonName}) => (
    <div className="text-center">
        <button className="btn btn-info btn-block" type="button" disabled>
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            {" "}
            {buttonName}
        </button>
    </div>
)

export default Spinner
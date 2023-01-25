import "./TopBar.css";

export default function TopBar({ addData }) {
  return (
    <div className="mainTopContainer">
      <h1>Employee Form</h1>
      <form onSubmit={(e) => addData(e)}>
        <label htmlFor="employeename">Employee Name</label>
        <input
          type="text"
          id="employeename"
          name="name"
          placeholder="Your Employee name.."
          required
        />

        <label htmlFor="employeecontact">Contact Number</label>
        <input
          type="tel"
          id="employeecontact"
          name="contact"
          placeholder="Your contact number"
          minLength={10}
          maxLength={10}
          required
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

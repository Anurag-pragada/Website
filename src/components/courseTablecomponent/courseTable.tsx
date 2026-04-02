import "./courseTable.css";

type Course = {
  id: string | number;
  link: string;
  title: string;
  timing: string;
  startDate: string;
  fee: number;
  endDate: string;
  hours: number;
};

type CourseTableProps = {
  data: Course[];
};

const CourseTable = ({ data }: CourseTableProps) => {
  return (
    <div className="courseTableWrapper">
      <table className="courseTable">
        <thead>
          <tr>
            <th></th>
            <th>Course</th>
            <th>Timings (IST)</th>
            <th>Start Date</th>
            <th>Fee</th>
            <th>End Date</th>
            <th># Hours</th>
          </tr>
        </thead>
        <tbody>
          {data.map((course) => (
            <tr key={course.id}>
              <td className="registerCell">
                <a
                  href={course.link}
                  target="_blank"
                  rel="noreferrer"
                  className="registerBtn"
                >
                  Register
                </a>
              </td>
              <td className="courseCell">
                <a
                  href={course.link}
                  target="_blank"
                  rel="noreferrer"
                  className="courseLink"
                >
                  {course.title}
                </a>
              </td>
              <td>{course.timing}</td>
              <td>{course.startDate}</td>
              <td>{course.fee}</td>
              <td>{course.endDate}</td>
              <td>{course.hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseTable;
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
    <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
      <div className="w-full">
        <table className="w-full table-fixed text-sm text-left">
          
          {/* Header */}
          <thead className="bg-blue-700 text-white text-sm uppercase tracking-wide">
            <tr>
              <th className="px-2 py-3 w-[10%]"></th>
              <th className="px-2 py-3 w-[35%]">Course</th>
              <th className="px-2 py-3 w-[15%]">Timings (IST)</th>
              <th className="px-2 py-3 w-[10%]">Start Date</th>
              <th className="px-2 py-3 w-[10%]">Fee</th>
              <th className="px-2 py-3 w-[10%]">End Date</th>
              <th className="px-2 py-3 w-[10%]"># Hours</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody className="divide-y divide-slate-200 bg-white">
            {data.map((course, index) => (
              <tr
                key={course.id}
                className={`hover:bg-slate-50 transition ${
                  index % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                }`}
              >
                {/* Register Button */}
                <td className="px-4 py-3">
                  <a
                    href={course.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block rounded-md bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white shadow hover:bg-blue-700 transition"
                  >
                    Register
                  </a>
                </td>

                {/* Course Title */}
                <td className="px-4 py-3">
                  <a
                    href={course.link}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-blue-700 hover:underline "
                  >
                    {course.title}
                  </a>
                </td>

                {/* Other Fields */}
                <td className="px-3 py-3 text-sm leading-5">{course.timing}</td>
                <td className="px-3 py-3 text-sm leading-5">{course.startDate}</td>
                <td className="px-3 py-3 text-sm leading-5">
                  ₹{course.fee}
                </td>
                <td className="px-3 py-3 text-sm leading-5">{course.endDate}</td>
                <td className="px-3 py-3 text-sm leading-5">{course.hours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseTable;
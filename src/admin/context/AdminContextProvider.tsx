import { PropsWithChildren, useEffect, useMemo, useState } from "react";
import AdminContext from "./AdminContext";
import { AdminContextValue } from "./types";
import { Student } from "../../entities/student/types";
import { useStudentsQuery } from "../../entities/student/queries/useStudentsQuery";

const AdminContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [students, setStudents] = useState<Student[]>([]);

  const { data: apiStudents } = useStudentsQuery();

  useEffect(() => {
    if (!apiStudents || apiStudents.length === 0) {
      return;
    }

    const currentStudentsEmails = import.meta.env.VITE_STUDENTS.split(",");
    console.log(currentStudentsEmails, apiStudents);
    const currentStudents: Student[] = apiStudents.filter((apiStudent) =>
      currentStudentsEmails.includes(apiStudent.username)
    );

    setStudents(currentStudents);
  }, [apiStudents]);

  const adminContextValue: AdminContextValue = useMemo(
    () => ({
      students,
    }),
    [students]
  );

  return (
    <AdminContext.Provider value={adminContextValue}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;

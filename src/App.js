import { useState } from "react";
import Employee from "./component/Employee";
import "./index.css";

function App() {
    const showEmployees = true;
    const [role, setRole] = useState("Developer");
    const [employees, setEmployees] = useState([
        {
            id: 1,
            name: "Selçuk Aktaş",
            role: "Software Developer",
            img: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
            id: 2,
            name: "Jensen Merlin",
            role: "Product Owner",
            img: "https://images.pexels.com/photos/303159/pexels-photo-303159.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
            id: 3,
            name: "Arven Selin",
            role: "Software Manager",
            img: "https://images.pexels.com/photos/458381/pexels-photo-458381.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
    ]);

    return (
        <div className="App">
            <p>Employee Application</p>
            {showEmployees ? (
                <>
                    <div className="flex flex-wrap justify-center">
                        {employees.map((employee) => {
                            return (
                                <Employee
                                    key={employee.id}
                                    name={employee.name}
                                    role={employee.role}
                                    img={employee.img}
                                />
                            );
                        })}
                    </div>
                </>
            ) : (
                <p> You cannot see the employees</p>
            )}
        </div>
    );
}

export default App;

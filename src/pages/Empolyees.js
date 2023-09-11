import { useState } from "react";
import Employee from "../components/Employee";
import "../index.css";
import AddEmployee from "../components/AddEmployee";
import { v4 as uuidv4 } from "uuid";
import EditEmployee from "../components/EditEmployee";

function Employees() {
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

    const showEmployees = true;

    function updateEmployee(id, newName, newRole, newImg) {
        const updatedEmployees = employees.map((employee) => {
            console.log(id, newName, newRole, newImg);
            if (id === employee.id) {
                return {
                    ...employee,
                    name: newName,
                    role: newRole,
                    img: newImg,
                };
            }
            return employee;
        });
        setEmployees(updatedEmployees);
    }

    function newEmployee(name, role, img) {
        const newEmployee = {
            id: uuidv4(),
            name: name,
            role: role,
            img: img,
        };
        setEmployees([...employees, newEmployee]);
    }

    return (
        <div className="App bg-gray-200 min-h-screen ">
            {showEmployees ? (
                <>
                    <div className="flex flex-wrap justify-center my-2">
                        {employees.map((employee) => {
                            const editEmployee = (
                                <EditEmployee
                                    id={employee.id}
                                    name={employee.name}
                                    role={employee.role}
                                    img={employee.img}
                                    updateEmployee={updateEmployee}
                                />
                            );
                            return (
                                <Employee
                                    id={employee.id}
                                    key={employee.id}
                                    name={employee.name}
                                    role={employee.role}
                                    img={employee.img}
                                    editEmployee={editEmployee}
                                />
                            );
                        })}
                    </div>
                    <AddEmployee newEmployee={newEmployee} />
                </>
            ) : (
                <p> You cannot see the employees</p>
            )}
        </div>
    );
}

export default Employees;

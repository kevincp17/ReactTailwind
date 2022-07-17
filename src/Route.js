import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import DashboardLayout from './MainLayout/Dashboard'
// import ChartItem from './List/ChartItem'
// import RegionView from './ViewAPI/regionView'
// import CountryView from './ViewAPI/countryView'
// import LocationView from './ViewAPI/locationView'
// import DepartmentView from './ViewAPI/departmentView'
// import JobView from './ViewAPI/jobView'
// import EmployeeView from './ViewAPI/employeeView'
// import DependentView from './ViewAPI/dependentView'
import RegionView from './ViewSaga/Region'
import EmployeeView from './ViewSaga/Employee'

export default function Route() {
  return useRoutes([
    {
        path: '/',
        element: <DashboardLayout />,
        children: [
            { path: 'region', element: <RegionView /> },
            // { path: 'country', element: <CountryView /> },
            // { path: 'location', element: <LocationView /> },
            // { path: 'department', element: <DepartmentView /> },
            { path: 'employee', element: <EmployeeView /> },
            // { path: 'job', element: <JobView /> },
            // { path: 'dependent', element: <DependentView /> }
        ]
    },
    { path: '*', element: <Navigate to='/404' replace /> }
])
}
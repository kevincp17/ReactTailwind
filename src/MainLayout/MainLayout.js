import React from 'react'
import { Outlet,Link } from 'react-router-dom'

const navigation = [
    { name: 'Region', href: 'region', current: false },
    { name: 'Country', href: 'country', current: false },
    { name: 'Location', href: 'location', current: false },
    { name: 'Department', href: 'department', current: false },
    { name: 'Employee', href: 'employee', current: false },
    { name: 'Job', href: 'job', current: false },
    { name: 'Dependent', href: 'dependent', current: false },
    { name: 'Baru', href: 'baru', current: false },
]

export default function MainLayout() {
    return (
        <div>
            <h2>Main Layout</h2>
            <nav className="px-2">
                <div className="space-y-20">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                        >
                            {item.name}&nbsp;
                        </Link>
                    ))}
                </div>

            </nav>
            <main>
                {/* Page title & actions */}
                <Outlet />
            </main>
        </div>
    )
}
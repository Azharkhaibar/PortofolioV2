// src/dashboard/components/Navbar.tsx
const Navbar = () => {
    return (
        <div className="bg-white shadow p-4 flex justify-between">
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Logout</button>
        </div>
    );
};

export default Navbar;

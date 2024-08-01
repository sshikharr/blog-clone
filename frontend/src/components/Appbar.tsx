import { useNavigate } from "react-router-dom"

export const Appbar = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/blogs');
    }

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate('/signin')
        console.log("Logged out");
    }

    return (
        <>
            <div className="flex flex-row justify-between items-center p-4 border-b-2 w-screen">
                <div className="font-bold cursor-pointer" onClick={handleClick}>
                    Blogging
                </div>
                <div className="flex items-center space-x-4">
                    <button 
                        className="px-4 py-2 text-black bg-slate-200 rounded-lg hover:bg-slate-800 hover:text-white"
                        onClick={handleLogout}
                    >
                        Log Out
                    </button>
                    <div className="rounded-full bg-slate-300 w-8 h-8 flex items-center justify-center">
                        U
                    </div>
                </div>
            </div>
        </>
    )
}

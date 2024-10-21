'use client';
import { useState } from "react";

export const Activity = () => {
    const [active, setActive] = useState("");
    const classes = 'rounded-md transition-colors duration-200 ease-in-out';

    return (
        <div>
            <div className="bg-[#3123D4] max-w-60 flex gap-10 p-2 rounded-xl mt-10 font-bold text-white items-center cursor-pointer">
                <p
                    onClick={() => setActive('activities')}
                    className={`${classes} ${active === 'activities' ? 'bg-white text-black' : 'hover:bg-white hover:text-black'} px-4 py-2`}
                >
                    Activities
                </p>
                <p
                    onClick={() => setActive('users')}
                    className={`${classes} ${active === 'users' ? 'bg-white text-black' : 'hover:bg-white hover:text-black'} px-4 py-2`}
                >
                    Users
                </p>
            </div>
        </div>
    );
};

// F0AE48,BA68C8,FF725E,D1D3D3,109987
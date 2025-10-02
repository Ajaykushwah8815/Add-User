import React, { useEffect, useState } from 'react';
import { Commet } from 'react-loading-indicators';
import { useSelector } from 'react-redux';

const Loading = () => {
    const data = useSelector((store) => store.user);
    const [value, setValue] = useState(0);

    useEffect(() => {
        let interval;

        if (data.length > 0) {
            interval = setInterval(() => {
                setValue((prev) => {
                    if (prev < 100) {
                        return prev + 1;
                    } else {
                        clearInterval(interval);
                        return prev;
                    }
                });
            }, 100);
        } else {
            setValue(100);
        }

        return () => clearInterval(interval);
    }, [data.length]);

    return (
        <div className="bg-black bg-opacity-60 h-5/6 flex flex-col justify-center items-center gap-5 text-white">
            <h1 className="text-4xl font-extrabold">
                Deleting... {value}%
            </h1>
            <Commet color="#f30313" size="large" text="Wait..." textColor="#ffffff" />
        </div>
    );
};

export default Loading;

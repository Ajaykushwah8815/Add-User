import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AddUser, deleteAll, deleteUser } from './Slices/User/UserSlice';
import { toast } from 'react-hot-toast';
import Loading from './Loading';

const Body = () => {
    const data = useSelector((store) => store.user);
    const dispatch = useDispatch();

    const [value, setValue] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    function handleAdd() {
        if (value.trim() !== "") {
            dispatch(AddUser(value));
            toast.success("Successfully Added");
            setValue("");
        } else {
            toast.error("Please Add User");
        }
    }

    function handleAlldelete() {
        let index = data.length - 1;
        setIsDeleting(true);

        function deleteNext() {
            if (index < 0) {
                setIsDeleting(false);
                toast.success("Delete All Successfully");
                return;
            }
            dispatch(deleteUser(index));
            index--;
            setTimeout(deleteNext, 1000);
        }

        deleteNext();
    }

    function handledelete(index) {
        dispatch(deleteUser(index));
        toast.success("Successfully Deleted");
    }

    useEffect(() => {
        console.log("Component mounted or data updated:", data);
    }, [data]);

    function handleinput(e) {
        setValue(e.target.value);
    }

    return (
        <div className="bg-slate-400 h-body-height">
            <div className="flex flex-col justify-center gap-x-40 md:flex-row gap-2 pt-5 w-4/5 m-auto">
                <input
                    onChange={handleinput}
                    type="text"
                    value={value}
                    placeholder="Enter User data"
                    className="bg-black p-6 text-2xl text-white font-extrabold border-4 rounded-3xl w-full bg-opacity-70"
                />
                <button
                    onClick={handleAdd}
                    type="button"
                    className="p-5 bg-blue-500 hover:bg-blue-700 text-xl border-4 rounded-2xl border-black font-bold"
                >
                    Add User
                </button>
                <button
                    onClick={handleAlldelete}
                    type="button"
                    className="p-3 text-2xl bg-red-500 hover:bg-red-700 border-4 rounded-2xl border-black font-extrabold"
                >
                    Remove All
                </button>
            </div>

            <div className="h-5/6 flex flex-col md:flex-row">
                <div className="border-4 w-4/5 border-black h-3/6 mb-5 border-double m-auto mt-10 p-5 bg-orange-400 overflow-y-scroll md:h-5/6">
                    {isDeleting ? (
                        <Loading />
                    ) : (
                        <ol className="list-decimal list-inside space-y-2 font-bold text-2xl">
                            {data.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-black border-white border-double border-8 text-white p-2 rounded-2xl flex justify-between text-center"
                                >
                                    <li className="text-center p-2">{item}</li>
                                    <button
                                        onClick={() => handledelete(index)}
                                        className="bg-red-500 hover:bg-red-800 p-2 border-4 border-white border-double rounded-3xl"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </ol>
                    )}
                </div>

                <div className="m-auto">
                    <h1 className="text-black font-extrabold text-center text-3xl pr-3 -mt-9 pb-3">
                        Total User
                    </h1>
                    <div className="border-white border-8 bg-black p-14 text-3xl font-extrabold text-white text-center m-auto rounded-full">
                        {data.length}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;
